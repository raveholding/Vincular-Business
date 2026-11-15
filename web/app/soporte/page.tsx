import type { Metadata } from 'next';
import { Logo } from '@/components/Icono';
import { WA_PRUEBA, wa, SOPORTE } from '@/lib/sitio';

export const metadata: Metadata = {
  title: 'Soporte y capacitación',
  description: 'Qué soporte incluye cada plan del Sistema Vincular Business, servicios adicionales y la capacitación del mes gratis para el dueño y su equipo.',
  alternates: { canonical: '/soporte' },
};

const PLANES = ['Base', 'Crecer', 'Pro', 'Total'];

const INCLUIDO: [string, string, string, string, string][] = [
  ['Canales', 'WhatsApp, portal y página de soporte', 'Igual que Base', 'Igual + videollamada', 'Igual + línea directa con un responsable'],
  ['Falla crítica (no se puede vender)', 'Respuesta en 1 h, solución en 4 h', '1 h · 4 h', '30 min · 2 h', '30 min · 2 h, también domingos'],
  ['Falla de un módulo o de ARCA', '4 h · 1 día hábil', '4 h · 1 día hábil', '2 h · medio día', '2 h · medio día'],
  ['Consultas y pedidos de mejora', '2 días hábiles', '1 día hábil', '1 día hábil', 'Mismo día'],
  ['Monitoreo en vivo de tu sistema', 'Sí', 'Sí', 'Sí, con aviso', 'Sí, con aviso y llamada'],
  ['Respaldo en la nube', 'Diario', 'Diario', 'Diario', 'Diario + copia mensual entregada'],
  ['Revisión del sistema', '—', '—', 'Trimestral (1 h)', 'Mensual (1 h)'],
  ['Visitas presenciales incluidas', '—', '—', '1 por año', '1 por trimestre'],
];

const ADICIONAL = [
  ['Soporte extendido', 'Fallas críticas atendidas fines de semana y feriados, de 9 a 22', '$ 30.000 por mes'],
  ['Visita presencial', 'Técnico en tu local, hasta 2 horas', '$ 35.000 por visita'],
  ['Hora fuera de horario', 'Atención remota fuera del horario base', '$ 25.000 por hora'],
  ['Bolsa de 10 horas', 'Horas de soporte o cambios menores, vencen a los 6 meses', '$ 200.000'],
  ['Puesta a punto de equipos', 'Impresoras, lectores, balanzas y cajones', '$ 40.000 por local'],
  ['Recuperación de datos', 'Restauración desde un respaldo por un error de carga', '$ 30.000 por pedido'],
];

const PASOS = [
  ['Nos escribís', 'Por WhatsApp, el portal o la página de soporte. Cada pedido queda registrado.'],
  ['Lo clasificamos', 'Crítico, alto, medio o bajo, según la tabla de tiempos de tu plan.'],
  ['Te respondemos', '«Lo recibimos, lo está viendo…» con nombre y apellido, dentro del tiempo del plan.'],
  ['Lo resolvemos', 'De forma remota; si hace falta, coordinamos una visita.'],
  ['Lo confirmamos con vos', 'Cerramos el pedido solo cuando verificás que quedó funcionando.'],
];

const MES = [
  ['Día 1', 'Puesta en marcha', 'Presencial, 2 h', 'Cargamos productos, precios, usuarios y equipos. Primera venta real con el cajero al lado.'],
  ['Semana 1', 'Caja y ventas', '1 h por turno', 'Abrir y cerrar caja, cobrar con varios medios, fiados, devoluciones y factura ARCA. Acompañamiento por WhatsApp todos los días.'],
  ['Semana 2', 'Stock y compras', 'Videollamada, 1 h', 'Recibir mercadería, ajustar stock, actualizar precios e imprimir etiquetas.'],
  ['Semana 3', 'El dueño y sus números', 'Videollamada, 1 h', 'Resumen del día, reportes, cuenta corriente, permisos de cada usuario y auditoría.'],
  ['Semana 4', 'Revisión y módulos extra', '1 h', 'Repasamos dudas, te mostramos los módulos que te sirven y cerramos tu plan.'],
];

const ROLES = [
  ['Dueño o encargado', 'Resumen del día, reportes de ventas y ganancia, cuenta corriente, permisos, auditoría y respaldo', '2 h'],
  ['Cajero', 'Abrir y cerrar caja, cobrar, fiados, devoluciones, factura ARCA y ticket en espera', '1 h 30 min'],
  ['Depósito y compras', 'Recepción de mercadería, ajustes, inventario con el celular y etiquetas', '1 h 30 min'],
  ['Administración', 'Proveedores, cuentas por pagar, gastos, facturas y exportar a Excel', '1 h 30 min'],
  ['Vendedor o preventista', 'Pedidos, presupuestos, clientes, preventa y hoja de ruta', '1 h'],
  ['Atención al cliente', 'Club, cupones y conversaciones por WhatsApp e Instagram', '1 h'],
];

const APARTE = [
  ['Personal nuevo', 'Un empleado que entra después del primer mes', 'Videollamada de 1 h, por rol', '$ 20.000 por persona'],
  ['Grupo por rol', 'Hasta 5 personas del mismo rol', 'Presencial, 2 h', '$ 60.000 por sesión'],
  ['Módulo nuevo', 'Cuando sumás un módulo extra', 'Videollamada de 1 h', 'Incluida en Pro y Total; $ 25.000 en Base y Crecer'],
  ['Taller del dueño', 'Números, reportes, precios y márgenes para decidir', 'Presencial, 3 h', '$ 90.000'],
  ['Sucursal nueva', 'Puesta en marcha de otro local con su equipo', 'Presencial, medio día', '$ 120.000'],
  ['Certificado de usuario', 'Constancia para el legajo tras aprobar la práctica', 'Con cualquier capacitación', '$ 10.000 por persona'],
];

const WA_CAPACITA = wa('Hola! Quiero consultar por una capacitación del Sistema Vincular Business. Mi negocio es: ');

export default function Soporte() {
  return (
    <>
      <header className="top">
        <div className="wrap top-in">
          <a href="/" aria-label="Vincular Business, ir al inicio"><Logo /></a>
          <a className="btn btn-sec btn-chico" href="/">Volver al inicio</a>
        </div>
      </header>
      <main id="main" className="sec">
        <div className="wrap legal soporte">
          <p className="sec-num"><span>§</span>Soporte y capacitación</p>
          <h1 className="h1-chico">No te dejamos solo: <em>te lo dejamos andando</em> y te enseñamos a usarlo</h1>
          <p className="lead">Todos los planes traen soporte por WhatsApp, portal y página de soporte; lo que cambia es la velocidad y lo que se suma. El primer mes es gratis y trae la capacitación incluida.</p>
          <div className="ctas">
            <a className="btn btn-pri" href={WA_PRUEBA} target="_blank" rel="noopener noreferrer">Probar gratis un mes</a>
            <a className="btn btn-sec" href={SOPORTE} target="_blank" rel="noopener noreferrer">Ya soy cliente: pedir soporte</a>
          </div>

          <h2 id="incluido">Soporte incluido en cada plan</h2>
          <p>Horario base: lunes a viernes de 9 a 18 y sábados de 9 a 13. Los tiempos corren dentro de ese horario.</p>
          <div className="tabla-scroll">
            <table className="tabla">
              <thead><tr><th scope="col"></th>{PLANES.map((p) => <th key={p} scope="col">{p}</th>)}</tr></thead>
              <tbody>{INCLUIDO.map(([f, ...v]) => <tr key={f}><th scope="row">{f}</th>{v.map((x, i) => <td key={i}>{x}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="nota">Una falla del sistema nunca se cobra: si el error es nuestro, la solución es gratis aunque sea fuera de horario.</p>

          <h2 id="pedido">Cómo funciona un pedido de soporte</h2>
          <ol className="pasos-soporte">{PASOS.map(([t, d]) => <li key={t}><b>{t}.</b> {d}</li>)}</ol>

          <h2 id="adicional">Servicios adicionales</h2>
          <p>Precios finales en pesos, para Salta capital. Se facturan aparte y siempre se acuerdan antes.</p>
          <div className="tabla-scroll">
            <table className="tabla">
              <thead><tr><th scope="col">Servicio</th><th scope="col">Qué incluye</th><th scope="col">Precio</th></tr></thead>
              <tbody>{ADICIONAL.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td className="precio">{c}</td></tr>)}</tbody>
            </table>
          </div>

          <h2 id="capacitacion">Capacitación incluida: tu mes gratis</h2>
          <p>Al terminar el primer mes, vos y tu equipo usan el sistema solos. Además recibís una guía rápida impresa por rol.</p>
          <ol className="mes-gratis">
            {MES.map(([cuando, t, f, d]) => (
              <li key={cuando}><span className="cuando">{cuando}</span><div><h3>{t} <small>{f}</small></h3><p>{d}</p></div></li>
            ))}
          </ol>

          <h2 id="roles">Capacitación por rol</h2>
          <p>Cada persona aprende solo lo que usa y termina con una práctica de 10 minutos con un caso real de tu local.</p>
          <div className="tabla-scroll">
            <table className="tabla">
              <thead><tr><th scope="col">Rol</th><th scope="col">Qué aprende</th><th scope="col">Duración</th></tr></thead>
              <tbody>{ROLES.map(([a, b, c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
          </div>

          <h2 id="cursos">Capacitaciones después del primer mes</h2>
          <div className="tabla-scroll">
            <table className="tabla">
              <thead><tr><th scope="col">Capacitación</th><th scope="col">Para quién</th><th scope="col">Formato</th><th scope="col">Precio</th></tr></thead>
              <tbody>{APARTE.map(([a, b, c, d]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td><td className="precio">{d}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="nota">Fuera de Salta capital se suma el traslado. Las capacitaciones por videollamada se pueden grabar para tu equipo.</p>
          <div className="ctas">
            <a className="btn btn-pri" href={WA_CAPACITA} target="_blank" rel="noopener noreferrer">Consultar una capacitación</a>
          </div>
        </div>
      </main>
    </>
  );
}
