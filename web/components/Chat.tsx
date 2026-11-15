'use client';
// Chat de la web conectado al canal «Atención al público» de SistemaIntegralSVB (Firebase · colección svb_inbox).
// El visitante abre una consulta y la sigue en vivo; el equipo la responde desde SistemaIntegralSVB → Atención.
// Firebase se carga recién cuando se abre el chat, para no pesar en la carga de la página.
import { useEffect, useRef, useState } from 'react';
import { Icono } from './Icono';
import { PORTAL, SOPORTE, WA_PRUEBA } from '@/lib/sitio';

const FIREBASE = {
  apiKey: 'AIzaSyCIm2QWiHGuMU846qtfoSBdi4j_7tfDedA',
  authDomain: 'rave-holding.firebaseapp.com',
  projectId: 'rave-holding',
  storageBucket: 'rave-holding.firebasestorage.app',
  messagingSenderId: '770821596165',
  appId: '1:770821596165:web:bd124af2976ccb9736686c',
};
const CLAVE = 'vb_web_chat_id';
const MOTIVOS: Record<string, string> = {
  sistema: 'Quiero un sistema para mi negocio',
  soporte: 'Soy cliente: necesito soporte',
  facturacion: 'Facturación y pagos',
  otro: 'Otra consulta',
};
type Msg = { from: 'visitor' | 'staff' | 'sys'; name?: string; body: string; at: number };
type Conv = { name: string; status: string; topic: string; messages: Msg[]; lastFrom?: string; unreadVisitor?: boolean };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let fbCache: Promise<{ db: any; fs: any }> | null = null;
function firebase() {
  if (!fbCache) {
    fbCache = (async () => {
      const [{ initializeApp, getApps }, fs] = await Promise.all([import('firebase/app'), import('firebase/firestore')]);
      const app = getApps().find((a) => a.name === 'vb-web') ?? initializeApp(FIREBASE, 'vb-web');
      return { db: fs.getFirestore(app), fs };
    })();
    fbCache.catch(() => { fbCache = null; });
  }
  return fbCache;
}
const hora = (t: number) => new Date(t).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

export function Chat() {
  const [abierto, setAbierto] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [conv, setConv] = useState<Conv | null>(null);
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [aviso, setAviso] = useState(false);
  const [f, setF] = useState({ name: '', phone: '', email: '', business: '', topic: 'sistema', body: '' });
  const [resp, setResp] = useState('');
  const hilo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try { setId(localStorage.getItem(CLAVE)); } catch { /* sin almacenamiento */ }
    const abrir = () => setAbierto(true);
    window.addEventListener('vb-abrir-chat', abrir);
    return () => window.removeEventListener('vb-abrir-chat', abrir);
  }, []);

  // seguir la conversación en vivo
  useEffect(() => {
    if (!id) return;
    let corte: (() => void) | undefined;
    let vivo = true;
    firebase().then(({ db, fs }) => {
      if (!vivo) return;
      corte = fs.onSnapshot(fs.doc(db, 'svb_inbox', id), (s: { exists: () => boolean; data: () => Conv }) => {
        if (!s.exists()) { olvidar(); return; }
        const d = s.data();
        setConv((prev) => {
          if (prev && d.messages.length > prev.messages.length && d.lastFrom === 'staff') setAviso(true);
          return d;
        });
      }, () => olvidar());
    }).catch(() => setError('No pudimos conectar el chat. Escribinos por WhatsApp.'));
    return () => { vivo = false; if (corte) corte(); };
  }, [id]);

  useEffect(() => { if (abierto) setAviso(false); }, [abierto]);
  useEffect(() => { if (hilo.current) hilo.current.scrollTop = hilo.current.scrollHeight; }, [conv, abierto]);
  useEffect(() => {
    if (!abierto || !id || !conv?.unreadVisitor) return;
    firebase().then(({ db, fs }) => fs.updateDoc(fs.doc(db, 'svb_inbox', id), { unreadVisitor: false })).catch(() => {});
  }, [abierto, id, conv?.unreadVisitor]);

  function olvidar() {
    try { localStorage.removeItem(CLAVE); } catch { /* */ }
    setId(null); setConv(null);
  }

  async function crear(e: React.FormEvent) {
    e.preventDefault(); setError('');
    const name = f.name.trim(), email = f.email.trim().toLowerCase(), phone = f.phone.trim(), body = f.body.trim();
    if (name.length < 2) return setError('Contanos tu nombre.');
    if (!phone && !email) return setError('Dejanos un WhatsApp o un email para responderte.');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError('Revisá el email.');
    if (body.length < 3) return setError('Escribí tu consulta.');
    setEnviando(true);
    try {
      const { db, fs } = await firebase();
      const now = Date.now();
      const ref = await fs.addDoc(fs.collection(db, 'svb_inbox'), {
        name, phone, email, business: f.business.trim(), topic: MOTIVOS[f.topic] ? f.topic : 'otro',
        status: 'new', channel: 'web', createdAt: now, updatedAt: now, lastFrom: 'visitor',
        unreadStaff: true, unreadVisitor: false, assignedTo: null,
        messages: [{ from: 'visitor', name, body, at: now }],
      });
      try { localStorage.setItem(CLAVE, ref.id); } catch { /* */ }
      setId(ref.id);
    } catch {
      setError('No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.');
    }
    setEnviando(false);
  }

  async function responder(e: React.FormEvent) {
    e.preventDefault();
    const body = resp.trim();
    if (!body || !id || !conv) return;
    setEnviando(true);
    try {
      const { db, fs } = await firebase();
      const now = Date.now();
      await fs.updateDoc(fs.doc(db, 'svb_inbox', id), {
        messages: [...conv.messages, { from: 'visitor', name: conv.name, body, at: now }],
        updatedAt: now, lastFrom: 'visitor', unreadStaff: true,
      });
      setResp('');
    } catch { setError('No se pudo enviar el mensaje.'); }
    setEnviando(false);
  }

  const campo = (k: keyof typeof f) => ({ value: f[k], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value }) });

  return (
    <>
      <button type="button" className={aviso ? 'chat-boton aviso' : 'chat-boton'} onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto} aria-controls="chat-panel" aria-label={abierto ? 'Cerrar el chat' : 'Abrir el chat con Vincular Business'}>
        <Icono n={abierto ? 'x' : 'msg'} />
        {!abierto && <span className="chat-txt">Chateá con nosotros</span>}
      </button>
      {abierto && (
        <section id="chat-panel" className="chat-panel" role="dialog" aria-label="Chat con Vincular Business">
          <header className="chat-cab">
            <div><b>Vincular Business</b><small>Te respondemos por acá en horario comercial</small></div>
            <button type="button" className="btn-ico" onClick={() => setAbierto(false)} aria-label="Cerrar el chat"><Icono n="x" /></button>
          </header>
          <div className="chat-accesos">
            <a href={PORTAL} target="_blank" rel="noopener noreferrer">Soy cliente: ingresar a mi portal</a>
            <a href={SOPORTE} target="_blank" rel="noopener noreferrer">Página de soporte</a>
          </div>

          {conv ? (
            <>
              <div className="chat-hilo" ref={hilo} aria-live="polite">
                {conv.messages.map((m, i) => (
                  <div key={i} className={m.from === 'visitor' ? 'cm yo' : m.from === 'sys' ? 'cm sys' : 'cm ellos'}>
                    {m.body}
                    <small>{m.from === 'staff' ? `${m.name || 'Equipo'} · ` : ''}{hora(m.at)}</small>
                  </div>
                ))}
                {conv.messages.length === 1 && <div className="cm sys">¡Recibimos tu consulta! Te respondemos por acá y por tus datos de contacto.</div>}
              </div>
              <form className="chat-resp" onSubmit={responder}>
                <textarea rows={1} maxLength={2000} placeholder="Escribí tu mensaje…" value={resp}
                  onChange={(e) => setResp(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); (e.currentTarget.form as HTMLFormElement).requestSubmit(); } }} />
                <button className="btn btn-pri" disabled={enviando} aria-label="Enviar"><Icono n="arrow" /></button>
              </form>
              <button type="button" className="chat-nueva" onClick={olvidar}>Empezar una consulta nueva</button>
            </>
          ) : id ? (
            <p className="chat-cargando">Abriendo tu conversación…</p>
          ) : (
            <form className="chat-form" onSubmit={crear}>
              <label>Tu nombre *<input maxLength={80} autoComplete="name" {...campo('name')} /></label>
              <div className="chat-fila">
                <label>WhatsApp<input maxLength={40} inputMode="tel" autoComplete="tel" placeholder="387 …" {...campo('phone')} /></label>
                <label>Email<input type="email" maxLength={120} autoComplete="email" {...campo('email')} /></label>
              </div>
              <label>Tu negocio<input maxLength={100} {...campo('business')} /></label>
              <label>Motivo<select {...campo('topic')}>{Object.entries(MOTIVOS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
              <label>Mensaje *<textarea rows={3} maxLength={2000} {...campo('body')} /></label>
              <button className="btn btn-pri btn-block" disabled={enviando}>{enviando ? 'Enviando…' : 'Enviar consulta'}</button>
              <p className="micro">Usamos tus datos solo para responder esta consulta.</p>
            </form>
          )}
          {error && <p className="chat-error" role="alert">{error} <a href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>}
        </section>
      )}
    </>
  );
}
