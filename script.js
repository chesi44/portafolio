// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  navMenu.classList.toggle('open', !isOpen);
});

// Cierra el menú después de elegir una sección
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

// Actualizá este correo por el tuyo antes de publicar el portafolio.
const email = 'danielgerman13@hotmail.com';
const emailLink = document.querySelector('#email-link');
const copyEmailButton = document.querySelector('#copy-email');
const copyFeedback = document.querySelector('#copy-feedback');
emailLink.href = `mailto:${email}`;

copyEmailButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = '¡Correo copiado!';
  } catch {
    copyFeedback.textContent = `Mi correo: ${email}`;
  }
});
