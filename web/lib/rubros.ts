// Rubros y demos de Vincular Business. Una sola fuente para el selector de demos de la portada,
// las páginas de cada rubro (/rubros/<slug>), el sitemap y los mensajes de WhatsApp.
// Para sumar una demo: agregarla en `demos` del rubro (repositorio publicado en GitHub Pages).

export const SITIO = 'https://vincularbusiness.com.ar';
export const WHATSAPP = '5493874484132';
export const PAGES = 'https://raveholding.github.io';

export type Demo = { nombre: string; repo: string; detalle: string };
export type Rubro = {
  slug: string;
  nombre: string;          // como se muestra
  titulo: string;          // título de la página del rubro (SEO)
  resumen: string;         // una línea
  icono: string;           // id del ícono del sprite del sitio (#i-…)
  funciones: string[];     // qué resuelve el sistema en ese rubro
  combo: string;           // combo recomendado
  demos: Demo[];
};

export const demoUrl = (d: Demo) => `${PAGES}/${d.repo}/`;
export const waUrl = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const RUBROS: Rubro[] = [
  {
    slug: 'gastronomia', nombre: 'Gastronomía', icono: 'cup',
    titulo: 'Sistema para restaurantes, pizzerías, bares y cafeterías',
    resumen: 'Menú QR, pedidos por WhatsApp, mesas, comandas, caja y stock por receta.',
    funciones: ['Menú digital con QR y pedidos por WhatsApp sin comisiones', 'Mesas, mozos y comandas a la cocina', 'Insumos y stock por receta', 'Caja con apertura, cierre y arqueo', 'Delivery, PedidosYa y fidelización de clientes'],
    combo: 'Completo',
    demos: [
      { nombre: 'Di Parma Pizzería', repo: 'DIPARMAPizzeriaDemo', detalle: 'Pizzería de masa madre' },
      { nombre: 'Cafetería Salta', repo: 'CafesaltaDemo', detalle: 'Cafetería con mostrador' },
      { nombre: 'Comedor Salta', repo: 'ComedorsaltaDemo', detalle: 'Comedor con menú del día' },
    ],
  },
  {
    slug: 'talleres', nombre: 'Talleres y servicios técnicos', icono: 'tool',
    titulo: 'Sistema para talleres mecánicos, lubricentros y servicios técnicos',
    resumen: 'Órdenes de trabajo por vehículo, repuestos, presupuestos y avisos al cliente.',
    funciones: ['Órdenes de trabajo por vehículo o equipo', 'Presupuestos y aprobación del cliente por WhatsApp', 'Stock de repuestos y lubricantes con trazabilidad', 'Historial de cada vehículo por patente', 'Caja, cuenta corriente y facturación ARCA'],
    combo: 'Completo',
    demos: [
      { nombre: 'Tu Taller Car Center', repo: 'tallermecnicoSVBdemo', detalle: 'Taller mecánico' },
      { nombre: 'Lubricentro Salta', repo: 'Lubricentro', detalle: 'Stock y trazabilidad' },
    ],
  },
  {
    slug: 'estetica-y-barberias', nombre: 'Estética y barberías', icono: 'scissors',
    titulo: 'Sistema para barberías, peluquerías, spa y centros de estética',
    resumen: 'Turnos online, profesionales, packs de sesiones, club y caja.',
    funciones: ['Turnos online con recordatorios por WhatsApp', 'Agenda por profesional y comisiones', 'Packs de sesiones y club de clientes', 'Venta de productos con stock', 'Caja y medios de pago'],
    combo: 'Básico',
    demos: [
      { nombre: 'Bacano', repo: 'Bacano', detalle: 'Show room y barber shop' },
      { nombre: 'Barbería Juan', repo: 'SVBBarberDemo', detalle: 'Cortes, barba, club y turnos' },
      { nombre: 'Style Femme', repo: 'StyleFemmeDEMO', detalle: 'Belleza integral' },
    ],
  },
  {
    slug: 'gimnasios', nombre: 'Gimnasios y natatorios', icono: 'trend',
    titulo: 'Sistema para gimnasios y natatorios',
    resumen: 'Abonos, vencimientos de cuotas e ingreso con tarjeta NFC.',
    funciones: ['Abonos y cuotas con aviso de vencimiento', 'Ingreso con tarjeta o llavero NFC', 'Clases y cupos', 'Cobranza por WhatsApp', 'Caja y reportes'],
    combo: 'Completo',
    demos: [{ nombre: 'Mi Gimnasio', repo: 'SVBDemoGimnasios', detalle: 'Gimnasio con socios y abonos' }],
  },
  {
    slug: 'comercios', nombre: 'Comercios, almacenes y kioscos', icono: 'box',
    titulo: 'Sistema de punto de venta para comercios, almacenes y kioscos',
    resumen: 'Ventas rápidas, stock, fiados, precios al día, etiquetas y facturación ARCA.',
    funciones: ['Punto de venta con lector de código de barras y balanza', 'Stock en tiempo real y aviso de mínimo', 'Fiados y cuenta corriente', 'Precios y etiquetas actualizados en un paso', 'Facturación electrónica ARCA', 'Funciona aunque se corte internet'],
    combo: 'Básico',
    demos: [
      { nombre: 'Mi Negocio', repo: 'raveV2', detalle: 'Comercio de un solo dueño' },
      { nombre: 'Bazar Salta', repo: 'BazarsaltaDemo', detalle: 'Bazar y electro de cocina' },
      { nombre: 'Corralón Salta', repo: 'CorralonSaltaDemo', detalle: 'Materiales de construcción' },
    ],
  },
  {
    slug: 'mayoristas', nombre: 'Mayoristas y distribuidoras', icono: 'layers',
    titulo: 'Sistema para mayoristas y distribuidoras',
    resumen: 'Listas de precios, pedidos, remitos, preventa en la calle, reparto y depósitos.',
    funciones: ['Precios mayoristas y minoristas en el mismo sistema', 'Pedidos, armado y remitos', 'Preventa con el celular y hoja de ruta', 'Stock por depósito y transferencias', 'Cuenta corriente y cobranza'],
    combo: 'Completo',
    demos: [],
  },
  {
    slug: 'clubes', nombre: 'Clubes', icono: 'users',
    titulo: 'Sistema para clubes de barrio, clubes privados y campings',
    resumen: 'Socios, cuotas, actividades, reservas y control de ingreso.',
    funciones: ['Socios e invitados con credencial digital', 'Cuotas y cobranza', 'Reservas de canchas y salones', 'Control de ingreso con NFC', 'Consumos y caja'],
    combo: 'Completo',
    demos: [{ nombre: 'Club de Camping', repo: 'SVBClubcampingDemo', detalle: 'Socios, parcelas e ingresos' }],
  },
  {
    slug: 'estacionamientos', nombre: 'Playas de estacionamiento', icono: 'pin',
    titulo: 'Sistema para playas de estacionamiento',
    resumen: 'Abonados mensuales, vehículos por día, ingreso, egreso y caja.',
    funciones: ['Ingreso y egreso con ticket o patente', 'Abonados mensuales', 'Tarifas por hora, estadía o día', 'Caja por turno', 'Reportes de ocupación'],
    combo: 'Básico',
    demos: [{ nombre: 'Estacionamiento 262', repo: 'SVBEstacionamientoDemo', detalle: 'Playa con abonados' }],
  },
  {
    slug: 'empresas', nombre: 'Empresas y estudios', icono: 'trend',
    titulo: 'Sistema de gestión para empresas y estudios profesionales',
    resumen: 'Gestión integral, finanzas, equipo y asistentes con inteligencia artificial.',
    funciones: ['Finanzas, flujo de caja y contabilidad de gestión', 'Equipo, tareas y organigrama', 'Clientes y atención omnicanal', 'Asistentes con inteligencia artificial', 'Reportes para decidir'],
    combo: 'Completo + App',
    demos: [
      { nombre: 'Estudio contable', repo: 'VBContabledemo', detalle: 'Estudio contable e inversiones' },
      { nombre: 'Empresa con asistentes', repo: 'raveV3', detalle: 'Gestión con asistentes inteligentes' },
    ],
  },
];

export const OTROS_RUBROS = ['Eventos sociales', 'Inmobiliarias y alquileres', 'Salud y odontología', 'Control de ingreso de personal'];

export const rubroPorSlug = (slug: string) => RUBROS.find((r) => r.slug === slug);
