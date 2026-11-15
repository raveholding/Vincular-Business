import type { Metadata } from 'next';
import { Logo } from '@/components/Icono';
import { CONTACTO, wa } from '@/lib/sitio';

export const metadata: Metadata = {
  title: 'Información legal',
  description: 'Términos y condiciones, privacidad, botón de arrepentimiento y botón de baja de Vincular Business.',
  alternates: { canonical: '/legal' },
};

const WA_ARREP = wa('Hola! Quiero ejercer mi derecho de arrepentimiento (Botón de arrepentimiento). Mi nombre y negocio son: ');
const WA_BAJA = wa('Hola! Quiero dar de baja mi suscripción al Sistema Vincular Business (Botón de baja). Mi nombre y negocio son: ');

export default function Legal() {
  return (
    <>
      <header className="top">
        <div className="wrap top-in">
          <a href="/" aria-label="Vincular Business, ir al inicio"><Logo /></a>
          <a className="btn btn-sec btn-chico" href="/">Volver al inicio</a>
        </div>
      </header>
      <main id="main" className="sec">
        <div className="wrap angosto legal">
          <p className="sec-num"><span>§</span>Información legal</p>
          <h1 className="h1-chico">Términos, privacidad y tus derechos</h1>

          <div className="botones-legales">
            <a id="arrepentimiento" className="btn btn-pri" href={WA_ARREP} target="_blank" rel="noopener noreferrer">Botón de arrepentimiento</a>
            <a id="baja" className="btn btn-sec" href={WA_BAJA} target="_blank" rel="noopener noreferrer">Botón de baja</a>
          </div>

          <h2 id="terminos">Términos y condiciones</h2>
          <h3>1. Quiénes somos</h3>
          <p>Vincular Business ofrece un sistema de gestión para comercios y servicios de Argentina, su implementación y soporte. Contacto: <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a> o WhatsApp {CONTACTO.whatsappVisible}.</p>
          <h3>2. Esta web</h3>
          <p>La información de esta web es comercial y orientativa. El alcance, el precio y las condiciones se confirman por escrito antes de contratar.</p>
          <h3>3. Prueba gratis</h3>
          <p>El primer mes es gratis y no pedimos tarjeta ni datos de pago. La prueba se ofrece una vez por negocio. Al terminar, podés activar un plan o dejar de usar el sistema sin ningún cargo.</p>
          <h3>4. Suscripción, precios y facturación</h3>
          <p>El sistema se contrata por suscripción mensual o anual. El plan depende de la cantidad de módulos extra que sumes al sistema base. Los precios están en pesos argentinos con el importe final, pueden actualizarse y te avisamos antes de que un cambio se aplique a tu plan. No hay cobros ni renovaciones automáticas. Emitimos factura por cada pago, conforme a la normativa de ARCA.</p>
          <h3>5. Falta de pago</h3>
          <p>Si un período no se paga, te avisamos dentro del sistema y por WhatsApp para regularizarlo. Tus datos siguen siendo tuyos y te ayudamos a exportarlos si decidís no continuar.</p>
          <h3>6. Arrepentimiento y baja</h3>
          <p>Si contratás a distancia como consumidor, podés revocar la contratación dentro de los 10 días corridos desde que contrataste, sin costo y sin explicar motivos (art. 34 de la Ley 24.240 y art. 1110 del Código Civil y Comercial), con el <a href="#arrepentimiento">Botón de arrepentimiento</a>. También podés pedir la baja de la suscripción en cualquier momento con el <a href="#baja">Botón de baja</a>, por el mismo medio por el que contrataste. Te confirmamos la recepción por el mismo canal y, si corresponde, devolvemos lo pagado por el mismo medio de pago.</p>
          <h3>7. Garantía y responsabilidad</h3>
          <p>Respondemos por nuestros servicios conforme a la Ley 24.240 y al Código Civil y Comercial. No respondemos por daños que surjan de un uso distinto al acordado, de datos erróneos cargados por el cliente o de fallas de servicios de terceros (conexión a internet, WhatsApp, ARCA, medios de pago).</p>

          <h2 id="privacidad">Privacidad</h2>
          <p>Tratamos los datos personales conforme a la Ley 25.326. Los datos que nos envíes por WhatsApp, correo o el formulario se usan solo para responder tu consulta y prestarte el servicio; no los vendemos ni los cedemos. Los datos que cargues en tu sistema son tuyos: los usamos únicamente para operar el servicio y los guardamos con acceso por usuario y permisos.</p>
          <p>Podés pedir acceso, rectificación o eliminación de tus datos escribiendo a <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>. La Agencia de Acceso a la Información Pública, órgano de control de la Ley 25.326, atiende las denuncias por incumplimiento: <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">argentina.gob.ar/aaip</a>.</p>
          <p>Esta web no usa cookies de seguimiento ni de publicidad.</p>

          <h2>Defensa del consumidor</h2>
          <p>Ante cualquier reclamo podés acudir a <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noopener noreferrer">Defensa del Consumidor</a>.</p>
        </div>
      </main>
    </>
  );
}
