'use client';
import { useEffect, useState } from 'react';
import { Icono } from './Icono';
import { PLANES, PERIODOS, ELECCION, RUBROS, RUBRO_PLAN, wa, CONTACTO, type Plan, type Periodo } from '@/lib/sitio';

// ---------- Modo claro / oscuro ----------
export function Tema() {
  const [oscuro, setOscuro] = useState<boolean | null>(null);
  useEffect(() => { setOscuro(document.documentElement.dataset.tema === 'oscuro'); }, []);
  const cambiar = () => {
    const nuevo = !oscuro;
    setOscuro(nuevo);
    document.documentElement.dataset.tema = nuevo ? 'oscuro' : 'claro';
    try { localStorage.setItem('vb-tema', nuevo ? 'oscuro' : 'claro'); } catch { /* sin almacenamiento */ }
  };
  return (
    <button type="button" className="btn-ico" onClick={cambiar}
      aria-label={oscuro ? 'Pasar a modo claro' : 'Pasar a modo oscuro'} title={oscuro ? 'Modo claro' : 'Modo oscuro'}>
      <Icono n={oscuro ? 'sun' : 'moon'} />
    </button>
  );
}

// ---------- Menú del celular ----------
export function MenuMovil({ enlaces }: { enlaces: { href: string; txt: string }[] }) {
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setAbierto(false); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);
  return (
    <div className="menu-movil">
      <button type="button" className="btn-ico" aria-expanded={abierto} aria-controls="menu-movil"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setAbierto(!abierto)}>
        <Icono n={abierto ? 'x' : 'menu'} />
      </button>
      {abierto && (
        <nav id="menu-movil" className="menu-panel" aria-label="Menú">
          {enlaces.map((e) => (<a key={e.href} href={e.href} onClick={() => setAbierto(false)}>{e.txt}</a>))}
          <div className="menu-tema"><span>Claro / oscuro</span><Tema /></div>
        </nav>
      )}
    </div>
  );
}

// ---------- Planes (paso a paso, como Raspberry) ----------
const pesos = (n: number) => '$ ' + (Math.round(n / 100) * 100).toLocaleString('es-AR');
function Precio({ plan, per }: { plan: Plan; per: Periodo }) {
  if (plan.precioMensual == null) return <p className="precio"><span className="monto chico">Consultá el precio</span></p>;
  const mes = plan.precioMensual * (1 - per.descuento);
  return (
    <div className="precio">
      <p><span className="monto">{pesos(mes)}</span><span className="per"> /mes</span></p>
      {per.descuento > 0
        ? <p className="ahorro">Ahorrás {Math.round(per.descuento * 100)} % vs. el plan mensual</p>
        : <p className="ahorro neutro">Pagás mes a mes</p>}
      <p className="nota">Total: {pesos(mes * per.meses)} {per.meses === 1 ? 'por mes' : `por ${per.meses} meses`} · precio final en pesos</p>
    </div>
  );
}
export function Planes() {
  const [rub, setRub] = useState(RUBRO_PLAN[0]);
  const [per, setPer] = useState(PERIODOS.find((x) => x.id === 'anual') ?? PERIODOS[0]); // arranca en Anual: muestra el precio «desde»
  const [elec, setElec] = useState('pro');
  const esp = !!rub.paquete; // rubro especializado: arranca en Crecer con su paquete incluido
  const planes = PLANES.filter((p) => !(esp && p.id === 'base'));
  const opciones = ELECCION.filter((x) => !(esp && x.id === 'base'));
  const elegir = (r: typeof rub) => { setRub(r); if (r.paquete && elec === 'base') setElec('crecer'); };
  const extras = (p: Plan) => !esp ? p.extras
    : p.id === 'crecer' ? `Base + paquete ${rub.paquete}`
    : p.id === 'pro' ? `Base + paquete ${rub.paquete} + 2 módulos extra`
    : p.extras;
  const para = (p: Plan) => esp && p.id === 'crecer' ? `Todo el sistema base más ${rub.incluye}.` : p.para;
  return (
    <div className="planes-pasos">
      <p className="paso-tit">1. ¿De qué rubro es tu negocio?</p>
      <div className="chips chips-neg" role="group" aria-label="Rubro">
        {RUBRO_PLAN.map((x) => (
          <button key={x.id} type="button" aria-pressed={rub.id === x.id} onClick={() => elegir(x)}>{x.txt}<small>{x.det}</small></button>
        ))}
      </div>
      {esp && <p className="ayuda">{rub.txt} necesita su paquete del rubro ({rub.incluye}), por eso arranca en el plan <b>Crecer</b>. El paquete ya está incluido en el precio.</p>}
      <p className="paso-tit">2. Elegí el período</p>
      <div className="segmento" role="group" aria-label="Período de pago">
        {PERIODOS.map((x) => (
          <button key={x.id} type="button" aria-pressed={per.id === x.id} onClick={() => setPer(x)}>
            {x.nombre}{x.descuento > 0 && <small> −{Math.round(x.descuento * 100)} %</small>}
          </button>
        ))}
      </div>
      <p className="paso-tit">3. ¿Qué tamaño tiene?</p>
      <div className="chips chips-neg" role="group" aria-label="Tamaño del negocio">
        {opciones.map((x) => (
          <button key={x.id} type="button" aria-pressed={elec === x.id} onClick={() => setElec(x.id)}>{esp && x.id === 'crecer' ? 'Un local' : x.txt}<small>{x.det}</small></button>
        ))}
      </div>
      {elec === 'nose' && <p className="ayuda">Empezá con <b>Pro</b>: es el que más eligen. En los 14 días gratis vemos juntos qué módulos usás y te dejamos el plan justo.</p>}
      <p className="paso-tit">4. Mirá el precio y empezá gratis</p>
      <div className={planes.length === 3 ? 'planes tres' : 'planes'}>
        {planes.map((p) => {
          const elegido = p.id === elec || (elec === 'nose' && p.destacado);
          const nom = esp && p.id !== 'total' ? `${p.nombre} · ${rub.paquete}` : p.nombre;
          return (
            <article key={p.id} className={['plan', elegido && 'elegido', p.destacado && 'destacado'].filter(Boolean).join(' ')}>
              {p.destacado ? <span className="cinta">{elegido ? 'Tu elección · el más elegido' : 'El más elegido'}</span> : elegido && <span className="cinta suave">Tu elección</span>}
              <h3>{nom}</h3>
              <p className="extras">{extras(p)}</p>
              <Precio plan={p} per={per} />
              <p className="para">{para(p)}</p>
              <a className={elegido ? 'btn btn-pri btn-block' : 'btn btn-sec btn-block'}
                href={wa(`Hola! Quiero probar 14 días gratis del Sistema Vincular Business. Rubro: ${rub.txt}. Me interesa el plan ${nom} (${extras(p)}), período de pago: ${per.nombre.toLowerCase()}.`)}
                target="_blank" rel="noopener noreferrer">Empezar 14 días gratis</a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Hoy / Con Vincular Business ----------
export function Rubros() {
  const [act, setAct] = useState(RUBROS[0].id);
  const r = RUBROS.find((x) => x.id === act) ?? RUBROS[0];
  return (
    <div className="rubros">
      <div className="pestanas" role="tablist" aria-label="Rubros">
        {RUBROS.map((x) => (
          <button key={x.id} type="button" role="tab" id={`tab-${x.id}`} aria-selected={x.id === act}
            aria-controls="panel-rubro" onClick={() => setAct(x.id)}>{x.nombre}</button>
        ))}
      </div>
      <div className="antes-despues" id="panel-rubro" role="tabpanel" aria-labelledby={`tab-${r.id}`}>
        <div className="caja hoy">
          <p className="etq">Hoy</p>
          <ul>{r.hoy.map((t) => <li key={t}><Icono n="x" />{t}</li>)}</ul>
        </div>
        <div className="caja con">
          <p className="etq">Con Vincular Business</p>
          <ul>{r.con.map((t) => <li key={t}><Icono n="check" />{t}</li>)}</ul>
        </div>
      </div>
      {r.desde && (() => {
        const pl = PLANES.find((x) => x.id === r.desde);
        const dto = PERIODOS.find((p) => p.id === 'anual')?.descuento ?? 0;
        const anual = pl?.precioMensual ? Math.round(pl.precioMensual * (1 - dto)) : null;
        return pl ? (
          <p className="rubro-desde">Desde el plan <b>{pl.nombre}</b>{anual ? <> · $ {anual.toLocaleString('es-AR')} al mes pagando el año</> : null}. Incluye el paquete de tu rubro.</p>
        ) : null;
      })()}
    </div>
  );
}

// ---------- Formulario de contacto (arma el mensaje y abre WhatsApp) ----------
const NECESIDADES = ['Probar 14 días gratis', 'Ver una demo guiada', 'Pasar de otro sistema', 'Algo a medida'];
export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [nec, setNec] = useState(NECESIDADES[0]);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const texto = [
    `Hola! Soy ${nombre || '(nombre)'}${negocio ? `, de ${negocio}` : ''}. Te escribo por el Sistema Vincular Business.`,
    `Quiero: ${nec}.`,
    msg && `Comentario: ${msg}`,
  ].filter(Boolean).join('\n');
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      if (!nombre.trim()) { setErr('Contanos tu nombre para poder responderte.'); return; }
      window.open(wa(texto), '_blank', 'noopener,noreferrer');
    }}>
      <div className="fila">
        <label>Nombre<input value={nombre} onChange={(e) => { setNombre(e.target.value); setErr(''); }} autoComplete="name" /></label>
        <label>Negocio y rubro<input value={negocio} onChange={(e) => setNegocio(e.target.value)} placeholder="Ej.: almacén en Salta" /></label>
      </div>
      <fieldset>
        <legend>¿Qué necesitás?</legend>
        <div className="chips">
          {NECESIDADES.map((n) => (
            <button key={n} type="button" aria-pressed={nec === n} onClick={() => setNec(n)}>{n}</button>
          ))}
        </div>
      </fieldset>
      <label>Mensaje (opcional)<textarea rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      {err && <p className="error" role="alert">{err}</p>}
      <button className="btn btn-pri" type="submit"><Icono n="msg" />Enviar por WhatsApp</button>
      <p className="micro">Se abre WhatsApp con tu mensaje listo para enviar a {CONTACTO.whatsappVisible}. Usamos tus datos solo para responder esta consulta.</p>
    </form>
  );
}
