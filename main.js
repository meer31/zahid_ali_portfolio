// ========================
// NAV SCROLL BEHAVIOR
// ========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ========================
// HAMBURGER MENU
// ========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks = document.querySelectorAll('.mob-link');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ========================
// SCROLL REVEAL
// ========================
const revealElements = document.querySelectorAll(
  '.about-grid, .skill-card, .timeline-item, .project-card, .cert-card, .contact-inner, .section-title, .section-label'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Stagger skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});

// ========================
// ACTIVE NAV LINK
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));

// ========================
// CONTACT FORM
// ========================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ========================
// SMOOTH ACTIVE NAV STYLE
// ========================
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: #fff; position: relative; }
.nav-links a.active::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 2px; background: #00e5ff; border-radius: 2px; }`;
document.head.appendChild(style);
