(function () {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach((section) => section.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((section) => observer.observe(section));
})();

(function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === id ? '#f4f6fb' : '#b5bdcf';
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
})();

