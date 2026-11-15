# Vincular Business

Tu idea en buenas manos.

Sitio web de Vincular Business: https://vincularbusiness.com.ar/

- `index.html`: la web completa en un solo archivo (CSS y JS incluidos). Precios, contacto y módulos se editan en el objeto `CONFIG` al inicio del script.
- `assets/`: logos, imágenes y demos.
- `assets/qr-web.png`: código QR que lleva a la web.

La tarjeta digital de Nicolás vive en su propio repositorio: https://github.com/raveholding/nicoVB

## Web en Next.js (Vercel)

La carpeta [`web/`](web/README.md) tiene la versión Next.js de esta web: carga más rápida, selector de demos por rubro y una página por rubro. Se genera desde este `index.html` con `tools/extraer_web.py`.
