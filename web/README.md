# Web de Vincular Business (Next.js · Vercel)

Web comercial de vincularbusiness.com.ar: **suscripción mensual con 1 mes gratis**, planes que suben por **cantidad de módulos extra**, demos por rubro, **modo claro y oscuro**.

## Qué editar
Todo el contenido está en **`lib/sitio.ts`**:
- `CONTACTO`: WhatsApp, email, Instagram y ciudad.
- `PLANES`: nombre, módulos incluidos y `precioMensual` en pesos. Con `null` la web muestra «Consultá el precio». `DESCUENTO_ANUAL` calcula el precio anual.
- `DEMOS`: las 6 demos nuevas. `estado: 'lista'` abre la demo publicada en GitHub Pages; `'pronto'` ofrece una demo guiada por WhatsApp.
- `BASE`, `PAQUETES`, `INCLUYE_TODOS`, `RUBROS`, `CLIENTES`, `PREGUNTAS`.

## Estructura
| Archivo | Qué es |
|---|---|
| `app/page.tsx` | Portada con las secciones numeradas (demos, qué incluye, por rubro, clientes, planes, cómo trabajamos, preguntas, contacto). |
| `app/legal/page.tsx` | Términos, privacidad, botón de arrepentimiento y botón de baja (Ley 24.240 y Ley 25.326). |
| `components/Interactivo.tsx` | Partes con interacción: modo claro/oscuro, menú del celular, planes mensual/anual, pestañas por rubro, formulario a WhatsApp. |
| `components/Icono.tsx` | Íconos y logo (se adaptan al modo claro y oscuro). |
| `app/globals.css` | Diseño. Colores en variables (`:root` claro, `html[data-tema=oscuro]` oscuro). |

## Desarrollo
```bash
cd web
npm install
npm run dev     # http://localhost:3000
npm run build
```
Vercel: proyecto `vincular-business` (equipo rave-holding), Root Directory `web`, sin variables de entorno. Cada push a `main` publica solo.
