document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBurger();
  initCounters();
  initScrollReveal();
  initPhoneMask();
  initContactForm();
});

/* ============================
   Header scroll effect
   ============================ */
function initHeader() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    header.classList.toggle('header--scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  }, { passive: true });
}

/* ============================
   Mobile burger menu
   ============================ */
function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--open');
    document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================
   Animated stat counters
   ============================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ============================
   Scroll reveal animations
   ============================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.service-card, .about-card, .step, .contact-form, .contact-block'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('reveal--visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

/* ============================
   Phone mask: +7 (XXX) XXX-XX-XX
   ============================ */
function initPhoneMask() {
  const phone = document.getElementById('phone');

  phone.addEventListener('focus', () => {
    if (!phone.value) phone.value = '+7 ';
  });

  phone.addEventListener('input', (e) => {
    const cursorWasAtEnd = phone.selectionStart === phone.value.length;
    phone.value = formatPhone(phone.value);
    if (cursorWasAtEnd) {
      phone.selectionStart = phone.selectionEnd = phone.value.length;
    }
  });

  phone.addEventListener('keydown', (e) => {
    const raw = phone.value.replace(/\D/g, '');
    if (e.key === 'Backspace' && raw.length <= 1) {
      e.preventDefault();
      phone.value = '';
    }
  });

  phone.addEventListener('blur', () => {
    const raw = phone.value.replace(/\D/g, '');
    if (raw.length <= 1) phone.value = '';
  });

  phone.addEventListener('paste', (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    phone.value = formatPhone(paste);
  });
}

function formatPhone(value) {
  let digits = value.replace(/\D/g, '');

  if (digits.startsWith('8')) {
    digits = '7' + digits.slice(1);
  }
  if (!digits.startsWith('7') && digits.length > 0) {
    digits = '7' + digits;
  }

  digits = digits.slice(0, 11);

  let result = '';
  if (digits.length > 0) result = '+' + digits[0];
  if (digits.length > 1) result += ' (' + digits.slice(1, 4);
  if (digits.length >= 4) result += ')';
  if (digits.length > 4) result += ' ' + digits.slice(4, 7);
  if (digits.length > 7) result += '-' + digits.slice(7, 9);
  if (digits.length > 9) result += '-' + digits.slice(9, 11);

  return result;
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length === 11 && digits.startsWith('7');
}

/* ============================
   Contact form + Telegram
   ============================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn__text');
  const btnLoader = submitBtn.querySelector('.btn__loader');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    setLoading(true);

    const formData = new FormData(form);

    try {
      const response = await fetch('/backend/send-telegram.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        showToast('Заявка отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        form.reset();
      } else {
        showToast(result.message || 'Произошла ошибка. Попробуйте позже.', 'error');
      }
    } catch {
      showToast('Ошибка сети. Проверьте подключение и попробуйте снова.', 'error');
    } finally {
      setLoading(false);
    }
  });

  function setLoading(loading) {
    submitBtn.disabled = loading;
    btnText.hidden = loading;
    btnLoader.hidden = !loading;
  }
}

function validateForm(form) {
  const name = form.querySelector('#name');
  const phone = form.querySelector('#phone');
  const email = form.querySelector('#email');

  if (!name.value.trim()) {
    showToast('Пожалуйста, введите ваше имя', 'error');
    name.focus();
    return false;
  }

  if (!phone.value.trim() && !email.value.trim()) {
    showToast('Укажите телефон или email для связи', 'error');
    phone.focus();
    return false;
  }

  if (phone.value.trim() && !isValidPhone(phone.value)) {
    showToast('Введите корректный номер телефона', 'error');
    phone.focus();
    return false;
  }

  if (email.value.trim() && !isValidEmail(email.value)) {
    showToast('Введите корректный email', 'error');
    email.focus();
    return false;
  }

  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================
   Toast notifications
   ============================ */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  toastMessage.textContent = message;
  toast.classList.remove('toast--error');
  if (type === 'error') {
    toast.classList.add('toast--error');
  }

  toast.classList.add('toast--visible');

  setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 4000);
}
