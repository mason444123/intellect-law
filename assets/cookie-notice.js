(() => {
  'use strict';
  const KEY = 'intellect_cookie_notice_v1';
  const root = document.querySelector('[data-cookie-notice]');
  if (!root) return;
  let closed = false;
  try { closed = localStorage.getItem(KEY) === 'closed'; } catch (_) {}
  if (closed) return;
  root.hidden = false;
  const button = root.querySelector('[data-cookie-close]');
  button.addEventListener('click', () => {
    try { localStorage.setItem(KEY, 'closed'); } catch (_) {}
    root.hidden = true;
  });
})();
