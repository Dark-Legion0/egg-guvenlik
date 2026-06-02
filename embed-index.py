import base64, re, glob, os

SRC = "/home/claude/egg-final"

with open(f"{SRC}/public/logo.png","rb") as f:
    logo_b64 = "data:image/png;base64," + base64.b64encode(f.read()).decode()

with open(f"{SRC}/public/images/security-guard.png","rb") as f:
    guard_b64 = "data:image/png;base64," + base64.b64encode(f.read()).decode()

with open(f"{SRC}/public/videos/security-hero.mp4","rb") as f:
    video_b64 = "data:video/mp4;base64," + base64.b64encode(f.read()).decode()

css_files = sorted(glob.glob("/tmp/egg-build/out/_next/static/chunks/*.css"))
all_css = "".join(open(f).read() for f in css_files)

with open(f"{SRC}/out/index.html", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'<link[^>]+rel="stylesheet"[^>]*/>', '', html)
html = html.replace('</head>', f'<style>{all_css}</style>\n</head>', 1)
html = html.replace('</head>',
    '<link rel="preconnect" href="https://fonts.googleapis.com">'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    '<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">'
    '</head>', 1)

html = html.replace('src="logo.png"', f'src="{logo_b64}"')
html = html.replace('src="images/security-guard.png"', f'src="{guard_b64}"')
html = html.replace('poster="images/security-guard.png"', f'poster="{guard_b64}"')
html = html.replace('src="videos/security-hero.mp4"', f'src="{video_b64}"')

patch = f"""<script>
(function(){{
  var V="{video_b64}",G="{guard_b64}";
  function fix(){{
    document.querySelectorAll('video').forEach(function(v){{
      v.querySelectorAll('source').forEach(function(s){{
        var sr=s.getAttribute('src')||'';
        if(sr.indexOf('security-hero')>-1||sr.indexOf('videos/')>-1){{
          s.setAttribute('src',V);v.setAttribute('poster',G);
          v.load();v.play().catch(function(){{}});
        }}
      }});
    }});
  }}
  fix();
  [300,800,1500,3000].forEach(function(t){{setTimeout(fix,t)}});
  new MutationObserver(fix).observe(document.documentElement,{{childList:true,subtree:true}});
}})();
</script>"""
html = html.replace('</body>', patch + '</body>')

with open(f"{SRC}/out/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print(f"✅ index.html: {len(html)/1024/1024:.1f}MB")
