import type { Metadata, Viewport } from 'next';
import { leer } from '@/lib/contenido';
import { SITIO } from '@/lib/rubros';
import './sitio.css';
import './nuevo.css';

const descripcion =
  'Digitalización comercial y software 100 % personalizados, a medida. Menú QR, CRM, facturación ARCA, fidelización y tecnología NFC integrada a tu sistema. Pago único del sistema más mantenimiento mensual, en pesos. Salta, Argentina.';

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: 'Vincular Business · Digitalización comercial y software a medida en Salta',
    template: '%s · Vincular Business',
  },
  description: descripcion,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: { icon: '/favicon.svg', apple: '/assets/icon-app-512.png' },
  other: { 'geo.region': 'AR-A', 'geo.placename': 'Salta' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Vincular Business',
    url: '/',
    title: 'Vincular Business · Tu idea en buenas manos',
    description:
      'Más visibilidad, más ventas y clientes que vuelven. Software a medida y tecnología NFC integrada a tu sistema. Pedí una demo sin seña.',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630, type: 'image/png', alt: 'Vincular Business: tu comercio, digital y con clientes que vuelven' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincular Business · Tu idea en buenas manos',
    description: 'Digitalización comercial y software 100 % personalizados, a medida. Pedí una demo sin seña.',
    images: ['/assets/og-image.png'],
  },
};

export const viewport: Viewport = { themeColor: '#000000', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: leer('ld.json') }} />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: leer('iconos.html') }} />
        {children}
      </body>
    </html>
  );
}
