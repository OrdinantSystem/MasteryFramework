"""Package the ready-to-open static site and its reproducible React source."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root=Path(__file__).resolve().parents[1]
with ZipFile(root/'Mastery-Website.zip','w',ZIP_DEFLATED) as bundle:
    for path in sorted((root/'dist').rglob('*')):
        if path.is_file():bundle.write(path,Path('Mastery')/path.relative_to(root/'dist'))
    bundle.write(root/'OPEN-ME.txt','Mastery/OPEN-ME.txt')
    for directory in ('src','scripts','content','legacy'):
        for path in sorted((root/directory).rglob('*')):
            if path.is_file() and '__pycache__' not in path.parts:
                bundle.write(path,Path('Source')/path.relative_to(root))
    for name in ('package.json','package-lock.json','tsconfig.json','design-tokens.json','README.md','DESIGN-SYSTEM.md','AGENTS.md','.gitignore'):
        bundle.write(root/name,Path('Source')/name)
with ZipFile(root/'Mastery-Website.zip') as bundle:
    assert bundle.testzip() is None
    assert 'Mastery/index.html' in bundle.namelist()
    assert 'Source/package-lock.json' in bundle.namelist()
print('Packaged Mastery-Website.zip: offline website + editable React source.')
