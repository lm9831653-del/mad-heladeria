'use strict';
(function () {
  /* ===== CARTA ===== */
  const PRODUCTS = [
    { id: 'ensalada-frutas', name: 'Ensalada de frutas', price: 12000, cat: 'postres' },
    { id: 'ensalada-especial', name: 'Ensalada especial', price: 15000, cat: 'postres' },
    { id: 'banana-split', name: 'Banana split', price: 12000, cat: 'postres' },
    { id: 'brownie-helado', name: 'Brownie con helado', price: 11000, cat: 'postres' },
    { id: 'fresas-crema', name: 'Fresas con crema', price: 10000, cat: 'postres' },
    { id: 'canasta', name: 'Canasta', price: 10000, cat: 'postres' },
    { id: 'merengon', name: 'Merengón', price: 11000, cat: 'postres' },
    { id: 'copa-fusion-mix', name: 'Copa fusión mix', price: 11500, cat: 'postres' },
    { id: 'copa-tentacion', name: 'Copa tentación', price: 11500, cat: 'postres' },
    { id: 'festival-gelatina', name: 'Festival de gelatina', price: 7000, cat: 'postres' },
    { id: 'festival-gelatina-helado', name: 'Festival de gelatina con helado', price: 10000, cat: 'postres' },
    { id: 'copa-helado-brownie', name: 'Copa de helado brownie', price: 9000, cat: 'postres' },
    { id: 'copa-helado-merengon', name: 'Copa de helado merengón', price: 9000, cat: 'postres' },
    { id: 'copa-helado-durazno', name: 'Copa de helado durazno', price: 9500, cat: 'postres' },
    { id: 'oblea', name: 'Oblea', price: 6000, cat: 'postres' },
    { id: 'crepe-sencillo', name: 'Crepe sencillo', price: 10000, cat: 'crepes' },
    { id: 'crepe-especial', name: 'Crepe especial', price: 13000, cat: 'crepes' },
    { id: 'waffle-sencillo', name: 'Waffle sencillo', price: 11000, cat: 'crepes' },
    { id: 'waffle-especial', name: 'Waffle especial', price: 13500, cat: 'crepes' },
    { id: 'jugo-agua', name: 'Jugo en agua', price: 4500, cat: 'bebidas' },
    { id: 'jugo-leche', name: 'Jugo en leche', price: 5500, cat: 'bebidas' },
    { id: 'limonada-natural', name: 'Limonada natural', price: 5000, cat: 'bebidas' },
    { id: 'malteada-tentacion-baileys', name: 'Malteada tentación baileys', price: 13000, cat: 'bebidas' },
    { id: 'malteada-beer', name: 'Malteada beer', price: 13000, cat: 'bebidas' },
    { id: 'malteada-blue', name: 'Malteada blue', price: 13000, cat: 'bebidas' },
    { id: 'tinto', name: 'Tinto', price: 1300, cat: 'bebidas' },
    { id: 'perico', name: 'Perico', price: 1800, cat: 'bebidas' },
    { id: 'milo', name: 'Milo', price: 2000, cat: 'bebidas' },
    { id: 'aromatica', name: 'Aromática', price: 1500, cat: 'bebidas' },
    { id: 'leche', name: 'Leche', price: 1500, cat: 'bebidas' },
    { id: 'buho', name: 'Búho', price: 7000, cat: 'ninos' },
    { id: 'osito-mad', name: 'Osito Mad', price: 7000, cat: 'ninos' },
    { id: 'payasito', name: 'Payasito', price: 7000, cat: 'ninos' },
    { id: 'perrito', name: 'Perrito', price: 7000, cat: 'ninos' },
    { id: 'bunny', name: 'Bunny', price: 7000, cat: 'ninos' },
    { id: 'polet', name: 'Polet', price: 7000, cat: 'helados' },
    { id: 'polet-70g', name: 'Polet 70g', price: 6000, cat: 'helados' },
    { id: 'bocato', name: 'Bocato', price: 5700, cat: 'helados' },
    { id: 'casero', name: 'Casero', price: 2500, cat: 'helados' },
    { id: 'artesanal', name: 'Artesanal', price: 3500, cat: 'helados' },
    { id: 'galleta-con-helado', name: 'Galleta con helado', price: 3500, cat: 'helados' },
    { id: 'platillo', name: 'Platillo', price: 3500, cat: 'helados' },
    { id: 'platillo-jumbo', name: 'Platillo jumbo', price: 3500, cat: 'helados' },
    { id: 'choco-cono-amarillo', name: 'Choco cono amarillo', price: 3500, cat: 'helados' },
    { id: 'choco-cono-azul', name: 'Choco cono azul', price: 4000, cat: 'helados' },
    { id: 'choco-cono-arequipe', name: 'Choco cono arequipe', price: 4500, cat: 'helados' },
    { id: 'choco-cono-crispy', name: 'Choco cono crispy', price: 4800, cat: 'helados' },
    { id: 'choco-cono-mini', name: 'Choco cono mini', price: 2000, cat: 'helados' },
    { id: 'cono-atrevete', name: 'Cono Atrévete', price: 5700, cat: 'helados' },
    { id: 'aloha-tajin-mix', name: 'Aloha tajín / aloha mix', price: 3000, cat: 'helados' },
    { id: 'paleta-agua', name: 'Paleta de agua', price: 2000, cat: 'helados' },
    { id: 'aloha-fiesta', name: 'Aloha fiesta', price: 2700, cat: 'helados' },
    { id: 'aloha-raspado', name: 'Aloha raspado', price: 4500, cat: 'helados' },
    { id: 'paleta-tosh', name: 'Paleta Tosh', price: 3500, cat: 'helados' },
    { id: 'tosh-pasion', name: 'Tosh pasión', price: 4000, cat: 'helados' },
    { id: 'paleta-fruta', name: 'Paleta de fruta', price: 3700, cat: 'helados' },
    { id: 'jet-normal', name: 'Jet normal', price: 5000, cat: 'helados' },
    { id: 'jet-balon', name: 'Jet balón', price: 3500, cat: 'helados' },
    { id: 'jet-coco', name: 'Jet coco', price: 3500, cat: 'helados' },
    { id: 'chocolisto', name: 'Chocolisto', price: 2500, cat: 'helados' },
    { id: 'helado-1-bolita', name: 'Helado 1 bolita', price: 3500, cat: 'helados' },
    { id: 'helado-2-bolitas', name: 'Helado 2 bolitas', price: 4800, cat: 'helados' },
    { id: 'heladino-minions', name: 'Heladino minions', price: 4500, cat: 'helados' },
    { id: 'dracula', name: 'Drácula', price: 5500, cat: 'helados' }
  ];

  const CATEGORIES = [
    { id: 'postres', name: 'Ensaladas y postres', short: 'Postres' },
    { id: 'crepes', name: 'Crepes y waffles', short: 'Crepes' },
    { id: 'bebidas', name: 'Bebidas', short: 'Bebidas' },
    { id: 'ninos', name: 'Para niños', short: 'Niños' },
    { id: 'helados', name: 'Helados', short: 'Helados' }
  ];

  const PAYMENTS = [
    { id: 'efectivo', label: 'Efectivo', color: 'var(--green)', soft: 'var(--green-soft)' },
    { id: 'nequi', label: 'Nequi', color: 'var(--purple)', soft: 'var(--purple-soft)' },
    { id: 'transferencia', label: 'Transferencia', color: 'var(--blue)', soft: 'var(--blue-soft)' }
  ];

  const DEFAULT_PRICES = {};
  PRODUCTS.forEach(function (p) { DEFAULT_PRICES[p.id] = p.price; });
  const PRODUCT_BY_ID = new Map(PRODUCTS.map(function (p) { return [p.id, p]; }));
  const CATEGORY_BY_ID = new Map(CATEGORIES.map(function (c) { return [c.id, c]; }));
  const PAYMENT_BY_ID = new Map(PAYMENTS.map(function (p) { return [p.id, p]; }));
  const STORAGE_KEY = 'mad-heladeria-v1';

  const ICON = {
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4.5h6V7M6.5 7l.8 12.2a2 2 0 0 0 2 1.8h5.4a2 2 0 0 0 2-1.8L17.5 7"/><path d="M10 11v6M14 11v6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5L20 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.6 8.6 0 0 1 9.5 3.5a8.7 8.7 0 1 0 11 11Z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9Z"/><path d="M4 9a8 8 0 0 1 16 0"/><path d="M9.5 12.7v3M14.5 12.7v3"/></svg>',
    receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h4"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 8v5M12 16.5h.01"/><circle cx="12" cy="12" r="9"/></svg>',
    postres: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10h14l-1.7 8.4a2 2 0 0 1-2 1.6H8.7a2 2 0 0 1-2-1.6L5 10Z"/><path d="M3.5 10h17"/><path d="M9 6.5c0-1.3 1.3-1.6 1.3-2.7"/><path d="M13.5 6.5c0-1.3 1.3-1.6 1.3-2.7"/><circle cx="9.2" cy="16" r=".9" fill="currentColor" stroke="none"/><circle cx="13.8" cy="16.6" r=".9" fill="currentColor" stroke="none"/></svg>',
    crepes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7.5" rx="7.5" ry="3"/><path d="M4.5 7.5v3c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-3"/><path d="M4.5 10.5v3c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-3"/><circle cx="16.5" cy="4.4" r="1.5"/></svg>',
    bebidas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h11l-1.2 14a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 6Z"/><path d="M5 6h13"/><path d="m13 5 3.5-3"/><path d="M9.5 10.5v6M13 10.5v4"/></svg>',
    ninos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.2a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',
    helados: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9.5h8a4 4 0 0 0-8 0Z"/><path d="m8 9.5 4 11 4-11"/><path d="M8.8 12.5h6.4"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4.5" y="10" width="15" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'
  };

  const systemDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function freshState() {
    return {
      version: 1,
      prices: Object.assign({}, DEFAULT_PRICES),
      orders: [],
      draft: { items: {}, payment: null, delivery: 'mesa' },
      theme: 'auto'
    };
  }

  let storageWarned = false;

  function normalizeOrder(order) {
    if (!order || typeof order !== 'object' || !Array.isArray(order.items)) return null;
    const items = order.items.map(function (item) {
      if (!item || !PRODUCT_BY_ID.has(item.id)) return null;
      const qty = Math.floor(Number(item.qty));
      if (!(qty > 0)) return null;
      const product = PRODUCT_BY_ID.get(item.id);
      const itemPrice = Number(item.price);
      const price = Number.isFinite(itemPrice) && itemPrice >= 0 ? Math.round(itemPrice) : DEFAULT_PRICES[item.id];
      const name = typeof item.name === 'string' && item.name ? item.name : product.name;
      const surcharge = Number(item.surcharge) || 0;
      return { id: item.id, name: name, price: price, surcharge: surcharge, qty: Math.min(qty, 999) };
    }).filter(Boolean);
    if (!items.length) return null;
    const total = items.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
    const at = Number(order.at);
    const payment = PAYMENT_BY_ID.has(order.payment) ? order.payment : 'efectivo';
    const delivery = order.delivery === 'llevar' ? 'llevar' : 'mesa';
    const deliveredAt = Number(order.deliveredAt);
    return {
      id: typeof order.id === 'string' && order.id ? order.id : 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6),
      at: Number.isFinite(at) ? at : Date.now(),
      items: items,
      total: total,
      payment: payment,
      delivery: delivery,
      delivered: Boolean(order.delivered),
      deliveredAt: Number.isFinite(deliveredAt) ? deliveredAt : null
    };
  }

  function loadState() {
    const base = freshState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return base;
      if (data.prices && typeof data.prices === 'object') {
        PRODUCTS.forEach(function (product) {
          const stored = Number(data.prices[product.id]);
          if (Number.isFinite(stored) && stored >= 0) base.prices[product.id] = Math.min(Math.round(stored), 99999999);
        });
      }
      if (Array.isArray(data.orders)) {
        base.orders = data.orders.map(normalizeOrder).filter(Boolean).sort(function (a, b) { return b.at - a.at; });
      }
      if (data.draft && typeof data.draft === 'object') {
        const items = data.draft.items;
        if (items && typeof items === 'object') {
          Object.keys(items).forEach(function (id) {
            const qty = Math.floor(Number(items[id]));
            if (PRODUCT_BY_ID.has(id) && base.prices[id] > 0 && qty > 0) base.draft.items[id] = Math.min(qty, 999);
          });
        }
        if (PAYMENT_BY_ID.has(data.draft.payment)) base.draft.payment = data.draft.payment;
        if (data.draft.delivery === 'llevar' || data.draft.delivery === 'mesa') base.draft.delivery = data.draft.delivery;
      }
      if (['auto', 'light', 'dark'].indexOf(data.theme) !== -1) base.theme = data.theme;
    } catch (error) {
      storageWarned = false;
    }
    return base;
  }

  const state = loadState();
  const ui = {
    view: 'pedido',
    cat: 'postres',
    query: '',
    priceQuery: '',
    sheetOpen: false,
    helpOpen: false,
    armedCancel: false,
    armedDelete: null,
    armedClose: false,
    armedReset: false,
    paymentWarn: false
  };

  let saveTimer = null;
  let toastTimer = null;
  let cancelTimer = null;
  let deleteTimer = null;
  let closeTimer = null;
  let resetTimer = null;

  const $ = function (selector, root) { return (root || document).querySelector(selector); };
  const $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function normalizeText(value) {
    return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function fmt(value) {
    const n = Number(value);
    return '$' + (Number.isFinite(n) ? Math.round(n) : 0).toLocaleString('es-CO');
  }
  function fmtDigits(value) {
    const n = Number(value);
    return (Number.isFinite(n) ? Math.round(n) : 0).toLocaleString('es-CO');
  }
  function capitalize(value) {
    const text = String(value || '');
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  function fullDateLabel() {
    try {
      return capitalize(new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date()));
    } catch (error) {
      return capitalize(new Date().toLocaleDateString('es-CO'));
    }
  }
  function shortDateLabel() {
    try {
      return capitalize(new Intl.DateTimeFormat('es-CO', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date()).replace(/\./g, ''));
    } catch (error) {
      return capitalize(new Date().toLocaleDateString('es-CO'));
    }
  }
  function timeLabel(timestamp) {
    try {
      return new Intl.DateTimeFormat('es-CO', { hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(timestamp));
    } catch (error) {
      const d = new Date(timestamp);
      const h = d.getHours();
      const hour = h % 12 === 0 ? 12 : h % 12;
      return hour + ':' + String(d.getMinutes()).padStart(2, '0') + ' ' + (h >= 12 ? 'p. m.' : 'a. m.');
    }
  }
  function uid() {
    return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function priceOf(id) {
    const value = Number(state.prices[id]);
    return Number.isFinite(value) && value >= 0 ? Math.round(value) : (DEFAULT_PRICES[id] || 0);
  }
  function isAvailable(id) { return priceOf(id) > 0; }
  function availableProducts() { return PRODUCTS.filter(function (p) { return isAvailable(p.id); }); }
  function currentCategory() { return CATEGORY_BY_ID.get(ui.cat) || CATEGORIES[0]; }

  function draftLines() {
    const isLlevar = state.draft.delivery === 'llevar';
    return Object.keys(state.draft.items).map(function (id) {
      const product = PRODUCT_BY_ID.get(id);
      const qty = Math.floor(Number(state.draft.items[id]));
      const basePrice = priceOf(id);
      if (!product || !(qty > 0) || basePrice <= 0) return null;
      const isPostre = product.cat === 'postres';
      const surcharge = (isLlevar && isPostre) ? 1000 : 0;
      const unitPrice = basePrice + surcharge;
      return {
        id: id,
        name: product.name,
        cat: product.cat,
        basePrice: basePrice,
        surcharge: surcharge,
        price: unitPrice,
        qty: qty,
        lineTotal: unitPrice * qty
      };
    }).filter(Boolean);
  }
  function draftTotal() { return draftLines().reduce(function (sum, line) { return sum + line.lineTotal; }, 0); }
  function draftQty() { return draftLines().reduce(function (sum, line) { return sum + line.qty; }, 0); }

  function persistNow() {
    clearTimeout(saveTimer);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      if (!storageWarned) {
        storageWarned = true;
        toast('No se pudo guardar en este dispositivo');
      }
      return false;
    }
  }
  function persistSoon() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persistNow, 260);
  }
  function buzz(pattern) {
    try {
      if (navigator.vibrate) navigator.vibrate(pattern || 8);
    } catch (error) { /* sin vibración */ }
  }
  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 2800);
  }

  function resolvedTheme() {
    if (state.theme === 'auto') return systemDark && systemDark.matches ? 'dark' : 'light';
    return state.theme;
  }
  function applyTheme() {
    const resolved = resolvedTheme();
    document.documentElement.dataset.theme = resolved;
    const icon = $('#themeIcon');
    const button = $('#themeBtn');
    if (icon) icon.innerHTML = resolved === 'dark' ? ICON.sun : ICON.moon;
    if (button) button.setAttribute('aria-label', resolved === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  }

  function emptyHTML(title, text, icon) {
    return '<div class="empty-state list-empty">' +
      '<div class="empty-art" aria-hidden="true">' + (icon || ICON.bag) + '</div>' +
      '<h3>' + title + '</h3><p>' + text + '</p></div>';
  }

  /* ===== RENDER: CARTA ===== */
  function renderCatChips() {
    const activeId = ui.query.trim() ? 'none' : ui.cat;
    $('#catChips').innerHTML = CATEGORIES.map(function (cat) {
      const count = availableProducts().filter(function (p) { return p.cat === cat.id; }).length;
      const active = activeId === cat.id;
      return '<button type="button" class="cat-chip cat-' + cat.id + (active ? ' is-active' : '') + '" data-cat="' + cat.id + '" role="tab" aria-selected="' + (active ? 'true' : 'false') + '">' +
        ICON[cat.id] + '<span>' + cat.short + '</span><span class="chip-count">' + count + '</span></button>';
    }).join('');
  }

  function productCardHTML(product) {
    const qty = Number(state.draft.items[product.id]) || 0;
    const price = priceOf(product.id);
    const controls = qty > 0
      ? '<div class="pc-controls">' +
          '<button type="button" class="pc-sub" data-product-minus="' + product.id + '" aria-label="Quitar una unidad de ' + esc(product.name) + '">' + ICON.minus + '</button>' +
          '<span class="pc-qty-inline">' + qty + '</span>' +
          '<button type="button" class="pc-add" data-product-plus="' + product.id + '" aria-label="Agregar una unidad de ' + esc(product.name) + '">' + ICON.plus + '</button>' +
        '</div>'
      : '<button type="button" class="pc-add" data-product-plus="' + product.id + '" aria-label="Agregar ' + esc(product.name) + ' al pedido">' + ICON.plus + '</button>';

    return '<div class="product-card cat-' + product.cat + (qty > 0 ? ' has-qty' : '') + '" data-product="' + product.id + '">' +
      '<div class="pc-head"><span class="pc-name">' + esc(product.name) + '</span>' + (qty > 0 ? '<span class="pc-badge" aria-hidden="true">' + qty + '</span>' : '') + '</div>' +
      '<div class="pc-foot"><span class="pc-price">' + fmt(price) + '</span>' + controls + '</div>' +
      '</div>';
  }

  function renderProducts() {
    const grid = $('#productGrid');
    if (!grid) return;
    const query = ui.query.trim();
    let list;
    if (query) {
      const needle = normalizeText(query);
      list = availableProducts().filter(function (p) { return normalizeText(p.name).indexOf(needle) !== -1; });
      $('#gridTitle').textContent = 'Resultados para "' + query + '"';
    } else {
      const cat = currentCategory();
      list = availableProducts().filter(function (p) { return p.cat === cat.id; });
      $('#gridTitle').textContent = cat.name;
    }
    $('#gridCount').textContent = list.length === 1 ? '1 producto' : list.length + ' productos';
    grid.innerHTML = list.length ? list.map(productCardHTML).join('') : emptyHTML(
      query ? 'Nada por aquí' : 'Categoría vacía',
      query ? 'No encontramos ese producto. Prueba con otra palabra o revisa los precios en la pestaña Precios.' : 'No hay productos disponibles en esta categoría. Puedes activarlos desde la pestaña Precios.',
      ICON.bag
    );
  }

  function refreshProductCard(id) {
    const current = $('[data-product="' + id + '"]', $('#productGrid'));
    if (!current) return;
    const product = PRODUCT_BY_ID.get(id);
    if (!product || !isAvailable(id)) {
      renderProducts();
      return;
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = productCardHTML(product);
    const next = wrapper.firstElementChild;
    if (next) current.replaceWith(next);
  }

  function renderSummary() {
    const qty = draftQty();
    const total = draftTotal();
    const bar = $('#summaryBar');
    $('#sumQty').textContent = qty;
    $('#sumTotal').textContent = fmt(total);
    if (qty > 0) {
      bar.classList.remove('is-empty');
      $('#sumTitle').textContent = 'Pedido en curso';
      $('#sumHint').textContent = 'Toca para revisar, cobrar y guardar';
      bar.setAttribute('aria-label', 'Abrir detalle del pedido: ' + qty + ' productos, total ' + fmt(total));
    } else {
      bar.classList.add('is-empty');
      $('#sumTitle').textContent = 'Tu pedido está vacío';
      $('#sumHint').textContent = 'Toca un producto para empezar';
      bar.setAttribute('aria-label', 'Abrir detalle del pedido. Está vacío');
    }
  }

  /* ===== RENDER: DETALLE ===== */
  function orderItemHTML(line) {
    const surchargeBadge = line.surcharge > 0
      ? '<span class="oi-surcharge">+ $1.000 llevar</span>'
      : '';
    return '<div class="order-item">' +
      '<div class="oi-main"><span class="oi-name">' + esc(line.name) + '</span><span class="oi-unit">' + fmt(line.price) + ' c/u' + surchargeBadge + '</span></div>' +
      '<span class="oi-total">' + fmt(line.lineTotal) + '</span>' +
      '<div class="oi-controls">' +
        '<button type="button" class="oi-btn minus" data-oi="minus" data-id="' + line.id + '" aria-label="Quitar una unidad de ' + esc(line.name) + '">' + ICON.minus + '</button>' +
        '<span class="oi-qty" aria-label="' + line.qty + ' unidades">' + line.qty + '</span>' +
        '<button type="button" class="oi-btn plus" data-oi="plus" data-id="' + line.id + '" aria-label="Agregar una unidad de ' + esc(line.name) + '">' + ICON.plus + '</button>' +
        '<button type="button" class="oi-x" data-oi="remove" data-id="' + line.id + '" aria-label="Quitar ' + esc(line.name) + ' del pedido">' + ICON.x + '</button>' +
      '</div></div>';
  }

  function updateCancelButton() {
    const button = $('#cancelOrderBtn');
    if (!button) return;
    button.classList.toggle('is-armed', ui.armedCancel);
    button.textContent = ui.armedCancel ? '¿Cancelar? Toca otra vez' : 'Cancelar pedido';
  }

  function renderSheet() {
    const lines = draftLines();
    const total = draftTotal();
    const qty = draftQty();
    $('#sheetCount').textContent = qty > 0 ? (qty === 1 ? '1 producto en el pedido' : qty + ' productos en el pedido') : 'Sin productos todavía';
    $('#sheetTotal').textContent = fmt(total);
    const items = $('#sheetItems');
    const deliveryBlock = $('#deliveryBlock');
    if (!lines.length) {
      items.innerHTML = '<div class="sheet-empty"><div class="empty-art" aria-hidden="true">' + ICON.bag + '</div><h3>Tu pedido está vacío</h3><p>Agrega productos desde la carta. Cada toque suma una unidad.</p><button type="button" class="reset-btn" style="margin-top:14px" data-empty-close>Ver la carta</button></div>';
      $('#payBlock').hidden = true;
      if (deliveryBlock) deliveryBlock.hidden = true;
    } else {
      items.innerHTML = lines.map(orderItemHTML).join('');
      $('#payBlock').hidden = false;
      if (deliveryBlock) deliveryBlock.hidden = false;
    }

    const isLlevar = state.draft.delivery === 'llevar';
    $$('#deliveryOptions .delivery-btn').forEach(function (button) {
      const selected = (button.dataset.delivery === 'llevar') === isLlevar;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    const deliveryHint = $('#deliveryHint');
    if (deliveryHint) {
      deliveryHint.textContent = isLlevar ? 'Para llevar (+ $1.000 en postres)' : 'En mesa';
    }

    $$('#payOptions .pay-btn').forEach(function (button) {
      const selected = state.draft.payment === button.dataset.pay;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    const payment = PAYMENT_BY_ID.get(state.draft.payment);
    $('#payHint').textContent = payment ? 'Pago: ' + payment.label : 'Elige una forma de pago';
    $('#payRequired').hidden = Boolean(payment) || !lines.length;
    const locked = !lines.length || !payment;
    const saveButton = $('#saveOrderBtn');
    saveButton.classList.toggle('is-locked', locked);
    saveButton.setAttribute('aria-disabled', locked ? 'true' : 'false');
    saveButton.innerHTML = '<span id="saveLabel">Guardar pedido</span>' + (locked ? ICON.lock : ICON.check);
    updateCancelButton();
  }

  function chooseDelivery(delivery) {
    if (delivery !== 'llevar' && delivery !== 'mesa') return;
    state.draft.delivery = delivery;
    persistSoon();
    renderSheet();
    renderSummary();
    buzz(6);
  }

  function openSheet() {
    ui.sheetOpen = true;
    ui.paymentWarn = false;
    $('#orderSheet').hidden = false;
    $('#summaryBar').setAttribute('aria-expanded', 'true');
    renderSheet();
    updateOverlay();
    setTimeout(function () {
      const close = $('#sheetClose');
      if (close) close.focus({ preventScroll: true });
    }, 90);
  }

  function closeSheet() {
    ui.sheetOpen = false;
    ui.paymentWarn = false;
    ui.armedCancel = false;
    clearTimeout(cancelTimer);
    $('#orderSheet').hidden = true;
    $('#summaryBar').setAttribute('aria-expanded', 'false');
    updateOverlay();
  }

  /* ===== RENDER: DÍA ===== */
  function orderCardHTML(order) {
    const payment = PAYMENT_BY_ID.get(order.payment) || PAYMENTS[0];
    const isLlevar = order.delivery === 'llevar';
    const deliveryChip = isLlevar
      ? '<span class="delivery-chip llevar">🥡 Llevar</span>'
      : '<span class="delivery-chip mesa">🍽️ Mesa</span>';
    const items = order.items.map(function (item) {
      const extra = (item.surcharge > 0) ? ' <small class="oc-llevar">(llevar +$1.000)</small>' : '';
      return '<div class="oc-line"><span class="oc-qty">' + item.qty + '×</span><span>' + esc(item.name) + extra + '</span></div>';
    }).join('');
    const done = order.delivered;
    const armed = ui.armedDelete === order.id;
    const deleteButton = armed
      ? '<button type="button" class="oc-btn delete-btn is-armed" data-delete="' + order.id + '" aria-label="Confirmar eliminación del pedido de las ' + esc(timeLabel(order.at)) + '">' + ICON.trash + ' ¿Eliminar?</button>'
      : '<button type="button" class="oc-btn delete-btn" data-delete="' + order.id + '" aria-label="Eliminar pedido de las ' + esc(timeLabel(order.at)) + '">' + ICON.trash + ' Eliminar</button>';
    return '<article class="order-card' + (done ? ' is-done' : '') + '">' +
      '<div class="oc-top"><span class="oc-time">' + ICON.clock + timeLabel(order.at) + '</span><div style="display:flex;gap:5px;align-items:center">' + deliveryChip + '<span class="pay-chip ' + payment.id + '">' + payment.label + '</span></div></div>' +
      '<div class="oc-items">' + items + '</div>' +
      '<div class="oc-bottom"><span class="oc-status' + (done ? ' done' : '') + '">' + (done ? 'Entregado' : 'Por entregar') + '</span><span class="oc-total">' + fmt(order.total) + '</span></div>' +
      '<div class="oc-actions">' +
        '<button type="button" class="oc-btn deliver-btn' + (done ? ' is-done' : '') + '" data-deliver="' + order.id + '" aria-pressed="' + (done ? 'true' : 'false') + '">' + ICON.check + (done ? ' Entregado · deshacer' : ' Marcar entregado') + '</button>' +
        deleteButton +
      '</div></article>';
  }

  function renderDia() {
    const orders = state.orders.slice().sort(function (a, b) { return b.at - a.at; });
    const total = orders.reduce(function (sum, o) { return sum + o.total; }, 0);
    const delivered = orders.filter(function (o) { return o.delivered; }).length;
    const pending = orders.length - delivered;
    $('#diaDate').textContent = fullDateLabel() + ' · del más reciente al más antiguo';
    $('#diaTotal').textContent = fmt(total);
    $('#diaCount').textContent = orders.length;
    $('#diaDelivered').textContent = delivered === 1 ? '1 entregado' : delivered + ' entregados';
    $('#diaAvg').textContent = 'Ticket promedio ' + fmt(orders.length ? Math.round(total / orders.length) : 0);
    const pendingPill = $('#diaPending');
    pendingPill.textContent = orders.length ? (pending === 0 ? 'Todo entregado' : pending + ' por entregar') : 'Sin pedidos';
    pendingPill.classList.toggle('all-done', orders.length > 0 && pending === 0);
    const badge = $('#navDiaBadge');
    badge.hidden = pending === 0;
    badge.textContent = pending > 99 ? '99+' : pending;
    $('#ordersList').innerHTML = orders.length ? orders.map(orderCardHTML).join('') : emptyHTML(
      'Aún no hay pedidos',
      'Cuando guardes el primer pedido del día aparecerá aquí con su hora, forma de pago y total.',
      ICON.receipt
    );
  }

  /* ===== RENDER: CIERRE ===== */
  function renderCierre() {
    const orders = state.orders.slice().sort(function (a, b) { return b.at - a.at; });
    const total = orders.reduce(function (sum, o) { return sum + o.total; }, 0);
    const delivered = orders.filter(function (o) { return o.delivered; }).length;
    const pending = orders.length - delivered;
    const units = orders.reduce(function (sum, o) {
      return sum + o.items.reduce(function (s, item) { return s + item.qty; }, 0);
    }, 0);
    const average = orders.length ? Math.round(total / orders.length) : 0;
    const payTotals = PAYMENTS.map(function (payment) {
      const list = orders.filter(function (o) { return o.payment === payment.id; });
      return {
        payment: payment,
        count: list.length,
        total: list.reduce(function (sum, o) { return sum + o.total; }, 0)
      };
    });
    const soldMap = new Map();
    orders.forEach(function (order) {
      order.items.forEach(function (item) {
        let entry = soldMap.get(item.id);
        if (!entry) {
          entry = { name: item.name, qty: 0, revenue: 0 };
          soldMap.set(item.id, entry);
        }
        entry.qty += item.qty;
        entry.revenue += item.qty * item.price;
      });
    });
    const sold = Array.from(soldMap.values()).sort(function (a, b) {
      return b.qty - a.qty || a.name.localeCompare(b.name, 'es');
    });
    const payRows = payTotals.map(function (entry) {
      const percent = total > 0 ? Math.round((entry.total / total) * 100) : 0;
      const pay = entry.payment;
      return '<div class="pay-row">' +
        '<div class="pay-row-top"><span class="pay-name"><i class="pay-dot" style="--pc:' + pay.color + ';--pc-soft:' + pay.soft + '"></i>' + pay.label + '</span>' +
        '<span class="pay-row-val"><b>' + fmt(entry.total) + '</b><small>' + entry.count + (entry.count === 1 ? ' pedido' : ' pedidos') + '</small></span></div>' +
        '<div class="pay-bar"><i style="width:' + percent + '%;--pc:' + pay.color + '"></i></div></div>';
    }).join('');
    const soldRows = sold.map(function (item, index) {
      return '<div class="sold-row">' +
        '<span class="sold-rank">' + (index + 1) + '</span>' +
        '<span class="sold-name">' + esc(item.name) + '</span>' +
        '<span class="sold-rev">' + fmt(item.revenue) + '</span>' +
        '<span class="sold-qty">' + item.qty + ' u.</span></div>';
    }).join('');
    const armed = ui.armedClose;
    const subtitle = orders.length
      ? orders.length + (orders.length === 1 ? ' pedido' : ' pedidos') + ' · ' + units + (units === 1 ? ' producto vendido' : ' productos vendidos')
      : 'Aún no hay ventas registradas hoy';

    $('#cierreRoot').innerHTML = `
      <div class="page-head compact">
        <div>
          <p class="eyebrow purple"><span class="eyebrow-dot" style="background:var(--purple);box-shadow:0 0 0 4px var(--purple-soft)"></span>Resumen de hoy</p>
          <h1 class="page-title">Cierre del día</h1>
          <p class="page-sub">${esc(fullDateLabel())}</p>
        </div>
        <div class="head-doodle" aria-hidden="true" style="color:var(--purple)">${ICON.chart}</div>
      </div>

      <div class="close-hero">
        <p class="eyebrow"><span class="eyebrow-dot"></span>Total vendido hoy</p>
        <div class="close-total">${fmt(total)}</div>
        <p class="close-sub">${esc(subtitle)}</p>
        <div class="hero-chips">
          <span class="hero-chip"><b>${pending}</b> por entregar</span>
          <span class="hero-chip">Ticket promedio <b>${fmt(average)}</b></span>
          <span class="hero-chip"><b>${delivered}</b> entregados</span>
        </div>
      </div>

      <div class="stats-four">
        <div class="mini-stat"><span>Pedidos</span><b>${orders.length}</b></div>
        <div class="mini-stat"><span>Entregados</span><b>${delivered}</b></div>
        <div class="mini-stat"><span>Pendientes</span><b>${pending}</b></div>
        <div class="mini-stat"><span>Ticket promedio</span><b>${fmt(average)}</b></div>
      </div>

      <section class="panel">
        <div class="panel-head"><h3>Por forma de pago</h3><small>${fmt(total)} en total</small></div>
        ${payRows}
      </section>

      <section class="panel">
        <div class="panel-head"><h3>Productos vendidos</h3><small>${units} ${units === 1 ? 'unidad' : 'unidades'}</small></div>
        ${sold.length ? '<div class="sold-rows">' + soldRows + '</div>' : '<p class="close-tip" style="margin:5px 0 1px">Todavía no hay productos vendidos hoy.</p>'}
      </section>

      <section class="close-zone">
        <div class="close-zone-text">
          <h3>${armed ? '¿Seguro que cerramos hoy?' : '¿Cerramos el día?'}</h3>
          <p>${armed ? 'Toca de nuevo para borrar los pedidos y el resumen. Tus precios se conservan.' : 'Deja todo listo para el siguiente día. Se borran los pedidos y el resumen, pero no los precios de la carta.'}</p>
        </div>
        <button type="button" class="danger-btn${armed ? ' is-armed' : ''}" id="closeDayBtn" data-close-day>${ICON.alert} ${armed ? 'Sí, cerrar día' : 'Cerrar día'}</button>
      </section>
      <p class="close-tip">${ICON.alert}<span>Protegido con doble toque para que no se cierre por accidente.</span></p>
    `;
  }

  /* ===== RENDER: PRECIOS ===== */
  function renderPriceSummary() {
    const visible = PRODUCTS.filter(function (p) { return isAvailable(p.id); }).length;
    const hidden = PRODUCTS.length - visible;
    $('#priceSummary').innerHTML =
      '<span class="price-pill"><b>' + PRODUCTS.length + '</b> productos</span>' +
      '<span class="price-pill good"><b>' + visible + '</b> visibles</span>' +
      (hidden > 0 ? '<span class="price-pill off"><b>' + hidden + '</b> ' + (hidden === 1 ? 'oculto' : 'ocultos') + '</span>' : '<span class="price-pill good">Todo visible</span>') +
      '<span class="price-pill">Se guarda solo</span>';
  }

  function priceRowHTML(product) {
    const value = priceOf(product.id);
    const off = value === 0;
    return '<div class="price-row' + (off ? ' is-off' : '') + '" data-price-row="' + product.id + '">' +
      '<div class="price-row-main"><span class="price-name">' + esc(product.name) + '</span>' +
      '<span class="off-badge"' + (off ? '' : ' hidden') + '>Oculto en el pedido</span></div>' +
      '<label class="price-input"><span aria-hidden="true">$</span>' +
      '<input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="12" autocomplete="off" enterkeyhint="done" value="' + fmtDigits(value) + '" data-price-id="' + product.id + '" aria-label="Precio de ' + esc(product.name) + ' en pesos colombianos"></label>' +
      '</div>';
  }

  function renderPrecios() {
    renderPriceSummary();
    const needle = normalizeText(ui.priceQuery.trim());
    const groups = CATEGORIES.map(function (cat) {
      const products = PRODUCTS.filter(function (p) {
        return p.cat === cat.id && (!needle || normalizeText(p.name).indexOf(needle) !== -1);
      });
      if (!products.length) return '';
      return '<section class="price-group cat-' + cat.id + '">' +
        '<div class="price-group-head">' + ICON[cat.id] + '<h3>' + cat.name + '</h3><span class="group-count">' + products.length + (products.length === 1 ? ' producto' : ' productos') + '</span></div>' +
        products.map(priceRowHTML).join('') + '</section>';
    }).filter(Boolean).join('');
    $('#priceList').innerHTML = groups || emptyHTML(
      'Sin coincidencias',
      'No hay un producto con ese nombre. Prueba con otra palabra.',
      ICON.bag
    );
  }

  function updateResetButton() {
    const button = $('#resetPricesBtn');
    if (!button) return;
    button.classList.toggle('is-armed', ui.armedReset);
    button.textContent = ui.armedReset ? '¿Restaurar? Toca otra vez' : 'Restaurar precios originales';
  }

  function setPriceFromInput(input) {
    if (!input) return;
    const id = input.dataset.priceId;
    if (!PRODUCT_BY_ID.has(id)) return;
    const digits = input.value.replace(/\D/g, '').slice(0, 8);
    const value = digits ? Math.min(parseInt(digits, 10), 99999999) : 0;
    state.prices[id] = value;
    const formatted = digits ? fmtDigits(value) : '';
    if (input.value !== formatted) input.value = formatted;
    const row = input.closest('.price-row');
    if (row) {
      row.classList.toggle('is-off', value === 0);
      const badge = row.querySelector('.off-badge');
      if (badge) badge.hidden = value !== 0;
    }
    renderPriceSummary();
    renderSummary();
    if (ui.sheetOpen) renderSheet();
    persistSoon();
  }

  /* ===== GENERAL RENDER ===== */
  function renderHeaderDate() {
    const el = $('#headerDateText');
    if (el) el.textContent = shortDateLabel();
  }

  function renderAll() {
    renderHeaderDate();
    renderCatChips();
    renderProducts();
    renderSummary();
    renderDia();
    renderCierre();
    renderPrecios();
    updateResetButton();
    applyTheme();
  }

  function updateOverlay() {
    const open = ui.sheetOpen || ui.helpOpen;
    const overlay = $('#overlay');
    if (overlay) overlay.hidden = !open;
    document.body.classList.toggle('is-locked', open);
  }

  function setView(view) {
    if (['pedido', 'dia', 'cierre', 'precios'].indexOf(view) === -1) view = 'pedido';
    ui.view = view;
    $$('.tab').forEach(function (tab) {
      const active = tab.dataset.view === view;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    $$('.view').forEach(function (section) {
      const active = section.id === 'view-' + view;
      section.hidden = !active;
      section.classList.toggle('is-active', active);
    });
    if (view === 'pedido') {
      renderCatChips();
      renderProducts();
      renderSummary();
    } else if (view === 'dia') {
      renderDia();
    } else if (view === 'cierre') {
      renderCierre();
    } else if (view === 'precios') {
      renderPrecios();
    }
    renderHeaderDate();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ===== ACCIONES DEL PEDIDO ===== */
  function addProduct(id) {
    if (!isAvailable(id)) return;
    const current = Math.floor(Number(state.draft.items[id])) || 0;
    if (current >= 999) {
      toast('Ese producto ya tiene el máximo de unidades');
      return;
    }
    state.draft.items[id] = current + 1;
    persistNow();
    refreshProductCard(id);
    renderSummary();
    if (ui.sheetOpen) renderSheet();
    buzz(7);
  }

  function adjustLine(id, delta) {
    const current = Math.floor(Number(state.draft.items[id])) || 0;
    const next = current + delta;
    if (next <= 0) delete state.draft.items[id];
    else state.draft.items[id] = Math.min(next, 999);
    persistNow();
    refreshProductCard(id);
    renderSummary();
    renderSheet();
    buzz(7);
  }

  function removeLine(id) {
    delete state.draft.items[id];
    persistNow();
    refreshProductCard(id);
    renderSummary();
    renderSheet();
    buzz(10);
  }

  function choosePayment(payment) {
    if (!PAYMENT_BY_ID.has(payment)) return;
    state.draft.payment = payment;
    ui.paymentWarn = false;
    persistNow();
    renderSheet();
    buzz(6);
  }

  function saveOrder() {
    const lines = draftLines();
    if (!lines.length) {
      toast('Agrega al menos un producto para guardar');
      return;
    }
    if (!state.draft.payment) {
      ui.paymentWarn = true;
      renderSheet();
      const block = $('#payBlock');
      block.classList.add('is-warn');
      setTimeout(function () { block.classList.remove('is-warn'); }, 450);
      block.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toast('Elige cómo pagó el cliente');
      return;
    }
    const total = lines.reduce(function (sum, line) { return sum + line.lineTotal; }, 0);
    const order = {
      id: uid(),
      at: Date.now(),
      payment: state.draft.payment,
      delivery: state.draft.delivery || 'mesa',
      delivered: false,
      deliveredAt: null,
      total: total,
      items: lines.map(function (line) {
        return {
          id: line.id,
          name: line.name,
          price: line.price,
          surcharge: line.surcharge || 0,
          qty: line.qty
        };
      })
    };
    state.orders.push(order);
    state.orders.sort(function (a, b) { return b.at - a.at; });
    state.draft = { items: {}, payment: null, delivery: 'mesa' };
    ui.query = '';
    const search = $('#searchInput');
    if (search) search.value = '';
    $('#clearSearch').hidden = true;
    ui.armedCancel = false;
    clearTimeout(cancelTimer);
    persistNow();
    closeSheet();
    renderCatChips();
    renderProducts();
    renderSummary();
    renderDia();
    renderCierre();
    renderHeaderDate();
    toast('Pedido guardado · ' + fmt(total));
    buzz([12, 40, 18]);
  }

  function handleCancelOrder() {
    if (!draftLines().length) {
      toast('El pedido ya está vacío');
      return;
    }
    if (ui.armedCancel) {
      clearTimeout(cancelTimer);
      ui.armedCancel = false;
      state.draft = { items: {}, payment: null, delivery: 'mesa' };
      persistNow();
      closeSheet();
      renderProducts();
      renderSummary();
      renderCatChips();
      toast('Pedido cancelado');
      buzz([10, 30, 10]);
      return;
    }
    ui.armedCancel = true;
    updateCancelButton();
    clearTimeout(cancelTimer);
    cancelTimer = setTimeout(function () {
      ui.armedCancel = false;
      updateCancelButton();
    }, 4200);
    buzz(12);
  }

  function toggleDelivered(id) {
    const order = state.orders.find(function (o) { return o.id === id; });
    if (!order) return;
    order.delivered = !order.delivered;
    order.deliveredAt = order.delivered ? Date.now() : null;
    persistNow();
    renderDia();
    renderCierre();
    toast(order.delivered ? 'Pedido marcado como entregado' : 'Pedido marcado como pendiente');
    buzz(10);
  }

  function handleDeleteOrder(id) {
    const order = state.orders.find(function (o) { return o.id === id; });
    if (!order) return;
    if (ui.armedDelete === id) {
      clearTimeout(deleteTimer);
      ui.armedDelete = null;
      state.orders = state.orders.filter(function (o) { return o.id !== id; });
      persistNow();
      renderDia();
      renderCierre();
      toast('Pedido eliminado');
      buzz([10, 30, 10]);
      return;
    }
    ui.armedDelete = id;
    clearTimeout(deleteTimer);
    renderDia();
    toast('Toca "¿Eliminar?" otra vez para confirmar');
    deleteTimer = setTimeout(function () {
      if (ui.armedDelete === id) {
        ui.armedDelete = null;
        renderDia();
      }
    }, 4200);
  }

  function handleCloseDay() {
    if (ui.armedClose) {
      clearTimeout(closeTimer);
      ui.armedClose = false;
      const hadOrders = state.orders.length > 0;
      state.orders = [];
      state.draft = { items: {}, payment: null, delivery: 'mesa' };
      ui.query = '';
      ui.priceQuery = '';
      ui.armedDelete = null;
      ui.armedCancel = false;
      const search = $('#searchInput');
      const priceSearch = $('#priceSearch');
      if (search) search.value = '';
      if (priceSearch) priceSearch.value = '';
      $('#clearSearch').hidden = true;
      $('#clearPriceSearch').hidden = true;
      persistNow();
      closeSheet();
      renderAll();
      toast(hadOrders ? 'Día cerrado. Todo listo para el siguiente' : 'Día cerrado. Todo quedó limpio');
      buzz([20, 60, 20]);
      return;
    }
    ui.armedClose = true;
    renderCierre();
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
      ui.armedClose = false;
      renderCierre();
    }, 5200);
    toast('Toca "Sí, cerrar día" para confirmar');
    buzz(14);
  }

  function handleResetPrices() {
    if (ui.armedReset) {
      clearTimeout(resetTimer);
      ui.armedReset = false;
      state.prices = Object.assign({}, DEFAULT_PRICES);
      persistNow();
      renderPriceSummary();
      renderPrecios();
      renderCatChips();
      renderProducts();
      renderSummary();
      if (ui.sheetOpen) renderSheet();
      updateResetButton();
      toast('Precios originales restaurados');
      buzz(14);
      return;
    }
    ui.armedReset = true;
    updateResetButton();
    clearTimeout(resetTimer);
    resetTimer = setTimeout(function () {
      ui.armedReset = false;
      updateResetButton();
    }, 4200);
  }

  /* ===== AYUDA ===== */
  function openHelp() {
    ui.helpOpen = true;
    $('#helpModal').hidden = false;
    updateOverlay();
    setTimeout(function () {
      const button = $('#helpClose');
      if (button) button.focus({ preventScroll: true });
    }, 80);
  }
  function closeHelp() {
    ui.helpOpen = false;
    $('#helpModal').hidden = true;
    updateOverlay();
    const helpButton = $('#helpBtn');
    if (helpButton && !ui.sheetOpen) helpButton.focus({ preventScroll: true });
  }

  /* ===== EVENTOS ===== */
  function bindEvents() {
    $$('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () { setView(tab.dataset.view); });
    });

    const brand = $('#brandHome');
    if (brand) brand.addEventListener('click', function (event) {
      event.preventDefault();
      setView('pedido');
    });

    $('#catChips').addEventListener('click', function (event) {
      const chip = event.target.closest('[data-cat]');
      if (!chip) return;
      ui.cat = chip.dataset.cat;
      ui.query = '';
      const search = $('#searchInput');
      if (search) search.value = '';
      $('#clearSearch').hidden = true;
      renderCatChips();
      renderProducts();
      buzz(5);
    });

    $('#productGrid').addEventListener('click', function (event) {
      // Botón − (quitar una unidad)
      const minusBtn = event.target.closest('[data-product-minus]');
      if (minusBtn) {
        adjustLine(minusBtn.dataset.productMinus, -1);
        return;
      }
      // Botón + explícito
      const plusBtn = event.target.closest('[data-product-plus]');
      if (plusBtn) {
        addProduct(plusBtn.dataset.productPlus);
        return;
      }
      // Clic en la tarjeta (fuera de los botones) → también suma
      const card = event.target.closest('[data-product]');
      if (card && !event.target.closest('button')) {
        addProduct(card.dataset.product);
      }
    });

    const search = $('#searchInput');
    search.addEventListener('input', function () {
      ui.query = search.value;
      $('#clearSearch').hidden = !ui.query;
      renderCatChips();
      renderProducts();
    });
    $('#clearSearch').addEventListener('click', function () {
      ui.query = '';
      search.value = '';
      $('#clearSearch').hidden = true;
      renderCatChips();
      renderProducts();
      search.focus();
    });

    $('#summaryBar').addEventListener('click', openSheet);
    $('#sheetClose').addEventListener('click', closeSheet);
    $('#orderSheet').addEventListener('click', function (event) {
      if (event.target === $('#orderSheet')) closeSheet();
    });
    $('#overlay').addEventListener('click', function () {
      if (ui.helpOpen) closeHelp();
      else if (ui.sheetOpen) closeSheet();
    });

    $('#sheetItems').addEventListener('click', function (event) {
      if (event.target.closest('[data-empty-close]')) {
        closeSheet();
        return;
      }
      const button = event.target.closest('[data-oi]');
      if (!button) return;
      const id = button.dataset.id;
      const action = button.dataset.oi;
      if (action === 'plus') adjustLine(id, 1);
      else if (action === 'minus') adjustLine(id, -1);
      else if (action === 'remove') removeLine(id);
    });

    const deliveryOpts = $('#deliveryOptions');
    if (deliveryOpts) {
      deliveryOpts.addEventListener('click', function (event) {
        const button = event.target.closest('[data-delivery]');
        if (!button) return;
        chooseDelivery(button.dataset.delivery);
      });
    }

    $('#payOptions').addEventListener('click', function (event) {
      const button = event.target.closest('[data-pay]');
      if (!button) return;
      choosePayment(button.dataset.pay);
    });

    $('#saveOrderBtn').addEventListener('click', saveOrder);
    $('#cancelOrderBtn').addEventListener('click', handleCancelOrder);

    $('#ordersList').addEventListener('click', function (event) {
      const deliver = event.target.closest('[data-deliver]');
      if (deliver) {
        toggleDelivered(deliver.dataset.deliver);
        return;
      }
      const remove = event.target.closest('[data-delete]');
      if (remove) handleDeleteOrder(remove.dataset.delete);
    });

    $('#cierreRoot').addEventListener('click', function (event) {
      if (event.target.closest('[data-close-day]')) handleCloseDay();
    });

    $('#priceSearch').addEventListener('input', function (event) {
      ui.priceQuery = event.target.value;
      $('#clearPriceSearch').hidden = !ui.priceQuery;
      renderPrecios();
    });
    $('#clearPriceSearch').addEventListener('click', function () {
      ui.priceQuery = '';
      $('#priceSearch').value = '';
      $('#clearPriceSearch').hidden = true;
      renderPrecios();
      $('#priceSearch').focus();
    });

    const priceList = $('#priceList');
    priceList.addEventListener('input', function (event) {
      if (event.target.matches('input[data-price-id]')) setPriceFromInput(event.target);
    });
    priceList.addEventListener('focusin', function (event) {
      if (event.target.matches('input[data-price-id]')) {
        event.target.select();
        setTimeout(function () {
          try { event.target.setSelectionRange(0, event.target.value.length); } catch (error) { /* compatible */ }
        }, 0);
      }
    });
    priceList.addEventListener('focusout', function (event) {
      const input = event.target.closest('input[data-price-id]');
      if (!input) return;
      setPriceFromInput(input);
      if (!input.value.trim()) input.value = '0';
      const id = input.dataset.priceId;
      if (priceOf(id) === 0 && state.draft.items[id]) {
        delete state.draft.items[id];
        refreshProductCard(id);
        renderSummary();
        if (ui.sheetOpen) renderSheet();
        toast('Quedó en $0: el producto se ocultó y salió del pedido');
      }
      persistNow();
    });

    $('#resetPricesBtn').addEventListener('click', handleResetPrices);

    $('#helpBtn').addEventListener('click', openHelp);
    $('#helpClose').addEventListener('click', closeHelp);
    $('#helpDone').addEventListener('click', closeHelp);
    $('#helpModal').addEventListener('click', function (event) {
      if (event.target === $('#helpModal')) closeHelp();
    });

    $('#themeBtn').addEventListener('click', function () {
      state.theme = resolvedTheme() === 'dark' ? 'light' : 'dark';
      persistNow();
      applyTheme();
      toast(state.theme === 'dark' ? 'Tema oscuro activado' : 'Tema claro activado');
    });

    if (systemDark) {
      const onSystemThemeChange = function () {
        if (state.theme === 'auto') applyTheme();
      };
      if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemThemeChange);
      else if (systemDark.addListener) systemDark.addListener(onSystemThemeChange);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (ui.helpOpen) { closeHelp(); return; }
      if (ui.sheetOpen) { closeSheet(); return; }
      if (ui.armedDelete) { ui.armedDelete = null; renderDia(); }
      if (ui.armedClose) { ui.armedClose = false; renderCierre(); }
      if (ui.armedReset) { ui.armedReset = false; updateResetButton(); }
    });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') persistNow();
    });
    window.addEventListener('pagehide', persistNow);
  }

  function setupHomeScreen() {
    try {
      const size = 192;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const background = ctx.createLinearGradient(0, 0, size, size);
      background.addColorStop(0, '#3A1554');
      background.addColorStop(1, '#6B2984');
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = 'rgba(255,255,255,.09)';
      ctx.beginPath();
      ctx.arc(166, 30, 76, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#F5C77E';
      ctx.beginPath();
      ctx.moveTo(67, 108); ctx.lineTo(125, 108); ctx.lineTo(96, 172);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#D9A252';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(79, 121); ctx.lineTo(99, 157);
      ctx.moveTo(104, 112); ctx.lineTo(111, 135);
      ctx.stroke();
      function scoop(x, y, radius, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      scoop(73, 88, 29, '#FF7FA5');
      scoop(119, 88, 29, '#B79CFF');
      scoop(96, 63, 30, '#7DE3B4');
      ctx.fillStyle = '#FFF2F6';
      ctx.beginPath();
      ctx.arc(119, 47, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#0E8F67';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(97, 36);
      ctx.quadraticCurveTo(103, 26, 111, 30);
      ctx.stroke();
      const icon = canvas.toDataURL('image/png');
      let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
      if (!appleIcon) {
        appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        document.head.appendChild(appleIcon);
      }
      appleIcon.href = icon;
      const manifest = {
        name: 'Mad · Heladería & Frutería',
        short_name: 'Mad',
        start_url: location.href.split('#')[0],
        display: 'standalone',
        background_color: '#FFF7F2',
        theme_color: '#E83A70',
        icons: [{ src: icon, sizes: '192x192', type: 'image/png', purpose: 'any' }]
      };
      const manifestUrl = URL.createObjectURL(new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' }));
      let manifestLink = document.querySelector('link[rel="manifest"]');
      if (!manifestLink) {
        manifestLink = document.createElement('link');
        manifestLink.rel = 'manifest';
        document.head.appendChild(manifestLink);
      }
      manifestLink.href = manifestUrl;
    } catch (error) { /* El ícono es opcional */ }
  }

  function init() {
    applyTheme();
    renderAll();
    if (ui.query || ui.priceQuery) {
      renderCatChips();
      renderProducts();
      renderPrecios();
    }
    setupHomeScreen();
  }

  bindEvents();
  init();
})();

