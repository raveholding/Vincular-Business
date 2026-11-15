/** @type {import('next').NextConfig} */
const seguridad = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  // la portada lee content/*.html al compilar: se incluyen en el paquete de la función
  outputFileTracingIncludes: { '/': ['./content/**'] },
  async headers() {
    return [
      { source: '/:path*', headers: seguridad },
      { source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }] },
      // las imágenes de /assets/img llevan el hash del contenido en el nombre: se pueden guardar un año
      { source: '/assets/img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
};
export default config;
