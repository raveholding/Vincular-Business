'use client';
import { useEffect, useState } from 'react';
import { Icono } from './Icono';
import { PLANES, DESCUENTO_ANUAL, RUBROS, wa, CONTACTO, type Plan } from '@/lib/sitio';

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
        </nav>
      )}
    </div>
  );
}

// ---------- Planes ----------
const pesos = (n: number) => '$ ' + Math.round(n).toLocaleString('es-AR');
function Precio({ plan, anual }: { plan: Plan; anual: boolean }) {
  if (plan.precioMensual == null) return <p className="precio"><span className="monto chico">Consultá el precio</span></p>;
  const mes = anual ? plan.precioMensual * (1 - DESCUENTO_ANUAL) : plan.precioMensual;
  return (
    <p className="precio">
      <span className="monto">{pesos(mes)}</span><span className="per"> /mes</span>
      {anual && <span className="nota">{pesos(mes * 12)} al año · ahorrás {Math.round(DESCUENTO_ANUAL * 100)} %</span>}
    </p>
  );
}
export function Planes() {
  const [anual, setAnual] = useState(false);
  return (
    <>
      <div className="periodo" role="group" aria-label="Período de pago">
        <button type="button" aria-pressed={!anual} onClick={() => setAnual(false)}>Mensual</button>
        <button type="button" aria-pressed={anual} onClick={() => setAnual(true)}>Anual <small>−{Math.round(DESCUENTO_ANUAL * 100)} %</small></button>
      </div>
      <div className="planes">
        {PLANES.map((p) => (
          <article key={p.id} className={p.destacado ? 'plan destacado' : 'plan'}>
            {p.destacado && <span className="cinta">El más elegido</span>}
            <h3>{p.nombre}</h3>
            <p className="extras">{p.extras}</p>
            <Precio plan={p} anual={anual} />
            <p className="para">{p.para}</p>
            <a className={p.destacado ? 'btn btn-pri btn-block' : 'btn btn-sec btn-block'}
              href={wa(`Hola! Quiero probar 1 mes gratis Vincular Business. Me interesa el plan ${p.nombre} (${p.extras}).`)}
              target="_blank" rel="noopener noreferrer">Empezar 1 mes gratis</a>
          </article>
        ))}
      </div>
    </>
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
    </div>
  );
}

// ---------- Formulario de contacto (arma el mensaje y abre WhatsApp) ----------
const NECESIDADES = ['Probar 1 mes gratis', 'Ver una demo guiada', 'Pasar de otro sistema', 'Algo a medida'];
export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [nec, setNec] = useState(NECESIDADES[0]);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');
  const texto = [
    `Hola! Soy ${nombre || '(nombre)'}${negocio ? `, de ${negocio}` : ''}.`,
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
