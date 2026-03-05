/* ============================
   i18n — Language switcher (RU/EN)
   ============================ */

const TRANSLATIONS = {
  ru: {
    meta: {
      description: 'Заказать лендинг, сделать сайт под ключ, добавить AI-интеграцию в проект. Разработка сайтов и мобильных приложений по всей России. Бесплатная консультация.',
      title: 'Сделать лендинг и сайт под ключ | AI-интеграция | WebK — по всей России',
    },
    nav: {
      services: 'Услуги',
      about: 'О нас',
      workflow: 'Как мы работаем',
      faq: 'Вопросы',
      contact: 'Контакты',
    },
    header: { cta: 'Обсудить проект' },
    burger: { aria: 'Меню' },
    hero: {
      titleBefore: 'Создаём ',
      titleHighlight: 'цифровые продукты',
      titleAfter: ', которые работают на ваш бизнес',
      subtitle: 'Сделать лендинг, заказать сайт под ключ, добавить AI в проект. Разработка по всей России — лендинги, корпоративные сайты, мобильные приложения.',
      ctaPrimary: 'Оставить заявку',
      ctaSecondary: 'Наши услуги',
      statProjects: 'Проектов',
      statClients: 'Клиентов',
      statYears: 'Лет опыта',
    },
    services: {
      tag: 'Услуги',
      title: 'Что мы делаем',
      subtitle: 'Полный цикл цифровых услуг для развития вашего бизнеса',
      website: {
        title: 'Разработка сайтов и лендингов',
        text: 'Сделать лендинг под ключ, заказать сайт, создать интернет-магазин. Лендинги, корпоративные сайты, веб-порталы. Адаптивный дизайн, высокая скорость. Работаем по всей России.',
        tags: ['Лендинг под ключ', 'Сайт на заказ', 'Интернет-магазины', 'Корпоративные сайты'],
      },
      app: {
        title: 'Мобильные приложения',
        text: 'Нативные и кроссплатформенные приложения для iOS и Android. От идеи до публикации в App Store и Google Play.',
        tags: ['iOS', 'Android', 'Кроссплатформа', 'UI/UX дизайн'],
      },
      seo: {
        title: 'SEO-продвижение',
        text: 'Комплексное продвижение в поисковых системах. Рост органического трафика, улучшение позиций и увеличение конверсии.',
        tags: ['Аудит сайта', 'Оптимизация', 'Контент-стратегия', 'Аналитика'],
      },
      ai: {
        title: 'AI-интеграция',
        text: 'Добавим искусственный интеллект в ваш проект: чат-боты, голосовые помощники, аналитика данных, автоматизация процессов.',
        tags: ['Чат-боты', 'ИИ-ассистенты', 'Автоматизация', 'LLM-интеграция'],
      },
    },
    about: {
      tag: 'О компании',
      title: 'Почему WebK?',
      subtitle: 'Мы — команда профессионалов, которая создаёт технологичные решения',
      card1: { title: 'Индивидуальный подход', text: 'Каждый проект уникален. Мы глубоко погружаемся в бизнес клиента и предлагаем решения, которые решают конкретные задачи.' },
      card2: { title: 'Прозрачный процесс', text: 'Регулярные отчёты, доступ к системе управления проектом и постоянная связь с менеджером на каждом этапе.' },
      card3: { title: 'Современные технологии', text: 'Используем актуальные инструменты и фреймворки, чтобы ваш продукт был быстрым, надёжным и масштабируемым.' },
      card4: { title: 'Поддержка после запуска', text: 'Не бросаем проект после сдачи. Техническая поддержка, обновления и развитие — мы всегда на связи.' },
    },
    faq: {
      tag: 'Частые вопросы',
      title: 'Ответы на популярные запросы',
      subtitle: 'То, что чаще всего ищут клиенты перед заказом',
      q1: 'Как сделать лендинг под ключ?',
      a1: 'Оставьте заявку — мы свяжемся в течение 30 минут. Обсудим цель, целевую аудиторию и бюджет. Создадим прототип, дизайн и разработаем лендинг с формой заявок и аналитикой. Срок — от 5 до 14 дней в зависимости от сложности.',
      q2: 'Сколько стоит разработка сайта?',
      a2: 'Лендинг — от 30 000 ₽, корпоративный сайт — от 80 000 ₽, интернет-магазин — от 150 000 ₽. Точная стоимость зависит от объёма страниц, дизайна и функционала. Бесплатная смета после обсуждения задачи.',
      q3: 'Как добавить AI-интеграцию в проект?',
      a3: 'Добавляем чат-ботов, голосовых помощников, интеграцию с ChatGPT/Claude и другими LLM. Внедряем ИИ для автоматизации поддержки, аналитики и персонализации. Работаем с существующими проектами и новыми разработками. Работаем по всей России.',
      q4: 'Работаете ли вы по всей России?',
      a4: 'Да. Мы работаем с клиентами по всей России удалённо. Консультации, разработка и поддержка — онлайн. Связь через Telegram, видеозвонки и общие чаты. NDA по запросу.',
    },
    workflow: {
      tag: 'Процесс',
      title: 'Как мы работаем',
      subtitle: 'От идеи до готового продукта за 4 простых шага',
      step1: { number: 'Шаг 1', title: 'Заявка и консультация', text: 'Вы оставляете заявку, мы связываемся, обсуждаем задачу и цели проекта.' },
      step2: { number: 'Шаг 2', title: 'Проектирование', text: 'Создаём прототипы, дизайн и техническое задание. Утверждаем с вами каждый этап.' },
      step3: { number: 'Шаг 3', title: 'Разработка', text: 'Пишем код, тестируем, показываем промежуточные результаты и вносим правки.' },
      step4: { number: 'Шаг 4', title: 'Запуск и поддержка', text: 'Запускаем проект, обучаем вашу команду и обеспечиваем дальнейшую поддержку.' },
    },
    contact: {
      tag: 'Контакты',
      title: 'Обсудим ваш проект?',
      subtitle: 'Заполните форму и мы свяжемся с вами в течение 30 минут',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Как к вам обращаться?',
      phoneLabel: 'Телефон',
      phonePlaceholder: '+7 (900) 123-45-67',
      emailLabel: 'E-mail',
      emailPlaceholder: 'mail@example.com',
      serviceLabel: 'Какая услуга интересует?',
      servicePlaceholder: 'Выберите услугу',
      serviceWebsite: 'Разработка сайта / лендинг',
      serviceApp: 'Мобильное приложение',
      serviceSeo: 'SEO-продвижение',
      serviceAi: 'AI-интеграция в проект',
      serviceComplex: 'Комплексное решение',
      messageLabel: 'Расскажите о проекте',
      messagePlaceholder: 'Опишите вашу задачу, бюджет и сроки...',
      submit: 'Отправить заявку',
      formNote: 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных',
      blockTitle: 'Свяжитесь с нами',
      blockText: 'Предпочитаете написать напрямую? Мы всегда на связи в Telegram.',
      telegramBtn: 'Написать в Telegram',
      quickTitle: 'Быстрый ответ',
      feature1: 'Ответ за 30 минут',
      feature2: 'Бесплатная консультация',
      feature3: 'NDA по запросу',
    },
    footer: {
      desc: 'Разработка цифровых продуктов для вашего бизнеса',
      services: 'Услуги',
      website: 'Разработка сайтов',
      app: 'Мобильные приложения',
      seo: 'SEO-продвижение',
      company: 'Компания',
      about: 'О нас',
      workflow: 'Как мы работаем',
      faq: 'Вопросы',
      contact: 'Контакты',
      rights: '© 2026 WebK. Все права защищены.',
    },
    toast: {
      success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      errorDefault: 'Произошла ошибка. Попробуйте позже.',
      errorNetwork: 'Ошибка сети. Проверьте подключение и попробуйте снова.',
      errorTimeout: 'Превышено время ожидания. Попробуйте позже.',
      validateName: 'Пожалуйста, введите ваше имя',
      validateContact: 'Укажите телефон или email для связи',
      validatePhone: 'Введите корректный номер телефона',
      validateEmail: 'Введите корректный email',
    },
  },
  en: {
    meta: {
      description: 'WebK — website development, mobile apps, and SEO. We turn ideas into digital products.',
      title: 'WebK — Web Development, Apps & SEO',
    },
    nav: {
      services: 'Services',
      about: 'About',
      workflow: 'How we work',
      faq: 'FAQ',
      contact: 'Contact',
    },
    header: { cta: 'Discuss project' },
    burger: { aria: 'Menu' },
    hero: {
      titleBefore: 'We create ',
      titleHighlight: 'digital products',
      titleAfter: ' that work for your business',
      subtitle: 'Website development, mobile apps, and SEO. Full-cycle approach from idea to result.',
      ctaPrimary: 'Leave a request',
      ctaSecondary: 'Our services',
      statProjects: 'Projects',
      statClients: 'Clients',
      statYears: 'Years of experience',
    },
    services: {
      tag: 'Services',
      title: 'What we do',
      subtitle: 'Full range of digital services for your business growth',
      website: {
        title: 'Website Development',
        text: 'Landing pages, corporate websites, e-commerce stores, and web portals. Responsive design, fast loading, user-friendly experience.',
        tags: ['Landing pages', 'Corporate sites', 'E-commerce', 'CRM systems'],
      },
      app: {
        title: 'Mobile Applications',
        text: 'Native and cross-platform apps for iOS and Android. From idea to App Store and Google Play.',
        tags: ['iOS', 'Android', 'Cross-platform', 'UI/UX design'],
      },
      seo: {
        title: 'SEO Promotion',
        text: 'Comprehensive search engine optimization. Organic traffic growth, better rankings, and higher conversion.',
        tags: ['Site audit', 'Optimization', 'Content strategy', 'Analytics'],
      },
      ai: {
        title: 'AI Integration',
        text: 'Add artificial intelligence to your project: chatbots, voice assistants, data analytics, process automation.',
        tags: ['Chatbots', 'AI assistants', 'Automation', 'LLM integration'],
      },
    },
    about: {
      tag: 'About company',
      title: 'Why WebK?',
      subtitle: 'We are a team of professionals who create tech-driven solutions',
      card1: { title: 'Individual approach', text: 'Every project is unique. We dive deep into the client\'s business and deliver solutions that solve real challenges.' },
      card2: { title: 'Transparent process', text: 'Regular reports, project management access, and continuous contact with your manager at every stage.' },
      card3: { title: 'Modern technologies', text: 'We use up-to-date tools and frameworks so your product is fast, reliable, and scalable.' },
      card4: { title: 'Post-launch support', text: 'We don\'t abandon projects after delivery. Technical support, updates, and development — we\'re always here.' },
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently asked questions',
      subtitle: 'What clients ask most before ordering',
      q1: 'How to order a landing page?',
      a1: 'Submit a request — we\'ll get back within 30 minutes. We\'ll discuss goals, target audience, and budget. We create a prototype, design, and develop a landing page with lead forms and analytics. Timeline: 5–14 days depending on complexity.',
      q2: 'How much does website development cost?',
      a2: 'Landing page — from $400, corporate site — from $1,000, e-commerce — from $2,000. Exact cost depends on page count, design, and features. Free quote after discussing your needs.',
      q3: 'How to add AI integration to a project?',
      a3: 'We add chatbots, voice assistants, ChatGPT/Claude and other LLM integration. We implement AI for support automation, analytics, and personalization. We work with existing projects and new developments. Remote work worldwide.',
      q4: 'Do you work across Russia?',
      a4: 'Yes. We work with clients across Russia remotely. Consultations, development, and support — all online. Communication via Telegram, video calls, and shared channels. NDA available on request.',
    },
    workflow: {
      tag: 'Process',
      title: 'How we work',
      subtitle: 'From idea to finished product in 4 simple steps',
      step1: { number: 'Step 1', title: 'Request & consultation', text: 'You submit a request, we get in touch, discuss your goals and project scope.' },
      step2: { number: 'Step 2', title: 'Planning', text: 'We create prototypes, design, and technical specification. We approve every stage with you.' },
      step3: { number: 'Step 3', title: 'Development', text: 'We write code, test, show you progress, and make adjustments along the way.' },
      step4: { number: 'Step 4', title: 'Launch & support', text: 'We launch the project, train your team, and provide ongoing support.' },
    },
    contact: {
      tag: 'Contact',
      title: 'Let\'s discuss your project?',
      subtitle: 'Fill out the form and we\'ll get back to you within 30 minutes',
      nameLabel: 'Your name',
      namePlaceholder: 'How should we address you?',
      phoneLabel: 'Phone',
      phonePlaceholder: '+1 (555) 123-4567',
      emailLabel: 'E-mail',
      emailPlaceholder: 'mail@example.com',
      serviceLabel: 'Which service interests you?',
      servicePlaceholder: 'Select a service',
      serviceWebsite: 'Website / landing',
      serviceApp: 'Mobile application',
      serviceSeo: 'SEO promotion',
      serviceAi: 'AI integration',
      serviceComplex: 'Comprehensive solution',
      messageLabel: 'Tell us about your project',
      messagePlaceholder: 'Describe your task, budget, and timeline...',
      submit: 'Submit request',
      formNote: 'By clicking, you agree to the processing of personal data',
      blockTitle: 'Get in touch',
      blockText: 'Prefer to write directly? We\'re always available on Telegram.',
      telegramBtn: 'Message on Telegram',
      quickTitle: 'Quick response',
      feature1: 'Reply within 30 minutes',
      feature2: 'Free consultation',
      feature3: 'NDA on request',
    },
    footer: {
      desc: 'Digital products for your business',
      services: 'Services',
      website: 'Website development',
      app: 'Mobile applications',
      seo: 'SEO promotion',
      company: 'Company',
      about: 'About us',
      workflow: 'How we work',
      faq: 'FAQ',
      contact: 'Contact',
      rights: '© 2026 WebK. All rights reserved.',
    },
    toast: {
      success: 'Request sent! We\'ll get back to you shortly.',
      errorDefault: 'Something went wrong. Please try again.',
      errorNetwork: 'Network error. Check your connection and try again.',
      errorTimeout: 'Request timeout. Please try again later.',
      validateName: 'Please enter your name',
      validateContact: 'Provide a phone number or email',
      validatePhone: 'Enter a valid phone number',
      validateEmail: 'Enter a valid email',
    },
  },
};

const LANG_KEY = 'k-team-lang';

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return saved === 'en' || saved === 'ru' ? saved : 'ru';
}

function setLang(lang) {
  if (lang !== 'ru' && lang !== 'en') return;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangSwitcher(lang);
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Meta
  document.querySelector('meta[name="description"]').setAttribute('content', t.meta.description);
  document.title = t.meta.title;

  // Nav
  document.querySelectorAll('[data-i18n="nav.services"]').forEach(el => { el.textContent = t.nav.services; });
  document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => { el.textContent = t.nav.about; });
  document.querySelectorAll('[data-i18n="nav.workflow"]').forEach(el => { el.textContent = t.nav.workflow; });
  document.querySelectorAll('[data-i18n="nav.faq"]').forEach(el => { el.textContent = t.nav.faq; });
  document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => { el.textContent = t.nav.contact; });

  // Header
  document.querySelectorAll('[data-i18n="header.cta"]').forEach(el => { el.textContent = t.header.cta; });
  document.querySelector('#burger')?.setAttribute('aria-label', t.burger.aria);

  // Hero
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    heroTitle.innerHTML = t.hero.titleBefore +
      '<span class="gradient-text">' + t.hero.titleHighlight + '</span>' +
      t.hero.titleAfter;
  }
  const heroSubtitle = document.querySelector('.hero__subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  document.querySelectorAll('[data-i18n="hero.ctaPrimary"]').forEach(el => { el.textContent = t.hero.ctaPrimary; });
  document.querySelectorAll('[data-i18n="hero.ctaSecondary"]').forEach(el => { el.textContent = t.hero.ctaSecondary; });
  document.querySelectorAll('[data-i18n="hero.statProjects"]').forEach(el => { el.textContent = t.hero.statProjects; });
  document.querySelectorAll('[data-i18n="hero.statClients"]').forEach(el => { el.textContent = t.hero.statClients; });
  document.querySelectorAll('[data-i18n="hero.statYears"]').forEach(el => { el.textContent = t.hero.statYears; });

  // Services
  document.querySelectorAll('[data-i18n="services.tag"]').forEach(el => { el.textContent = t.services.tag; });
  document.querySelectorAll('[data-i18n="services.title"]').forEach(el => { el.textContent = t.services.title; });
  document.querySelectorAll('[data-i18n="services.subtitle"]').forEach(el => { el.textContent = t.services.subtitle; });
  document.querySelectorAll('[data-i18n="services.website.title"]').forEach(el => { el.textContent = t.services.website.title; });
  document.querySelectorAll('[data-i18n="services.website.text"]').forEach(el => { el.textContent = t.services.website.text; });
  document.querySelectorAll('[data-i18n="services.app.title"]').forEach(el => { el.textContent = t.services.app.title; });
  document.querySelectorAll('[data-i18n="services.app.text"]').forEach(el => { el.textContent = t.services.app.text; });
  document.querySelectorAll('[data-i18n="services.seo.title"]').forEach(el => { el.textContent = t.services.seo.title; });
  document.querySelectorAll('[data-i18n="services.seo.text"]').forEach(el => { el.textContent = t.services.seo.text; });
  document.querySelectorAll('[data-i18n="services.ai.title"]').forEach(el => { el.textContent = t.services.ai.title; });
  document.querySelectorAll('[data-i18n="services.ai.text"]').forEach(el => { el.textContent = t.services.ai.text; });
  const websiteTags = document.querySelectorAll('[data-i18n="services.website.tags"]');
  websiteTags.forEach((el, i) => { el.textContent = t.services.website.tags[i] ?? el.textContent; });
  const appTags = document.querySelectorAll('[data-i18n="services.app.tags"]');
  appTags.forEach((el, i) => { el.textContent = t.services.app.tags[i] ?? el.textContent; });
  const seoTags = document.querySelectorAll('[data-i18n="services.seo.tags"]');
  seoTags.forEach((el, i) => { el.textContent = t.services.seo.tags[i] ?? el.textContent; });
  const aiTags = document.querySelectorAll('[data-i18n="services.ai.tags"]');
  aiTags.forEach((el, i) => { el.textContent = t.services.ai.tags[i] ?? el.textContent; });

  // About
  document.querySelectorAll('[data-i18n="about.tag"]').forEach(el => { el.textContent = t.about.tag; });
  document.querySelectorAll('[data-i18n="about.title"]').forEach(el => { el.textContent = t.about.title; });
  document.querySelectorAll('[data-i18n="about.subtitle"]').forEach(el => { el.textContent = t.about.subtitle; });
  document.querySelectorAll('[data-i18n="about.card1.title"]').forEach(el => { el.textContent = t.about.card1.title; });
  document.querySelectorAll('[data-i18n="about.card1.text"]').forEach(el => { el.textContent = t.about.card1.text; });
  document.querySelectorAll('[data-i18n="about.card2.title"]').forEach(el => { el.textContent = t.about.card2.title; });
  document.querySelectorAll('[data-i18n="about.card2.text"]').forEach(el => { el.textContent = t.about.card2.text; });
  document.querySelectorAll('[data-i18n="about.card3.title"]').forEach(el => { el.textContent = t.about.card3.title; });
  document.querySelectorAll('[data-i18n="about.card3.text"]').forEach(el => { el.textContent = t.about.card3.text; });
  document.querySelectorAll('[data-i18n="about.card4.title"]').forEach(el => { el.textContent = t.about.card4.title; });
  document.querySelectorAll('[data-i18n="about.card4.text"]').forEach(el => { el.textContent = t.about.card4.text; });

  // Workflow
  document.querySelectorAll('[data-i18n="faq.tag"]').forEach(el => { el.textContent = t.faq.tag; });
  document.querySelectorAll('[data-i18n="faq.title"]').forEach(el => { el.textContent = t.faq.title; });
  document.querySelectorAll('[data-i18n="faq.subtitle"]').forEach(el => { el.textContent = t.faq.subtitle; });
  document.querySelectorAll('[data-i18n="faq.q1"]').forEach(el => { el.textContent = t.faq.q1; });
  document.querySelectorAll('[data-i18n="faq.a1"]').forEach(el => { el.textContent = t.faq.a1; });
  document.querySelectorAll('[data-i18n="faq.q2"]').forEach(el => { el.textContent = t.faq.q2; });
  document.querySelectorAll('[data-i18n="faq.a2"]').forEach(el => { el.textContent = t.faq.a2; });
  document.querySelectorAll('[data-i18n="faq.q3"]').forEach(el => { el.textContent = t.faq.q3; });
  document.querySelectorAll('[data-i18n="faq.a3"]').forEach(el => { el.textContent = t.faq.a3; });
  document.querySelectorAll('[data-i18n="faq.q4"]').forEach(el => { el.textContent = t.faq.q4; });
  document.querySelectorAll('[data-i18n="faq.a4"]').forEach(el => { el.textContent = t.faq.a4; });

  document.querySelectorAll('[data-i18n="workflow.tag"]').forEach(el => { el.textContent = t.workflow.tag; });
  document.querySelectorAll('[data-i18n="workflow.title"]').forEach(el => { el.textContent = t.workflow.title; });
  document.querySelectorAll('[data-i18n="workflow.subtitle"]').forEach(el => { el.textContent = t.workflow.subtitle; });
  document.querySelectorAll('[data-i18n="workflow.step1.number"]').forEach(el => { el.textContent = t.workflow.step1.number; });
  document.querySelectorAll('[data-i18n="workflow.step1.title"]').forEach(el => { el.textContent = t.workflow.step1.title; });
  document.querySelectorAll('[data-i18n="workflow.step1.text"]').forEach(el => { el.textContent = t.workflow.step1.text; });
  document.querySelectorAll('[data-i18n="workflow.step2.number"]').forEach(el => { el.textContent = t.workflow.step2.number; });
  document.querySelectorAll('[data-i18n="workflow.step2.title"]').forEach(el => { el.textContent = t.workflow.step2.title; });
  document.querySelectorAll('[data-i18n="workflow.step2.text"]').forEach(el => { el.textContent = t.workflow.step2.text; });
  document.querySelectorAll('[data-i18n="workflow.step3.number"]').forEach(el => { el.textContent = t.workflow.step3.number; });
  document.querySelectorAll('[data-i18n="workflow.step3.title"]').forEach(el => { el.textContent = t.workflow.step3.title; });
  document.querySelectorAll('[data-i18n="workflow.step3.text"]').forEach(el => { el.textContent = t.workflow.step3.text; });
  document.querySelectorAll('[data-i18n="workflow.step4.number"]').forEach(el => { el.textContent = t.workflow.step4.number; });
  document.querySelectorAll('[data-i18n="workflow.step4.title"]').forEach(el => { el.textContent = t.workflow.step4.title; });
  document.querySelectorAll('[data-i18n="workflow.step4.text"]').forEach(el => { el.textContent = t.workflow.step4.text; });

  // Contact form
  document.querySelectorAll('[data-i18n="contact.tag"]').forEach(el => { el.textContent = t.contact.tag; });
  document.querySelectorAll('[data-i18n="contact.title"]').forEach(el => { el.textContent = t.contact.title; });
  document.querySelectorAll('[data-i18n="contact.subtitle"]').forEach(el => { el.textContent = t.contact.subtitle; });
  document.querySelectorAll('[data-i18n="contact.nameLabel"]').forEach(el => { el.textContent = t.contact.nameLabel; });
  document.querySelector('#name')?.setAttribute('placeholder', t.contact.namePlaceholder);
  document.querySelectorAll('[data-i18n="contact.phoneLabel"]').forEach(el => { el.textContent = t.contact.phoneLabel; });
  document.querySelector('#phone')?.setAttribute('placeholder', t.contact.phonePlaceholder);
  document.querySelectorAll('[data-i18n="contact.emailLabel"]').forEach(el => { el.textContent = t.contact.emailLabel; });
  document.querySelector('#email')?.setAttribute('placeholder', t.contact.emailPlaceholder);
  document.querySelectorAll('[data-i18n="contact.serviceLabel"]').forEach(el => { el.textContent = t.contact.serviceLabel; });
  const serviceSelect = document.querySelector('#service');
  if (serviceSelect) {
    const opts = serviceSelect.querySelectorAll('option');
    opts.forEach((opt, i) => {
      if (i === 0) opt.textContent = t.contact.servicePlaceholder;
      else if (opt.value === 'website') opt.textContent = t.contact.serviceWebsite;
      else if (opt.value === 'app') opt.textContent = t.contact.serviceApp;
      else if (opt.value === 'seo') opt.textContent = t.contact.serviceSeo;
      else if (opt.value === 'ai') opt.textContent = t.contact.serviceAi;
      else if (opt.value === 'complex') opt.textContent = t.contact.serviceComplex;
    });
  }
  document.querySelectorAll('[data-i18n="contact.messageLabel"]').forEach(el => { el.textContent = t.contact.messageLabel; });
  document.querySelector('#message')?.setAttribute('placeholder', t.contact.messagePlaceholder);
  document.querySelectorAll('[data-i18n="contact.submit"]').forEach(el => { el.textContent = t.contact.submit; });
  document.querySelectorAll('[data-i18n="contact.formNote"]').forEach(el => { el.textContent = t.contact.formNote; });
  document.querySelectorAll('[data-i18n="contact.blockTitle"]').forEach(el => { el.textContent = t.contact.blockTitle; });
  document.querySelectorAll('[data-i18n="contact.blockText"]').forEach(el => { el.textContent = t.contact.blockText; });
  document.querySelectorAll('[data-i18n="contact.telegramBtn"]').forEach(el => { el.textContent = t.contact.telegramBtn; });
  document.querySelectorAll('[data-i18n="contact.quickTitle"]').forEach(el => { el.textContent = t.contact.quickTitle; });
  document.querySelectorAll('[data-i18n="contact.feature1"]').forEach(el => { el.textContent = t.contact.feature1; });
  document.querySelectorAll('[data-i18n="contact.feature2"]').forEach(el => { el.textContent = t.contact.feature2; });
  document.querySelectorAll('[data-i18n="contact.feature3"]').forEach(el => { el.textContent = t.contact.feature3; });

  // Footer
  document.querySelectorAll('[data-i18n="footer.desc"]').forEach(el => { el.textContent = t.footer.desc; });
  document.querySelectorAll('[data-i18n="footer.services"]').forEach(el => { el.textContent = t.footer.services; });
  document.querySelectorAll('[data-i18n="footer.website"]').forEach(el => { el.textContent = t.footer.website; });
  document.querySelectorAll('[data-i18n="footer.app"]').forEach(el => { el.textContent = t.footer.app; });
  document.querySelectorAll('[data-i18n="footer.seo"]').forEach(el => { el.textContent = t.footer.seo; });
  document.querySelectorAll('[data-i18n="footer.company"]').forEach(el => { el.textContent = t.footer.company; });
  document.querySelectorAll('[data-i18n="footer.about"]').forEach(el => { el.textContent = t.footer.about; });
  document.querySelectorAll('[data-i18n="footer.workflow"]').forEach(el => { el.textContent = t.footer.workflow; });
  document.querySelectorAll('[data-i18n="footer.faq"]').forEach(el => { el.textContent = t.footer.faq; });
  document.querySelectorAll('[data-i18n="footer.contact"]').forEach(el => { el.textContent = t.footer.contact; });
  document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el => { el.textContent = t.footer.rights; });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
    btn.classList.toggle('lang-switcher__btn--active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });
}

function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangSwitcher(lang);

  document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function getTranslations(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS.ru;
}
