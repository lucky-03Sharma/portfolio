// Scroll to section when hero buttons are clicked
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-scroll');
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Floating parallax effect for hero background circles
(function () {
  const floats = Array.from(document.querySelectorAll('.floating-element'));
  if (!floats.length) return;

  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floats.forEach((el, index) => {
      const speed = (index + 1) * 15;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
})();

// Reveal sections on scroll
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach((el) => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
})();

// Project modal data (from your React code)
const PROJECT_DATA = {
  quizburst: {
    category: 'Web App',
    title: 'QuizBurst',
    fullDescription:
      'An online quiz application designed to provide a user-friendly environment for taking quizzes and earning certifications.',
    features: [
      'User-friendly interface',
      'Certification generation upon completion',
      'Secure user authentication',
      'Admin dashboard for quiz management',
      'Real-time score calculation',
    ],
    challenges: 'Implementing secure certification generation and ensuring exam integrity.',
    outcome: 'Created a robust platform for online assessment and certification.',
  },
  airbnb: {
    category: 'Web App',
    title: 'Airbnb Clone',
    fullDescription:
      'A full-stack booking platform mimicking the core features of Airbnb, including property listings, user authentication, and advanced search.',
    features: [
      'Property listing and management',
      'User authentication (Login/Signup)',
      'Advanced search and filtering by location/price',
      'Responsive design matching the official site',
      'Booking management system',
    ],
    challenges: 'Replicating the complex search logic and booking availability management.',
    outcome: 'Built a feature-rich clone demonstrating full-stack development capabilities.',
  },
};

// Modal logic
(function () {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const titleEl = document.getElementById('modal-title');
  const catEl = document.getElementById('modal-category');
  const descEl = document.getElementById('modal-description');
  const featEl = document.getElementById('modal-features');
  const challEl = document.getElementById('modal-challenges');
  const outEl = document.getElementById('modal-outcome');
  const closeBtn = document.getElementById('modal-close');

  function openProjectModal(key) {
    const data = PROJECT_DATA[key];
    if (!data) return;

    catEl.textContent = data.category;
    titleEl.textContent = data.title;
    descEl.textContent = data.fullDescription;

    featEl.innerHTML = '';
    data.features.forEach((f) => {
      const li = document.createElement('li');
      li.textContent = f;
      featEl.appendChild(li);
    });

    challEl.textContent = data.challenges;
    outEl.textContent = data.outcome;

    modal.classList.add('open');
  }

  document.querySelectorAll('.project-card[data-project]').forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      openProjectModal(key);
    });
  });

  function closeModal() {
    modal.classList.remove('open');
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

// Contact form alert
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      alert(
        `Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`
      );
      form.reset();
    }
  });
})();

