import type { Locale } from "./config";

export type HomeDictionary = {
  nav: {
    about: string;
    marketplace: string;
    business: string;
    contacts: string;
    openMarketplace: string;
  };
  hero: {
    line1: string;
    line2: string;
    subtitle: string;
    phoneAlt: string;
    scrollAria: string;
  };
  onePlace: {
    tag: string;
    titleLine1: string;
    titleLine2Before: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    listings: string;
    categories: { id: string; title: string; count: string }[];
  };
  telegram: {
    tag: string;
    title: [string, string, string];
    subtitle: string;
    cta: string;
    phoneAlt: string;
    prevAria: string;
    nextAria: string;
    slides: { stepTitle: string; stepText: string }[];
    features: { title: string; text: string }[];
  };
  everyone: {
    labelDiscover: string;
    labelActive: string;
    title: string;
    titleAccent: string;
    script: [string, string, string];
    privateTitle: string;
    privateText: string;
    businessTitle: string;
    businessText: string;
    more: string;
    sofa: string;
    electrician: string;
    sneakers: string;
    views: string;
    newClients: string;
  };
  connects: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    text: string;
    footer: string;
    pairs: {
      badge: string;
      cards: {
        role: string;
        title: string;
        price?: string;
        location: string;
        caption: string;
      }[];
    }[];
  };
  germany: {
    tag: string;
    mapAlt: string;
    mapHint: string;
    activeAds: string;
    newWeek: string;
    view: string;
  };
  footer: {
    topAria: string;
    tagline: string;
    tags: [string, string, string, string];
    join: string;
    qrTitle: string;
    qrTextLine1: string;
    qrTextLine2: string;
    qrAlt: string;
    privacy: string;
  };
};

const ru: HomeDictionary = {
  nav: {
    about: "О нас",
    marketplace: "Marketplace",
    business: "Для Бизнеса",
    contacts: "Контакты",
    openMarketplace: "Открыть Marketplace",
  },
  hero: {
    line1: "TRADE",
    line2: "GROUND",
    subtitle: "MARKETPLACE ДЛЯ ЖИЗНИ В ГЕРМАНИИ",
    phoneAlt: "Экран приложения Trade Ground",
    scrollAria: "Прокрутить вниз",
  },
  onePlace: {
    tag: "02 — ONE PLACE",
    titleLine1: "ONE PLACE.",
    titleLine2Before: "ALL YOU ",
    titleAccent: "NEED",
    subtitle: "Товары, услуги и возможности в одном пространстве",
    cta: "Открыть Marketplace",
    listings: "объявлений",
    categories: [
      { id: "c1", title: "Авто", count: "15+ объявлений" },
      { id: "c2", title: "Мебель", count: "850+ объявлений" },
      { id: "c3", title: "Электроника", count: "50+ объявлений" },
      { id: "c4", title: "Недвижимость", count: "1150+ объявлений" },
      { id: "c5", title: "Мода и стиль", count: "750+ объявлений" },
      { id: "c6", title: "Спорт и хобби", count: "200+ объявлений" },
      { id: "c7", title: "Красота и здоровье", count: "350+ объявлений" },
      { id: "c8", title: "Бизнес", count: "2500+ объявлений" },
      { id: "c9", title: "Детские товары", count: "650+ объявлений" },
      { id: "c10", title: "Дом и сад", count: "550+ объявлений" },
      { id: "c11", title: "Услуги и работа", count: "1350+ объявлений" },
      { id: "c12", title: "Животные", count: "25+ объявлений" },
    ],
  },
  telegram: {
    tag: "03 — POWERED BY TELEGRAM",
    title: ["MARKETPLACE", "В ПРИВЫЧНОМ", "МЕССЕНДЖЕРЕ"],
    subtitle:
      "TradeGround работает прямо в Telegram. Никаких дополнительных приложений — открывайте Marketplace и начинайте пользоваться",
    cta: "Открыть Tradeground",
    phoneAlt: "TradeGround в Telegram",
    prevAria: "Предыдущий слайд",
    nextAria: "Следующий слайд",
    slides: [
      {
        stepTitle: "Telegram Bot",
        stepText: "Запустите бота и откройте Marketplace",
      },
      {
        stepTitle: "Marketplace",
        stepText: "Находите товары, услуги и размещайте объявления",
      },
      {
        stepTitle: "Прямой контакт",
        stepText: "Связывайтесь с продавцами и специалистами через Telegram",
      },
    ],
    features: [
      {
        title: "Доступ в 1 клик",
        text: "Не нужно устанавливать ещё одно приложение",
      },
      {
        title: "Прямой контакт",
        text: "Нашли нужное — сразу напишите продавцу или специалисту",
      },
      {
        title: "Понятный язык",
        text: "Ищите, продавайте и общайтесь без языкового барьера",
      },
    ],
  },
  everyone: {
    labelDiscover: "02 — DISCOVER",
    labelActive: "04 — FOR EVERYONE",
    title: "У КАЖДОГО",
    titleAccent: "СВОЯ ЦЕЛЬ",
    script: ["Товары.", "Услуги.", "Возможности."],
    privateTitle: "Для частных лиц",
    privateText:
      "Покупайте. Продавайте. Находите рядом. Всё необходимое в вашем городе — с прямой связью через Telegram.",
    businessTitle: "Для бизнеса",
    businessText:
      "Больше возможностей для продаж и роста. Профессиональный профиль, продвижение и инструменты для работы с клиентами.",
    more: "Подробнее",
    sofa: "Диван IKEA",
    electrician: "Электрик",
    sneakers: "Кроссовки Nike",
    views: "просмотров за 7 дней",
    newClients: "Новые клиенты",
  },
  connects: {
    tag: "05 — TRADEGROUND CONNECTS",
    titleLine1: "КТО-ТО ИЩЕТ.",
    titleLine2: "КТО-ТО ПРЕДЛАГАЕТ",
    lead: "TRADEGROUND ОБЪЕДИНЯЕТ.",
    text: "Людей, товары, услуги и возможности",
    footer: "ПО ВСЕЙ ГЕРМАНИИ",
    pairs: [
      {
        badge: "ПОКУПКА УСПЕШНА!",
        cards: [
          {
            role: "Продавец",
            title: "Продаю велосипед",
            price: "166€",
            location: "Hamburg",
            caption:
              "Надежный и стильный велосипед. Идеален для города и путешествий!",
          },
          {
            role: "Покупатель",
            title: "Ищу велосипед",
            location: "Hamburg",
            caption: "Ищу надежный велосипед для города. Буду рад предложениям!",
          },
        ],
      },
      {
        badge: "МАСТЕР НАЙДЕН!",
        cards: [
          {
            role: "Клиент",
            title: "Нужен мастер для сборки кухни",
            location: "Berlin",
            caption: "Ищу мастера для сборки кухни. Нужен аккуратный монтаж.",
          },
          {
            role: "Мастер",
            title: "Собираю мебель",
            location: "Berlin и рядом",
            caption: "Собираю кухни и мебель. Выезжаю по Берлину и рядом.",
          },
        ],
      },
      {
        badge: "РАБОТА НАЙДЕНА!",
        cards: [
          {
            role: "Соискатель",
            title: "Ищу работу",
            location: "Köln",
            caption: "Ищу работу в Köln. Рассмотрю разные варианты занятости.",
          },
          {
            role: "Работодатель",
            title: "Ищем курьера",
            location: "Köln",
            caption:
              "Ищем курьера в Köln. Предлагаем гибкий график и стабильную занятость.",
          },
        ],
      },
    ],
  },
  germany: {
    tag: "06 — ACROSS GERMANY",
    mapAlt: "Карта Германии",
    mapHint: "Тяните карту · Колесо — масштаб",
    activeAds: "активных объявлений",
    newWeek: "новых за неделю",
    view: "СМОТРЕТЬ",
  },
  footer: {
    topAria: "Наверх",
    tagline:
      "Единая экосистема товаров, услуг и возможностей для жизни в Германии",
    tags: ["TELEGRAM", "MARKETPLACE", "SERVICES", "COMMUNITY"],
    join: "Присоединиться",
    qrTitle: "TRADEGROUND В ВАШЕМ ТЕЛЕФОНЕ",
    qrTextLine1: "Сканируйте QR-код, чтобы",
    qrTextLine2: "открыть Marketplace",
    qrAlt: "QR-код TradeGround",
    privacy: "Политика конфиденциальности",
  },
};

const ua: HomeDictionary = {
  nav: {
    about: "Про нас",
    marketplace: "Marketplace",
    business: "Для бізнесу",
    contacts: "Контакти",
    openMarketplace: "Відкрити Marketplace",
  },
  hero: {
    line1: "TRADE",
    line2: "GROUND",
    subtitle: "MARKETPLACE ДЛЯ ЖИТТЯ В НІМЕЧЧИНІ",
    phoneAlt: "Екран застосунку Trade Ground",
    scrollAria: "Прокрутити вниз",
  },
  onePlace: {
    tag: "02 — ONE PLACE",
    titleLine1: "ONE PLACE.",
    titleLine2Before: "ALL YOU ",
    titleAccent: "NEED",
    subtitle: "Товари, послуги й можливості в одному просторі",
    cta: "Відкрити Marketplace",
    listings: "оголошень",
    categories: [
      { id: "c1", title: "Авто", count: "15+ оголошень" },
      { id: "c2", title: "Меблі", count: "850+ оголошень" },
      { id: "c3", title: "Електроніка", count: "50+ оголошень" },
      { id: "c4", title: "Нерухомість", count: "1150+ оголошень" },
      { id: "c5", title: "Мода та стиль", count: "750+ оголошень" },
      { id: "c6", title: "Спорт і хобі", count: "200+ оголошень" },
      { id: "c7", title: "Краса та здоров’я", count: "350+ оголошень" },
      { id: "c8", title: "Бізнес", count: "2500+ оголошень" },
      { id: "c9", title: "Дитячі товари", count: "650+ оголошень" },
      { id: "c10", title: "Дім і сад", count: "550+ оголошень" },
      { id: "c11", title: "Послуги та робота", count: "1350+ оголошень" },
      { id: "c12", title: "Тварини", count: "25+ оголошень" },
    ],
  },
  telegram: {
    tag: "03 — POWERED BY TELEGRAM",
    title: ["MARKETPLACE", "У ЗВИЧНОМУ", "МЕСЕНДЖЕРІ"],
    subtitle:
      "TradeGround працює прямо в Telegram. Жодних додаткових застосунків — відкривайте Marketplace і починайте користуватись",
    cta: "Відкрити Tradeground",
    phoneAlt: "TradeGround у Telegram",
    prevAria: "Попередній слайд",
    nextAria: "Наступний слайд",
    slides: [
      {
        stepTitle: "Telegram Bot",
        stepText: "Запустіть бота й відкрийте Marketplace",
      },
      {
        stepTitle: "Marketplace",
        stepText: "Знаходьте товари, послуги та розміщуйте оголошення",
      },
      {
        stepTitle: "Прямий контакт",
        stepText: "Зв’язуйтесь із продавцями та спеціалістами через Telegram",
      },
    ],
    features: [
      {
        title: "Доступ в 1 клік",
        text: "Не потрібно встановлювати ще один застосунок",
      },
      {
        title: "Прямий контакт",
        text: "Знайшли потрібне — одразу напишіть продавцю або спеціалісту",
      },
      {
        title: "Зрозуміла мова",
        text: "Шукайте, продавайте й спілкуйтесь без мовного бар’єра",
      },
    ],
  },
  everyone: {
    labelDiscover: "02 — DISCOVER",
    labelActive: "04 — FOR EVERYONE",
    title: "У КОЖНОГО",
    titleAccent: "СВОЯ МЕТА",
    script: ["Товари.", "Послуги.", "Можливості."],
    privateTitle: "Для приватних осіб",
    privateText:
      "Купуйте. Продавайте. Знаходьте поруч. Усе необхідне у вашому місті — з прямим зв’язком через Telegram.",
    businessTitle: "Для бізнесу",
    businessText:
      "Більше можливостей для продажів і зростання. Професійний профіль, просування та інструменти для роботи з клієнтами.",
    more: "Детальніше",
    sofa: "Диван IKEA",
    electrician: "Електрик",
    sneakers: "Кросівки Nike",
    views: "переглядів за 7 днів",
    newClients: "Нові клієнти",
  },
  connects: {
    tag: "05 — TRADEGROUND CONNECTS",
    titleLine1: "ХТОСЬ ШУКАЄ.",
    titleLine2: "ХТОСЬ ПРОПОНУЄ",
    lead: "TRADEGROUND ОБ’ЄДНУЄ.",
    text: "Людей, товари, послуги й можливості",
    footer: "ПО ВСІЙ НІМЕЧЧИНІ",
    pairs: [
      {
        badge: "ПОКУПКА УСПІШНА!",
        cards: [
          {
            role: "Продавець",
            title: "Продаю велосипед",
            price: "166€",
            location: "Hamburg",
            caption:
              "Надійний і стильний велосипед. Ідеальний для міста та подорожей!",
          },
          {
            role: "Покупець",
            title: "Шукаю велосипед",
            location: "Hamburg",
            caption: "Шукаю надійний велосипед для міста. Буду радий пропозиціям!",
          },
        ],
      },
      {
        badge: "МАЙСТРА ЗНАЙДЕНО!",
        cards: [
          {
            role: "Клієнт",
            title: "Потрібен майстер для збирання кухні",
            location: "Berlin",
            caption: "Шукаю майстра для збирання кухні. Потрібен акуратний монтаж.",
          },
          {
            role: "Майстер",
            title: "Збираю меблі",
            location: "Berlin і поруч",
            caption: "Збираю кухні та меблі. Виїжджаю по Берліну та поруч.",
          },
        ],
      },
      {
        badge: "РОБОТУ ЗНАЙДЕНО!",
        cards: [
          {
            role: "Шукач роботи",
            title: "Шукаю роботу",
            location: "Köln",
            caption: "Шукаю роботу в Köln. Розгляну різні варіанти зайнятості.",
          },
          {
            role: "Роботодавець",
            title: "Шукаємо кур’єра",
            location: "Köln",
            caption:
              "Шукаємо кур’єра в Köln. Пропонуємо гнучкий графік і стабільну зайнятість.",
          },
        ],
      },
    ],
  },
  germany: {
    tag: "06 — ACROSS GERMANY",
    mapAlt: "Карта Німеччини",
    mapHint: "Тягніть карту · Коліщатко — масштаб",
    activeAds: "активних оголошень",
    newWeek: "нових за тиждень",
    view: "ДИВИТИСЬ",
  },
  footer: {
    topAria: "Нагору",
    tagline:
      "Єдина екосистема товарів, послуг і можливостей для життя в Німеччині",
    tags: ["TELEGRAM", "MARKETPLACE", "SERVICES", "COMMUNITY"],
    join: "Приєднатися",
    qrTitle: "TRADEGROUND У ВАШОМУ ТЕЛЕФОНІ",
    qrTextLine1: "Скануйте QR-код, щоб",
    qrTextLine2: "відкрити Marketplace",
    qrAlt: "QR-код TradeGround",
    privacy: "Політика конфіденційності",
  },
};

const en: HomeDictionary = {
  nav: {
    about: "About us",
    marketplace: "Marketplace",
    business: "For Business",
    contacts: "Contacts",
    openMarketplace: "Open Marketplace",
  },
  hero: {
    line1: "TRADE",
    line2: "GROUND",
    subtitle: "MARKETPLACE FOR LIFE IN GERMANY",
    phoneAlt: "Trade Ground app screen",
    scrollAria: "Scroll down",
  },
  onePlace: {
    tag: "02 — ONE PLACE",
    titleLine1: "ONE PLACE.",
    titleLine2Before: "ALL YOU ",
    titleAccent: "NEED",
    subtitle: "Goods, services and opportunities in one space",
    cta: "Open Marketplace",
    listings: "listings",
    categories: [
      { id: "c1", title: "Cars", count: "15+ listings" },
      { id: "c2", title: "Furniture", count: "850+ listings" },
      { id: "c3", title: "Electronics", count: "50+ listings" },
      { id: "c4", title: "Real estate", count: "1150+ listings" },
      { id: "c5", title: "Fashion & style", count: "750+ listings" },
      { id: "c6", title: "Sport & hobbies", count: "200+ listings" },
      { id: "c7", title: "Beauty & health", count: "350+ listings" },
      { id: "c8", title: "Business", count: "2500+ listings" },
      { id: "c9", title: "Kids products", count: "650+ listings" },
      { id: "c10", title: "Home & garden", count: "550+ listings" },
      { id: "c11", title: "Services & jobs", count: "1350+ listings" },
      { id: "c12", title: "Pets", count: "25+ listings" },
    ],
  },
  telegram: {
    tag: "03 — POWERED BY TELEGRAM",
    title: ["MARKETPLACE", "IN YOUR FAMILIAR", "MESSENGER"],
    subtitle:
      "TradeGround works right inside Telegram. No extra apps — open the Marketplace and start using it",
    cta: "Open Tradeground",
    phoneAlt: "TradeGround in Telegram",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    slides: [
      {
        stepTitle: "Telegram Bot",
        stepText: "Launch the bot and open the Marketplace",
      },
      {
        stepTitle: "Marketplace",
        stepText: "Find goods, services and post listings",
      },
      {
        stepTitle: "Direct contact",
        stepText: "Connect with sellers and specialists via Telegram",
      },
    ],
    features: [
      {
        title: "1-click access",
        text: "No need to install yet another app",
      },
      {
        title: "Direct contact",
        text: "Found what you need — message the seller or specialist right away",
      },
      {
        title: "Clear language",
        text: "Search, sell and chat without a language barrier",
      },
    ],
  },
  everyone: {
    labelDiscover: "02 — DISCOVER",
    labelActive: "04 — FOR EVERYONE",
    title: "EVERYONE HAS",
    titleAccent: "THEIR GOAL",
    script: ["Goods.", "Services.", "Opportunities."],
    privateTitle: "For individuals",
    privateText:
      "Buy. Sell. Find nearby. Everything you need in your city — with direct contact via Telegram.",
    businessTitle: "For business",
    businessText:
      "More ways to sell and grow. A professional profile, promotion and tools to work with clients.",
    more: "Learn more",
    sofa: "IKEA sofa",
    electrician: "Electrician",
    sneakers: "Nike sneakers",
    views: "views in 7 days",
    newClients: "New clients",
  },
  connects: {
    tag: "05 — TRADEGROUND CONNECTS",
    titleLine1: "SOMEONE IS LOOKING.",
    titleLine2: "SOMEONE IS OFFERING",
    lead: "TRADEGROUND CONNECTS.",
    text: "People, goods, services and opportunities",
    footer: "ACROSS GERMANY",
    pairs: [
      {
        badge: "PURCHASE SUCCESS!",
        cards: [
          {
            role: "Seller",
            title: "Selling a bike",
            price: "166€",
            location: "Hamburg",
            caption:
              "A reliable and stylish bike. Perfect for the city and travel!",
          },
          {
            role: "Buyer",
            title: "Looking for a bike",
            location: "Hamburg",
            caption: "Looking for a reliable city bike. Open to offers!",
          },
        ],
      },
      {
        badge: "PRO FOUND!",
        cards: [
          {
            role: "Client",
            title: "Need a pro to assemble a kitchen",
            location: "Berlin",
            caption: "Looking for a specialist to assemble a kitchen. Careful install needed.",
          },
          {
            role: "Pro",
            title: "I assemble furniture",
            location: "Berlin and nearby",
            caption: "I assemble kitchens and furniture. I travel across Berlin and nearby.",
          },
        ],
      },
      {
        badge: "JOB FOUND!",
        cards: [
          {
            role: "Job seeker",
            title: "Looking for a job",
            location: "Köln",
            caption: "Looking for a job in Köln. Open to different types of work.",
          },
          {
            role: "Employer",
            title: "Looking for a courier",
            location: "Köln",
            caption:
              "Looking for a courier in Köln. Flexible schedule and steady work.",
          },
        ],
      },
    ],
  },
  germany: {
    tag: "06 — ACROSS GERMANY",
    mapAlt: "Map of Germany",
    mapHint: "Drag the map · Scroll to zoom",
    activeAds: "active listings",
    newWeek: "new this week",
    view: "VIEW",
  },
  footer: {
    topAria: "Back to top",
    tagline:
      "A unified ecosystem of goods, services and opportunities for life in Germany",
    tags: ["TELEGRAM", "MARKETPLACE", "SERVICES", "COMMUNITY"],
    join: "Join",
    qrTitle: "TRADEGROUND ON YOUR PHONE",
    qrTextLine1: "Scan the QR code to",
    qrTextLine2: "open the Marketplace",
    qrAlt: "TradeGround QR code",
    privacy: "Privacy Policy",
  },
};

const de: HomeDictionary = {
  nav: {
    about: "Über uns",
    marketplace: "Marketplace",
    business: "Für Business",
    contacts: "Kontakt",
    openMarketplace: "Marketplace öffnen",
  },
  hero: {
    line1: "TRADE",
    line2: "GROUND",
    subtitle: "MARKETPLACE FÜR DAS LEBEN IN DEUTSCHLAND",
    phoneAlt: "Trade Ground App-Bildschirm",
    scrollAria: "Nach unten scrollen",
  },
  onePlace: {
    tag: "02 — ONE PLACE",
    titleLine1: "ONE PLACE.",
    titleLine2Before: "ALL YOU ",
    titleAccent: "NEED",
    subtitle: "Waren, Services und Möglichkeiten an einem Ort",
    cta: "Marketplace öffnen",
    listings: "Anzeigen",
    categories: [
      { id: "c1", title: "Autos", count: "15+ Anzeigen" },
      { id: "c2", title: "Möbel", count: "850+ Anzeigen" },
      { id: "c3", title: "Elektronik", count: "50+ Anzeigen" },
      { id: "c4", title: "Immobilien", count: "1150+ Anzeigen" },
      { id: "c5", title: "Mode & Style", count: "750+ Anzeigen" },
      { id: "c6", title: "Sport & Hobbys", count: "200+ Anzeigen" },
      { id: "c7", title: "Beauty & Gesundheit", count: "350+ Anzeigen" },
      { id: "c8", title: "Business", count: "2500+ Anzeigen" },
      { id: "c9", title: "Kinderprodukte", count: "650+ Anzeigen" },
      { id: "c10", title: "Haus & Garten", count: "550+ Anzeigen" },
      { id: "c11", title: "Services & Jobs", count: "1350+ Anzeigen" },
      { id: "c12", title: "Tiere", count: "25+ Anzeigen" },
    ],
  },
  telegram: {
    tag: "03 — POWERED BY TELEGRAM",
    title: ["MARKETPLACE", "IM VERTRAUTEN", "MESSENGER"],
    subtitle:
      "TradeGround läuft direkt in Telegram. Keine Extra-Apps — Marketplace öffnen und loslegen",
    cta: "Tradeground öffnen",
    phoneAlt: "TradeGround in Telegram",
    prevAria: "Vorherige Folie",
    nextAria: "Nächste Folie",
    slides: [
      {
        stepTitle: "Telegram Bot",
        stepText: "Bot starten und Marketplace öffnen",
      },
      {
        stepTitle: "Marketplace",
        stepText: "Waren und Services finden und Anzeigen schalten",
      },
      {
        stepTitle: "Direkter Kontakt",
        stepText: "Mit Verkäufern und Fachleuten über Telegram verbinden",
      },
    ],
    features: [
      {
        title: "Zugang in 1 Klick",
        text: "Keine weitere App nötig",
      },
      {
        title: "Direkter Kontakt",
        text: "Gefunden — sofort dem Verkäufer oder Spezialisten schreiben",
      },
      {
        title: "Verständliche Sprache",
        text: "Suchen, verkaufen und chatten ohne Sprachbarriere",
      },
    ],
  },
  everyone: {
    labelDiscover: "02 — DISCOVER",
    labelActive: "04 — FOR EVERYONE",
    title: "JEDE:R HAT",
    titleAccent: "EIN ZIEL",
    script: ["Waren.", "Services.", "Möglichkeiten."],
    privateTitle: "Für Privatpersonen",
    privateText:
      "Kaufen. Verkaufen. In der Nähe finden. Alles Nötige in Ihrer Stadt — mit direktem Kontakt über Telegram.",
    businessTitle: "Für Business",
    businessText:
      "Mehr Möglichkeiten für Verkauf und Wachstum. Professionelles Profil, Promotion und Tools für die Kundenarbeit.",
    more: "Mehr erfahren",
    sofa: "IKEA Sofa",
    electrician: "Elektriker",
    sneakers: "Nike Sneaker",
    views: "Aufrufe in 7 Tagen",
    newClients: "Neue Kunden",
  },
  connects: {
    tag: "05 — TRADEGROUND CONNECTS",
    titleLine1: "JEMAND SUCHT.",
    titleLine2: "JEMAND BIETET AN",
    lead: "TRADEGROUND VERBINDET.",
    text: "Menschen, Waren, Services und Möglichkeiten",
    footer: "IN GANZ DEUTSCHLAND",
    pairs: [
      {
        badge: "KAUF ERFOLGREICH!",
        cards: [
          {
            role: "Verkäufer",
            title: "Verkaufe Fahrrad",
            price: "166€",
            location: "Hamburg",
            caption:
              "Zuverlässiges und stylisches Fahrrad. Ideal für Stadt und Reisen!",
          },
          {
            role: "Käufer",
            title: "Suche Fahrrad",
            location: "Hamburg",
            caption: "Suche ein zuverlässiges Stadtfahrrad. Freue mich auf Angebote!",
          },
        ],
      },
      {
        badge: "PROFI GEFUNDEN!",
        cards: [
          {
            role: "Kunde",
            title: "Brauche Profi für Küchenmontage",
            location: "Berlin",
            caption: "Suche Fachkraft für Küchenmontage. Sorgfältige Arbeit nötig.",
          },
          {
            role: "Profi",
            title: "Möbelmontage",
            location: "Berlin und Umgebung",
            caption: "Montiere Küchen und Möbel. Fahre in Berlin und Umgebung.",
          },
        ],
      },
      {
        badge: "JOB GEFUNDEN!",
        cards: [
          {
            role: "Jobsuchende:r",
            title: "Suche Arbeit",
            location: "Köln",
            caption: "Suche Arbeit in Köln. Offen für verschiedene Beschäftigungen.",
          },
          {
            role: "Arbeitgeber",
            title: "Suchen Kurier",
            location: "Köln",
            caption:
              "Suchen Kurier in Köln. Flexible Zeiten und stabile Beschäftigung.",
          },
        ],
      },
    ],
  },
  germany: {
    tag: "06 — ACROSS GERMANY",
    mapAlt: "Karte von Deutschland",
    mapHint: "Karte ziehen · Mausrad zum Zoomen",
    activeAds: "aktive Anzeigen",
    newWeek: "neu diese Woche",
    view: "ANSEHEN",
  },
  footer: {
    topAria: "Nach oben",
    tagline:
      "Ein Ökosystem aus Waren, Services und Möglichkeiten für das Leben in Deutschland",
    tags: ["TELEGRAM", "MARKETPLACE", "SERVICES", "COMMUNITY"],
    join: "Beitreten",
    qrTitle: "TRADEGROUND AUF IHREM HANDY",
    qrTextLine1: "QR-Code scannen, um",
    qrTextLine2: "den Marketplace zu öffnen",
    qrAlt: "TradeGround QR-Code",
    privacy: "Datenschutzrichtlinie",
  },
};

const homeDictionaries: Record<Locale, HomeDictionary> = { ua, ru, en, de };

export function getHomeDictionary(locale: Locale): HomeDictionary {
  return homeDictionaries[locale] ?? homeDictionaries.ua;
}
