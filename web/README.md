# Web de Vincular Business (Next.js)

La web de vincularbusiness.com.ar en **Next.js 15** (App Router, TypeScript), lista para publicar en **Vercel**.

## Qué mejora frente a la versión de un solo archivo
- **Carga más rápida:** el HTML de la portada baja de 710 KB a unos 80 KB. Las 10 imágenes que estaban incrustadas en base64 ahora son archivos que se cargan cuando hacen falta y se guardan en caché (las de `/assets/img` llevan el hash en el nombre: un año de caché).
- **Probá el sistema de tu rubro:** la sección de la demo ya no abre el sistema interno de Vincular Business. El visitante elige su rubro y abre la demo de ese rubro (17 demos en 9 rubros).
- **Una página por rubro** (`/rubros/gastronomia`, `/rubros/talleres`…) con título y descripción propios para Google, qué resuelve el sistema, sus demos y el botón de WhatsApp con el rubro ya escrito.
- `sitemap.xml` y `robots.txt` automáticos, encabezados de seguridad y página 404 propia.

## Cómo está armada
| Archivo | Qué es |
|---|---|
| `lib/rubros.ts` | **Rubros y demos** (una sola fuente para la portada, las páginas de rubro y el sitemap). Para sumar una demo, agregarla acá. |
| `lib/demos-html.ts` | Sección «Probá el sistema de tu rubro» de la portada. |
| `app/page.tsx` | Portada: el contenido del sitio original con el selector de demos en su lugar. |
| `app/rubros/[slug]/page.tsx` | Página de cada rubro (se genera una por rubro al compilar). |
| `app/nuevo.css` | Estilos nuevos, con los mismos colores y tipografía. |
| `content/`, `app/sitio.css`, `public/sitio.js`, `public/assets/img/` | **Generados** desde `../index.html` por `../tools/extraer_web.py`. No se editan a mano. |

**Precios, combos, textos y contacto** se siguen editando en el `index.html` de la raíz (objeto `CONFIG` y secciones). Después se corre `npm run extraer` (o `python3 ../tools/extraer_web.py`) y se publica.

## Desarrollo y publicación
```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build
```
En Vercel: proyecto con **Root Directory = `web`**, framework Next.js, sin variables de entorno. El dominio vincularbusiness.com.ar se pasa a Vercel recién cuando la versión nueva esté aprobada; mientras tanto sigue en GitHub Pages.
