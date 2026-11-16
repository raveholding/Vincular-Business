'use client';
// Abre cada demo dentro de la web, en pantalla completa, sin mandar al visitante a otro sitio.
import { useEffect, useState } from 'react';
import { Icono } from './Icono';

export function DemoVisor({ nombre, url, acceso }: { nombre: string; url: string; acceso?: string }) {
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    if (!abierto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const tecla = (e: KeyboardEvent) => { if (e.key === 'Escape') setAbierto(false); };
    window.addEventListener('keydown', tecla);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', tecla); };
  }, [abierto]);
  return (
    <>
      <button type="button" className="btn btn-sec btn-block" onClick={() => setAbierto(true)}>Entrar a la demo<Icono n="arrow" /></button>
      {abierto && (
        <div className="visor" role="dialog" aria-modal="true" aria-label={`Demo: ${nombre}`}>
          <div className="visor-barra">
            <div className="visor-tit"><b>{nombre}</b>{acceso && <span>{acceso}</span>}</div>
            <a className="btn btn-sec btn-chico visor-nueva" href={url} target="_blank" rel="noopener noreferrer">Abrir en pestaña nueva</a>
            <button type="button" className="btn btn-pri btn-chico" onClick={() => setAbierto(false)} aria-label="Cerrar la demo">Cerrar ✕</button>
          </div>
          <iframe className="visor-marco" src={url} title={`Demo ${nombre}`} allow="clipboard-write; fullscreen" />
        </div>
      )}
    </>
  );
}
