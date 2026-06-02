import os, re

DEST = "/home/claude/egg-final/out"

html_files = [
    os.path.join(r, f)
    for r, _, files in os.walk(DEST)
    for f in files if f.endswith('.html')
]

for fp in html_files:
    depth = len(os.path.relpath(fp, DEST).split(os.sep)) - 1
    px = "../" * depth

    with open(fp, encoding='utf-8') as f: c = f.read()

    c = c.replace('href="/_next/', f'href="{px}_next/')
    c = c.replace('src="/_next/',  f'src="{px}_next/')
    c = c.replace('href="/favicon.ico"', f'href="{px}favicon.ico"')
    c = c.replace('src="/logo.png"', f'src="{px}logo.png"')
    c = c.replace('src="/images/security-guard.png"', f'src="{px}images/security-guard.png"')
    c = c.replace('src="/videos/security-hero.mp4"',  f'src="{px}videos/security-hero.mp4"')
    c = c.replace('poster="/images/security-guard.png"', f'poster="{px}images/security-guard.png"')

    def fix_href(m):
        p = m.group(1)
        if p.startswith(('http','tel:','mailto:','#','javascript','data:')): return m.group(0)
        if p.startswith(('/_next','_next')): return m.group(0)
        if p in ('/', ''): return f'href="{px}index.html"' if depth > 0 else 'href="index.html"'
        return f'href="{px}{p.strip("/")}/index.html"'

    c = re.sub(r'href="((?:/(?!_next)[^"]*|/))"', fix_href, c)
    with open(fp, 'w', encoding='utf-8') as f: f.write(c)

print(f"✅ {len(html_files)} HTML düzeltildi")
