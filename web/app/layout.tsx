import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { SITIO } from '@/lib/sitio';
import './globals.css';

const fuente = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--f' });

const descripcion =
  'Sistema de gestión para comercios de Argentina: ventas, caja, stock, clientes y factura electrónica ARCA en un solo sistema. Funciona sin internet. Probalo 1 mes gratis, sin tarjeta.';

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: { default: 'Vincular Business · Sistema de gestión para tu negocio · 1 mes gratis', template: '%s · Vincular Business' },
  description: descripcion,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', apple: '/assets/icon-app-512.png' },
  openGraph: {
    type: 'website', locale: 'es_AR', siteName: 'Vincular Business', url: '/',
    title: 'Vincular Business · Tu negocio en orden, con todo en un solo sistema',
    description: descripcion,
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'Vincular Business' }],
  },
  twitter: { card: 'summary_large_image', images: ['/assets/og-image.png'] },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1,
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f7f5' }, { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' }],
};

// Aplica el tema guardado (o el del sistema) antes de pintar, para que no parpadee.
const temaInicial = `try{var t=localStorage.getItem('vb-tema');if(t!=='claro'&&t!=='oscuro'){t=matchMedia('(prefers-color-scheme: dark)').matches?'oscuro':'claro'}document.documentElement.dataset.tema=t}catch(e){document.documentElement.dataset.tema='claro'}`;

const ld = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vincular Business',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, Android, iOS',
  description: descripcion,
  url: SITIO,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'ARS', description: '1 mes gratis, sin tarjeta' },
  publisher: { '@type': 'Organization', name: 'Vincular Business', url: SITIO, address: { '@type': 'PostalAddress', addressLocality: 'Salta', addressCountry: 'AR' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={fuente.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
