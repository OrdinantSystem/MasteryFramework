"""Check the shared theme contract without external dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, re
ROOT=Path(__file__).resolve().parent
DATA=json.loads((ROOT/'design-tokens.json').read_text())
checks=0

def check(condition, message):
    global checks
    assert condition, message
    checks+=1

def luminance(h):
    rgb=[int(h[i:i+2],16)/255 for i in (1,3,5)]
    return sum(w*(c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4) for w,c in zip((.2126,.7152,.0722),rgb))

def contrast(a,b):
    a,b=sorted((luminance(a),luminance(b)))
    return (b+.05)/(a+.05)

for theme,semantic in DATA['themes'].items():
    tokens=DATA['primitives']|semantic
    def resolve(name, trail=()):
        check(name not in trail, f'Token cycle: {trail} -> {name}')
        check(name in tokens, f'Missing token {name}')
        value=tokens[name]
        ref=re.fullmatch(r'var\(--([\w-]+)\)',value)
        return resolve(ref[1],trail+(name,)) if ref else value
    for name in tokens:resolve(name)
    pairs=[]
    for surface in ('canvas','surface','surface-raised'):
        pairs += [(foreground,surface) for foreground in ('text','text-secondary','text-muted','action')]
    for role in ('connect','explain','compare','recall','success','warning','error'):
        pairs += [(role+'-text',bg) for bg in ('canvas','surface',role+'-soft')]
        pairs += [('text',role+'-soft'),('text-secondary',role+'-soft')]
    pairs += [('on-action','action'),('on-action','action-hover')]
    for fg,bg in pairs:
        ratio=contrast(resolve(fg),resolve(bg))
        check(ratio>=4.5, f'{theme}: {fg} on {bg} is {ratio:.2f}:1, needs 4.5:1')
    print(f'{theme}: {len(pairs)} supported text pairs pass WCAG AA (4.5:1)')

known=set(DATA['primitives'])|set(DATA['themes']['light'])|{'serif','concept-text','concept-soft','concept-border','accent','color','level','i','j'}
for file in (ROOT/'dist').glob('*.css'):
    css=file.read_text()
    check(css.count('{')==css.count('}'),f'{file.name}: unbalanced rules')
    for ref in re.findall(r'var\(--([\w-]+)',css):check(ref in known,f'{file.name}: unknown token {ref}')
    if file.name!='design-system.css':check(not re.search(r'#[0-9a-fA-F]{3,8}\b',css),f'{file.name}: raw color outside tokens')

class Links(HTMLParser):
    def __init__(self):super().__init__();self.refs=[]
    def handle_starttag(self,tag,attrs):
        for k,v in attrs:
            if k in ('href','src') and v:self.refs.append(v)

pages=list((ROOT/'dist').glob('*.html'))
for page in pages:
    source=page.read_text();check('design-system.css' in source,f'{page.name}: missing shared stylesheet');check('theme.js' in source,f'{page.name}: missing theme initialization')
    parser=Links();parser.feed(source)
    for ref in parser.refs:
        url=urlsplit(ref)
        if not url.scheme and url.path:check((page.parent/unquote(url.path)).exists(),f'{page.name}: missing asset {ref}')
print(f'{len(pages)} pages use the shared system; local assets and token references pass ({checks} checks).')
