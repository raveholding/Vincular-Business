// =====================================================================
// DATOS DE LA WEB DE VINCULAR BUSINESS — todo lo editable está acá.
// Precios: completar `precioMensual` de cada plan (en pesos). Con `null` la web muestra «Consultá el precio».
// Demos: `estado: 'lista'` abre la demo; `'pronto'` muestra «Muy pronto» y ofrece una demo guiada por WhatsApp.
// =====================================================================

export const SITIO = 'https://vincularbusiness.com.ar';

export const CONTACTO = {
  marca: 'Vincular Business',
  whatsapp: '5493874484132',
  whatsappVisible: '+54 9 387 448-4132',
  email: 'vincularbusiness@gmail.com',
  instagram: 'vincularbusiness',
  ciudad: 'Salta, Argentina',
};

export const wa = (msg: string) => `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(msg)}`;
export const WA_PRUEBA = wa('Hola! Quiero probar 1 mes gratis del Sistema Vincular Business.');

// ---------- Demos (solo las nuevas) ----------
export type Demo = {
  id: string; nombre: string; modelo: string; ejemplos: string; puntos: string[];
  repo: string; estado: 'lista' | 'pronto';
  url?: string; acceso?: string;
};
const PAGES = 'https://raveholding.github.io';
export const demoUrl = (d: Demo) => d.url ?? `${PAGES}/${d.repo}/#acceso`;

export const DEMOS: Demo[] = [
  { id: 'mostrador', nombre: 'Comercios de mostrador', modelo: 'Vendés al consumidor final, en el mostrador o con autoservicio',
    ejemplos: 'Almacén, kiosco, autoservicio, verdulería, bazar, ferretería, indumentaria',
    puntos: ['Venta rápida con lector y balanza', 'Caja, cierres y libreta de clientes', 'Stock, precios y etiquetas de góndola'],
    repo: 'VB-Demo-mostrador', estado: 'lista', acceso: 'Usuario ADMIN · PIN 1234' },
  { id: 'mayorista', nombre: 'Mayoristas', modelo: 'Vendés por menor y por mayor desde el mismo mostrador',
    ejemplos: 'Mayorista, autoservicio mayorista, bebidas, licorería, golosinería',
    puntos: ['Precios mayorista y minorista en la misma venta', 'Caja, cierres y cuenta corriente', 'Stock que baja al vender y etiquetas de góndola'],
    repo: 'VB-Demo-Mayorista', estado: 'lista', acceso: 'Usuario ADMIN · PIN 1234' },
  { id: 'distribuidora', nombre: 'Distribuidores', modelo: 'Tomás pedidos, los armás en el depósito y los repartís',
    ejemplos: 'Distribuidoras de bebidas, alimentos, limpieza, golosinas o materiales',
    puntos: ['Preventa con el celular y hoja de ruta', 'Pedidos, armado y remitos', 'Stock por depósito y cobranza'],
    repo: 'VB-Demo-Distribuidora', estado: 'lista', acceso: 'Usuario ADMIN · PIN 1234' },
  { id: 'gastronomia', nombre: 'Gastronomía', modelo: 'El cliente se sienta, pide a la mesa o pide por delivery',
    ejemplos: 'Restaurante, pizzería, bar, cafetería, rotisería, heladería',
    puntos: ['Mesas, mozos y comandas a cocina', 'Menú QR y pedidos por WhatsApp', 'Stock por receta y caja'],
    repo: 'VB-Demo-Gastronomia', estado: 'lista', url: 'https://raveholding.github.io/VB-Demo-Gastronomia/', acceso: 'Abre la carta · equipo: «Acceso del equipo», ADMIN · PIN 1234' },
  { id: 'taller', nombre: 'Taller mecánico integral', modelo: 'Recibís el vehículo, presupuestás, trabajás y entregás',
    ejemplos: 'Mecánica, lubricentro, gomería, alarmas, polarizados, audio, chapa y pintura',
    puntos: ['Turnos y órdenes de trabajo por patente', 'Presupuesto aprobado por WhatsApp', 'Repuestos, instalaciones y garantías por vehículo'],
    repo: 'VB-Demo-Taller', estado: 'lista', url: 'https://raveholding.github.io/VB-Demo-Taller/', acceso: 'Elegí un perfil para entrar' },
  { id: 'gimclub', nombre: 'Gimnasios, BOX, Academias', modelo: 'Socios o alumnos con cuota que entran y salen todos los días',
    ejemplos: 'Gimnasio, box y CrossFit, personal trainer, pilates y yoga, danza, artes marciales, club deportivo',
    puntos: ['Cuotas, vencimientos y cobranza', 'Clases, cupos y caja', 'Ingreso con llavero NFC (Combo NFC)'],
    repo: 'VB-Demo-Gim.Club', estado: 'lista', acceso: 'Usuario ADMIN · PIN 1234' },
  { id: 'salud-estetica', nombre: 'Salud, estética y barberías', modelo: 'Trabajás con turnos y profesionales',
    ejemplos: 'Barbería, peluquería, centro de estética, spa, uñas, tatuajes, consultorio',
    puntos: ['Turnos online con recordatorio por WhatsApp', 'Agenda y comisiones por profesional', 'Packs de sesiones y club de clientes'],
    repo: 'VB-Demo-Salud.Estetica', estado: 'lista', acceso: 'Usuario Administrador · PIN 1111' },
];

// ---------- Adicionales (se cotizan en la reunión; no tienen precio publicado) ----------
export const ADICIONALES = [
  { id: 'nfc', icono: 'wifi', nombre: 'Combo NFC', detalle: 'Tarjetas y llaveros NFC con tu marca, lector en el mostrador y sello con el celular del cliente. Tus clientes apoyan la tarjeta y suman puntos al instante.', incluye: 'Lector, tarjetas o llaveros, instalación y capacitación' },
  { id: 'ia', icono: 'spark', nombre: 'Asistente de voz e IA', detalle: 'Le pedís al sistema por voz o por escrito y lee las facturas de tus proveedores con IA.', incluye: 'Incluido en el plan Total' },
  { id: 'portero', icono: 'shield', nombre: 'Portero y seguridad', detalle: 'Control de quién entra y sale, alarmas y avisos al celular del dueño.', incluye: 'Opcional para cualquier plan' },
];

// ---------- Qué incluye ----------
export const BASE = [
  'Vender: punto de venta minorista y mayorista, lector y balanza',
  'Caja: apertura, cierres X y Z, arqueo y varias cajas',
  'Stock e inventario, compras y proveedores',
  'Clientes, fiado y cuenta corriente',
  'Factura electrónica ARCA',
  'Precios, etiquetas y toma de inventario con el celular',
  'Resumen del día y reportes',
  'Usuarios, permisos por rol y auditoría',
];

export type Paquete = { id: string; nombre: string; detalle: string; icono: string };
export const PAQUETES: Paquete[] = [
  { id: 'ventas', nombre: 'Ventas y fidelización', icono: 'heart', detalle: 'Club de clientes, cupones, monedero y gift cards, atención por WhatsApp e Instagram, pipeline de ventas y avisos al celular.' },
  { id: 'equipo', nombre: 'Equipo y RR. HH.', icono: 'users', detalle: 'Fichaje con NFC, horarios, tareas, organigrama, legajos, vales y seguridad del local.' },
  { id: 'logistica', nombre: 'Logística avanzada', icono: 'truck', detalle: 'Reparto y hoja de ruta, preventa con GPS, pedidos y remitos, depósitos y transferencias.' },
  { id: 'digital', nombre: 'Canal digital', icono: 'globe', detalle: 'Menú y tienda online, pedidos por WhatsApp, Tiendanube, PedidosYa y API.' },
  { id: 'inteligente', nombre: 'Centro inteligente', icono: 'spark', detalle: 'Asistentes con IA, análisis del negocio, finanzas y contabilidad de gestión.' },
  { id: 'rubro', nombre: 'Paquete de tu rubro', icono: 'grid', detalle: 'Gastronomía (mesas y comandas), turnos (salud, estética y barberías), taller integral (órdenes de trabajo) o socios (gimnasios, academias y box).' },
];

// ---------- Planes: suben por cantidad de módulos extra ----------
// precioMensual = precio pagando mes a mes, en pesos. Pagando el año (−20 %) quedan los precios «desde»:
// Base $ 50.000 · Crecer $ 70.000 · Pro $ 95.200 · Total $ 140.000 por mes.
export type Plan = { id: string; nombre: string; extras: string; para: string; precioMensual: number | null; destacado?: boolean };
export const PLANES: Plan[] = [
  { id: 'base', nombre: 'Base', extras: 'Sistema base, sin módulos extra', para: 'Kiosco o almacén: un local con una caja que quiere ordenar ventas, stock y facturación.', precioMensual: 62500 },
  { id: 'crecer', nombre: 'Crecer', extras: 'Base + 1 módulo extra', para: 'Comercio con más movimiento: sumás club de clientes, tienda online, reparto o equipo.', precioMensual: 87500 },
  { id: 'pro', nombre: 'Pro', extras: 'Base + 3 módulos extra', para: 'Varias sucursales, depósito o reparto, con equipo y varios canales de venta.', precioMensual: 119000, destacado: true },
  { id: 'total', nombre: 'Total', extras: 'Base + todos los módulos', para: 'Empresa con equipos y operación grande: todo el sistema, IA y prioridad en soporte.', precioMensual: 175000 },
];
export type Periodo = { id: string; nombre: string; meses: number; descuento: number };
export const PERIODOS: Periodo[] = [
  { id: 'mensual', nombre: 'Mensual', meses: 1, descuento: 0 },
  { id: 'trimestral', nombre: 'Trimestral', meses: 3, descuento: 0.05 },
  { id: 'semestral', nombre: 'Semestral', meses: 6, descuento: 0.1 },
  { id: 'anual', nombre: 'Anual', meses: 12, descuento: 0.2 },
  { id: 'bianual', nombre: '2 años', meses: 24, descuento: 0.25 },
];
// «¿Cuál se parece a tu negocio?»: cada tipo de negocio apunta a un plan
export const ELECCION = [
  { id: 'base', txt: 'Kiosco o almacén', det: 'Un local, una caja' },
  { id: 'crecer', txt: 'Comercio', det: 'Un local con más movimiento' },
  { id: 'pro', txt: 'Varias sucursales', det: 'Locales, depósito o reparto' },
  { id: 'total', txt: 'Empresa', det: 'Equipos y operación grande' },
  { id: 'nose', txt: 'No sé todavía', det: 'Te ayudamos a elegir' },
];

// ---------- Portal del cliente (SistemaIntegralSVB) ----------
// Recomendá y ganá
export const RECOMIENDA = { cada: 3, descuento: 10 }; // cada 3 negocios activos: 10 % en el próximo pago

export const PORTAL = 'https://raveholding.github.io/SistemaIntegralSVB/#/acceso';
export const SOPORTE = 'https://raveholding.github.io/SistemaIntegralSVB/#/contacto';

export const INCLUYE_TODOS = [
  'Sistema base completo con factura ARCA',
  'Funciona aunque se corte internet y sincroniza solo',
  'App para computadora y celular',
  'Usuarios con permisos por rol y auditoría',
  'Actualizaciones, respaldo en la nube y soporte por WhatsApp',
  'Migración de tus datos desde Excel u otro sistema',
];

// ---------- Por rubro: hoy y con Vincular Business ----------
export const RUBROS = [
  { id: 'comercios', nombre: 'Comercios', hoy: ['Precios desactualizados en la góndola', 'Fiados anotados en un cuaderno', 'No sabés cuánto ganaste en el día'],
    con: ['Precios y etiquetas al día en un paso', 'Cuenta corriente con aviso por WhatsApp', 'Resumen de ventas y ganancia al cerrar la caja'] },
  { id: 'mayoristas', nombre: 'Mayoristas y distribuidoras', hoy: ['Pedidos por WhatsApp que se pierden', 'Remitos a mano y errores al armar', 'Deudas de clientes difíciles de seguir'],
    con: ['Preventa con el celular y pedidos ordenados', 'Armado, remito y factura en el mismo circuito', 'Saldos y cobranzas al día por cliente'] },
  { id: 'gastronomia', nombre: 'Gastronomía', hoy: ['Comandas en papel que se traspapelan', 'Mesas que no cierran con la caja', 'Insumos que se terminan sin aviso'],
    con: ['Comandas directo a cocina y barra', 'Cada mesa cobrada y en la caja del turno', 'Stock por receta con aviso de faltantes'] },
  { id: 'talleres', nombre: 'Talleres integrales', hoy: ['Presupuestos que nadie aprueba por escrito', 'No sabés qué se le hizo a cada vehículo', 'Repuestos sin control'],
    con: ['Presupuesto aprobado por WhatsApp', 'Historial completo por patente', 'Repuestos descontados de cada orden'] },
  { id: 'servicios', nombre: 'Gimnasios, salud y estética', hoy: ['Cuotas vencidas sin cobrar', 'Turnos que se pisan', 'Clientes que no vuelven'],
    con: ['Aviso automático de cuota y cobranza', 'Agenda online con recordatorios', 'Club de clientes y promociones'] },
];

// ---------- Clientes ----------
export const CLIENTES = [
  { nombre: 'Almacén RAVE', logo: '/assets/clientes/almacen-rave.jpg', w: 300, h: 168 },
  { nombre: 'Bacano Show Room Barber Shop', logo: '/assets/clientes/bacano.jpg', w: 180, h: 177 },
  { nombre: 'Seba Chavez Car Service', logo: '/assets/clientes/sebachavez.jpg', w: 200, h: 205 },
  { nombre: 'Clínica del PC', logo: '/assets/clientes/clinica-pc.png', w: 447, h: 447 },
  { nombre: 'Medicinal Terps', logo: '/assets/clientes/medicinal-terps.png', w: 200, h: 200 },
  { nombre: 'Cannabismatica', logo: '/assets/clientes/cannabismatica.jpg', w: 332, h: 120 },
];

// ---------- Preguntas ----------
export const PREGUNTAS = [
  { p: '¿Necesito tarjeta para el mes gratis?', r: 'No. Nos escribís por WhatsApp, dejamos tu sistema listo con tus productos y lo usás un mes completo sin pagar nada ni dejar datos de pago.' },
  { p: '¿Qué pasa cuando termina el mes?', r: 'Elegís tu plan y el período (mensual, trimestral, semestral, anual o por 2 años) y lo pagás por transferencia. No hay cobros ni renovaciones automáticas: seguís solo si activás un plan, y tus datos siempre son tuyos.' },
  { p: '¿Dónde veo mis pagos y pido soporte?', r: 'En el portal del cliente: ves tu contrato, tus pagos y el estado de tu servicio, y hablás directo con soporte. Tus datos además se respaldan en nuestra nube.' },
  { p: '¿Tienen descuento por recomendar?', r: 'Sí. Cada 3 negocios que nos recomiendes y activen su plan, tenés 10 % de descuento en tu próximo pago. Tu código de recomendación está en el portal del cliente.' },
  { p: '¿Cómo funcionan los planes?', r: 'Todos incluyen el sistema base completo. El plan sube según cuántos módulos extra sumás: ninguno (Base), uno (Crecer), tres (Pro) o todos (Total). Podés cambiar de plan cuando quieras.' },
  { p: '¿Emite factura electrónica?', r: 'Sí. Factura electrónica con ARCA desde el mismo cobro, con tu certificado. Te ayudamos a dar de alta el punto de venta.' },
  { p: '¿Funciona si se corta internet?', r: 'Sí. Seguís vendiendo, cobrando y cerrando la caja. Cuando vuelve la conexión, todo se sincroniza solo con la nube.' },
  { p: '¿Lo puedo usar desde el celular?', r: 'Sí. Se instala como una app en la computadora, la tablet y el celular, sin descargar nada de una tienda.' },
  { p: '¿Pueden adaptarlo a mi negocio?', r: 'Sí. Somos un equipo de Salta: configuramos el sistema con tu forma de trabajar y, si te falta algo, lo desarrollamos a medida.' },
];
