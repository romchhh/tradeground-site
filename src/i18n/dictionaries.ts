import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    about: string;
    marketplace: string;
    business: string;
    contacts: string;
    open: string;
    menu: string;
    close: string;
  };
  hero: {
    line1: string;
    line2: string;
    subtitle: string;
    cta: string;
    cardAll: string;
    cardStats: string;
    cardStatsDesc: string;
    cardTg: string;
    cardTgDesc: string;
    tagGoods: string;
    tagServices: string;
    tagAds: string;
    tagCommunity: string;
  };
  categories: {
    title: string;
    subtitle: string;
    openMarketplace: string;
    back: string;
    labels: Record<string, string>;
  };
  telegram: {
    powered: string;
    title: string;
    titleAccent: string;
    desc: string;
    open: string;
    features: { icon: string; title: string; desc: string }[];
  };
  flow: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    live: string;
    steps: { num: string; title: string; desc: string }[];
  };
  audience: {
    title: string;
    titleAccent: string;
    subtitle: string;
    items: {
      id: string;
      label: string;
      desc: string;
      image: string;
    }[];
  };
  product: {
    title: string;
    titleAccent: string;
    subtitle: string;
    mainBadge: string;
    mainTitle: string;
    mainDesc: string;
    choiceTitle: string;
    choiceDesc: string;
    zonesBadge: string;
    zonesLines: string[];
    audienceNum: string;
    audienceDesc: string;
    hrLabel: string;
    hrTitle: string;
    hrDesc: string;
    chillEyebrow: string;
    chillTitle: string;
  };
  matches: {
    badge: string;
    sectionLabel: string;
    line1: string;
    line2: string;
    brand: string;
    unites: string;
    bottom: string;
    cta: string;
    matchLabel: string;
    live: string;
    seeking: string;
    offering: string;
    items: {
      seekTitle: string;
      seekSub?: string;
      seekCity: string;
      offerTitle: string;
      offerSub?: string;
      offerCity: string;
    }[];
  };
  map: {
    title: string;
    titleAccent: string;
    headline: string;
    headlineAccent: string;
    desc: string;
    activeUsers: string;
    coverage: string;
    activeCity: string;
    otherCity: string;
    ads: string;
    newWeek: string;
    viewCity: string;
  };
  footer: {
    desc: string;
    join: string;
    start: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  contacts: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    lead: string;
    topics: {
      id: string;
      title: string;
      desc: string;
      cta: string;
    }[];
    formNameLabel: string;
    formNamePlaceholder: string;
    formContactLabel: string;
    formContactPlaceholder: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    submit: string;
    successTitle: string;
    successDesc: string;
    otherTitle: string;
    emailLabel: string;
    emailValue: string;
    telegramLabel: string;
    telegramValue: string;
    telegramUrl: string;
    instagramLabel: string;
    instagramValue: string;
    instagramUrl: string;
  };
  marketplace: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    titleAccent: string;
    lead: string;
    categories: {
      id: string;
      title: string;
      desc: string;
      icon: string;
    }[];
    moreLabel: string;
    moreCta: string;
    personalTitle: string;
    personalDesc: string;
    businessTitle: string;
    businessTitleAccent: string;
    businessDesc: string;
    businessFeatures: string[];
    businessCta: string;
    openTitle: string;
    openDesc: string;
    openCta: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    titleAccent: string;
    lead: string;
    storyTitle: string;
    storyTitleAccent: string;
    storyParagraphs: string[];
    storyReveal: string;
    founderName: string;
    founderRole: string;
    buyTitle: string;
    buyDesc: string;
    simpleTitle: string;
    simpleTitleAccent: string;
    simpleDesc: string;
    futureTitle: string;
    futureTitleAccent: string;
    futureDesc: string;
    ctaLine1: string;
    ctaLine2: string;
    cta: string;
  };
  notFound: {
    title: string;
    description: string;
    back: string;
    home: string;
  };
};

const ua: Dictionary = {
  meta: {
    title: "TradeGround — Marketplace у Telegram",
    description:
      "Marketplace для життя в Німеччині. Товари, послуги й можливості прямо в Telegram. Купуйте та продавайте без зайвих додатків.",
    keywords: [
      "TradeGround",
      "маркетплейс Telegram",
      "українці в Німеччині",
      "оголошення Німеччина",
      "купити продати Telegram",
      "marketplace Germany",
      "TradeGroundBot",
    ],
  },
  nav: {
    about: "Про нас",
    marketplace: "Marketplace",
    business: "Для бізнесу",
    contacts: "Контакти",
    open: "Відкрити",
    menu: "Меню",
    close: "Закрити",
  },
  hero: {
    line1: "Trade",
    line2: "Ground",
    subtitle:
      "Єдина платформа товарів, послуг і можливостей для життя в Німеччині — прямо в Telegram. Купуйте, продавайте та знаходьте поруч без зайвих додатків.",
    cta: "Відкрити маркетплейс",
    cardAll: "Все в одному місці",
    cardStats: "50K+",
    cardStatsDesc: "оголошень у десятках категорій по всій Німеччині",
    cardTg: "Працює в Telegram",
    cardTgDesc: "Без завантажень — відкривай маркетплейс і починай користуватись",
    tagGoods: "Товари",
    tagServices: "Послуги",
    tagAds: "Оголошення",
    tagCommunity: "Спільнота",
  },
  categories: {
    title: "ONE PLACE. ALL YOU NEED.",
    subtitle: "Товари, послуги й можливості в одному просторі.",
    openMarketplace: "Відкрити в маркетплейсі",
    back: "Назад",
    labels: {
      all: "Всі категорії",
      services: "Послуги та робота",
      fashion: "Мода та стиль",
      furniture: "Меблі",
      electronics: "Електроніка",
      appliances: "Побутова техніка",
      kids: "Дитячі товари",
      home: "Для дому",
      beauty: "Краса та здоров'я",
      auto: "Авто",
      hobby: "Хобі / Спорт",
      pets: "Улюбленці",
      realestate: "Нерухомість",
      free: "Безкоштовно / Віддам",
    },
  },
  telegram: {
    powered: "Powered by Telegram",
    title: "Marketplace у звичному",
    titleAccent: "месенджері.",
    desc: "TradeGround працює прямо в Telegram. Жодних додаткових додатків — відкривайте Marketplace і починайте користуватись.",
    open: "Відкрити\nTradeGround",
    features: [
      {
        icon: "📦",
        title: "Без завантажень",
        desc: "Не потрібно встановлювати ще один додаток.",
      },
      {
        icon: "💬",
        title: "Прямий контакт",
        desc: "Знайшли потрібне — одразу напишіть продавцю або спеціалісту.",
      },
      {
        icon: "🌐",
        title: "Зрозуміла мова",
        desc: "Шукайте, продавайте й спілкуйтесь без мовного бар'єру.",
      },
    ],
  },
  flow: {
    eyebrow: "Як це працює",
    title: "ВІД ІДЕЇ",
    titleAccent: "ДО УГОДИ.",
    live: "Live in Telegram",
    steps: [
      {
        num: "01",
        title: "Відкрийте Telegram",
        desc: "TradeGround живе там, де ви вже спілкуєтесь. Жодного нового додатка — лише бот.",
      },
      {
        num: "02",
        title: "Підлаштуйте стрічку",
        desc: "Місто, інтереси, збережені оголошення. Marketplace поступово стає вашим простором.",
      },
      {
        num: "03",
        title: "Пишіть напряму",
        desc: "Знайшли потрібне — одразу зв’язок із продавцем або спеціалістом. Без посередників.",
      },
    ],
  },
  audience: {
    title: "Private /",
    titleAccent: "Business",
    subtitle: "Для кожного — свій рівень.",
    items: [
      {
        id: "private",
        label: "Для приватних осіб",
        desc: "Купуйте. Продавайте. Знаходьте поруч. Усе необхідне у вашому місті — з прямим зв'язком через Telegram.",
        image: "/media/plan-start.jpg",
      },
      {
        id: "business",
        label: "Для бізнесу",
        desc: "Більше можливостей для продажів і росту. Професійний профіль, просування та інструменти для роботи з клієнтами.",
        image: "/media/plan-business.jpg",
      },
    ],
  },
  product: {
    title: "Що всередині",
    titleAccent: "TradeGround",
    subtitle: "Усе, що потрібно для життя, торгівлі й розвитку в Німеччині",
    mainBadge: "TradeGround",
    mainTitle: "Простір, створений для росту",
    mainDesc:
      "Оголошення, угоди та спільнота — усе для торгівлі серед українців у Німеччині.",
    choiceTitle: "Великий вибір",
    choiceDesc: "50K+ оголошень у десятках категорій",
    zonesBadge: "Робочі зони",
    zonesLines: ["Фокус", "Швидкість", "Результат"],
    audienceNum: "2",
    audienceDesc: "млн+ українців у Німеччині",
    hrLabel: "TradeGround HR",
    hrTitle: "Кар'єрний центр & HR",
    hrDesc: "З'єднуємо кандидатів з роботодавцями",
    chillEyebrow: "Баланс роботи та енергії",
    chillTitle: "Спільнота & нетворкінг",
  },
  matches: {
    badge: "Дивитись",
    sectionLabel: "Матчі",
    line1: "Хтось шукає.",
    line2: "Хтось пропонує.",
    brand: "TradeGround",
    unites: "об'єднує.",
    bottom:
      "Людей, товари, послуги й можливості по всій Німеччині.",
    cta: "Знайти свій матч",
    matchLabel: "Угода",
    live: "Матч",
    seeking: "Шукає",
    offering: "Пропонує",
    items: [
      {
        seekTitle: "Шукаю велосипед",
        seekCity: "Hamburg",
        offerTitle: "Продаю велосипед",
        offerCity: "Hamburg",
      },
      {
        seekTitle: "Потрібен майстер",
        seekSub: "для збірки кухні",
        seekCity: "Berlin",
        offerTitle: "Збираю меблі",
        offerSub: "Berlin і поруч",
        offerCity: "Berlin",
      },
      {
        seekTitle: "Шукаю роботу",
        seekCity: "Köln",
        offerTitle: "Шукаємо кур'єра",
        offerSub: "Гнучкий графік",
        offerCity: "Köln",
      },
    ],
  },
  map: {
    title: "Germany",
    titleAccent: "Map",
    headline: "Ми вже там,",
    headlineAccent: "де ти.",
    desc: "TradeGround доступний у всіх великих містах Німеччини. Знаходьте товари та послуги поруч із вами.",
    activeUsers: "активних оголошень",
    coverage: "Покриття",
    activeCity: "Активне місто",
    otherCity: "Інше місто",
    ads: "активних оголошень",
    newWeek: "нових за тиждень",
    viewCity: "Дивитись",
  },
  footer: {
    desc: "Єдина екосистема товарів, послуг і можливостей для життя в Німеччині.",
    join: "Приєднатись зараз",
    start: "Почати",
    rights: "©2026 TradeGround | ALL RIGHTS RESERVED",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  contacts: {
    metaTitle: "Контакти — TradeGround",
    metaDescription:
      "Зв’яжіться з TradeGround: загальні питання, бізнес, реклама та підтримка.",
    title: "LET'S TALK.",
    subtitle: "Є питання, ідея чи пропозиція?",
    lead: "Зв’яжіться з TradeGround.",
    topics: [
      {
        id: "general",
        title: "Загальне питання",
        desc: "Питання про TradeGround, акаунт або роботу платформи.",
        cta: "Написати",
      },
      {
        id: "business",
        title: "Для бізнесу",
        desc: "Бізнес-профіль, просування товарів і послуг, професійні можливості.",
        cta: "Зв’язатись",
      },
      {
        id: "ads",
        title: "Реклама і партнерства",
        desc: "Реклама в TradeGround, інтеграції, блогери, спільноти та пропозиції про співпрацю.",
        cta: "Обговорити",
      },
      {
        id: "support",
        title: "Проблема / Підтримка",
        desc: "Щось працює не так або потрібна допомога з платформою.",
        cta: "Отримати допомогу",
      },
    ],
    formNameLabel: "Як вас звати?",
    formNamePlaceholder: "Ваше ім’я",
    formContactLabel: "Як з вами зв’язатись?",
    formContactPlaceholder: "Email / Telegram",
    formMessageLabel: "Про що хочете поговорити?",
    formMessagePlaceholder: "Розкажіть трохи докладніше...",
    submit: "Надіслати",
    successTitle: "MESSAGE SENT.",
    successDesc: "Дякуємо. Ми отримали ваше повідомлення.",
    otherTitle: "OTHER WAYS TO CONNECT",
    emailLabel: "EMAIL",
    emailValue: "tradegrnd@gmail.com",
    telegramLabel: "TELEGRAM",
    telegramValue: "@tradeground_support",
    telegramUrl: "https://t.me/tradeground_support",
    instagramLabel: "INSTAGRAM",
    instagramValue: "@tradeground",
    instagramUrl: "https://instagram.com/tradeground",
  },
  marketplace: {
    metaTitle: "Marketplace — TradeGround",
    metaDescription:
      "Marketplace, який підлаштовується під вас. Товари, послуги, робота, нерухомість і безкоштовне — в одному просторі TradeGround.",
    title: "MARKETPLACE,",
    titleAccent: "ЯКИЙ ПІДЛАШТОВУЄТЬСЯ ПІД ВАС.",
    lead: "Обирайте те, що цікавить саме вас — TradeGround збере потрібні товари, послуги й пропозиції в одному просторі.",
    categories: [
      {
        id: "goods",
        title: "ТОВАРИ",
        desc: "Від меблів і електроніки до автомобілів і одягу.",
        icon: "/categories_icons/furniture.svg",
      },
      {
        id: "services",
        title: "ПОСЛУГИ",
        desc: "Знаходьте спеціалістів або пропонуйте свої послуги.",
        icon: "/categories_icons/services_work.svg",
      },
      {
        id: "jobs",
        title: "РОБОТА",
        desc: "Вакансії та пропозиції роботи.",
        icon: "/categories_icons/appliances.svg",
      },
      {
        id: "realestate",
        title: "НЕРУХОМІСТЬ",
        desc: "Оренда та інші пропозиції.",
        icon: "/categories_icons/realestate.svg",
      },
      {
        id: "free",
        title: "БЕЗКОШТОВНО",
        desc: "Речі, які готові віддати.",
        icon: "/categories_icons/free.svg",
      },
    ],
    moreLabel: "І ЩЕ",
    moreCta: "Усі категорії",
    personalTitle: "MAKE IT PERSONAL.",
    personalDesc:
      "TradeGround не виглядає однаково для всіх. Кожен користувач поступово формує свій простір — своє місто, свої інтереси, збережені оголошення, підписки.",
    businessTitle: "ПРОДАЄТЕ",
    businessTitleAccent: "ПРОФЕСІЙНО?",
    businessDesc:
      "TradeGround пропонує окремі можливості для бізнесу та професійних продавців.",
    businessFeatures: [
      "Бізнес-профіль",
      "Просування",
      "Більше оголошень",
      "Інструменти продавця",
    ],
    businessCta: "TradeGround для бізнесу",
    openTitle: "ВІДКРИЙТЕ TRADEGROUND.",
    openDesc: "Товари, послуги й можливості вже всередині.",
    openCta: "Відкрити Marketplace",
  },
  about: {
    metaTitle: "Про нас — TradeGround",
    metaDescription:
      "Більше, ніж marketplace. TradeGround створений для російсько- та україномовних жителів Німеччини — щоб знаходити потрібне, пропонувати своє і напряму зв’язуватися одне з одним.",
    title: "БІЛЬШЕ,",
    titleAccent: "НІЖ MARKETPLACE.",
    lead: "TradeGround створений для російсько- та україномовних жителів Німеччини — щоб знаходити потрібне, пропонувати своє і напряму зв’язуватися одне з одним.",
    storyTitle: "ВСЕ ПОЧАЛОСЬ",
    storyTitleAccent: "З ПРОСТОЇ ПОТРЕБИ.",
    storyParagraphs: [
      "Після переїзду до Німеччини я знову й знову стикався з однією проблемою: товари, послуги, вакансії та інші пропозиції були розкидані по десятках груп, каналів і платформ.",
      "Знайти потрібного спеціаліста, відповідну річ або просто швидко щось продати виявлялося складніше, ніж має бути.",
      "Тоді з’явилася проста ідея — зібрати все це в одному місці і зробити пошук звичним і зрозумілим.",
    ],
    storyReveal: "ТАК З’ЯВИВСЯ TRADEGROUND.",
    founderName: "Vasyl Zhuravlov",
    founderRole: "Founder, TradeGround",
    buyTitle: "BUY. SELL. FIND.",
    buyDesc:
      "Купуйте і продавайте. Знаходьте спеціалістів, роботу, житло та локальні пропозиції — без потреби шукати в десятках різних джерел.",
    simpleTitle: "БЕЗ СКЛАДНОСТЕЙ.",
    simpleTitleAccent: "БЕЗ МОВНОГО БАР’ЄРА.",
    simpleDesc:
      "Звичний Telegram. Зрозуміла мова. Прямий зв’язок між людьми. Нічого додатково завантажувати не потрібно. Знайшли потрібне — одразу зв’язались із продавцем або спеціалістом.",
    futureTitle: "MARKETPLACE —",
    futureTitleAccent: "ЦЕ ЛИШЕ ПОЧАТОК.",
    futureDesc:
      "Сьогодні — Marketplace. Далі — більше можливостей для повсякденного життя, спілкування та бізнесу.",
    ctaLine1: "GERMANY TODAY.",
    ctaLine2: "MORE TOMORROW.",
    cta: "Приєднатись",
  },
  notFound: {
    title: "Сторінку не знайдено",
    description: "Схоже, цієї сторінки не існує. Поверніться на головну TradeGround.",
    back: "Назад",
    home: "На головну",
  },
};

const ru: Dictionary = {
  meta: {
    title: "TradeGround — Marketplace в Telegram",
    description:
      "Marketplace для жизни в Германии. Товары, услуги и возможности прямо в Telegram. Покупайте и продавайте без лишних приложений.",
    keywords: [
      "TradeGround",
      "маркетплейс Telegram",
      "украинцы в Германии",
      "объявления Германия",
      "купить продать Telegram",
      "marketplace Germany",
      "TradeGroundBot",
    ],
  },
  nav: {
    about: "О нас",
    marketplace: "Marketplace",
    business: "Для бизнеса",
    contacts: "Контакты",
    open: "Открыть",
    menu: "Меню",
    close: "Закрыть",
  },
  hero: {
    line1: "Trade",
    line2: "Ground",
    subtitle:
      "Единая платформа товаров, услуг и возможностей для жизни в Германии — прямо в Telegram. Покупайте, продавайте и находите рядом без лишних приложений.",
    cta: "Открыть маркетплейс",
    cardAll: "Всё в одном месте",
    cardStats: "50K+",
    cardStatsDesc: "объявлений в десятках категорий по всей Германии",
    cardTg: "Работает в Telegram",
    cardTgDesc: "Без загрузок — открывайте маркетплейс и начинайте пользоваться",
    tagGoods: "Товары",
    tagServices: "Услуги",
    tagAds: "Объявления",
    tagCommunity: "Сообщество",
  },
  categories: {
    title: "ONE PLACE. ALL YOU NEED.",
    subtitle: "Товары, услуги и возможности в одном пространстве.",
    openMarketplace: "Открыть в маркетплейсе",
    back: "Назад",
    labels: {
      all: "Все категории",
      services: "Услуги и работа",
      fashion: "Мода и стиль",
      furniture: "Мебель",
      electronics: "Электроника",
      appliances: "Бытовая техника",
      kids: "Детские товары",
      home: "Для дома",
      beauty: "Красота и здоровье",
      auto: "Авто",
      hobby: "Хобби / Спорт",
      pets: "Питомцы",
      realestate: "Недвижимость",
      free: "Бесплатно / Отдам",
    },
  },
  telegram: {
    powered: "Powered by Telegram",
    title: "Marketplace в привычном",
    titleAccent: "мессенджере.",
    desc: "TradeGround работает прямо в Telegram. Никаких дополнительных приложений — открывайте Marketplace и начинайте пользоваться.",
    open: "Открыть\nTradeGround",
    features: [
      {
        icon: "📦",
        title: "Без загрузок",
        desc: "Не нужно устанавливать ещё одно приложение.",
      },
      {
        icon: "💬",
        title: "Прямой контакт",
        desc: "Нашли нужное — сразу напишите продавцу или специалисту.",
      },
      {
        icon: "🌐",
        title: "Понятный язык",
        desc: "Ищите, продавайте и общайтесь без языкового барьера.",
      },
    ],
  },
  flow: {
    eyebrow: "Как это работает",
    title: "ОТ ИДЕИ",
    titleAccent: "ДО СДЕЛКИ.",
    live: "Live in Telegram",
    steps: [
      {
        num: "01",
        title: "Откройте Telegram",
        desc: "TradeGround живёт там, где вы уже общаетесь. Никакого нового приложения — только бот.",
      },
      {
        num: "02",
        title: "Настройте ленту",
        desc: "Город, интересы, сохранённые объявления. Marketplace постепенно становится вашим пространством.",
      },
      {
        num: "03",
        title: "Пишите напрямую",
        desc: "Нашли нужное — сразу связь с продавцом или специалистом. Без посредников.",
      },
    ],
  },
  audience: {
    title: "Private /",
    titleAccent: "Business",
    subtitle: "Для каждого — свой уровень.",
    items: [
      {
        id: "private",
        label: "Для частных лиц",
        desc: "Покупайте. Продавайте. Находите рядом. Всё необходимое в вашем городе — с прямой связью через Telegram.",
        image: "/media/plan-start.jpg",
      },
      {
        id: "business",
        label: "Для бизнеса",
        desc: "Больше возможностей для продаж и роста. Профессиональный профиль, продвижение и инструменты для работы с клиентами.",
        image: "/media/plan-business.jpg",
      },
    ],
  },
  product: {
    title: "Что внутри",
    titleAccent: "TradeGround",
    subtitle: "Всё, что нужно для жизни, торговли и развития в Германии",
    mainBadge: "TradeGround",
    mainTitle: "Пространство, созданное для роста",
    mainDesc:
      "Объявления, сделки и сообщество — всё для торговли среди украинцев в Германии.",
    choiceTitle: "Большой выбор",
    choiceDesc: "50K+ объявлений в десятках категорий",
    zonesBadge: "Рабочие зоны",
    zonesLines: ["Фокус", "Скорость", "Результат"],
    audienceNum: "2",
    audienceDesc: "млн+ украинцев в Германии",
    hrLabel: "TradeGround HR",
    hrTitle: "Карьерный центр & HR",
    hrDesc: "Соединяем кандидатов с работодателями",
    chillEyebrow: "Баланс работы и энергии",
    chillTitle: "Сообщество & нетворкинг",
  },
  matches: {
    badge: "Смотреть",
    sectionLabel: "Сделки",
    line1: "Кто-то ищет.",
    line2: "Кто-то предлагает.",
    brand: "TradeGround",
    unites: "объединяет.",
    bottom:
      "Людей, товары, услуги и возможности по всей Германии.",
    cta: "Найти свой матч",
    matchLabel: "Сделка",
    live: "Матч",
    seeking: "Ищет",
    offering: "Предлагает",
    items: [
      {
        seekTitle: "Ищу велосипед",
        seekCity: "Hamburg",
        offerTitle: "Продаю велосипед",
        offerCity: "Hamburg",
      },
      {
        seekTitle: "Нужен мастер",
        seekSub: "для сборки кухни",
        seekCity: "Berlin",
        offerTitle: "Собираю мебель",
        offerSub: "Berlin и рядом",
        offerCity: "Berlin",
      },
      {
        seekTitle: "Ищу работу",
        seekCity: "Köln",
        offerTitle: "Ищем курьера",
        offerSub: "Гибкий график",
        offerCity: "Köln",
      },
    ],
  },
  map: {
    title: "Germany",
    titleAccent: "Map",
    headline: "Мы уже там,",
    headlineAccent: "где ты.",
    desc: "TradeGround доступен во всех крупных городах Германии. Находите товары и услуги рядом с вами.",
    activeUsers: "активных объявлений",
    coverage: "Покрытие",
    activeCity: "Активный город",
    otherCity: "Другой город",
    ads: "активных объявлений",
    newWeek: "новых за неделю",
    viewCity: "Смотреть",
  },
  footer: {
    desc: "Единая экосистема товаров, услуг и возможностей для жизни в Германии.",
    join: "Присоединиться сейчас",
    start: "Начать",
    rights: "©2026 TradeGround | ALL RIGHTS RESERVED",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  contacts: {
    metaTitle: "Контакты — TradeGround",
    metaDescription:
      "Свяжитесь с TradeGround: общий вопрос, бизнес, реклама и поддержка.",
    title: "LET'S TALK.",
    subtitle: "Есть вопрос, идея или предложение?",
    lead: "Свяжитесь с TradeGround.",
    topics: [
      {
        id: "general",
        title: "Общий вопрос",
        desc: "Вопрос о TradeGround, аккаунте или работе платформы.",
        cta: "Написать",
      },
      {
        id: "business",
        title: "Для бизнеса",
        desc: "Бизнес-профиль, продвижение товаров и услуг, профессиональные возможности.",
        cta: "Связаться",
      },
      {
        id: "ads",
        title: "Реклама и партнёрства",
        desc: "Реклама в TradeGround, интеграции, блогеры, сообщества и предложения о сотрудничестве.",
        cta: "Обсудить",
      },
      {
        id: "support",
        title: "Проблема / Поддержка",
        desc: "Что-то работает не так или нужна помощь с платформой.",
        cta: "Получить помощь",
      },
    ],
    formNameLabel: "Как вас зовут?",
    formNamePlaceholder: "Ваше имя",
    formContactLabel: "Как с вами связаться?",
    formContactPlaceholder: "Email / Telegram",
    formMessageLabel: "О чём хотите поговорить?",
    formMessagePlaceholder: "Расскажите немного подробнее...",
    submit: "Отправить",
    successTitle: "MESSAGE SENT.",
    successDesc: "Спасибо. Мы получили ваше сообщение.",
    otherTitle: "OTHER WAYS TO CONNECT",
    emailLabel: "EMAIL",
    emailValue: "tradegrnd@gmail.com",
    telegramLabel: "TELEGRAM",
    telegramValue: "@tradeground_support",
    telegramUrl: "https://t.me/tradeground_support",
    instagramLabel: "INSTAGRAM",
    instagramValue: "@tradeground",
    instagramUrl: "https://instagram.com/tradeground",
  },
  marketplace: {
    metaTitle: "Marketplace — TradeGround",
    metaDescription:
      "Marketplace, который подстраивается под вас. Товары, услуги, работа, недвижимость и бесплатное — в одном пространстве TradeGround.",
    title: "MARKETPLACE,",
    titleAccent: "КОТОРЫЙ ПОДСТРАИВАЕТСЯ ПОД ВАС.",
    lead: "Выбирайте то, что интересно именно вам — TradeGround соберёт нужные товары, услуги и предложения в одном пространстве.",
    categories: [
      {
        id: "goods",
        title: "ТОВАРЫ",
        desc: "От мебели и электроники до автомобилей и одежды.",
        icon: "/categories_icons/furniture.svg",
      },
      {
        id: "services",
        title: "УСЛУГИ",
        desc: "Находите специалистов или предлагайте свои услуги.",
        icon: "/categories_icons/services_work.svg",
      },
      {
        id: "jobs",
        title: "РАБОТА",
        desc: "Вакансии и предложения работы.",
        icon: "/categories_icons/appliances.svg",
      },
      {
        id: "realestate",
        title: "НЕДВИЖИМОСТЬ",
        desc: "Аренда и другие предложения.",
        icon: "/categories_icons/realestate.svg",
      },
      {
        id: "free",
        title: "БЕСПЛАТНО",
        desc: "Вещи, которые готовы отдать.",
        icon: "/categories_icons/free.svg",
      },
    ],
    moreLabel: "И ЕЩЁ",
    moreCta: "Все категории",
    personalTitle: "MAKE IT PERSONAL.",
    personalDesc:
      "TradeGround не выглядит одинаково для всех. Каждый пользователь постепенно формирует своё пространство — свой город, свои интересы, сохранённые объявления, подписки.",
    businessTitle: "ПРОДАЁТЕ",
    businessTitleAccent: "ПРОФЕССИОНАЛЬНО?",
    businessDesc:
      "TradeGround предлагает отдельные возможности для бизнеса и профессиональных продавцов.",
    businessFeatures: [
      "Бизнес-профиль",
      "Продвижение",
      "Больше объявлений",
      "Инструменты продавца",
    ],
    businessCta: "TradeGround для бизнеса",
    openTitle: "ОТКРОЙТЕ TRADEGROUND.",
    openDesc: "Товары, услуги и возможности уже внутри.",
    openCta: "Открыть Marketplace",
  },
  about: {
    metaTitle: "О нас — TradeGround",
    metaDescription:
      "Больше, чем marketplace. TradeGround создан для русско- и украиноязычных жителей Германии — чтобы находить нужное, предлагать своё и напрямую связываться друг с другом.",
    title: "БОЛЬШЕ,",
    titleAccent: "ЧЕМ MARKETPLACE.",
    lead: "TradeGround создан для русско- и украиноязычных жителей Германии — чтобы находить нужное, предлагать своё и напрямую связываться друг с другом.",
    storyTitle: "ВСЁ НАЧАЛОСЬ",
    storyTitleAccent: "С ПРОСТОЙ ПОТРЕБНОСТИ.",
    storyParagraphs: [
      "После переезда в Германию я снова и снова сталкивался с одной проблемой: товары, услуги, вакансии и другие предложения были разбросаны по десяткам групп, каналов и платформ.",
      "Найти нужного специалиста, подходящую вещь или просто быстро что-то продать оказывалось сложнее, чем должно быть.",
      "Тогда появилась простая идея — собрать всё это в одном месте и сделать поиск привычным и понятным.",
    ],
    storyReveal: "ТАК ПОЯВИЛСЯ TRADEGROUND.",
    founderName: "Vasyl Zhuravlov",
    founderRole: "Founder, TradeGround",
    buyTitle: "BUY. SELL. FIND.",
    buyDesc:
      "Покупайте и продавайте. Находите специалистов, работу, жильё и локальные предложения — без необходимости искать по десяткам разных источников.",
    simpleTitle: "БЕЗ СЛОЖНОСТЕЙ.",
    simpleTitleAccent: "БЕЗ ЯЗЫКОВОГО БАРЬЕРА.",
    simpleDesc:
      "Привычный Telegram. Понятный язык. Прямая связь между людьми. Ничего дополнительно скачивать не нужно. Нашли нужное — сразу связались с продавцом или специалистом.",
    futureTitle: "MARKETPLACE —",
    futureTitleAccent: "ЭТО ТОЛЬКО НАЧАЛО.",
    futureDesc:
      "Сегодня — Marketplace. Дальше — больше возможностей для повседневной жизни, общения и бизнеса.",
    ctaLine1: "GERMANY TODAY.",
    ctaLine2: "MORE TOMORROW.",
    cta: "Присоединиться",
  },
  notFound: {
    title: "Страница не найдена",
    description: "Похоже, этой страницы не существует. Вернитесь на главную TradeGround.",
    back: "Назад",
    home: "На главную",
  },
};

const en: Dictionary = {
  meta: {
    title: "TradeGround — Marketplace in Telegram",
    description:
      "Marketplace for life in Germany. Goods, services and opportunities right in Telegram. Buy and sell without extra apps.",
    keywords: [
      "TradeGround",
      "Telegram marketplace",
      "Ukrainians in Germany",
      "classifieds Germany",
      "buy sell Telegram",
      "marketplace Germany",
      "TradeGroundBot",
    ],
  },
  nav: {
    about: "About us",
    marketplace: "Marketplace",
    business: "For business",
    contacts: "Contacts",
    open: "Open",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    line1: "Trade",
    line2: "Ground",
    subtitle:
      "One platform for goods, services and opportunities for life in Germany — right in Telegram. Buy, sell and find nearby without extra apps.",
    cta: "Open marketplace",
    cardAll: "Everything in one place",
    cardStats: "50K+",
    cardStatsDesc: "listings across dozens of categories all over Germany",
    cardTg: "Works in Telegram",
    cardTgDesc: "No downloads — open the marketplace and start using it",
    tagGoods: "Goods",
    tagServices: "Services",
    tagAds: "Listings",
    tagCommunity: "Community",
  },
  categories: {
    title: "ONE PLACE. ALL YOU NEED.",
    subtitle: "Goods, services and opportunities in one space.",
    openMarketplace: "Open in marketplace",
    back: "Back",
    labels: {
      all: "All categories",
      services: "Services & jobs",
      fashion: "Fashion & style",
      furniture: "Furniture",
      electronics: "Electronics",
      appliances: "Appliances",
      kids: "Kids",
      home: "Home",
      beauty: "Beauty & health",
      auto: "Auto",
      hobby: "Hobby / Sports",
      pets: "Pets",
      realestate: "Real estate",
      free: "Free / Giveaway",
    },
  },
  telegram: {
    powered: "Powered by Telegram",
    title: "Marketplace in your familiar",
    titleAccent: "messenger.",
    desc: "TradeGround works right inside Telegram. No extra apps — open the Marketplace and start using it.",
    open: "Open\nTradeGround",
    features: [
      {
        icon: "📦",
        title: "No downloads",
        desc: "No need to install yet another app.",
      },
      {
        icon: "💬",
        title: "Direct contact",
        desc: "Found what you need — message the seller or specialist right away.",
      },
      {
        icon: "🌐",
        title: "Clear language",
        desc: "Search, sell and chat without a language barrier.",
      },
    ],
  },
  flow: {
    eyebrow: "How it works",
    title: "FROM IDEA",
    titleAccent: "TO A DEAL.",
    live: "Live in Telegram",
    steps: [
      {
        num: "01",
        title: "Open Telegram",
        desc: "TradeGround lives where you already chat. No extra app — just the bot.",
      },
      {
        num: "02",
        title: "Shape your feed",
        desc: "City, interests, saved listings. The marketplace gradually becomes your space.",
      },
      {
        num: "03",
        title: "Message directly",
        desc: "Found what you need — talk to the seller or specialist right away. No middlemen.",
      },
    ],
  },
  audience: {
    title: "Private /",
    titleAccent: "Business",
    subtitle: "A level for everyone.",
    items: [
      {
        id: "private",
        label: "For individuals",
        desc: "Buy. Sell. Find nearby. Everything you need in your city — with direct Telegram contact.",
        image: "/media/plan-start.jpg",
      },
      {
        id: "business",
        label: "For business",
        desc: "More opportunities for sales and growth. Professional profile, promotion and tools to work with clients.",
        image: "/media/plan-business.jpg",
      },
    ],
  },
  product: {
    title: "What's inside",
    titleAccent: "TradeGround",
    subtitle: "Everything you need for life, trade and growth in Germany",
    mainBadge: "TradeGround",
    mainTitle: "A space built for growth",
    mainDesc:
      "Listings, deals and community — everything for trading among Ukrainians in Germany.",
    choiceTitle: "Huge selection",
    choiceDesc: "50K+ listings across dozens of categories",
    zonesBadge: "Work zones",
    zonesLines: ["Focus", "Speed", "Results"],
    audienceNum: "2",
    audienceDesc: "M+ Ukrainians in Germany",
    hrLabel: "TradeGround HR",
    hrTitle: "Career center & HR",
    hrDesc: "Connecting candidates with employers",
    chillEyebrow: "Balance of work and energy",
    chillTitle: "Community & networking",
  },
  matches: {
    badge: "Explore",
    sectionLabel: "Matches",
    line1: "Someone seeks.",
    line2: "Someone offers.",
    brand: "TradeGround",
    unites: "connects.",
    bottom:
      "People, goods, services and opportunities across Germany.",
    cta: "Find your match",
    matchLabel: "Deal",
    live: "Match",
    seeking: "Seeks",
    offering: "Offers",
    items: [
      {
        seekTitle: "Looking for a bike",
        seekCity: "Hamburg",
        offerTitle: "Selling a bike",
        offerCity: "Hamburg",
      },
      {
        seekTitle: "Need a handyman",
        seekSub: "for kitchen assembly",
        seekCity: "Berlin",
        offerTitle: "I assemble furniture",
        offerSub: "Berlin and nearby",
        offerCity: "Berlin",
      },
      {
        seekTitle: "Looking for a job",
        seekCity: "Köln",
        offerTitle: "Hiring a courier",
        offerSub: "Flexible schedule",
        offerCity: "Köln",
      },
    ],
  },
  map: {
    title: "Germany",
    titleAccent: "Map",
    headline: "We're already there,",
    headlineAccent: "where you are.",
    desc: "TradeGround is available in all major German cities. Find goods and services near you.",
    activeUsers: "active listings",
    coverage: "Coverage",
    activeCity: "Active city",
    otherCity: "Other city",
    ads: "active listings",
    newWeek: "new this week",
    viewCity: "View",
  },
  footer: {
    desc: "A unified ecosystem of goods, services and opportunities for life in Germany.",
    join: "Join now",
    start: "Start",
    rights: "©2026 TradeGround | ALL RIGHTS RESERVED",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  contacts: {
    metaTitle: "Contacts — TradeGround",
    metaDescription:
      "Contact TradeGround: general questions, business, advertising and support.",
    title: "LET'S TALK.",
    subtitle: "Have a question, idea or suggestion?",
    lead: "Get in touch with TradeGround.",
    topics: [
      {
        id: "general",
        title: "General question",
        desc: "A question about TradeGround, your account or how the platform works.",
        cta: "Write",
      },
      {
        id: "business",
        title: "For business",
        desc: "Business profile, promoting goods and services, professional opportunities.",
        cta: "Contact",
      },
      {
        id: "ads",
        title: "Ads & partnerships",
        desc: "Advertising in TradeGround, integrations, creators, communities and collaboration.",
        cta: "Discuss",
      },
      {
        id: "support",
        title: "Issue / Support",
        desc: "Something isn’t working or you need help with the platform.",
        cta: "Get help",
      },
    ],
    formNameLabel: "What’s your name?",
    formNamePlaceholder: "Your name",
    formContactLabel: "How can we reach you?",
    formContactPlaceholder: "Email / Telegram",
    formMessageLabel: "What would you like to talk about?",
    formMessagePlaceholder: "Tell us a bit more...",
    submit: "Send",
    successTitle: "MESSAGE SENT.",
    successDesc: "Thank you. We’ve received your message.",
    otherTitle: "OTHER WAYS TO CONNECT",
    emailLabel: "EMAIL",
    emailValue: "tradegrnd@gmail.com",
    telegramLabel: "TELEGRAM",
    telegramValue: "@tradeground_support",
    telegramUrl: "https://t.me/tradeground_support",
    instagramLabel: "INSTAGRAM",
    instagramValue: "@tradeground",
    instagramUrl: "https://instagram.com/tradeground",
  },
  marketplace: {
    metaTitle: "Marketplace — TradeGround",
    metaDescription:
      "A marketplace that adapts to you. Goods, services, jobs, real estate and freebies — in one TradeGround space.",
    title: "MARKETPLACE,",
    titleAccent: "THAT ADAPTS TO YOU.",
    lead: "Choose what matters to you — TradeGround gathers the right goods, services and offers in one place.",
    categories: [
      {
        id: "goods",
        title: "GOODS",
        desc: "From furniture and electronics to cars and fashion.",
        icon: "/categories_icons/furniture.svg",
      },
      {
        id: "services",
        title: "SERVICES",
        desc: "Find specialists or offer your own services.",
        icon: "/categories_icons/services_work.svg",
      },
      {
        id: "jobs",
        title: "JOBS",
        desc: "Vacancies and work opportunities.",
        icon: "/categories_icons/appliances.svg",
      },
      {
        id: "realestate",
        title: "REAL ESTATE",
        desc: "Rentals and other property offers.",
        icon: "/categories_icons/realestate.svg",
      },
      {
        id: "free",
        title: "FREE",
        desc: "Things people are ready to give away.",
        icon: "/categories_icons/free.svg",
      },
    ],
    moreLabel: "AND MORE",
    moreCta: "All categories",
    personalTitle: "MAKE IT PERSONAL.",
    personalDesc:
      "TradeGround doesn’t look the same for everyone. Each user gradually shapes their space — their city, interests, saved listings and subscriptions.",
    businessTitle: "SELLING",
    businessTitleAccent: "PROFESSIONALLY?",
    businessDesc:
      "TradeGround offers dedicated tools for businesses and professional sellers.",
    businessFeatures: [
      "Business profile",
      "Promotion",
      "More listings",
      "Seller tools",
    ],
    businessCta: "TradeGround for business",
    openTitle: "OPEN TRADEGROUND.",
    openDesc: "Goods, services and opportunities are already inside.",
    openCta: "Open Marketplace",
  },
  about: {
    metaTitle: "About us — TradeGround",
    metaDescription:
      "More than a marketplace. TradeGround was built for Russian- and Ukrainian-speaking residents of Germany — to find what you need, offer what you have, and connect directly.",
    title: "MORE THAN",
    titleAccent: "A MARKETPLACE.",
    lead: "TradeGround was built for Russian- and Ukrainian-speaking residents of Germany — to find what you need, offer what you have, and connect directly with each other.",
    storyTitle: "IT STARTED",
    storyTitleAccent: "WITH A SIMPLE NEED.",
    storyParagraphs: [
      "After moving to Germany, I kept running into the same problem: goods, services, jobs and other offers were scattered across dozens of groups, channels and platforms.",
      "Finding the right specialist, the right item, or simply selling something quickly turned out harder than it should be.",
      "Then a simple idea appeared — gather it all in one place and make discovery familiar and clear.",
    ],
    storyReveal: "THAT’S HOW TRADEGROUND BEGAN.",
    founderName: "Vasyl Zhuravlov",
    founderRole: "Founder, TradeGround",
    buyTitle: "BUY. SELL. FIND.",
    buyDesc:
      "Buy and sell. Find specialists, jobs, housing and local offers — without searching across dozens of different sources.",
    simpleTitle: "NO FRICTION.",
    simpleTitleAccent: "NO LANGUAGE BARRIER.",
    simpleDesc:
      "Familiar Telegram. Clear language. Direct connection between people. Nothing extra to download. Found what you need — message the seller or specialist right away.",
    futureTitle: "MARKETPLACE —",
    futureTitleAccent: "IS ONLY THE BEGINNING.",
    futureDesc:
      "Today — Marketplace. Next — more opportunities for everyday life, community and business.",
    ctaLine1: "GERMANY TODAY.",
    ctaLine2: "MORE TOMORROW.",
    cta: "Join",
  },
  notFound: {
    title: "Page not found",
    description: "This page doesn’t exist. Head back to the TradeGround home page.",
    back: "Back",
    home: "Go home",
  },
};

const de: Dictionary = {
  meta: {
    title: "TradeGround — Marketplace in Telegram",
    description:
      "Marketplace für das Leben in Deutschland. Waren, Services und Möglichkeiten direkt in Telegram. Kaufen und verkaufen ohne Extra-Apps.",
    keywords: [
      "TradeGround",
      "Telegram Marketplace",
      "Ukrainer in Deutschland",
      "Kleinanzeigen Deutschland",
      "kaufen verkaufen Telegram",
      "marketplace Germany",
      "TradeGroundBot",
    ],
  },
  nav: {
    about: "Über uns",
    marketplace: "Marketplace",
    business: "Für Business",
    contacts: "Kontakt",
    open: "Öffnen",
    menu: "Menü",
    close: "Schließen",
  },
  hero: {
    line1: "Trade",
    line2: "Ground",
    subtitle:
      "Eine Plattform für Waren, Services und Möglichkeiten für das Leben in Deutschland — direkt in Telegram. Kaufen, verkaufen und in der Nähe finden ohne Extra-Apps.",
    cta: "Marketplace öffnen",
    cardAll: "Alles an einem Ort",
    cardStats: "50K+",
    cardStatsDesc: "Anzeigen in Dutzenden Kategorien in ganz Deutschland",
    cardTg: "Läuft in Telegram",
    cardTgDesc: "Kein Download — Marketplace öffnen und loslegen",
    tagGoods: "Waren",
    tagServices: "Services",
    tagAds: "Anzeigen",
    tagCommunity: "Community",
  },
  categories: {
    title: "ONE PLACE. ALL YOU NEED.",
    subtitle: "Waren, Services und Möglichkeiten in einem Raum.",
    openMarketplace: "Im Marketplace öffnen",
    back: "Zurück",
    labels: {
      all: "Alle Kategorien",
      services: "Services & Jobs",
      fashion: "Mode & Style",
      furniture: "Möbel",
      electronics: "Elektronik",
      appliances: "Haushaltsgeräte",
      kids: "Kinder",
      home: "Zuhause",
      beauty: "Beauty & Gesundheit",
      auto: "Auto",
      hobby: "Hobby / Sport",
      pets: "Haustiere",
      realestate: "Immobilien",
      free: "Kostenlos / Abzugeben",
    },
  },
  telegram: {
    powered: "Powered by Telegram",
    title: "Marketplace im gewohnten",
    titleAccent: "Messenger.",
    desc: "TradeGround läuft direkt in Telegram. Keine Extra-Apps — Marketplace öffnen und loslegen.",
    open: "TradeGround\nöffnen",
    features: [
      {
        icon: "📦",
        title: "Ohne Downloads",
        desc: "Kein weiteres App-Install nötig.",
      },
      {
        icon: "💬",
        title: "Direkter Kontakt",
        desc: "Gefunden — sofort dem Verkäufer oder Spezialisten schreiben.",
      },
      {
        icon: "🌐",
        title: "Klare Sprache",
        desc: "Suchen, verkaufen und chatten ohne Sprachbarriere.",
      },
    ],
  },
  flow: {
    eyebrow: "So funktioniert’s",
    title: "VON DER IDEE",
    titleAccent: "ZUM DEAL.",
    live: "Live in Telegram",
    steps: [
      {
        num: "01",
        title: "Telegram öffnen",
        desc: "TradeGround lebt dort, wo Sie schon schreiben. Keine Extra-App — nur der Bot.",
      },
      {
        num: "02",
        title: "Feed formen",
        desc: "Stadt, Interessen, gespeicherte Anzeigen. Der Marketplace wird nach und nach Ihr Raum.",
      },
      {
        num: "03",
        title: "Direkt schreiben",
        desc: "Gefunden — sofort Kontakt zum Verkäufer oder zur Fachkraft. Ohne Umwege.",
      },
    ],
  },
  audience: {
    title: "Private /",
    titleAccent: "Business",
    subtitle: "Für jeden das richtige Level.",
    items: [
      {
        id: "private",
        label: "Für Privatpersonen",
        desc: "Kaufen. Verkaufen. In der Nähe finden. Alles Nötige in Ihrer Stadt — mit direktem Telegram-Kontakt.",
        image: "/media/plan-start.jpg",
      },
      {
        id: "business",
        label: "Für Business",
        desc: "Mehr Möglichkeiten für Verkauf und Wachstum. Professionelles Profil, Promotion und Tools für die Kundenarbeit.",
        image: "/media/plan-business.jpg",
      },
    ],
  },
  product: {
    title: "Was steckt in",
    titleAccent: "TradeGround",
    subtitle: "Alles für Leben, Handel und Wachstum in Deutschland",
    mainBadge: "TradeGround",
    mainTitle: "Ein Raum für Wachstum",
    mainDesc:
      "Anzeigen, Deals und Community — alles für den Handel unter Ukrainern in Deutschland.",
    choiceTitle: "Große Auswahl",
    choiceDesc: "50K+ Anzeigen in Dutzenden Kategorien",
    zonesBadge: "Arbeitszonen",
    zonesLines: ["Fokus", "Tempo", "Ergebnis"],
    audienceNum: "2",
    audienceDesc: "Mio.+ Ukrainer in Deutschland",
    hrLabel: "TradeGround HR",
    hrTitle: "Karrierezentrum & HR",
    hrDesc: "Wir verbinden Kandidaten mit Arbeitgebern",
    chillEyebrow: "Balance aus Arbeit und Energie",
    chillTitle: "Community & Networking",
  },
  matches: {
    badge: "Ansehen",
    sectionLabel: "Matches",
    line1: "Jemand sucht.",
    line2: "Jemand bietet.",
    brand: "TradeGround",
    unites: "verbindet.",
    bottom:
      "Menschen, Waren, Services und Möglichkeiten in ganz Deutschland.",
    cta: "Match finden",
    matchLabel: "Deal",
    live: "Match",
    seeking: "Sucht",
    offering: "Bietet",
    items: [
      {
        seekTitle: "Suche Fahrrad",
        seekCity: "Hamburg",
        offerTitle: "Verkaufe Fahrrad",
        offerCity: "Hamburg",
      },
      {
        seekTitle: "Brauche Handwerker",
        seekSub: "für Küchenmontage",
        seekCity: "Berlin",
        offerTitle: "Montiere Möbel",
        offerSub: "Berlin und Umgebung",
        offerCity: "Berlin",
      },
      {
        seekTitle: "Suche Job",
        seekCity: "Köln",
        offerTitle: "Suchen Kurier",
        offerSub: "Flexible Arbeitszeiten",
        offerCity: "Köln",
      },
    ],
  },
  map: {
    title: "Germany",
    titleAccent: "Map",
    headline: "Wir sind schon da,",
    headlineAccent: "wo du bist.",
    desc: "TradeGround ist in allen großen Städten Deutschlands verfügbar. Finde Waren und Services in deiner Nähe.",
    activeUsers: "aktive Anzeigen",
    coverage: "Abdeckung",
    activeCity: "Aktive Stadt",
    otherCity: "Andere Stadt",
    ads: "aktive Anzeigen",
    newWeek: "neu diese Woche",
    viewCity: "Ansehen",
  },
  footer: {
    desc: "Ein Ökosystem aus Waren, Services und Möglichkeiten für das Leben in Deutschland.",
    join: "Jetzt beitreten",
    start: "Starten",
    rights: "©2026 TradeGround | ALL RIGHTS RESERVED",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  contacts: {
    metaTitle: "Kontakt — TradeGround",
    metaDescription:
      "Kontaktieren Sie TradeGround: allgemeine Fragen, Business, Werbung und Support.",
    title: "LET'S TALK.",
    subtitle: "Frage, Idee oder Vorschlag?",
    lead: "Schreiben Sie TradeGround.",
    topics: [
      {
        id: "general",
        title: "Allgemeine Frage",
        desc: "Frage zu TradeGround, Konto oder Plattform.",
        cta: "Schreiben",
      },
      {
        id: "business",
        title: "Für Business",
        desc: "Business-Profil, Promotion von Waren und Services, professionelle Möglichkeiten.",
        cta: "Kontaktieren",
      },
      {
        id: "ads",
        title: "Werbung & Partnerschaften",
        desc: "Werbung bei TradeGround, Integrationen, Creator, Communities und Kooperationen.",
        cta: "Besprechen",
      },
      {
        id: "support",
        title: "Problem / Support",
        desc: "Etwas funktioniert nicht oder Sie brauchen Hilfe mit der Plattform.",
        cta: "Hilfe erhalten",
      },
    ],
    formNameLabel: "Wie heißen Sie?",
    formNamePlaceholder: "Ihr Name",
    formContactLabel: "Wie erreichen wir Sie?",
    formContactPlaceholder: "Email / Telegram",
    formMessageLabel: "Worüber möchten Sie sprechen?",
    formMessagePlaceholder: "Erzählen Sie kurz mehr...",
    submit: "Senden",
    successTitle: "MESSAGE SENT.",
    successDesc: "Danke. Wir haben Ihre Nachricht erhalten.",
    otherTitle: "OTHER WAYS TO CONNECT",
    emailLabel: "EMAIL",
    emailValue: "tradegrnd@gmail.com",
    telegramLabel: "TELEGRAM",
    telegramValue: "@tradeground_support",
    telegramUrl: "https://t.me/tradeground_support",
    instagramLabel: "INSTAGRAM",
    instagramValue: "@tradeground",
    instagramUrl: "https://instagram.com/tradeground",
  },
  marketplace: {
    metaTitle: "Marketplace — TradeGround",
    metaDescription:
      "Ein Marketplace, der sich an Sie anpasst. Waren, Services, Jobs, Immobilien und Gratisangebote — in einem TradeGround-Raum.",
    title: "MARKETPLACE,",
    titleAccent: "DER SICH AN SIE ANPASST.",
    lead: "Wählen Sie, was Sie wirklich interessiert — TradeGround bündelt passende Waren, Services und Angebote an einem Ort.",
    categories: [
      {
        id: "goods",
        title: "WAREN",
        desc: "Von Möbeln und Elektronik bis Autos und Mode.",
        icon: "/categories_icons/furniture.svg",
      },
      {
        id: "services",
        title: "SERVICES",
        desc: "Finden Sie Fachleute oder bieten Sie eigene Services an.",
        icon: "/categories_icons/services_work.svg",
      },
      {
        id: "jobs",
        title: "JOBS",
        desc: "Stellenangebote und Arbeitsmöglichkeiten.",
        icon: "/categories_icons/appliances.svg",
      },
      {
        id: "realestate",
        title: "IMMOBILIEN",
        desc: "Miete und weitere Angebote.",
        icon: "/categories_icons/realestate.svg",
      },
      {
        id: "free",
        title: "GRATIS",
        desc: "Dinge, die weitergegeben werden.",
        icon: "/categories_icons/free.svg",
      },
    ],
    moreLabel: "UND MEHR",
    moreCta: "Alle Kategorien",
    personalTitle: "MAKE IT PERSONAL.",
    personalDesc:
      "TradeGround sieht nicht für alle gleich aus. Jeder Nutzer formt nach und nach seinen Raum — Stadt, Interessen, gespeicherte Anzeigen, Abos.",
    businessTitle: "VERKAUFEN SIE",
    businessTitleAccent: "PROFESSIONELL?",
    businessDesc:
      "TradeGround bietet eigene Möglichkeiten für Business und professionelle Verkäufer.",
    businessFeatures: [
      "Business-Profil",
      "Promotion",
      "Mehr Anzeigen",
      "Verkäufer-Tools",
    ],
    businessCta: "TradeGround für Business",
    openTitle: "ÖFFNEN SIE TRADEGROUND.",
    openDesc: "Waren, Services und Möglichkeiten warten schon.",
    openCta: "Marketplace öffnen",
  },
  about: {
    metaTitle: "Über uns — TradeGround",
    metaDescription:
      "Mehr als ein Marketplace. TradeGround wurde für russisch- und ukrainischsprachige Menschen in Deutschland geschaffen — um das Nötige zu finden, eigenes anzubieten und sich direkt zu verbinden.",
    title: "MEHR ALS",
    titleAccent: "EIN MARKETPLACE.",
    lead: "TradeGround wurde für russisch- und ukrainischsprachige Menschen in Deutschland geschaffen — um das Nötige zu finden, eigenes anzubieten und sich direkt miteinander zu verbinden.",
    storyTitle: "ES BEGANN",
    storyTitleAccent: "MIT EINEM EINFACHEN BEDÜRFNIS.",
    storyParagraphs: [
      "Nach dem Umzug nach Deutschland stieß ich immer wieder auf dasselbe Problem: Waren, Services, Jobs und andere Angebote waren über Dutzende Gruppen, Kanäle und Plattformen verstreut.",
      "Den richtigen Fachmann, den passenden Gegenstand oder einfach etwas schnell zu verkaufen war komplizierter, als es sein sollte.",
      "Dann entstand eine einfache Idee — alles an einem Ort zu bündeln und die Suche vertraut und verständlich zu machen.",
    ],
    storyReveal: "SO ENTSTAND TRADEGROUND.",
    founderName: "Vasyl Zhuravlov",
    founderRole: "Founder, TradeGround",
    buyTitle: "BUY. SELL. FIND.",
    buyDesc:
      "Kaufen und verkaufen. Fachleute, Jobs, Wohnungen und lokale Angebote finden — ohne in Dutzenden Quellen zu suchen.",
    simpleTitle: "OHNE UMSTÄNDE.",
    simpleTitleAccent: "OHNE SPRACHBARRIERE.",
    simpleDesc:
      "Vertrautes Telegram. Verständliche Sprache. Direkter Kontakt zwischen Menschen. Nichts Extra herunterladen. Gefunden — direkt mit Verkäufer oder Fachkraft schreiben.",
    futureTitle: "MARKETPLACE —",
    futureTitleAccent: "IST NUR DER ANFANG.",
    futureDesc:
      "Heute — Marketplace. Als Nächstes — mehr Möglichkeiten für Alltag, Community und Business.",
    ctaLine1: "GERMANY TODAY.",
    ctaLine2: "MORE TOMORROW.",
    cta: "Beitreten",
  },
  notFound: {
    title: "Seite nicht gefunden",
    description: "Diese Seite existiert nicht. Zurück zur TradeGround-Startseite.",
    back: "Zurück",
    home: "Zur Startseite",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ua, ru, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.ua;
}
