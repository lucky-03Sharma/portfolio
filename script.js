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

