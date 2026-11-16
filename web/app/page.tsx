import { Icono, Logo } from '@/components/Icono';
import { Tema, MenuMovil, Planes, Rubros, Formulario } from '@/components/Interactivo';
import { Chat } from '@/components/Chat';
import {
  CONTACTO, WA_PRUEBA, wa, DEMOS, demoUrl, BASE, PAQUETES, INCLUYE_TODOS, CLIENTES, PREGUNTAS, PORTAL, SOPORTE,
} from '@/lib/sitio';

const NAV = [
  { href: '#demos', txt: 'Demos' },
  { href: '#incluye', txt: 'Qué incluye' },
  { href: '#planes', txt: 'Planes' },
  { href: '#nosotros', txt: 'Cómo trabajamos' },
  { href: '#preguntas', txt: 'Preguntas' },
  { href: '#contacto', txt: 'Contacto' },
];

function Encabezado({ n, etq, children, sub }: { n: string; etq: string; children: React.ReactNode; sub?: string }) {
  return (
    <div className="sec-head">
      <p className="sec-num"><span>{n}</span>{etq}</p>
      <h2>{children}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  );
}

export default function Inicio() {
  return (
    <>
      <a className="saltar" href="#main">Saltar al contenido</a>
      <header className="top">
        <div className="wrap top-in">
          <a href="#inicio" aria-label="Vincular Business, ir al inicio"><Logo /></a>
          <nav className="nav" aria-label="Secciones">
            {NAV.map((e) => <a key={e.href} href={e.href}>{e.txt}</a>)}
          </nav>
          <div className="top-acc">
            <Tema />
            <a className="ingresar ocultar-movil" href={PORTAL} target="_blank" rel="noopener noreferrer">Ingresar</a>
            <a className="btn btn-pri btn-chico ocultar-movil" href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">Probar gratis</a>
            <MenuMovil enlaces={NAV} />
          </div>
        </div>
      </header>

      <main id="main">
        {/* ---------- Portada ---------- */}
        <section id="inicio" className="hero">
          <div className="wrap hero-in">
            <div>
              <p className="pastilla">1 mes gratis · sin tarjeta</p>
              <h1>Tu negocio en orden, <em>con todo en un solo sistema.</em></h1>
              <p className="lead">Ventas, caja, stock, clientes y factura electrónica ARCA. Activás solo los módulos que usás y seguís vendiendo aunque se corte internet.</p>
              <div className="ctas">
                <a className="btn btn-pri" href={WA_PRUEBA} target="_blank" rel="noopener noreferrer"><Icono n="msg" />Probá 1 mes gratis</a>
                <a className="btn btn-sec" href="#demos"><Icono n="play" />Entrar a las demos</a>
              </div>
              <p className="micro">Te lo dejamos listo con tus productos. Sin cobros automáticos.</p>
            </div>
            <div className="panel-demo" aria-label="Ejemplo del resumen del día (datos de ejemplo)">
              <div className="pd-top"><span>Resumen de hoy</span><span className="pd-ok">● Sincronizado</span></div>
              <div className="pd-kpis">
                <div><small>Ventas</small><b>$ 486.900</b><i className="sube">+12 %</i></div>
                <div><small>Ganancia</small><b>$ 131.400</b><i className="sube">+8 %</i></div>
                <div><small>Tickets</small><b>142</b><i>promedio $ 3.429</i></div>
              </div>
              <div className="pd-barras" aria-hidden="true">
                {[38, 52, 46, 64, 58, 80, 72, 92, 68, 76, 88, 70].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
              </div>
              <ul className="pd-lista">
                <li><span>Caja 1 · Efectivo</span><b>$ 212.300</b></li>
                <li><span>Transferencias y QR</span><b>$ 198.600</b></li>
                <li><span>Cuenta corriente</span><b>$ 76.000</b></li>
              </ul>
              <p className="pd-pie">Datos de ejemplo</p>
            </div>
          </div>
          <div className="wrap franja">
            <span><Icono n="receipt" />Factura electrónica ARCA</span>
            <span><Icono n="wifi" />Funciona sin internet</span>
            <span><Icono n="phone" />App en compu y celular</span>
            <span><Icono n="shield" />Permisos por rol y auditoría</span>
          </div>
        </section>

        {/* ---------- 01 Demos ---------- */}
        <section id="demos" className="sec">
          <div className="wrap">
            <Encabezado n="01" etq="Demos" sub="Entrá a la demo que se parezca a tu negocio y recorrela con datos de ejemplo, sin correo, sin tarjeta y sin instalar nada.">
              Probalo vos mismo, <em>sin registrarte</em>
            </Encabezado>
            <div className="demos">
              {DEMOS.map((d) => (
                <article key={d.id} className="demo">
                  <div className="demo-top">
                    <h3>{d.nombre}</h3>
                    {d.estado === 'pronto' && <span className="etiqueta">Muy pronto</span>}
                  </div>
                  <p className="modelo">{d.modelo}</p>
                  <p className="ejemplos">{d.ejemplos}</p>
                  <ul>{d.puntos.map((p) => <li key={p}><Icono n="check" />{p}</li>)}</ul>
                  {d.estado === 'lista'
                    ? <a className="btn btn-sec btn-block" href={demoUrl(d)} target="_blank" rel="noopener noreferrer">Entrar a la demo<Icono n="arrow" /></a>
                    : <a className="btn btn-sec btn-block" href={wa(`Hola! Quiero ver la demo de ${d.nombre} del Sistema Vincular Business.`)} target="_blank" rel="noopener noreferrer">Pedir demo guiada<Icono n="arrow" /></a>}
                </article>
              ))}
            </div>
            <p className="aclara">Para entrar: usuario <b>ADMIN</b> y PIN <b>1234</b>. Las demos usan datos de ejemplo que quedan en tu navegador; no emiten facturas reales ni se conectan con bancos, ARCA ni equipos.</p>
          </div>
        </section>

        {/* ---------- 02 Qué incluye ---------- */}
        <section id="incluye" className="sec alt">
          <div className="wrap">
            <Encabezado n="02" etq="Qué incluye" sub="Todos los planes traen el sistema base completo. Después sumás los módulos extra que tu negocio necesita.">
              Todo el control de tu negocio, <em>por módulos</em>
            </Encabezado>
            <div className="incluye">
              <article className="base">
                <p className="etq">Sistema base · en todos los planes</p>
                <h3>Lo que todo negocio necesita</h3>
                <ul>{BASE.map((b) => <li key={b}><Icono n="check" />{b}</li>)}</ul>
              </article>
              <div className="paquetes">
                {PAQUETES.map((p) => (
                  <article key={p.id} className="paquete">
                    <Icono n={p.icono} className="ic-color" />
                    <div><h3>{p.nombre}</h3><p>{p.detalle}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 03 Por rubro ---------- */}
        <section id="rubros" className="sec">
          <div className="wrap">
            <Encabezado n="03" etq="Por rubro">Problemas reales, <em>soluciones concretas</em></Encabezado>
            <Rubros />
          </div>
        </section>

        {/* ---------- Clientes ---------- */}
        <section id="clientes" className="sec alt">
          <div className="wrap">
            <Encabezado n="04" etq="Clientes">Negocios que ya <em>trabajan con nosotros</em></Encabezado>
            <div className="cinta-logos" aria-label="Logos de clientes">
              <ul className="cinta-pista">
                {[...CLIENTES, ...CLIENTES].map((c, i) => (
                  <li key={i} aria-hidden={i >= CLIENTES.length ? true : undefined}>
                    <img src={c.logo} alt={i < CLIENTES.length ? `Logo de ${c.nombre}` : ''} width={c.w} height={c.h} loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
            <p className="cinta-cta"><a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">¿Tu negocio? Sumate <Icono n="arrow" /></a></p>
          </div>
        </section>

        {/* ---------- 06 Planes ---------- */}
        <section id="planes" className="sec">
          <div className="wrap">
            <Encabezado n="05" etq="Planes y precios" sub="Desde $ 50.000 al mes pagando el año. El plan sube según cuántos módulos extra sumás, y cambiás de plan cuando quieras.">
              Pagás por lo que <em>usás</em>
            </Encabezado>
            <ul className="sellos">
              <li><Icono n="check" />1 mes gratis, sin tarjeta</li>
              <li><Icono n="check" />Pagás en pesos, con factura</li>
              <li><Icono n="check" />Sin cobro ni renovación automáticos</li>
            </ul>
            <Planes />
            <div className="incluyen">
              <h3>Todos los planes incluyen</h3>
              <ul>{INCLUYE_TODOS.map((t) => <li key={t}><Icono n="check" />{t}</li>)}</ul>
            </div>
            <p className="nota-caja">Al terminar el mes gratis elegís tu plan y pagás en pesos por transferencia, con factura. Tus datos siempre son tuyos: si decidís no seguir, te los entregamos en Excel. ¿Necesitás algo a medida? <a href={wa('Hola! Quiero una cotización a medida del Sistema Vincular Business.')} target="_blank" rel="noopener noreferrer">Pedí una cotización</a>.</p>
          </div>
        </section>

        {/* ---------- 09 Cómo trabajamos ---------- */}
        <section id="nosotros" className="sec alt">
          <div className="wrap">
            <Encabezado n="06" etq="Cómo trabajamos" sub="Somos de Salta. Hablás directo con quienes desarrollan el sistema. Ofrecemos soporte y capacitación para vos y tu equipo.">
              De la primera charla <em>a tu negocio funcionando</em>
            </Encabezado>
            <div className="trabajo">
              {[
                ['Charlamos', 'Entendemos tu rubro, tus números y qué te complica hoy.'],
                ['Configuramos', 'Cargamos tus productos, precios, clientes y usuarios. La migración es gratis.'],
                ['Capacitamos', 'Capacitación para el dueño y el equipo, con práctica real en tu local.'],
                ['Acompañamos', 'Soporte técnico, actualizaciones y módulos a medida si te hacen falta.'],
              ].map(([t, d], i) => (
                <article key={t}><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 10 Preguntas ---------- */}
        <section id="preguntas" className="sec">
          <div className="wrap angosto">
            <Encabezado n="07" etq="Preguntas">Lo que siempre <em>nos preguntan</em></Encabezado>
            <div className="faq">
              {PREGUNTAS.map((q) => (
                <details key={q.p}><summary>{q.p}</summary><p>{q.r}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 11 Contacto ---------- */}
        <section id="contacto" className="sec alt">
          <div className="wrap contacto">
            <div>
              <Encabezado n="08" etq="Contacto">Contanos de tu negocio. <em>Te lo dejamos andando.</em></Encabezado>
              <ul className="canales">
                <li><a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer"><Icono n="msg" />{CONTACTO.whatsappVisible}</a></li>
                <li><a href={`mailto:${CONTACTO.email}`}><Icono n="mail" />{CONTACTO.email}</a></li>
                <li><a href={`https://instagram.com/${CONTACTO.instagram}`} target="_blank" rel="noopener noreferrer"><Icono n="ig" />@{CONTACTO.instagram}</a></li>
                <li><span><Icono n="pin" />{CONTACTO.ciudad}</span></li>
              </ul>
            </div>
            <Formulario />
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="wrap pie-in">
          <div>
            <Logo />
            <p className="micro">Sistema de gestión para comercios y servicios de Argentina.</p>
          </div>
          <nav aria-label="Sitio"><h4>Sitio</h4>{NAV.map((e) => <a key={e.href} href={e.href}>{e.txt}</a>)}</nav>
          <nav aria-label="Clientes"><h4>Clientes</h4>
            <a href={PORTAL} target="_blank" rel="noopener noreferrer">Portal del cliente</a>
            <a href={SOPORTE} target="_blank" rel="noopener noreferrer">Soporte</a>
                      </nav>
          <nav aria-label="Legal"><h4>Legal</h4>
            <a href="/legal#terminos">Términos y condiciones</a>
            <a href="/legal#privacidad">Privacidad</a>
            <a href="/legal#arrepentimiento">Botón de arrepentimiento</a>
            <a href="/legal#baja">Botón de baja</a>
            <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noopener noreferrer">Defensa del consumidor</a>
          </nav>
        </div>
        <div className="wrap pie-fin">© {new Date().getFullYear()} Vincular Business · {CONTACTO.ciudad}</div>
      </footer>

      <Chat />
    </>
  );
}
