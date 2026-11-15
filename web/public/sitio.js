/* Generado por tools/extraer_web.py desde index.html */
(() => {
  'use strict';

  /* ============================================================
     DATOS EDITABLES. Cambiá estos valores y se actualizan solos
     los botones de WhatsApp, el formulario y el pie de página.
     (Valores iniciales tomados de Rave Holding.)
     ============================================================ */
  const CONFIG = {
    marca: 'Vincular Business',
    whatsapp: '5493874484132',            // sin +, sin espacios ni guiones
    whatsappVisible: '+54 9 387 448-4132',
    email: 'vincularbusiness@gmail.com',
    instagram: 'vincularbusiness',                      // usuario sin @ (dejalo vacío para ocultarlo)
    ciudad: 'Salta, Argentina',
    // ---- DATOS DEL TITULAR (se muestran en la sección Información legal solo si los completás)
    titular: '',                          // nombre y apellido o razón social
    cuit: '',                             // por ejemplo: '20-12345678-9'
    domicilio: '',                        // domicilio legal
    horario: '',                          // por ejemplo: 'Lunes a viernes de 9 a 18 h'
    // ---- PRECIOS (siempre en pesos argentinos).
    // Cambiá cualquier número y la web se actualiza sola. Dejá un combo en null para mostrar "Presupuesto a medida".
    // Combos: pago único + mantenimiento mensual (p3). NFC y post-venta: por unidad / monto fijo.
    precios: {
      c1: { unico: 100000 },                // Menú Digital
      c2: { unico: 400000 },                // Básico: Menú + CRM básico
      c3: { unico: 700000 },                // Completo
      c4: { unico: 1200000 },               // Completo + App (soporte y tiendas se cotizan aparte)
      s1: { unico: 20000 },                 // Tarjeta digital NFC común
      s1b: { unico: 30000 },                // Tarjeta digital NFC inkjet
      s2: { unico: 80000 },                 // Turnero con cartera + fidelización QR
      s2b: { unico: 100000 },               // Turnero con cartera + fidelización NFC
      s3: { unico: 700000 },                // Diseño frontend personalizado (aparte del sistema)
      l1: { unico: 20000 },                 // Llavero NFC (o según modelo 3D personalizado)
      p1: { unico: 30000 },                 // Post-venta: modificación chica, monto fijo
      p2: { unico: 50000 },                 // Post-venta: modificación mediana, nueva sección o cambio de funcionamiento (monto fijo)
      p3: { unico: 50000 }                  // Mantenimiento mensual (con los combos)
    },
    desde: [],                          // precios que se muestran como 'Desde' (se cotizan según el proyecto)
    // Módulos incluidos en cada combo (cada uno suma sobre el anterior)
    modulosCombos: [
      ['Menú', '$c1', null, [
        ['Menú o catálogo digital', 'Con tu marca y QR'],
        ['Carrito y pedidos por WhatsApp', 'Sin comisiones'],
        ['Fidelización de clientes', 'Sellos digitales por QR'],
        ['Turnero', 'Turnos online con recordatorios por WhatsApp'],
        ['Club de socios', 'Credencial digital y beneficios'],
        ['Redes sociales', 'Instagram, Facebook y TikTok enlazados'],
        ['Ubicación y reseñas', 'Mapa y reseñas de Google'],
        ['Migración de tus archivos', 'Sin costo, desde Excel o tu sistema actual']
      ]],
      ['Básico', '$c2', 'Todo lo del Menú, más:', [
        ['CRM de clientes', 'Ficha, historial de compras y fiados'],
        ['Cobranza por WhatsApp', 'Recordatorios de deuda y saldos'],
        ['POS de ventas', 'Descuentos y varios medios de pago'],
        ['Caja', 'Apertura, cierre y arqueo'],
        ['Inventario y stock en tiempo real', 'Aviso de stock mínimo e importación desde Excel'],
        ['Usuarios y permisos por rol', 'Cada persona ve lo que le corresponde'],
        ['Dashboard y reportes', 'Diarios, semanales y mensuales']
      ]],
      ['Completo', '$c3', 'Todo lo del Básico, más:', [
        ['Pantalla táctil y pantalla para el cliente', 'Se usa con el dedo'],
        ['Facturación electrónica ARCA', 'Facturas fiscales y documentos internos'],
        ['ERP: compras y proveedores', 'Costos por producto y control de gastos'],
        ['Marketing', 'Campañas y promos por WhatsApp a tus clientes'],
        ['Personal completo', 'Entrada y salida con QR o NFC, tareas y organigrama'],
        ['Mesas, mozos y comandas', 'Para gastronomía'],
        ['Cobros con Mercado Pago y MODO', 'Integrados al sistema'],
        ['Periféricos configurados', 'Balanzas, impresoras y lectores']
      ]],
      ['Completo + App', '$c4', 'Todo lo del Completo, más:', [
        ['App con tu marca', 'Android e iPhone'],
        ['Pedidos, reservas y fidelidad en la app', 'Todo en el celular de tu cliente'],
        ['Perfil del cliente', 'Historial de pedidos y puntos'],
        ['Promos al celular', 'Avisos directo a tus clientes'],
        ['Integración con PedidosYa', 'Pedidos centralizados'],
        ['Publicación en las tiendas', 'Cuentas a tu nombre'],
        ['Soporte', 'Se cotiza aparte, junto con los costos de las tiendas']
      ]]
    ],
    // Funciones para sumar a cualquier combo (se cotizan según la función; sin precio en la web)
    modulosExtra: [
      ['Facturación electrónica ARCA', 'Incluida en Completo'],
      ['Personal con horarios, tareas y organigrama', 'Incluido en Completo'],
      ['Mesas, mozos y comandas', 'Incluido en Completo'],
      ['Fidelización con NFC', 'Sellos, puntos y cupones'],
      ['Turnero con cartera de clientes', 'Versión ampliada, con fidelización QR o NFC'],
      ['Órdenes de trabajo', 'Para talleres y servicios técnicos'],
      ['Turnos y reservas', 'Agenda por profesional o recurso'],
      ['Abonos y cuotas de socios', 'Clubes, gimnasios y playas, con ingreso por NFC'],
      ['Modo kiosco de autoservicio', 'El cliente arma su pedido solo'],
      ['Portal Wi-Fi para clientes', 'Registro con consentimiento'],
      ['Sucursal adicional', 'Sincronizada en el mismo panel']
    ],
    modulosIntegraciones: [
      ['Mercado Pago y MODO', 'Incluidos en Completo'],
      ['PedidosYa', 'Incluido en Completo + App'],
      ['Tiendas online y otras pasarelas', 'A medida']
    ],
    modulosCustom: [
      ['Barrera de entrada', 'Control de acceso de vehículos o personas con NFC'],
      ['Integración con hardware específico', 'Molinetes, cerraduras, balanzas especiales'],
      ['Reportes y tableros a medida', 'Con los datos que vos decidas']
    ]
  };

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  const waURL = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- Enlaces de WhatsApp ---------- */
  $$('[data-wa]').forEach((a) => {
    a.href = waURL(a.dataset.wa || `Hola! Quiero consultar por ${CONFIG.marca}.`);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  /* ---------- Contacto (sección y pie) ---------- */
  const icon = (id) => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const lines = [];
  lines.push(`<a href="${waURL('Hola! Quiero consultar por ' + CONFIG.marca + '.')}" target="_blank" rel="noopener noreferrer">${icon('msg')}${CONFIG.whatsappVisible}</a>`);
  if (CONFIG.email) lines.push(`<a href="mailto:${CONFIG.email}">${icon('mail')}${CONFIG.email}</a>`);
  if (CONFIG.instagram) lines.push(`<a href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener noreferrer">${icon('globe')}@${CONFIG.instagram}</a>`);
  $('#contact-lines').innerHTML = lines.join('');

  const foot = [];
  foot.push(`<li>${icon('msg')}<a href="${waURL('Hola! Quiero consultar por ' + CONFIG.marca + '.')}" target="_blank" rel="noopener noreferrer">${CONFIG.whatsappVisible}</a></li>`);
  if (CONFIG.email) foot.push(`<li>${icon('mail')}<a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>`);
  if (CONFIG.instagram) foot.push(`<li>${icon('globe')}<a href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener noreferrer">@${CONFIG.instagram}</a></li>`);
  if (CONFIG.ciudad) foot.push(`<li>${icon('pin')}<span>${CONFIG.ciudad}</span></li>`);
  if (CONFIG.horario) foot.push(`<li>${icon('clock')}<span>${CONFIG.horario}</span></li>`);
  $('#footer-contact').innerHTML = foot.join('');
  $('#year').textContent = new Date().getFullYear();
  $$('.mailtxt').forEach((el) => { el.innerHTML = `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`; });
  const tit = $('#titular');
  if (tit && (CONFIG.titular || CONFIG.cuit || CONFIG.domicilio)) {
    tit.textContent = ['Titular: ' + CONFIG.titular, CONFIG.cuit && 'CUIT: ' + CONFIG.cuit, CONFIG.domicilio && 'Domicilio: ' + CONFIG.domicilio].filter((x) => x && !x.endsWith(': ')).join(' · ');
    tit.hidden = false;
  }
  $$('[data-open]').forEach((a) => a.addEventListener('click', () => { const d = document.getElementById(a.dataset.open); if (d) d.open = true; }));

  /* ---------- Carrete de casos ---------- */
  $$('[data-reel]').forEach((b) => b.addEventListener('click', () => {
    const r = $('#reel');
    r.scrollBy({ left: Number(b.dataset.reel) * 320, behavior: reduceMotion ? 'auto' : 'smooth' });
  }));

  /* ---------- Menú móvil ---------- */
  const burger = $('#burger');
  const links = $('#navlinks');
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    burger.innerHTML = `<svg class="ic"><use href="#i-${open ? 'x' : 'menu'}"/></svg>`;
  };
  burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  $$('a', links).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Barra de progreso ---------- */
  const bar = $('#progress');
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Pestañas accesibles ---------- */
  function initTabs(root) {
    const list = $('[role=tablist]', root);
    const tabs = $$('[role=tab]', list);
    const panels = $$('[role=tabpanel]', root);
    const select = (t) => {
      tabs.forEach((x) => { const on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; });
      panels.forEach((p) => { p.hidden = p.id !== t.getAttribute('aria-controls'); });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        let n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); n.focus(); select(n); }
      });
    });
  }
  $$('#tabs-mod, #tabs-rub').forEach(initTabs);

  /* ---------- QR decorativo ---------- */
  function drawQR(svg) {
    const N = 25;
    let seed = Number(svg.dataset.seed || 1);
    const rnd = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
    const nearFinder = (x, y) => (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);
    let shapes = '';
    const drawFinder = (ox, oy) => {
      shapes += `<rect x="${ox}" y="${oy}" width="7" height="7" fill="#0A2E6E"/>`;
      shapes += `<rect x="${ox + 1}" y="${oy + 1}" width="5" height="5" fill="#fff"/>`;
      shapes += `<rect x="${ox + 2}" y="${oy + 2}" width="3" height="3" fill="#0A2E6E"/>`;
    };
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      if (nearFinder(x, y)) continue;
      if (rnd() > 0.5) shapes += `<rect x="${x}" y="${y}" width="1" height="1" fill="#0A2E6E"/>`;
    }
    drawFinder(0, 0); drawFinder(N - 7, 0); drawFinder(0, N - 7);
    svg.innerHTML = shapes;
  }
  $$('svg.qr').forEach(drawQR);

  /* ---------- Inclinación suave del mockup del hero ---------- */
  const stage = $('#stage');
  const hero = $('#inicio');
  if (stage && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      stage.style.setProperty('--ry', (px * 8).toFixed(2) + 'deg');
      stage.style.setProperty('--rx', (-py * 6).toFixed(2) + 'deg');
    });
    hero.addEventListener('mouseleave', () => { stage.style.setProperty('--ry', '0deg'); stage.style.setProperty('--rx', '0deg'); });
  }

  /* ---------- Calculadora de comisiones ---------- */
  const nf = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
  const money = { format: (n) => nf.format(n).replace(/\s/g, '') };
  const cPed = $('#c-ped'), cTic = $('#c-tic'), cCom = $('#c-com'), cSh = $('#c-sh');
  const out = { pay: $('#r-pay'), save: $('#r-save'), year: $('#r-year') };
  const shown = { pay: 0, save: 0, year: 0 };
  const animate = (key, to) => {
    const el = out[key];
    if (reduceMotion) { el.textContent = money.format(to); shown[key] = to; return; }
    const from = shown[key], t0 = performance.now(), dur = 450;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = from + (to - from) * (1 - Math.pow(1 - k, 3));
      el.textContent = money.format(Math.round(v));
      if (k < 1) requestAnimationFrame(step); else shown[key] = to;
    };
    requestAnimationFrame(step);
  };
  const calc = () => {
    const ped = +cPed.value, tic = +cTic.value, com = +cCom.value, sh = +cSh.value;
    $('#o-ped').textContent = ped.toLocaleString('es-AR');
    $('#o-tic').textContent = money.format(tic);
    $('#o-com').textContent = com + ' %';
    $('#o-sh').textContent = sh + ' %';
    const pay = ped * tic * (com / 100);
    const save = pay * (sh / 100);
    animate('pay', pay); animate('save', save); animate('year', save * 12);
  };
  [cPed, cTic, cCom, cSh].forEach((i) => i.addEventListener('input', calc));
  calc();

  /* ---------- Formulario → WhatsApp / mail ---------- */
  const form = $('#form');
  const preview = $('#preview');
  const err = $('#err');
  const buildMessage = () => {
    const v = (id) => $(id).value.trim();
    const combo = ($('input[name=combo]:checked', form) || {}).value || 'Todavía no sé, necesito asesoramiento';
    const extras = $$('input[name=extra]:checked', form).map((i) => i.value);
    const rows = [
      `Hola! Quiero una demo y un presupuesto de ${CONFIG.marca}.`,
      '',
      `• Nombre: ${v('#f-nombre') || '(sin completar)'}`,
      `• Negocio: ${v('#f-negocio') || '(sin completar)'}`,
      `• Rubro: ${$('#f-rubro').value}`,
      `• Combo: ${combo}`,
      `• Extras: ${extras.length ? extras.join(', ') : 'ninguno por ahora'}`
    ];
    if (v('#f-msg')) rows.push(`• Comentarios: ${v('#f-msg')}`);
    rows.push('• Acepto la política de privacidad y el tratamiento de mis datos para esta consulta.');
    if ($('#f-mk') && $('#f-mk').checked) rows.push('• Quiero recibir novedades y ofertas.');
    return rows.join('\n');
  };
  const refresh = () => {
    const msg = buildMessage();
    preview.textContent = msg;
    $('#mail-link').href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Consulta de demo y presupuesto · ' + CONFIG.marca)}&body=${encodeURIComponent(msg)}`;
  };
  form.addEventListener('input', () => { err.textContent = ''; refresh(); });
  form.addEventListener('change', refresh);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!$('#f-nombre').value.trim()) {
      err.textContent = 'Contanos tu nombre para poder responderte.';
      $('#f-nombre').focus();
      return;
    }
    if (!$('#f-ok').checked) {
      err.textContent = 'Para enviar, aceptá la política de privacidad.';
      $('#f-ok').focus();
      return;
    }
    const win = window.open(waURL(buildMessage()), '_blank', 'noopener');
    if (!win) window.location.href = waURL(buildMessage());
  });
  refresh();

  /* ---------- Teléfono y mail en los textos legales ---------- */
  $$('.watxt').forEach((el) => { el.textContent = CONFIG.whatsappVisible; });

  /* ---------- Botón de arrepentimiento y de baja ---------- */
  const arr = $('#form-arr');
  if (arr) {
    const armar = () => {
      const g = (id) => $(id).value.trim();
      const tipo = ($('input[name=arr-tipo]:checked', arr) || {}).value || '';
      return [`Hola! Quiero ejercer: ${tipo}.`, '', `• Nombre: ${g('#arr-nombre')}`, `• DNI o CUIT: ${g('#arr-doc')}`, `• Producto o servicio y fecha: ${g('#arr-prod')}`, `• Contacto: ${g('#arr-cont')}`, '', 'Solicito la confirmación de recepción por este mismo medio.'].join('\n');
    };
    const ok = () => {
      const e = $('#arr-err');
      if (!$('#arr-nombre').value.trim() || !$('#arr-prod').value.trim() || !$('#arr-cont').value.trim()) { e.textContent = 'Completá tu nombre, el producto o servicio contratado y cómo te contactamos.'; return false; }
      e.textContent = ''; return true;
    };
    arr.addEventListener('submit', (e) => { e.preventDefault(); if (!ok()) return; const u = waURL(armar()); const w = window.open(u, '_blank', 'noopener'); if (!w) window.location.href = u; });
    $('#arr-mail').addEventListener('click', (e) => { e.preventDefault(); if (!ok()) return; window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Arrepentimiento o baja · ' + CONFIG.marca)}&body=${encodeURIComponent(armar())}`; });
  }

  /* ---------- Aviso de privacidad y cookies ---------- */
  const cb = $('#cookiebar');
  if (cb) {
    let visto = false;
    try { visto = localStorage.getItem('vb-aviso') === '1'; } catch (e) { /* sin almacenamiento */ }
    if (!visto) cb.hidden = false;
    $('#cookie-ok').addEventListener('click', () => { cb.hidden = true; try { localStorage.setItem('vb-aviso', '1'); } catch (e) { /* sin almacenamiento */ } });
  }

  /* ---------- Precios y descuento (se muestran solo si los cargás en CONFIG) ---------- */
  const ARS = new Intl.NumberFormat('es-AR');
  const peso = (n) => '$' + ARS.format(n).replace(/\s/g, '');
  const c4note = (k) => (k === 'c4' ? '+ ' + peso(CONFIG.precios.p3.unico) + ' por mes · tiendas de apps aparte' : '');
  $$('[data-price]').forEach((el) => {
    const v = CONFIG.precios[el.dataset.price];
    if (!v || !v.unico) return;
    const combo = el.closest('.combo');
    const desde = (CONFIG.desde || []).includes(el.dataset.price);
    const unit = el.dataset.unit;
    el.innerHTML = `<span class="big">${desde ? '<em>Desde</em> ' : ''}${peso(v.unico)}</span>` + (combo ? `<span class="alta">${c4note(el.dataset.price) || '+ ' + peso(CONFIG.precios.p3.unico) + ' por mes'}</span>` : `<span class="usd">${unit || 'Pago único'}</span>`);
  });

  /* ---------- Módulos del CRM ---------- */
  const rowLi = (n, d, extra = '') => `<li><span>${n}<small>${d}</small></span>${extra}</li>`;
  $('#mods-combos').innerHTML = CONFIG.modulosCombos.map(([nombre, key, intro, items], i) => {
    const p = CONFIG.precios[key.slice(1)];
    return `<article class="mod${i === 1 ? ' feat' : ''}"><span class="tagm">${nombre}</span><h3>${p ? peso(p.unico) : nombre}</h3><p>${intro || 'La base para que te encuentren y te pidan.'}</p><ul>${items.map(([n, d]) => rowLi(n, d)).join('')}</ul></article>`;
  }).join('');
  $('#mods-extra').innerHTML = CONFIG.modulosExtra.map(([n, d]) => rowLi(n, d)).join('');
  $('#mods-integ').innerHTML = CONFIG.modulosIntegraciones.map(([n, d]) => rowLi(n, d)).join('');
  $('#mods-custom').innerHTML = CONFIG.modulosCustom.map(([n, d]) => rowLi(n, d)).join('');
  $$('[data-from]').forEach((el) => { el.textContent = peso(CONFIG.precios[el.dataset.from].unico); });
  const custom = $('[data-custom]');
  if (custom) custom.addEventListener('click', () => {
    const m = $('#f-msg');
    const line = 'Quiero consultar por un módulo a mi medida.';
    if (!m.value.includes(line)) m.value = (m.value ? m.value + '\n' : '') + line;
    refresh();
  });

  /* ---------- Botones "Quiero el NFC" ---------- */
  $$('[data-nfc]').forEach((b) => b.addEventListener('click', () => {
    const cb = $$('input[name=extra]', form).find((i) => i.value === b.dataset.nfc);
    if (cb) { cb.checked = true; refresh(); }
    $('#presupuesto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => $('#f-nombre').focus({ preventScroll: true }), reduceMotion ? 0 : 600);
  }));

  /* ---------- Botones "Quiero el Combo X" ---------- */
  $$('[data-combo]').forEach((b) => b.addEventListener('click', () => {
    const radios = $$('input[name=combo]', form);
    const r = radios[Number(b.dataset.combo) - 1];
    if (r) { r.checked = true; refresh(); }
    $('#presupuesto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => $('#f-nombre').focus({ preventScroll: true }), reduceMotion ? 0 : 600);
  }));

  /* ---------- Cinta de actividad: duplicar contenido para el bucle ---------- */
  const track = $('#track');
  if (track) {
    [...track.children].forEach((el) => { const c = el.cloneNode(true); c.dataset.dup = '1'; c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
  }

  /* ---------- Inicio rápido por rubro ---------- */
  const goQuote = (focus = true) => {
    $('#presupuesto').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    if (focus) setTimeout(() => $('#f-nombre').focus({ preventScroll: true }), reduceMotion ? 0 : 650);
  };
  $$('[data-rubro]').forEach((b) => b.addEventListener('click', () => {
    const sel = $('#f-rubro');
    const opt = [...sel.options].find((o) => o.textContent.trim() === b.dataset.rubro);
    if (opt) sel.value = opt.value;
    else {
      const m = $('#f-msg');
      const line = `Quiero un sistema para: ${b.dataset.rubro}.`;
      if (m && !m.value.includes(line)) m.value = (m.value ? m.value + '\n' : '') + line;
    }
    refresh();
    goQuote();
  }));
  $$('.rubro-card').forEach((c) => c.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); }
  }));

  /* ---------- Catálogo NFC: filtro por categoría y pedido ---------- */
  $$('[data-prod]').forEach((b) => b.addEventListener('click', () => {
    const m = $('#f-msg');
    const line = `Quiero sumar: ${b.dataset.prod}.`;
    if (!m.value.includes(line)) m.value = (m.value ? m.value + '\n' : '') + line;
    refresh();
    goQuote(true);
  }));
})();
