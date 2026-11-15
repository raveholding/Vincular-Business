import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RUBROS, rubroPorSlug, demoUrl, waUrl } from '@/lib/rubros';

export const dynamicParams = false;
export const generateStaticParams = () => RUBROS.map((r) => ({ slug: r.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = rubroPorSlug((await params).slug);
  if (!r) return {};
  const desc = `${r.resumen} Software a medida en Salta y toda Argentina: pago único más mantenimiento mensual, demo sin seña.`;
  return {
    title: `${r.titulo} en Salta`,
    description: desc,
    alternates: { canonical: `/rubros/${r.slug}` },
    openGraph: { title: `${r.titulo} · Vincular Business`, description: desc, url: `/rubros/${r.slug}` },
  };
}

const Ic = ({ id }: { id: string }) => (
  <svg className="ic" aria-hidden="true"><use href={`#i-${id}`} /></svg>
);

export default async function RubroPage({ params }: Props) {
  const r = rubroPorSlug((await params).slug);
  if (!r) notFound();
  const wa = waUrl(`Hola! Tengo un negocio de ${r.nombre.toLowerCase()} y quiero una demo y un presupuesto de Vincular Business.`);
  return (
    <>
      <header className="vb-top">
        <div className="wrap">
          <a href="/" aria-label="Vincular Business, ir al inicio"><img src="/assets/logo-web.svg" alt="Vincular Business" width="160" height="34" /></a>
          <nav aria-label="Secciones">
            <a href="/#demo">Demos</a>
            <a href="/#combos">Combos y precios</a>
            <a href="/#faq">Preguntas</a>
            <a href="/#presupuesto">Presupuesto</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="vb-hero">
          <div className="wrap">
            <p className="eyebrow">{r.nombre}</p>
            <h1>{r.titulo}</h1>
            <p className="lead">{r.resumen} Lo armamos a medida de tu negocio, con tu marca, y lo probás antes de pagar.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer"><Ic id="msg" />Pedir demo y presupuesto</a>
              <a className="btn btn-ghost" href="/#combos">Ver combos y precios</a>
            </div>
          </div>
        </section>
        <section className="vb-sec">
          <div className="wrap">
            <h2>Qué resuelve el sistema</h2>
            <ul className="vb-lista">
              {r.funciones.map((f) => (<li key={f}><Ic id="check" /><span>{f}</span></li>))}
            </ul>
            <p className="vb-nota">Combo recomendado para empezar: <strong>{r.combo}</strong>. Pago único del sistema más mantenimiento mensual; la migración de tus archivos es gratis.</p>
          </div>
        </section>
        <section className="vb-sec">
          <div className="wrap">
            <h2>Probalo ahora, sin registrarte</h2>
            <div className="vb-rubros">
              {r.demos.map((d) => (
                <article className="vb-rubro" key={d.repo}>
                  <h3>{d.nombre}</h3>
                  <p>{d.detalle}. Demo con datos de ejemplo: los datos quedan en tu navegador.</p>
                  <div className="vb-demos">
                    <a className="vb-demo" href={demoUrl(d)} target="_blank" rel="noopener noreferrer"><strong>Abrir la demo</strong><span>Se abre en otra pestaña</span></a>
                  </div>
                </article>
              ))}
              <article className="vb-rubro">
                <h3>Con tu propio negocio</h3>
                <p>Te mostramos el sistema con tus productos, tus precios y tu forma de trabajar. Sin seña.</p>
                <div className="vb-demos">
                  <a className="vb-demo vb-demo-wa" href={wa} target="_blank" rel="noopener noreferrer"><strong>Pedila por WhatsApp</strong><span>(387) 448-4132</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="vb-sec">
          <div className="wrap">
            <h2>Otros rubros</h2>
            <ul className="vb-lista">
              {RUBROS.filter((x) => x.slug !== r.slug).map((x) => (
                <li key={x.slug}><Ic id={x.icono} /><a href={`/rubros/${x.slug}`}>{x.nombre}</a></li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="vb-pie">
        <div className="wrap">
          <span>© Vincular Business · Salta, Argentina</span>
          <span><a href="/">Inicio</a> · <a href="/#legal">Información legal</a> · <a href="mailto:vincularbusiness@gmail.com">vincularbusiness@gmail.com</a></span>
        </div>
      </footer>
    </>
  );
}
