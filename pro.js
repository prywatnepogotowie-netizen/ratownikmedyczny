/* ratownikmedyczny.online – dostęp Free / Pro
   Ustawienia uzupełnia się po założeniu kont Supabase i Stripe (instrukcja: cennik.html#jak-dziala).
   enforce:false = blokady są widoczne, ale wszystko działa (okres próbny przed uruchomieniem płatności). */
window.RM_CFG = {
  supabaseUrl: '',          // np. https://xxxx.supabase.co
  supabaseKey: '',          // klucz "anon public"
  buyUrl: '',               // link płatności Stripe (Payment Link) 99 zł / rok
  enforce: false,
  price: '99 zł / rok'
};
(function(){
  const C = window.RM_CFG, LS = window.localStorage;
  const get = k => { try { return LS.getItem(k) } catch(e) { return null } };
  const set = (k,v) => { try { v==null ? LS.removeItem(k) : LS.setItem(k,v) } catch(e) {} };
  const RM = window.RM = {};

  RM.proUntil = () => Number(get('rm_pro_until') || 0);
  RM.isPro = () => !C.enforce || RM.proUntil() > Date.now();
  RM.email = () => get('rm_email');
  RM.trial = () => !C.enforce;

  // logowanie linkiem z e-maila (Supabase, bez hasła)
  RM.login = async email => {
    if (!C.supabaseUrl) throw new Error('Logowanie zostanie uruchomione razem z płatnościami.');
    const r = await fetch(C.supabaseUrl + '/auth/v1/otp', {
      method: 'POST', headers: { apikey: C.supabaseKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, create_user: true, options: { emailRedirectTo: location.origin + '/cennik.html' } })
    });
    if (!r.ok) throw new Error('Nie udało się wysłać linku. Sprawdź adres e-mail.');
    set('rm_email', email);
  };
  RM.logout = () => { ['rm_token','rm_pro_until','rm_email'].forEach(k => set(k, null)); location.reload(); };

  // sprawdzenie dostępu Pro w bazie
  RM.refresh = async () => {
    const t = get('rm_token'); if (!t || !C.supabaseUrl) return RM.isPro();
    try {
      const r = await fetch(C.supabaseUrl + '/rest/v1/pro_access?select=pro_until', {
        headers: { apikey: C.supabaseKey, Authorization: 'Bearer ' + t } });
      if (r.status === 401) { set('rm_token', null); return RM.isPro(); }
      const d = await r.json();
      set('rm_pro_until', d[0] ? String(Date.parse(d[0].pro_until)) : '0');
    } catch(e) {}
    return RM.isPro();
  };

  // powrót z linku logowania: #access_token=...
  if (location.hash.includes('access_token=')) {
    const p = new URLSearchParams(location.hash.slice(1));
    set('rm_token', p.get('access_token'));
    try { const j = JSON.parse(atob(p.get('access_token').split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))); set('rm_email', j.email); } catch(e) {}
    history.replaceState(null, '', location.pathname);
  }

  // odznaka i blokada
  RM.badge = '<span class="rm-pro">PRO</span>';
  RM.go = () => { location.href = 'cennik.html'; };
  RM.lockEl = (el, label) => {
    el.classList.add('rm-locked');
    const o = document.createElement('a');
    o.className = 'rm-lock'; o.href = 'cennik.html';
    o.innerHTML = '<b>🔒 ' + (label || 'Treść w wersji Pro') + '</b><span>Pełny dostęp: ' + C.price + '</span>';
    el.appendChild(o);
  };
  RM.gate = () => {
    document.querySelectorAll('[data-pro]').forEach(el => {
      if (!RM.isPro()) RM.lockEl(el, el.dataset.pro || '');
      else if (RM.trial()) el.classList.add('rm-trial');
    });
  };

  const css = document.createElement('style');
  css.textContent = `
.rm-pro{display:inline-block;background:linear-gradient(135deg,#f4a261,#e63946);color:#fff;font-size:11px;font-weight:800;letter-spacing:.5px;padding:2px 7px;border-radius:6px;vertical-align:middle;margin-left:6px}
.rm-locked{position:relative;min-height:120px}
.rm-locked>*:not(.rm-lock){filter:blur(5px);pointer-events:none;user-select:none}
.rm-lock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:rgba(255,255,255,.55);text-decoration:none;color:#0b1f3a;border-radius:inherit;z-index:2}
.rm-lock b{font-size:17px}.rm-lock span{font-size:14px;background:#e63946;color:#fff;padding:6px 14px;border-radius:999px;font-weight:700}
.rm-bar{background:linear-gradient(90deg,#2a9d8f,#457b9d);color:#fff;text-align:center;font:600 14px/1.4 system-ui,sans-serif;padding:8px 12px}
.rm-bar a{color:#fff}`;
  document.head.appendChild(css);

  document.addEventListener('DOMContentLoaded', () => {
    if (RM.trial() && !document.body.dataset.nobar) {
      const b = document.createElement('div'); b.className = 'rm-bar';
      b.innerHTML = '🎁 Okres próbny: treści <b>PRO</b> są teraz dostępne bezpłatnie. <a href="cennik.html">Zobacz, co obejmuje Pro →</a>';
      document.body.prepend(b);
    }
    RM.gate();
    RM.refresh();
  });
})();
