from pathlib import Path
import json, html
import importlib.util
_spec = importlib.util.spec_from_file_location('mastery_design_system', Path(__file__).with_name('design-system.py'))
design_system = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(design_system)
design_system.generate()
ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'dist'
PROJECT_SOURCES = json.loads((OUT/'sources.json').read_text())
TRANSCRIPTS = json.loads((OUT/'transcripts.json').read_text())
SOURCES = PROJECT_SOURCES + TRANSCRIPTS

def icon(kind):
    shapes = {
        'map': '<circle cx="24" cy="24" r="5"/><circle cx="8" cy="8" r="3"/><circle cx="40" cy="8" r="3"/><circle cx="8" cy="40" r="3"/><circle cx="40" cy="40" r="3"/><path d="m12 12 8 8m8 0 8-8M12 36l8-8m8 0 8 8"/>',
        'talk': '<path d="M6 7h27v20H17L7 35V7Zm15 25v7h13l8 5V22h-4M13 14h13M13 20h9"/>',
        'mix': '<path d="M5 10h6c10 0 15 28 26 28h6m-8-7 8 7-8 7M5 38h6c10 0 15-28 26-28h6m-8-7 8 7-8 7"/>',
        'cards': '<rect x="9" y="7" width="31" height="26" rx="4"/><path d="M5 15v23h29M3 23v20h26M18 19h13"/>'
    }
    return f'<svg class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{shapes[kind]}</svg>'

def note(text): return f'<p class="diagram-note">{text}</p>'
def heading(k,title,desc): return f'<header class="page-heading"><div class="eyebrow">{k}</div><h1>{title}</h1><p>{desc}</p></header>'
def panel(title,content,sub=''): return f'<section class="visual-panel"><div class="panel-title"><h2>{title}</h2><span>{sub}</span></div>{content}</section>'
def chain(items,cls=''):
    return '<div class="flow '+cls+'">'+''.join(f'<div class="flow-node"><span class="step-no">{i:02}</span><strong>{a}</strong><small>{b}</small></div>'+('<span class="arrow" aria-hidden="true">→</span>' if i<len(items) else '') for i,(a,b) in enumerate(items,1))+'</div>'
def links(items): return '<div class="related">'+''.join(f'<a href="{url}"><span>{text}</span><b>↗</b></a>' for url,text in items)+'</div>'
def details(title,text): return f'<details><summary>{title}</summary><div class="detail-body">{text}</div></details>'
def takeaway(a,b): return f'<div class="takeaway"><span>TO REMEMBER</span><p><strong>{a}</strong> {b}</p></div>'
def node(x,y,w,title,sub='',url='',tone=''):
    tag=f'<a href="{url}" aria-label="{html.escape(title)}">' if url else '<g>'
    return tag+f'<rect class="svg-node {tone}" x="{x}" y="{y}" width="{w}" height="76" rx="14"/><text class="svg-title" x="{x+w/2}" y="{y+31}" text-anchor="middle">{html.escape(title)}</text><text class="svg-sub" x="{x+w/2}" y="{y+54}" text-anchor="middle">{html.escape(sub)}</text>'+('</a>' if url else '</g>')
svg_count=0
def svg(body,label,view='0 0 880 420'):
    global svg_count
    svg_count+=1
    marker=f'tip-{svg_count}'
    body=body.replace('url(#tip)',f'url(#{marker})')
    role='group' if '<a ' in body else 'img'
    return f'<svg class="diagram-svg" viewBox="{view}" role="{role}" aria-label="{label}"><title>{label}</title><defs><marker id="{marker}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8" fill="var(--text-secondary)"/></marker></defs>{body}</svg>'
def edge(path,label='',x=0,y=0):
    return f'<path class="edge" d="{path}" marker-end="url(#tip)"/>'+(f'<text class="edge-label" x="{x}" y="{y}" text-anchor="middle">{label}</text>' if label else '')
def concept_map():
    body=edge('M440 92V155','means trying to recall',440,126)+edge('M405 231 230 302','shows what is missing',266,267)+edge('M475 231 650 302','followed by checking',618,267)
    body+=node(295,16,290,'Retrieval practice','one way to study',tone='recall')+node(305,155,270,'Answer without notes','bring the idea to mind',tone='recall')+node(70,302,300,'Find a gap','what could you not explain?')+node(510,302,300,'Use feedback','correct it, then try again')
    return svg(body,'Retrieval practice means answering without notes. It reveals gaps; checking feedback helps you correct them.','0 0 880 408')
def mini_network():
    return svg(edge('M440 82V140')+edge('M370 216 175 283')+edge('M510 216 705 283')+node(305,6,270,'Your learning goal','what you can do alone','cycle.html','green')+node(305,140,270,'Understanding','explain · compare · use','mastery.html','blue')+node(25,283,300,'Connect the ideas','map + Feynman','methods.html','teal')+node(555,283,300,'Try it without help','new questions + later recall','mastery.html','recall'),'Start with a learning goal, connect the ideas, and check what you can do without help.','0 0 880 380')
BLOOM=[
    ('Remember','Recall an idea','Close this page. What does retrieval practice mean?','Say what it is without looking at the definition.'),
    ('Understand','Explain in your own words','Why is recognizing an answer different from recalling it?','Explain the difference and give a study example.'),
    ('Apply','Use an idea','Turn this explanation of spacing into a question you can answer tomorrow.','Write a clear question and try it without looking first.'),
    ('Analyze','Compare related ideas','How are retrieval practice and spaced practice different?','Retrieval describes what you do; spacing describes when you do it.'),
    ('Evaluate','Choose and explain why','You can explain a method today but forget it a week later. What would you change?','Choose a change that addresses delayed recall and say why it fits.'),
    ('Create','Make something of your own','Design a short session that teaches someone how to use retrieval and spacing together.','Include an explanation, an attempt without notes, feedback, and a later check.')
]
def pyramid(interactive=True):
    parts=[]
    for i,(a,b,c,d) in reversed(list(enumerate(BLOOM))):
        tag=f'button data-bloom="{i}" aria-pressed="{str(i==0).lower()}" aria-controls="bloom-detail"' if interactive else 'a href="bloom.html"'
        parts.append(f'<{tag} class="pyramid-level level-{i}" style="--level:{i}"><strong>{i+1}. {a}</strong><span>{b}</span></'+('button' if interactive else 'a')+'>')
    return '<div class="pyramid" aria-label="Bloom’s six cognitive processes">'+''.join(parts)+'</div>'
METHODS=[
    ('mapping','map','Mind mapping','Connect ideas and explain each link.','Connections','Connect'),
    ('feynman','talk','Feynman technique','Explain an idea, then check the reasoning.','Understanding','Explain'),
    ('interleaving','mix','Interleaving','Decide which method fits the situation.','Choosing a method','Compare'),
    ('retrieval','cards','Recall + spacing','Try to remember, then return later.','Remembering','Recall')
]
def method_cards():
    return '<div class="method-cards">'+''.join(f'<a class="method-card {id}" href="{id}.html"><div class="card-top">{icon(ic)}<span class="pill">{tier}</span></div><span class="eyebrow">{func}</span><h2>{name}</h2><p>{tag}</p><span class="card-link">Read the lesson ↗</span></a>' for id,ic,name,tag,func,tier in METHODS)+'</div>'
def timeline():
    return '<div class="timeline"><div class="timeline-line"></div>'+''.join(f'<div class="time-point"><strong>{a}</strong><span class="time-dot"></span><b>{b}</b><small>{c}</small></div>' for a,b,c in [('Today','Learn','Explain retrieval'),('Tomorrow','Recall','No notes first'),('Day 3–4','Compare','Retrieval or spacing?'),('~Day 7','Choose','A new study situation'),('Week 3–4','Check again','Explain and use it')])+'</div>'+note('An example schedule, not a rule. Review sooner after difficulty; leave a longer gap after reliable success. The dots show the sequence, not a time scale.')
def cycle_diagram():
    body=edge('M250 74H330')+edge('M550 74H630')+edge('M740 112V180')+edge('M630 218H550')+edge('M330 218H250')+edge('M140 256V324')
    body+=node(30,36,220,'Choose a goal','what you want to explain or do',tone='green')+node(330,36,220,'Start with a question','try an answer first')+node(630,36,220,'Check the basics','learn what is missing')+node(630,180,220,'Map + explain','connect and explain ideas','mapping.html','teal')+node(330,180,220,'Practice + compare','try different questions','interleaving.html','purple')+node(30,180,220,'Try it on your own','no hint naming the method','mastery.html','recall')+node(30,324,220,'What happened?','follow the outcome',tone='green')
    body+=edge('M250 362H330','gap',290,345)+edge('M140 400V455H740V400','success',440,446)
    body+=node(330,324,220,'Find and fix a gap','then try a new question','ai.html')+node(630,324,220,'Revisit later','recall + new situations','retrieval.html','recall')
    body+=edge('M440 324V290H875V152H740','return to the gap',807,278)
    return svg(body,'A study session: choose a goal, try a question, learn the basics, connect and explain ideas, practise, and try without help. Correct gaps; return later.','0 0 900 475')+note('After correcting a gap, try a different question without help. Check again later to see what you remember.')
def feynman_loop():
    return '<div class="feedback-diagram">'+chain([('Explain','from memory'),('Ask why','check the explanation'),('Check','compare with the source')])+'<div class="decision">Does the explanation hold up?</div><div class="branch-grid"><div class="branch repair"><span class="branch-label">SOMETHING IS MISSING ↙</span><h3>Work on the missing part</h3><p>Study the missing idea → explain again without help.</p><span class="loop-back">↶ Return to your explanation</span></div><div class="branch success"><span class="branch-label">THE EXPLANATION WORKS ↘</span><h3>Try a new situation</h3><p>Try a different example → note what is still unclear.</p><a href="retrieval.html">Return after a gap →</a></div></div></div>'
def interleave_visual():
    return '<div class="practice-pattern"><div><span class="eyebrow">ONE TYPE AT A TIME</span><div class="tiles">'+''.join(f'<span class="tile {a.lower()}">{a}</span>' for a in 'AAABBBCCC')+'</div></div><div><span class="eyebrow">RELATED TYPES MIXED TOGETHER</span><div class="tiles">'+''.join(f'<span class="tile {a.lower()}">{a}</span>' for a in 'ABCACBBAC')+'</div></div></div><div class="legend"><span><i class="a"></i>A · connect learning ideas</span><span><i class="b"></i>B · explain a learning idea</span><span><i class="c"></i>C · choose a study method</span></div>'
def hint_ladder():
    return '<div class="hint-stairs">'+''.join(f'<button data-hint="{i}" aria-pressed="{str(i==0).lower()}" style="--i:{i}"><strong>H{i}</strong><span>{t}</span></button>' for i,t in enumerate(['Independent','Question','Concept','One part of the answer','Example','Solution']))+'</div><div class="interaction-answer" id="hint-answer" aria-live="polite"><strong>H0 · Independent attempt</strong><p>Try the problem with no hint or notes. Record what you can do yourself.</p></div>'
def mastery_visual():
    dims=[('definitions','Definitions','State precisely'),('intuition','Meaning','Explain in your words'),('proof','Reasoning','Give your reasons'),('boundaries','Limits','Know when it is not enough'),('transfer','New situations','Choose how to use it'),('retention','Later recall','Remember after a gap')]
    return '<div class="mastery-wheel">'+''.join(f'<a href="mastery.html#{id}" class="mastery-petal" data-concept="{'recall' if id=='retention' else 'compare' if id in ('boundaries','transfer') else 'explain'}"><span>0{i}</span><strong>{t}</strong><small>{d}</small></a>' for i,(id,t,d) in enumerate(dims,1))+'</div>'
NAV=[('learning','Start here'),('methods','Methods'),('bloom','Bloom’s taxonomy'),('cycle','A study session'),('ai','Learning with AI')]
def shell(key,title,body):
    extra='<script type="application/json" id="source-data">'+json.dumps(SOURCES,ensure_ascii=False).replace('</','<\\/')+'</script>' if key=='library' else ''
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Learn how to study through visual explanations, short exercises, and examples about learning itself."><title>'+title+' · Mastery Framework</title><link rel="icon" href="data:,"><script src="theme.js"></script><link rel="stylesheet" href="visual.css"><link rel="stylesheet" href="design-system.css"><link rel="stylesheet" href="lesson-reader.css"><script src="learning-data.js" defer></script><script src="visual.js" defer></script></head><body><a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="index.html">Mastery Framework</a><nav aria-label="Main navigation">'+''.join(f'<a href="{k}.html" '+('aria-current="page"' if key==k else '')+f'>{t}</a>' for k,t in NAV)+'</nav><div class="header-tools"><a class="revision-nav" href="revision.html">Revision sheet ↗</a><button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode"><span class="theme-icon" aria-hidden="true">☾</span></button></div></header><main id="main" class="'+('home' if key=='index' else '')+'">'+body+'</main><footer><a class="brand footer-brand" href="index.html">Mastery Framework</a><span>Learn how to learn · explanations and practice</span><div><a href="library.html">Sources ↗</a><a href="origins.html">Origins ↗</a><a href="design-system.html">Color & meaning ↗</a><a href="mastery.html">Check your learning ↗</a></div></footer>'+extra+'</body></html>'
def write(key,title,body): (OUT/f'{key}.html').write_text(shell(key,title,body))

def lesson(text): return '<div class="lesson-intro">'+text+'</div>'
def exercise(question,answer,prompt='Pause and try'):
    return '<section class="learning-exercise"><span class="eyebrow">'+prompt+'</span><h3>'+question+'</h3><p>Try answering in your own words before opening the example.</p>'+details('Check your answer',answer)+'</section>'
def next_lesson(url,title): return links([(url,'Next: '+title),('revision.html','Review the main ideas')])

HINTS=[
    ['Try on your own','Explain how retrieval practice differs from spaced practice, without notes or hints.'],
    ['A question to help you think','“Could you use both methods in the same study session?” You still have to work out the difference.'],
    ['Name the useful distinction','“Think about what you do during practice and when you do it.” The tutor points you toward the key distinction.'],
    ['Help with one part','“Retrieval means trying to recall without looking. Now explain what spacing adds.” Part of the answer has been supplied.'],
    ['A similar worked example','“Explaining from memory is an activity; doing it on separate days is a schedule.” Use that example, then answer a new question.'],
    ['Show the full explanation','Retrieval is trying to recall without looking. Spacing is returning after a gap. You can combine them by answering without notes today and again tomorrow. Now hide this and explain a different example yourself.']
]
FEEDBACK={
    'mapping':'A map could help if the relationships are unclear. In this case you could already explain them, so the immediate problem is remembering after a delay. Try recall on separate days.',
    'explaining':'Explaining again can help you check understanding. Here, add a later attempt without notes: today’s explanation alone does not show what you will remember next week.',
    'recall':'This fits the problem. Try recalling on separate days, then check what you missed. You can also explain the idea as part of each review; the methods can work together.'
}
(OUT/'learning-data.js').write_text('window.masteryLessons = '+json.dumps({'bloom':BLOOM,'hints':HINTS,'practiceFeedback':FEEDBACK},ensure_ascii=False)+';')

# The teaching pages are written as short, sequential lessons.
from types import SimpleNamespace
from lessons import render_lessons
render_lessons(SimpleNamespace(**{name: globals()[name] for name in (
    'write','heading','lesson','panel','chain','details','exercise','links',
    'method_cards','mini_network','concept_map','pyramid','note','svg','node',
    'feynman_loop','interleave_visual','timeline','cycle_diagram','hint_ladder',
    'mastery_visual','BLOOM','HINTS','FEEDBACK'
)}))

lib=heading('ORIGINAL DOCUMENTS','Read the source<br><em>when you need more detail.</em>','The 19 project documents and four supplied video transcripts are preserved here. The two Spanish transcripts are explained in English in the lessons. The older project documents include mathematics examples.')
lib+='<div class="source-layout"><div class="source-list">'+''.join(f'<button data-source="{i}" aria-pressed="false"><span>{i+1:02}</span>{html.escape(s["title"])}</button>' for i,s in enumerate(SOURCES))+'</div><article class="source-reader"><span class="eyebrow">ORIGINAL MARKDOWN</span><h2 id="source-title">Choose a document</h2><p id="source-path" class="small-note">Full instructions, templates, references, and qualifications.</p><pre id="source-text">Select a document to read its full text.</pre></article></div>'
lib+=details('How to read the research references', '<p>The sources list Dunlosky et al. (2013), Rohrer & Taylor (2007), Chi et al. (1989), Bastani et al. (2025), Dunlosky & Rawson (2019), and Karpicke & Blunt (2011). The exact links appear in the original documents above.</p><p>The site explains those documents; it is not a new independent review of every study. Distinguish a research result, a proposed study routine, an AI explanation, and a learner’s actual attempt.</p>')
lib+=links([('full-guide.html','Previous edition with mathematics examples'),('revision.html','Return to the revision sheet')])
write('library','Original project documents',lib)

design_system.render(write, heading, panel)

# revision.html is a retained reference page; text-lesson edits do not rebuild it.
print('Built scrolling lessons and sources; retained revision sheet and shared design system.')
