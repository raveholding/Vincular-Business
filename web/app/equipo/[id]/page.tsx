import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Icono, Logo } from '@/components/Icono';
import { FUNDADORES, SITIO, CONTACTO, wa } from '@/lib/sitio';

// Tarjeta digital de cada fundador. Es la página a la que apunta el QR (y el NFC) de la tarjeta impresa.
export const dynamicParams = false;
export function generateStaticParams() {
  return FUNDADORES.map((f) => ({ id: f.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const f = FUNDADORES.find((x) => x.id === id);
  if (!f) return {};
  return {
    title: `${f.nombre} · Tarjeta digital`,
    description: `${f.nombre}, ${f.rol} en Vincular Business. ${f.detalle}`,
    alternates: { canonical: `/equipo/${f.id}` },
    openGraph: { title: `${f.nombre} · Vincular Business`, description: f.rol, images: [{ url: f.foto, width: 480, height: 480 }] },
  };
}

function vcard(f: (typeof FUNDADORES)[number]) {
  const [nom, ...ap] = f.nombre.split(' ');
  const l = [
    'BEGIN:VCARD', 'VERSION:3.0',
    `N:${ap.join(' ')};${nom};;;`, `FN:${f.nombre}`,
    'ORG:Vincular Business', `TITLE:${f.rol}`,
    `EMAIL;TYPE=WORK:${f.email}`,
    f.whatsapp ? `TEL;TYPE=CELL:+${f.whatsapp}` : '',
    `URL:${SITIO}/equipo/${f.id}`,
    `ADR;TYPE=WORK:;;;Salta;;;Argentina`,
    'END:VCARD',
  ].filter(Boolean);
  return `data:text/vcard;charset=utf-8,${encodeURIComponent(l.join('\r\n'))}`;
}

export default async function Tarjeta({ params }: Props) {
  const { id } = await params;
  const f = FUNDADORES.find((x) => x.id === id);
  if (!f) notFound();
  const tel = f.whatsapp ?? CONTACTO.whatsapp;
  return (
    <main id="main" className="tdig">
      <article className="tdig-card">
        <a href="/" className="tdig-logo" aria-label="Vincular Business, ir al inicio"><Logo /></a>
        <img className="tdig-foto" src={f.foto} alt={`Foto de ${f.nombre}`} width={480} height={480} />
        <h1>{f.nombre}</h1>
        <p className="tdig-rol">{f.rol}</p>
        <p className="tdig-det">{f.detalle}</p>

        <div className="tdig-acc">
          <a className="btn btn-pri btn-block" href={wa(`Hola ${f.nombre.split(' ')[0]}! Vi tu tarjeta de Vincular Business y quiero consultar por el sistema para mi negocio.`)} target="_blank" rel="noopener noreferrer">
            <Icono n="msg" />{f.whatsapp ? 'Escribime por WhatsApp' : 'Escribinos por WhatsApp'}
          </a>
          <a className="btn btn-sec btn-block" href={vcard(f)} download={`${f.id}-vincular-business.vcf`}><Icono n="user" />Guardar contacto</a>
        </div>

        <ul className="tdig-datos">
          {f.whatsapp && <li><a href={`tel:+${tel}`}><Icono n="phone" />{f.whatsappVisible}</a></li>}
          <li><a href={`mailto:${f.email}`}><Icono n="mail" />{f.email}</a></li>
          <li><a href="/"><Icono n="globe" />vincularbusiness.com.ar</a></li>
          {f.linkedin && <li><a href={f.linkedin} target="_blank" rel="noopener noreferrer"><Icono n="id" />LinkedIn</a></li>}
          {f.tarjetaExterna && <li><a href={f.tarjetaExterna} target="_blank" rel="noopener noreferrer"><Icono n="id" />Mi tarjeta NFC</a></li>}
        </ul>

        <div className="tdig-qr">
          <img src={`/equipo/${f.id}-qr.svg`} alt={`Código QR de la tarjeta de ${f.nombre}`} width={132} height={132} />
          <p>Mostrá este QR o acercá el celular a la tarjeta (NFC) para compartir este contacto.</p>
        </div>

        <a className="tdig-volver" href="/#equipo">Conocé Vincular Business <Icono n="arrow" /></a>
      </article>
    </main>
  );
}
