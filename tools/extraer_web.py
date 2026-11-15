#!/usr/bin/env python3
"""Genera la web Next.js (web/) a partir del index.html original de Vincular Business.
- Separa estilos, cuerpo y script del sitio, y saca las imágenes incrustadas en base64 a archivos.
- La sección «Demo pública» se reemplaza por el selector de demos por rubro (componente React).
Uso: python3 tools/extraer_web.py   (desde la raíz del repositorio)"""
import re,os,base64,hashlib,shutil
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W=os.path.join(R,'web')
s=open(os.path.join(R,'index.html'),encoding='utf8').read()
css=re.search(r'<style>(.*?)</style>',s,re.S).group(1)
body=s[s.index('<body>')+6:s.index('</body>')]
js=re.findall(r'<script>(.*?)</script>',body,re.S)
assert len(js)==1,'se esperaba un solo script en el cuerpo'
body=body.replace('<script>'+js[0]+'</script>','')
# imágenes incrustadas → archivos
os.makedirs(os.path.join(W,'public','assets','img'),exist_ok=True)
def sacar(m):
    mime,data=m.group(1),m.group(2); ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/svg+xml':'svg'}[mime]
    raw=base64.b64decode(data); n='%s.%s'%(hashlib.sha1(raw).hexdigest()[:12],ext)
    open(os.path.join(W,'public','assets','img',n),'wb').write(raw); return 'src="/assets/img/'+n+'"'
body,nimg=re.subn(r'src="data:(image/[a-z+]+);base64,([A-Za-z0-9+/=]+)"',sacar,body)
body=body.replace('src="assets/','src="/assets/').replace('href="assets/','href="/assets/')
# íconos (sprite SVG): van en el layout para que existan en todas las páginas
i=body.index('<svg width="0" height="0"'); j=body.index('</svg>',i)+6
iconos=body[i:j]; body=body[:i]+body[j:]
# la sección de la demo pública se reemplaza por el selector de demos por rubro (marca <!--DEMOS-->)
i=body.index('<!-- Demo pública -->'); j=body.index('</section>',i)+len('</section>')
body=body[:i]+'<!--DEMOS-->'+body[j:]
os.makedirs(os.path.join(W,'content'),exist_ok=True)
open(os.path.join(W,'content','inicio.html'),'w',encoding='utf8').write(body.strip()+'\n')
open(os.path.join(W,'content','iconos.html'),'w',encoding='utf8').write(iconos+'\n')
ld=re.search(r'<script type="application/ld\+json">(.*?)</script>',s,re.S).group(1).strip()
open(os.path.join(W,'content','ld.json'),'w',encoding='utf8').write(ld+'\n')
fav=re.search(r'<link rel="icon" type="image/svg\+xml" href="data:image/svg\+xml,([^"]+)"',s).group(1)
import urllib.parse
open(os.path.join(W,'public','favicon.svg'),'w',encoding='utf8').write(urllib.parse.unquote(fav))
open(os.path.join(W,'app','sitio.css'),'w',encoding='utf8').write('/* Generado por tools/extraer_web.py desde index.html: no editar a mano */\n'+css.strip()+'\n')
open(os.path.join(W,'public','sitio.js'),'w',encoding='utf8').write('/* Generado por tools/extraer_web.py desde index.html */\n'+js[0].strip()+'\n')
# imágenes del repositorio
for d in ('clientes','demos'):
    shutil.copytree(os.path.join(R,'assets',d),os.path.join(W,'public','assets',d),dirs_exist_ok=True)
for f in os.listdir(os.path.join(R,'assets')):
    p=os.path.join(R,'assets',f)
    if os.path.isfile(p): shutil.copy(p,os.path.join(W,'public','assets',f))
print('OK · imágenes sacadas del HTML:',nimg,'· cuerpo:',len(body),'bytes')
