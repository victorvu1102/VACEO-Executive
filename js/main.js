// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
mobileToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('vi-VN');
  }, 16);
}

const counters = document.querySelectorAll('.stat-num');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => observer.observe(c));

// ===== SEARCH =====
document.querySelector('.search-bar .btn-gold')?.addEventListener('click', () => {
  const q = document.getElementById('searchInput').value.trim();
  const industry = document.getElementById('industryFilter').value;
  if (q || industry) {
    alert(`Đang tìm kiếm: "${q}" ${industry ? '| Ngành: ' + industry : ''}`);
  }
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.value-card, .eco-card, .alumni-card, .event-card, .lecture-card, .case-card, .download-item');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('revealed'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObs.observe(el);
});
// Add .revealed style dynamically
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// ===== JOIN FORM =====
document.querySelector('.join-form .btn-gold')?.addEventListener('click', () => {
  const name = document.getElementById('joinName').value.trim();
  const email = document.getElementById('joinEmail').value.trim();
  const company = document.getElementById('joinCompany').value.trim();
  if (!name || !email || !company) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }
  alert(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn sớm nhất.`);
  document.getElementById('joinName').value = '';
  document.getElementById('joinEmail').value = '';
  document.getElementById('joinCompany').value = '';
});
