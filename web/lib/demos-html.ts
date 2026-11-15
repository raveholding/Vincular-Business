// Sección «Probá el sistema» de la portada: el visitante elige su rubro y abre la demo de ese rubro.
// Se arma como HTML (no como componente) porque va dentro del cuerpo de la portada, en su lugar original.
import { RUBROS, OTROS_RUBROS, demoUrl, waUrl } from './rubros';

const esc = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ic = (id: string) => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;

export function demosHtml(): string {
  const tarjetas = RUBROS.map((r) => {
    const botones = r.demos.length
      ? r.demos
          .map(
            (d) =>
              `<a class="vb-demo" href="${demoUrl(d)}" target="_blank" rel="noopener noreferrer">` +
              `<strong>${esc(d.nombre)}</strong><span>${esc(d.detalle)}</span></a>`,
          )
          .join('')
      : `<a class="vb-demo vb-demo-wa" href="${esc(waUrl(`Hola! Quiero ver la demo de ${r.nombre} de Vincular Business.`))}" target="_blank" rel="noopener noreferrer">` +
        `<strong>Te la mostramos</strong><span>Pedila por WhatsApp</span></a>`;
    return (
      `<article class="vb-rubro">` +
      `<h3>${ic(r.icono)}${esc(r.nombre)}</h3><p>${esc(r.resumen)}</p>` +
      `<div class="vb-demos">${botones}</div>` +
      `<a class="vb-mas" href="/rubros/${r.slug}">Qué resuelve en ${esc(r.nombre.toLowerCase())} →</a>` +
      `</article>`
    );
  }).join('');
  return (
    `<section id="demo">` +
    `<div class="wrap">` +
    `<div class="sec-head"><h2>Probá el sistema de tu rubro, sin registrarte</h2>` +
    `<p>Elegí tu tipo de negocio y abrí una demo con datos de ejemplo. Recorré cada pantalla como si fuera tu local: los datos quedan en tu navegador y podés empezar de cero cuando quieras.</p></div>` +
    `<div class="vb-rubros">${tarjetas}</div>` +
    `<p class="vb-otros">¿Tu rubro es otro? (${esc(OTROS_RUBROS.join(', '))}…) ` +
    `<a href="${esc(waUrl('Hola! Quiero ver una demo de Vincular Business para mi rubro.'))}" target="_blank" rel="noopener noreferrer">Pedinos una demo con tu rubro</a>.</p>` +
    `<p class="micro" style="text-align:center;margin-top:14px">Son demostraciones con datos de ejemplo: no son servicios activos. Tu sistema se arma a medida con tu marca y tus datos.</p>` +
    `</div></section>`
  );
}
