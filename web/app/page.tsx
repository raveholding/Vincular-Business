import Script from 'next/script';
import { leer } from '@/lib/contenido';
import { demosHtml } from '@/lib/demos-html';

export const dynamic = 'force-static';

// Portada: el contenido original del sitio, con la sección «Probá el sistema» reemplazada
// por el selector de demos por rubro. El comportamiento (menú, pestañas, formulario, precios) lo da /sitio.js.
export default function Inicio() {
  const html = leer('inicio.html').replace('<!--DEMOS-->', demosHtml());
  return (
    <>
      <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/sitio.js" strategy="afterInteractive" />
    </>
  );
}
