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
    policy: {
      meta: {
        title: 'Политика конфиденциальности | WebK — разработка сайтов и AI-интеграция',
        description: 'Политика конфиденциальности WebK. Условия обработки персональных данных при заказе услуг веб-разработки и AI-интеграции.',
      },
      title: 'Политика конфиденциальности',
      desc: 'Настоящая политика конфиденциальности регулирует порядок обработки персональных данных пользователей сайта WebK',
      update: 'Последнее обновление: 5 марта 2026 года',
      h2_1: '1. Общие положения',
      p1_1: 'Настоящая политика конфиденциальности (далее — «Политика») разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных пользователей сайта <strong>webk-it.ru</strong> (далее — «Сайт») компании <strong>WebK</strong> (K-Team).',
      p1_2: 'Используя Сайт и оставляя заявки через формы обратной связи, пользователь выражает своё согласие с условиями настоящей Политики. В случае несогласия с условиями Политики пользователь должен воздержаться от использования Сайта.',
      h2_2: '2. Персональные данные',
      p2_1: 'Под персональными данными в рамках настоящей Политики понимаются сведения, которые позволяют идентифицировать пользователя и которые он сознательно предоставляет при заполнении форм на Сайте:',
      li2_1: '<strong>Имя</strong> — для обращения к вам и персонализации коммуникации',
      li2_2: '<strong>Номер телефона</strong> — для оперативной связи и обсуждения проекта',
      li2_3: '<strong>Адрес электронной почты</strong> — для отправки документов, смет и подтверждений',
      li2_4: '<strong>Информация о проекте</strong> — описание задачи, выбранная услуга (разработка сайта, мобильное приложение, SEO, AI-интеграция) — для подготовки предложения',
      p2_2: 'Сайт не собирает и не обрабатывает специальные категории персональных данных, касающиеся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья.',
      h2_3: '3. Цели обработки персональных данных',
      p3_1: 'Сайт собирает и обрабатывает персональные данные исключительно в следующих целях:',
      li3_1: '<strong>Обратная связь</strong> — ответ на заявки, консультации по услугам веб-разработки, AI-интеграции и другим услугам',
      li3_2: '<strong>Предоставление информации об услугах</strong> — информирование о ценах, сроках выполнения работ, подготовка смет и технических заданий',
      li3_3: '<strong>Заключение и исполнение договора</strong> — составление договора на разработку сайта, приложения или иных цифровых продуктов',
      li3_4: '<strong>Улучшение работы сайта и аналитика</strong> — сбор статистики посещаемости, анализ поведения пользователей для оптимизации сайта',
      h2_4: '4. Способы сбора персональных данных',
      p4_1: 'Данные могут собираться через:',
      li4_1: '<strong>Форма заявки</strong> (раздел «Обсудим ваш проект?»)',
      li4_2: '<strong>Прямая связь в Telegram</strong> — при обращении через бота @webksite_bot',
      p4_2: 'При посещении Сайта автоматически могут собираться технические данные: IP-адрес, тип браузера, операционная система, дата и время посещения, просмотренные страницы. Эти данные используются для статистики и не позволяют идентифицировать пользователя без дополнительной информации.',
      h2_5: '5. Передача данных третьим лицам',
      p5_1: 'Компания WebK <strong>не передаёт</strong> персональные данные третьим лицам, за исключением следующих случаев:',
      li5_1: '<strong>Исполнения требований законодательства РФ</strong> — по запросу уполномоченных государственных органов (суд, полиция, прокуратура)',
      li5_2: '<strong>Передачи данных сервисам, обеспечивающим работу сайта</strong> — CRM-системы, почтовые сервисы, сервисы рассылок, при условии соблюдения ими конфиденциальности и защиты данных',
      li5_3: '<strong>Защиты прав и законных интересов компании</strong> — в случае нарушения пользователем условий использования сайта',
      p5_2: 'Все сервисы, привлекаемые для обработки персональных данных, обязуются соблюдать конфиденциальность и обеспечивать защиту данных в соответствии с законодательством РФ.',
      h2_6: '6. Cookies и аналитика',
      p6_1: 'Сайт может использовать файлы cookies и сторонние сервисы веб-аналитики (Яндекс.Метрика, Google Analytics) для:',
      li6_1: 'Улучшения работы сайта и удобства пользователей',
      li6_2: 'Сбора статистики посещаемости и анализа поведения пользователей',
      li6_3: 'Оптимизации рекламных кампаний',
      p6_2: 'Пользователь может отключить использование cookies в настройках своего браузера. Однако это может привести к некорректной работе некоторых функций сайта.',
      p6_3: 'Используя наш сайт, вы соглашаетесь на использование файлов cookies и обработку данных сервисами аналитики.',
      h2_7: '7. Права пользователей',
      p7_1: 'В соответствии с законодательством РФ пользователь имеет право:',
      li7_1: '<strong>Получить информацию</strong> о своих персональных данных, хранящихся у оператора',
      li7_2: '<strong>Требовать уточнения, блокировки или удаления</strong> персональных данных, если они являются неполными, устаревшими, недостоверными или обрабатываются с нарушениями',
      li7_3: '<strong>Отозвать согласие</strong> на обработку персональных данных в любое время',
      li7_4: '<strong>Обжаловать действия оператора</strong> в уполномоченном органе по защите прав субъектов персональных данных',
      p7_2: 'Для реализации своих прав пользователь может направить запрос в Telegram или на электронную почту (контактные данные указаны в разделе 8).',
      h2_8: '8. Контактные данные',
      p8_1: 'Все вопросы, связанные с обработкой персональных данных, можно направлять по следующим контактам:',
      telegram: 'Telegram:',
      email: 'Email:',
      h2_9: '9. Заключительные положения',
      p9_1: 'Компания WebK оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики вступает в силу с момента её размещения на Сайте, если иное не предусмотрено новой редакцией Политики.',
      p9_2: 'Действующая редакция Политики всегда доступна на данной странице. Продолжение использования Сайта после внесения изменений означает согласие пользователя с новой редакцией Политики.',
      rights: '© 2026 WebK (K-Team). Все права защищены.',
      back: '← Вернуться на главную',
      navLink: 'Политика конфиденциальности',
    },
    error404: {
      meta: {
        title: 'Страница не найдена (404) | WebK',
        description: 'Страница не найдена. Вернитесь на главную страницу WebK и продолжите просмотр услуг.',
      },
      code: '404',
      title: 'Страница не найдена',
      desc: 'Похоже, ссылка устарела или страница была перемещена. Вернитесь на главную и продолжите просмотр.',
      toHome: 'На главную',
      toServices: 'К услугам',
      navLink: 'Страница 404',
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
    policy: {
      meta: {
        title: 'Privacy Policy | WebK — Website Development & AI Integration',
        description: 'WebK Privacy Policy. Terms of personal data processing when ordering web development and AI integration services.',
      },
      title: 'Privacy Policy',
      desc: 'This privacy policy governs the processing of personal data of users of the WebK website',
      update: 'Last updated: March 5, 2026',
      h2_1: '1. General Provisions',
      p1_1: 'This privacy policy (hereinafter — the «Policy») is developed in accordance with applicable data protection laws and defines the procedure for processing personal data of users of the <strong>webk-it.ru</strong> website (hereinafter — the «Site») of <strong>WebK</strong> (K-Team).',
      p1_2: 'By using the Site and submitting requests through contact forms, the user agrees to the terms of this Policy. If you disagree with the Policy terms, you must refrain from using the Site.',
      h2_2: '2. Personal Data',
      p2_1: 'Personal data under this Policy means information that allows identification of the user and is voluntarily provided when filling out forms on the Site:',
      li2_1: '<strong>Name</strong> — for addressing you and personalizing communication',
      li2_2: '<strong>Phone number</strong> — for prompt contact and project discussion',
      li2_3: '<strong>Email address</strong> — for sending documents, estimates, and confirmations',
      li2_4: '<strong>Project information</strong> — task description, selected service (website development, mobile app, SEO, AI integration) — for preparing proposals',
      p2_2: 'The Site does not collect or process special categories of personal data concerning race, nationality, political views, religious or philosophical beliefs, or health status.',
      h2_3: '3. Purposes of Processing Personal Data',
      p3_1: 'The Site collects and processes personal data solely for the following purposes:',
      li3_1: '<strong>Contact</strong> — responding to requests, consultations on web development, AI integration and other services',
      li3_2: '<strong>Service information</strong> — informing about prices, deadlines, preparing estimates and technical specifications',
      li3_3: '<strong>Contract execution</strong> — drafting agreements for website, app or other digital product development',
      li3_4: '<strong>Site improvement and analytics</strong> — collecting visit statistics, analyzing user behavior to optimize the site',
      h2_4: '4. Methods of Collecting Personal Data',
      p4_1: 'Data may be collected through:',
      li4_1: '<strong>Contact form</strong> («Let\'s discuss your project?» section)',
      li4_2: '<strong>Direct contact via Telegram</strong> — when contacting via @webksite_bot',
      p4_2: 'When visiting the Site, technical data may be automatically collected: IP address, browser type, operating system, date and time of visit, pages viewed. This data is used for statistics and does not allow identification of the user without additional information.',
      h2_5: '5. Disclosure to Third Parties',
      p5_1: 'WebK <strong>does not disclose</strong> personal data to third parties, except in the following cases:',
      li5_1: '<strong>Legal compliance</strong> — upon request of authorized government bodies (court, police, prosecutor\'s office)',
      li5_2: '<strong>Service providers</strong> — CRM systems, email services, mailing services, provided they maintain confidentiality and data protection',
      li5_3: '<strong>Protecting company rights</strong> — in case of user violation of site terms of use',
      p5_2: 'All services involved in processing personal data undertake to maintain confidentiality and ensure data protection in accordance with applicable law.',
      h2_6: '6. Cookies and Analytics',
      p6_1: 'The Site may use cookies and third-party web analytics services (Yandex.Metrica, Google Analytics) for:',
      li6_1: 'Improving site performance and user experience',
      li6_2: 'Collecting visit statistics and analyzing user behavior',
      li6_3: 'Optimizing advertising campaigns',
      p6_2: 'Users can disable cookies in their browser settings. However, this may affect the proper functioning of some site features.',
      p6_3: 'By using our site, you agree to the use of cookies and data processing by analytics services.',
      h2_7: '7. User Rights',
      p7_1: 'Under applicable law, users have the right to:',
      li7_1: '<strong>Obtain information</strong> about their personal data held by the operator',
      li7_2: '<strong>Request correction, blocking or deletion</strong> of personal data if it is incomplete, outdated, inaccurate or processed in violation',
      li7_3: '<strong>Withdraw consent</strong> to processing of personal data at any time',
      li7_4: '<strong>Lodge a complaint</strong> with the supervisory authority for personal data protection',
      p7_2: 'To exercise your rights, you may send a request via Telegram or email (contact details are provided in Section 8).',
      h2_8: '8. Contact Information',
      p8_1: 'All questions regarding personal data processing may be sent to the following contacts:',
      telegram: 'Telegram:',
      email: 'Email:',
      h2_9: '9. Final Provisions',
      p9_1: 'WebK reserves the right to make changes to this Privacy Policy. The new version of the Policy takes effect upon publication on the Site, unless otherwise stated in the new version.',
      p9_2: 'The current version of the Policy is always available on this page. Continued use of the Site after changes constitutes your acceptance of the new Policy version.',
      rights: '© 2026 WebK (K-Team). All rights reserved.',
      back: '← Back to home',
      navLink: 'Privacy Policy',
    },
    error404: {
      meta: {
        title: 'Page not found (404) | WebK',
        description: 'The page was not found. Return to the WebK homepage and continue browsing our services.',
      },
      code: '404',
      title: 'Page not found',
      desc: 'The link may be outdated or the page has been moved. Return to the homepage to continue browsing.',
      toHome: 'Go to homepage',
      toServices: 'View services',
      navLink: '404 page',
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

  const isPolicyPage = document.querySelector('.policy-hero') || (typeof window !== 'undefined' && window.location.pathname.includes('privacy'));
  const is404Page = document.querySelector('.error-hero') || (typeof window !== 'undefined' && window.location.pathname.includes('404'));

  // Meta
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    if (isPolicyPage && t.policy) {
      metaDesc.setAttribute('content', t.policy.meta.description);
    } else if (is404Page && t.error404) {
      metaDesc.setAttribute('content', t.error404.meta.description);
    } else {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }
  if (isPolicyPage && t.policy) {
    document.title = t.policy.meta.title;
  } else if (is404Page && t.error404) {
    document.title = t.error404.meta.title;
  } else {
    document.title = t.meta.title;
  }

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
  if (t.policy) {
    document.querySelectorAll('[data-i18n="policy.navLink"]').forEach(el => { el.textContent = t.policy.navLink; });
  }
  if (t.error404) {
    document.querySelectorAll('[data-i18n="error404.navLink"]').forEach(el => { el.textContent = t.error404.navLink; });
  }

  // Policy page
  if (isPolicyPage && t.policy) {
    document.querySelectorAll('[data-i18n="policy.title"]').forEach(el => { el.textContent = t.policy.title; });
    document.querySelectorAll('[data-i18n="policy.desc"]').forEach(el => { el.textContent = t.policy.desc; });
    document.querySelectorAll('[data-i18n="policy.update"]').forEach(el => { el.textContent = t.policy.update; });
    document.querySelectorAll('[data-i18n="policy.h2_1"]').forEach(el => { el.textContent = t.policy.h2_1; });
    document.querySelectorAll('[data-i18n="policy.p1_1"]').forEach(el => { el.innerHTML = t.policy.p1_1; });
    document.querySelectorAll('[data-i18n="policy.p1_2"]').forEach(el => { el.textContent = t.policy.p1_2; });
    document.querySelectorAll('[data-i18n="policy.h2_2"]').forEach(el => { el.textContent = t.policy.h2_2; });
    document.querySelectorAll('[data-i18n="policy.p2_1"]').forEach(el => { el.textContent = t.policy.p2_1; });
    document.querySelectorAll('[data-i18n="policy.li2_1"]').forEach(el => { el.innerHTML = t.policy.li2_1; });
    document.querySelectorAll('[data-i18n="policy.li2_2"]').forEach(el => { el.innerHTML = t.policy.li2_2; });
    document.querySelectorAll('[data-i18n="policy.li2_3"]').forEach(el => { el.innerHTML = t.policy.li2_3; });
    document.querySelectorAll('[data-i18n="policy.li2_4"]').forEach(el => { el.innerHTML = t.policy.li2_4; });
    document.querySelectorAll('[data-i18n="policy.p2_2"]').forEach(el => { el.textContent = t.policy.p2_2; });
    document.querySelectorAll('[data-i18n="policy.h2_3"]').forEach(el => { el.textContent = t.policy.h2_3; });
    document.querySelectorAll('[data-i18n="policy.p3_1"]').forEach(el => { el.textContent = t.policy.p3_1; });
    document.querySelectorAll('[data-i18n="policy.li3_1"]').forEach(el => { el.innerHTML = t.policy.li3_1; });
    document.querySelectorAll('[data-i18n="policy.li3_2"]').forEach(el => { el.innerHTML = t.policy.li3_2; });
    document.querySelectorAll('[data-i18n="policy.li3_3"]').forEach(el => { el.innerHTML = t.policy.li3_3; });
    document.querySelectorAll('[data-i18n="policy.li3_4"]').forEach(el => { el.innerHTML = t.policy.li3_4; });
    document.querySelectorAll('[data-i18n="policy.h2_4"]').forEach(el => { el.textContent = t.policy.h2_4; });
    document.querySelectorAll('[data-i18n="policy.p4_1"]').forEach(el => { el.textContent = t.policy.p4_1; });
    document.querySelectorAll('[data-i18n="policy.li4_1"]').forEach(el => { el.innerHTML = t.policy.li4_1; });
    document.querySelectorAll('[data-i18n="policy.li4_2"]').forEach(el => { el.innerHTML = t.policy.li4_2; });
    document.querySelectorAll('[data-i18n="policy.p4_2"]').forEach(el => { el.textContent = t.policy.p4_2; });
    document.querySelectorAll('[data-i18n="policy.h2_5"]').forEach(el => { el.textContent = t.policy.h2_5; });
    document.querySelectorAll('[data-i18n="policy.p5_1"]').forEach(el => { el.innerHTML = t.policy.p5_1; });
    document.querySelectorAll('[data-i18n="policy.li5_1"]').forEach(el => { el.innerHTML = t.policy.li5_1; });
    document.querySelectorAll('[data-i18n="policy.li5_2"]').forEach(el => { el.innerHTML = t.policy.li5_2; });
    document.querySelectorAll('[data-i18n="policy.li5_3"]').forEach(el => { el.innerHTML = t.policy.li5_3; });
    document.querySelectorAll('[data-i18n="policy.p5_2"]').forEach(el => { el.textContent = t.policy.p5_2; });
    document.querySelectorAll('[data-i18n="policy.h2_6"]').forEach(el => { el.textContent = t.policy.h2_6; });
    document.querySelectorAll('[data-i18n="policy.p6_1"]').forEach(el => { el.textContent = t.policy.p6_1; });
    document.querySelectorAll('[data-i18n="policy.li6_1"]').forEach(el => { el.textContent = t.policy.li6_1; });
    document.querySelectorAll('[data-i18n="policy.li6_2"]').forEach(el => { el.textContent = t.policy.li6_2; });
    document.querySelectorAll('[data-i18n="policy.li6_3"]').forEach(el => { el.textContent = t.policy.li6_3; });
    document.querySelectorAll('[data-i18n="policy.p6_2"]').forEach(el => { el.textContent = t.policy.p6_2; });
    document.querySelectorAll('[data-i18n="policy.p6_3"]').forEach(el => { el.textContent = t.policy.p6_3; });
    document.querySelectorAll('[data-i18n="policy.h2_7"]').forEach(el => { el.textContent = t.policy.h2_7; });
    document.querySelectorAll('[data-i18n="policy.p7_1"]').forEach(el => { el.textContent = t.policy.p7_1; });
    document.querySelectorAll('[data-i18n="policy.li7_1"]').forEach(el => { el.innerHTML = t.policy.li7_1; });
    document.querySelectorAll('[data-i18n="policy.li7_2"]').forEach(el => { el.innerHTML = t.policy.li7_2; });
    document.querySelectorAll('[data-i18n="policy.li7_3"]').forEach(el => { el.innerHTML = t.policy.li7_3; });
    document.querySelectorAll('[data-i18n="policy.li7_4"]').forEach(el => { el.innerHTML = t.policy.li7_4; });
    document.querySelectorAll('[data-i18n="policy.p7_2"]').forEach(el => { el.textContent = t.policy.p7_2; });
    document.querySelectorAll('[data-i18n="policy.h2_8"]').forEach(el => { el.textContent = t.policy.h2_8; });
    document.querySelectorAll('[data-i18n="policy.p8_1"]').forEach(el => { el.textContent = t.policy.p8_1; });
    document.querySelectorAll('[data-i18n="policy.telegram"]').forEach(el => { el.textContent = t.policy.telegram; });
    document.querySelectorAll('[data-i18n="policy.email"]').forEach(el => { el.textContent = t.policy.email; });
    document.querySelectorAll('[data-i18n="policy.h2_9"]').forEach(el => { el.textContent = t.policy.h2_9; });
    document.querySelectorAll('[data-i18n="policy.p9_1"]').forEach(el => { el.textContent = t.policy.p9_1; });
    document.querySelectorAll('[data-i18n="policy.p9_2"]').forEach(el => { el.textContent = t.policy.p9_2; });
    document.querySelectorAll('[data-i18n="policy.rights"]').forEach(el => { el.textContent = t.policy.rights; });
    document.querySelectorAll('[data-i18n="policy.back"]').forEach(el => { el.textContent = t.policy.back; });
  }

  // 404 page
  if (is404Page && t.error404) {
    document.querySelectorAll('[data-i18n="error404.code"]').forEach(el => { el.textContent = t.error404.code; });
    document.querySelectorAll('[data-i18n="error404.title"]').forEach(el => { el.textContent = t.error404.title; });
    document.querySelectorAll('[data-i18n="error404.desc"]').forEach(el => { el.textContent = t.error404.desc; });
    document.querySelectorAll('[data-i18n="error404.toHome"]').forEach(el => { el.textContent = t.error404.toHome; });
    document.querySelectorAll('[data-i18n="error404.toServices"]').forEach(el => { el.textContent = t.error404.toServices; });
  }
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
