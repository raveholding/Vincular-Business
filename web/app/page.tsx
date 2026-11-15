import { Icono, Logo } from '@/components/Icono';
import { Tema, MenuMovil, Planes, Rubros, Formulario } from '@/components/Interactivo';
import {
  CONTACTO, WA_PRUEBA, wa, DEMOS, demoUrl, BASE, PAQUETES, INCLUYE_TODOS, CLIENTES, PREGUNTAS, PORTAL, SOPORTE,
} from '@/lib/sitio';

const NAV = [
  { href: '#demos', txt: 'Demos' },
  { href: '#incluye', txt: 'Qué incluye' },
  { href: '#planes', txt: 'Planes' },
  { href: '#portal', txt: 'Portal' },
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
                    : <a className="btn btn-sec btn-block" href={wa(`Hola! Quiero ver la demo de ${d.nombre} de Vincular Business.`)} target="_blank" rel="noopener noreferrer">Pedir demo guiada<Icono n="arrow" /></a>}
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
            <ul className="logos">
              {CLIENTES.map((c) => (
                <li key={c.nombre}><img src={c.logo} alt={`Logo de ${c.nombre}`} width={c.w} height={c.h} loading="lazy" /></li>
              ))}
              <li className="tu-negocio"><a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">¿Tu negocio?<span>Sumate</span></a></li>
            </ul>
          </div>
        </section>

        {/* ---------- 05 Mes gratis ---------- */}
        <section id="gratis" className="sec">
          <div className="wrap">
            <Encabezado n="05" etq="Prueba gratis" sub="Te lo dejamos funcionando con tus productos y lo usás 1 mes completo, sin tarjeta ni pago inicial. Si preferís mirar antes, entrá a una demo.">
              Tu primer mes <em>es gratis</em>
            </Encabezado>
            <p className="sin-cobro">No hay cobro ni renovación automáticos: seguís solo si activás un plan.</p>
            <h3 className="sub-tit">Cómo es el mes gratis</h3>
            <ol className="pasos-g">
              <li>
                <span className="num">1</span><h3>Nos escribís</h3>
                <p>Por WhatsApp, sin datos de pago. Cargamos tus productos, precios y usuarios, y lo empezás a usar en el día.</p>
                <a className="btn btn-pri btn-block" href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">Pedir mi mes gratis<Icono n="arrow" /></a>
              </li>
              <li>
                <span className="num">2</span><h3>Lo usás durante 1 mes</h3>
                <p>Sin pagar nada, con todos los módulos de tu plan y soporte por WhatsApp. El mes gratis es uno por negocio.</p>
                <a className="btn btn-sec btn-block" href={PORTAL} target="_blank" rel="noopener noreferrer">Ya soy cliente, ingresar</a>
              </li>
              <li>
                <span className="num">3</span><h3>Al terminar, activás tu plan</h3>
                <p>Elegís plan y período y pagás en pesos por transferencia, con factura. Los precios están acá abajo.</p>
                <a className="btn btn-sec btn-block" href="#planes">Ver precios</a>
              </li>
            </ol>
            <p className="nota-caja">Al terminar el mes tenés 5 días para elegir tu plan sin perder nada de lo que cargaste. Tus datos siempre son tuyos: si decidís no seguir, te los entregamos en Excel.</p>
          </div>
        </section>

        {/* ---------- 06 Planes ---------- */}
        <section id="planes" className="sec alt">
          <div className="wrap">
            <Encabezado n="06" etq="Planes y precios" sub="Desde $ 50.000 al mes pagando el año. El plan sube según cuántos módulos extra sumás, y cambiás de plan cuando quieras.">
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
            <ol className="pasos">
              <li><span>1</span><div><h3>Elegís tu plan al terminar el mes</h3><p>Te pasamos el monto final del plan y el período que elegiste.</p></div></li>
              <li><span>2</span><div><h3>Pagás por transferencia</h3><p>A la cuenta de Vincular Business, en pesos. Te enviamos la factura.</p></div></li>
              <li><span>3</span><div><h3>Ves todo en tu portal</h3><p>El pago, tu contrato y el próximo vencimiento quedan en tu portal del cliente.</p></div></li>
            </ol>
          </div>
        </section>

        {/* ---------- App ---------- */}
        <section className="sec">
          <div className="wrap app-banda">
            <div>
              <h2>Usalo <em>como una app</em></h2>
              <p className="lead">Se instala directo desde el navegador en un clic: queda con su ícono y su propia ventana, en la compu, la tablet y el celular. Sin descargar archivos ni avisos de seguridad.</p>
              <a className="btn btn-pri" href={demoUrl(DEMOS[0])} target="_blank" rel="noopener noreferrer"><Icono n="phone" />Abrir e instalar la demo</a>
            </div>
            <ul className="app-pasos">
              <li><b>Chrome y Edge</b><span>Tocá el ícono Instalar, a la derecha de la barra de dirección.</span></li>
              <li><b>Safari en Mac</b><span>Menú Archivo, Agregar al Dock.</span></li>
              <li><b>Celular</b><span>Menú del navegador, Agregar a la pantalla de inicio.</span></li>
            </ul>
          </div>
        </section>

        {/* ---------- 07 Portal del cliente ---------- */}
        <section id="portal" className="sec alt">
          <div className="wrap">
            <Encabezado n="07" etq="Portal del cliente" sub="Además de tu sistema, tenés una app para tu relación con nosotros: todo a la vista y soporte directo.">
              Tu cuenta, tus pagos y el soporte, <em>en un solo lugar</em>
            </Encabezado>
            <div className="portal">
              {[
                ['receipt', 'Contrato y pagos', 'Tu plan, tus facturas, lo que pagaste y el próximo vencimiento.'],
                ['msg', 'Soporte directo', 'Hablás con el equipo que desarrolla el sistema, con historial de cada consulta.'],
                ['wifi', 'Estado en vivo', 'Monitoreo en tiempo real de tu sistema y aviso si algo necesita atención.'],
                ['shield', 'Respaldo en la nube', 'Copias de seguridad de tus datos en nuestra nube, para recuperar todo si cambiás de equipo.'],
              ].map(([ic, t, d]) => (
                <article key={t}><Icono n={ic} className="ic-color" /><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
            <div className="ctas centro">
              <a className="btn btn-pri" href={PORTAL} target="_blank" rel="noopener noreferrer">Ingresar al portal</a>
              <a className="btn btn-sec" href={SOPORTE} target="_blank" rel="noopener noreferrer"><Icono n="msg" />Página de soporte</a>
            </div>
          </div>
        </section>

        {/* ---------- 08 A medida ---------- */}
        <section id="a-medida" className="sec">
          <div className="wrap">
            <Encabezado n="08" etq="A medida" sub="¿Necesitás algo específico? Adaptamos el sistema a tu operación.">
              Soluciones a la medida <em>de tu empresa</em>
            </Encabezado>
            <div className="medida">
              <article>
                <Icono n="grid" className="ic-color" />
                <h3>Personalización</h3>
                <p>Módulos, reportes, integraciones y flujos hechos para tu empresa. Pedí una cotización y lo desarrollamos a tu medida.</p>
              </article>
              <article>
                <Icono n="box" className="ic-color" />
                <h3>Respaldo y servidor</h3>
                <p>Respaldo automático en nuestra nube o instalación en tu propio servidor, con plan de recuperación según tu operación.</p>
              </article>
              <article className="oscura">
                <Icono n="mail" />
                <h3>Escribinos</h3>
                <p>Cotizaciones y ventas<br /><a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></p>
                <p>Soporte<br /><a href={SOPORTE} target="_blank" rel="noopener noreferrer">Página de soporte</a></p>
                <a className="btn btn-claro btn-block" href={wa('Hola! Quiero una cotización a medida de Vincular Business.')} target="_blank" rel="noopener noreferrer">Solicitar cotización</a>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- 09 Cómo trabajamos ---------- */}
        <section id="nosotros" className="sec alt">
          <div className="wrap">
            <Encabezado n="09" etq="Cómo trabajamos" sub="Somos de Salta. Hablás directo con quienes desarrollan el sistema.">
              De la primera charla <em>a tu negocio funcionando</em>
            </Encabezado>
            <div className="trabajo">
              {[
                ['Charlamos', 'Entendemos tu rubro, tus números y qué te complica hoy.'],
                ['Configuramos', 'Cargamos tus productos, precios, clientes y usuarios. La migración es gratis.'],
                ['Capacitamos', 'Enseñamos al dueño y al equipo con práctica real, en tu local.'],
                ['Acompañamos', 'Soporte por WhatsApp, actualizaciones y módulos a medida si te hacen falta.'],
              ].map(([t, d], i) => (
                <article key={t}><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 10 Preguntas ---------- */}
        <section id="preguntas" className="sec">
          <div className="wrap angosto">
            <Encabezado n="10" etq="Preguntas">Lo que siempre <em>nos preguntan</em></Encabezado>
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
              <Encabezado n="11" etq="Contacto">Contanos de tu negocio. <em>Te lo dejamos andando.</em></Encabezado>
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
            <a href="#portal">Estado del sistema</a>
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

      <a className="wa-flotante" href={WA_PRUEBA} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp"><Icono n="msg" /></a>
    </>
  );
}
