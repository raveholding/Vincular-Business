'use client';
// «Probalo gratis»: un botón que se puede poner en cualquier parte de la web y una sola pantalla
// «Continuá con Vincular Business». No hay registro con correo todavía: el visitante elige su rubro y
// entra a la demo ahí mismo, o pide sus 14 días gratis por WhatsApp con el mensaje ya armado.
import { useEffect, useRef, useState } from 'react';
import { Icono, Logo } from './Icono';
import { DEMOS, demoUrl, wa } from '@/lib/sitio';

const EVENTO = 'vb-prueba';

export function BotonPrueba({ className = 'btn btn-pri', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent(EVENTO))}>
      {children ?? 'Probá gratis'}
    </button>
  );
}

const LISTAS = DEMOS.filter((d) => d.estado === 'lista');

export function Prueba() {
  const [abierto, setAbierto] = useState(false);
  const [rubro, setRubro] = useState('');
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [demo, setDemo] = useState(false);
  const primero = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const abrir = () => { setAbierto(true); setDemo(false); };
    window.addEventListener(EVENTO, abrir);
    return () => window.removeEventListener(EVENTO, abrir);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const tecla = (e: KeyboardEvent) => { if (e.key === 'Escape') setAbierto(false); };
    window.addEventListener('keydown', tecla);
    setTimeout(() => primero.current?.focus(), 30);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', tecla); };
  }, [abierto]);

  if (!abierto) return null;
  const d = LISTAS.find((x) => x.id === rubro);
  const msg = `Hola! Quiero probar 14 días gratis del Sistema Vincular Business.${nombre ? `\nSoy ${nombre}` : ''}${negocio ? `, de ${negocio}` : ''}.${d ? `\nRubro: ${d.nombre}.` : ''}\nMe interesa la llamada de demostración.`;

  if (demo && d) {
    return (
      <div className="visor" role="dialog" aria-modal="true" aria-label={`Demo: ${d.nombre}`}>
        <div className="visor-barra">
          <div className="visor-tit"><b>{d.nombre}</b>{d.acceso && <span>{d.acceso}</span>}</div>
          <a className="btn btn-pri btn-chico" href={wa(msg)} target="_blank" rel="noopener noreferrer">Quiero mis 14 días gratis</a>
          <button type="button" className="btn btn-sec btn-chico" onClick={() => setAbierto(false)} aria-label="Cerrar la demo">Cerrar ✕</button>
        </div>
        <iframe className="visor-marco" src={demoUrl(d)} title={`Demo ${d.nombre}`} allow="clipboard-write; fullscreen" />
      </div>
    );
  }

  return (
    <div className="pr-fondo" role="dialog" aria-modal="true" aria-labelledby="pr-tit" onClick={(e) => { if (e.target === e.currentTarget) setAbierto(false); }}>
      <div className="pr-hoja">
        <div className="pr-cab">
          <Logo />
          <button type="button" className="pr-x" onClick={() => setAbierto(false)} aria-label="Cerrar">✕</button>
        </div>
        <h2 id="pr-tit">Continuá con Vincular Business</h2>
        <p className="pr-sub">Tengas o no el negocio armado, empezás igual: entrá a la demo de tu rubro o pedí tus 14 días gratis y te lo dejamos listo con tus productos.</p>

        <p className="pr-lbl">¿Qué negocio tenés?</p>
        <div className="pr-rubros">
          {LISTAS.map((x, i) => (
            <button key={x.id} ref={i === 0 ? primero : undefined} type="button" className={`pr-chip${rubro === x.id ? ' on' : ''}`} aria-pressed={rubro === x.id} onClick={() => setRubro(x.id)}>{x.nombre}</button>
          ))}
        </div>

        <label className="pr-lbl" htmlFor="pr-nom">Tu nombre</label>
        <input id="pr-nom" className="pr-in" value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete="name" placeholder="Ej.: Laura" />
        <label className="pr-lbl" htmlFor="pr-neg">Tu negocio</label>
        <input id="pr-neg" className="pr-in" value={negocio} onChange={(e) => setNegocio(e.target.value)} autoComplete="organization" placeholder="Ej.: Almacén Don José" />

        <a className="pr-btn" href={wa(msg)} target="_blank" rel="noopener noreferrer"><Icono n="msg" />Pedir mis 14 días gratis por WhatsApp</a>
        <div className="pr-o"><span>o</span></div>
        <button type="button" className="pr-btn2" disabled={!d} onClick={() => setDemo(true)}>
          <Icono n="play" />{d ? `Entrar a la demo de ${d.nombre.toLowerCase()}` : 'Elegí tu negocio para entrar a la demo'}
        </button>

        <p className="pr-pie">Sin tarjeta y sin cobros automáticos. Al continuar, aceptás los <a href="/legal">Términos y la Política de privacidad</a>.</p>
      </div>
    </div>
  );
}
