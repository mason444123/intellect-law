(() => {
  'use strict';
  const KEY = 'intellect_cookie_notice_v1';
  const root = document.querySelector('[data-cookie-notice]');
  if (!root) return;
  let closed = false;
  try { closed = localStorage.getItem(KEY) === 'closed'; } catch (_) {}
  if (closed) return;
  root.hidden = false;
  document.body.classList.add('cookie-notice-open');
  const updateHeight = () => document.documentElement.style.setProperty('--cookie-notice-height', `${Math.ceil(root.getBoundingClientRect().height)}px`);
  updateHeight();
  const observer = 'ResizeObserver' in window ? new ResizeObserver(updateHeight) : null;
  observer?.observe(root);
  window.addEventListener('resize', updateHeight);
  const button = root.querySelector('[data-cookie-close]');
  button.addEventListener('click', () => {
    try { localStorage.setItem(KEY, 'closed'); } catch (_) {}
    root.hidden = true;
    document.body.classList.remove('cookie-notice-open');
    document.documentElement.style.removeProperty('--cookie-notice-height');
    observer?.disconnect();
    window.removeEventListener('resize', updateHeight);
  });
})();
