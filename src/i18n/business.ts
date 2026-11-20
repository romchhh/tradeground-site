import type { Locale } from "./config";

export type BusinessDictionary = {
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  profileName: string;
  profileCity: string;
  profileRole: string;
  profileOpen: string;
  profileHours: string;
  profileDirections: string[];
  toolsTag: string;
  toolsTitle: string;
  toolsTitleAccent: string;
  toolsLead: string;
  tools: { title: string; desc: string }[];
  pageTag: string;
  pageTitle: string;
  pageTitleAccent: string;
  pageLead: string;
  pageFeatures: string[];
  discoverTag: string;
  discoverTitle: string;
  discoverTitleAccent: string;
  discoverLead: string;
  discoverFilterCity: string;
  discoverFilterField: string;
  discoverCards: { name: string; field: string; city: string; rating: string; ads: string }[];
  plansTag: string;
  plansTitle: string;
  plansTitleAccent: string;
  plansLead: string;
  planFreeName: string;
  planFreePrice: string;
  planFreeItems: string[];
  planFreeNote: string;
  planProName: string;
  planProPrice: string;
  planProPeriod: string;
  planProItems: string[];
  planProNote: string;
  planCta: string;
  readyTag: string;
  readyTitle: string;
  readyTitleAccent: string;
  readyLead: string;
  readyCta: string;
};

const ua: BusinessDictionary = {
  metaTitle: "Для бізнесу — TradeGround",
  metaDescription:
    "Створіть бізнес-профіль у TradeGround: вітрина компанії, портфоліо, просування та статистика для клієнтів по всій Німеччині.",
  heroTag: "01 — FOR BUSINESS",
  heroTitle: "ВАШ БІЗНЕС.",
  heroTitleAccent: "НОВІ МОЖЛИВОСТІ.",
  heroLead:
    "Створіть професійний профіль, представляйте свої послуги та знаходьте клієнтів по всій Німеччині.",
  profileName: "Studio Nord",
  profileCity: "Berlin",
  profileRole: "Design & Renovation",
  profileOpen: "Відкрито зараз",
  profileHours: "Пн–Пт 09:00–18:00",
  profileDirections: ["Ремонт", "Дизайн інтер’єру", "Меблі"],
  toolsTag: "02 — BUSINESS TOOLS",
  toolsTitle: "УСЕ ДЛЯ",
  toolsTitleAccent: "ВАШОГО БІЗНЕСУ.",
  toolsLead: "Від першого знайомства до прямого звернення клієнта.",
  tools: [
    {
      title: "Бізнес-профіль",
      desc: "Назва, опис, контакти, графік роботи та напрями діяльності.",
    },
    {
      title: "Портфоліо",
      desc: "Показуйте приклади робіт і допомагайте клієнтам оцінити результат.",
    },
    {
      title: "Просування",
      desc: "Виділяйте оголошення та підвищуйте їхню помітність у Marketplace.",
    },
    {
      title: "Статистика",
      desc: "Відстежуйте перегляди, звернення та інтерес до вашого бізнесу.",
    },
  ],
  pageTag: "03 — YOUR BUSINESS PAGE",
  pageTitle: "ВАША ВІТРИНА",
  pageTitleAccent: "У TRADEGROUND.",
  pageLead:
    "Не просто оголошення — окрема сторінка, де клієнт може познайомитися з компанією, подивитися роботи, пропозиції та способи зв’язку.",
  pageFeatures: ["Обкладинка", "Напрями", "Оголошення", "Портфоліо", "Відгуки"],
  discoverTag: "04 — GET DISCOVERED",
  discoverTitle: "ВАС ШУКАЮТЬ.",
  discoverTitleAccent: "ДОЗВОЛЬТЕ СЕБЕ ЗНАЙТИ.",
  discoverLead:
    "Користувачі шукають спеціалістів, послуги та компанії у своїх містах. Представте бізнес там, де його можуть помітити потенційні клієнти.",
  discoverFilterCity: "Місто",
  discoverFilterField: "Сфера",
  discoverCards: [
    {
      name: "Studio Nord",
      field: "Дизайн інтер’єру",
      city: "Berlin",
      rating: "4.9",
      ads: "12 оголошень",
    },
    {
      name: "Elektro Fast",
      field: "Електрика",
      city: "Hamburg",
      rating: "5.0",
      ads: "8 оголошень",
    },
    {
      name: "Clean & Move",
      field: "Клінінг",
      city: "München",
      rating: "4.8",
      ads: "15 оголошень",
    },
  ],
  plansTag: "05 — BUSINESS PLANS",
  plansTitle: "ПОЧНІТЬ БЕЗКОШТОВНО.",
  plansTitleAccent: "РОСТІТЬ З PRO.",
  plansLead:
    "Два рівні можливостей — для тих, хто тільки починає, і для тих, кому потрібні додаткові інструменти просування.",
  planFreeName: "BUSINESS",
  planFreePrice: "Безкоштовно",
  planFreeItems: [
    "Професійна сторінка",
    "Оголошення",
    "Портфоліо",
    "Контакти",
    "Відгуки",
    "Базова статистика",
  ],
  planFreeNote: "Знижка 10% на просування.",
  planProName: "BUSINESS PRO",
  planProPrice: "9,90 €",
  planProPeriod: "/міс.",
  planProItems: [
    "Усі можливості BUSINESS",
    "Розширена аналітика",
    "Підвищена видимість",
    "Включені просування",
    "5 Highlight / міс.",
    "2 TOP / міс.",
  ],
  planProNote: "Знижка 20% на просування.",
  planCta: "Обрати",
  readyTag: "06 — READY TO GROW?",
  readyTitle: "ВАШ БІЗНЕС",
  readyTitleAccent: "ЗАСЛУГОВУЄ БІЛЬШОГО.",
  readyLead: "Створіть бізнес-профіль і представте свої послуги новим клієнтам.",
  readyCta: "Створити бізнес-профіль",
};

const ru: BusinessDictionary = {
  metaTitle: "Для бизнеса — TradeGround",
  metaDescription:
    "Создайте бизнес-профиль в TradeGround: витрина компании, портфолио, продвижение и статистика для клиентов по всей Германии.",
  heroTag: "01 — FOR BUSINESS",
  heroTitle: "ВАШ БИЗНЕС.",
  heroTitleAccent: "НОВЫЕ ВОЗМОЖНОСТИ.",
  heroLead:
    "Создайте профессиональный профиль, представляйте свои услуги и находите клиентов по всей Германии.",
  profileName: "Studio Nord",
  profileCity: "Berlin",
  profileRole: "Design & Renovation",
  profileOpen: "Открыто сейчас",
  profileHours: "Пн–Пт 09:00–18:00",
  profileDirections: ["Ремонт", "Дизайн интерьера", "Мебель"],
  toolsTag: "02 — BUSINESS TOOLS",
  toolsTitle: "ВСЁ ДЛЯ",
  toolsTitleAccent: "ВАШЕГО БИЗНЕСА.",
  toolsLead: "От первого знакомства до прямого обращения клиента.",
  tools: [
    {
      title: "Бизнес-профиль",
      desc: "Название, описание, контакты, график работы и направления деятельности.",
    },
    {
      title: "Портфолио",
      desc: "Показывайте примеры своих работ и помогайте клиентам оценить результат.",
    },
    {
      title: "Продвижение",
      desc: "Выделяйте объявления и повышайте их заметность внутри Marketplace.",
    },
    {
      title: "Статистика",
      desc: "Отслеживайте просмотры, обращения и интерес к вашему бизнесу.",
    },
  ],
  pageTag: "03 — YOUR BUSINESS PAGE",
  pageTitle: "ВАША ВИТРИНА",
  pageTitleAccent: "В TRADEGROUND.",
  pageLead:
    "Не просто объявления — отдельная страница, где клиент может познакомиться с компанией, посмотреть работы, предложения и способы связи.",
  pageFeatures: ["Обложка", "Направления", "Объявления", "Портфолио", "Отзывы"],
  discoverTag: "04 — GET DISCOVERED",
  discoverTitle: "ВАС ИЩУТ.",
  discoverTitleAccent: "ПОЗВОЛЬТЕ СЕБЯ НАЙТИ.",
  discoverLead:
    "Пользователи ищут специалистов, услуги и компании в своих городах. Представьте бизнес там, где его могут заметить потенциальные клиенты.",
  discoverFilterCity: "Город",
  discoverFilterField: "Сфера",
  discoverCards: [
    {
      name: "Studio Nord",
      field: "Дизайн интерьера",
      city: "Berlin",
      rating: "4.9",
      ads: "12 объявлений",
    },
    {
      name: "Elektro Fast",
      field: "Электрика",
      city: "Hamburg",
      rating: "5.0",
      ads: "8 объявлений",
    },
    {
      name: "Clean & Move",
      field: "Клининг",
      city: "München",
      rating: "4.8",
      ads: "15 объявлений",
    },
  ],
  plansTag: "05 — BUSINESS PLANS",
  plansTitle: "НАЧНИТЕ БЕСПЛАТНО.",
  plansTitleAccent: "РАСТИТЕ С PRO.",
  plansLead:
    "Два уровня возможностей — для тех, кто только начинает, и для тех, кому нужны дополнительные инструменты продвижения.",
  planFreeName: "BUSINESS",
  planFreePrice: "Бесплатно",
  planFreeItems: [
    "Профессиональная страница",
    "Объявления",
    "Портфолио",
    "Контакты",
    "Отзывы",
    "Базовая статистика",
  ],
  planFreeNote: "Скидка 10% на продвижение.",
  planProName: "BUSINESS PRO",
  planProPrice: "9,90 €",
  planProPeriod: "/мес.",
  planProItems: [
    "Все возможности BUSINESS",
    "Расширенная аналитика",
    "Повышенная видимость",
    "Включённые продвижения",
    "5 Highlight / мес.",
    "2 TOP / мес.",
  ],
  planProNote: "Скидка 20% на продвижение.",
  planCta: "Выбрать",
  readyTag: "06 — READY TO GROW?",
  readyTitle: "ВАШ БИЗНЕС",
  readyTitleAccent: "ЗАСЛУЖИВАЕТ БОЛЬШЕГО.",
  readyLead: "Создайте бизнес-профиль и представьте свои услуги новым клиентам.",
  readyCta: "Создать бизнес-профиль",
};

const en: BusinessDictionary = {
  metaTitle: "For Business — TradeGround",
  metaDescription:
    "Create a TradeGround business profile: company page, portfolio, promotion and stats to reach clients across Germany.",
  heroTag: "01 — FOR BUSINESS",
  heroTitle: "YOUR BUSINESS.",
  heroTitleAccent: "NEW OPPORTUNITIES.",
  heroLead:
    "Create a professional profile, present your services and find clients across Germany.",
  profileName: "Studio Nord",
  profileCity: "Berlin",
  profileRole: "Design & Renovation",
  profileOpen: "Open now",
  profileHours: "Mon–Fri 09:00–18:00",
  profileDirections: ["Renovation", "Interior design", "Furniture"],
  toolsTag: "02 — BUSINESS TOOLS",
  toolsTitle: "EVERYTHING FOR",
  toolsTitleAccent: "YOUR BUSINESS.",
  toolsLead: "From first impression to a direct client request.",
  tools: [
    {
      title: "Business profile",
      desc: "Name, description, contacts, opening hours and service areas.",
    },
    {
      title: "Portfolio",
      desc: "Show your work and help clients evaluate the result.",
    },
    {
      title: "Promotion",
      desc: "Highlight listings and increase visibility inside Marketplace.",
    },
    {
      title: "Statistics",
      desc: "Track views, inquiries and interest in your business.",
    },
  ],
  pageTag: "03 — YOUR BUSINESS PAGE",
  pageTitle: "YOUR STOREFRONT",
  pageTitleAccent: "IN TRADEGROUND.",
  pageLead:
    "Not just listings — a dedicated page where clients can learn about the company, browse work, offers and ways to get in touch.",
  pageFeatures: ["Cover", "Directions", "Listings", "Portfolio", "Reviews"],
  discoverTag: "04 — GET DISCOVERED",
  discoverTitle: "THEY ARE LOOKING.",
  discoverTitleAccent: "LET THEM FIND YOU.",
  discoverLead:
    "Users search for specialists, services and companies in their cities. Present your business where potential clients can notice it.",
  discoverFilterCity: "City",
  discoverFilterField: "Field",
  discoverCards: [
    {
      name: "Studio Nord",
      field: "Interior design",
      city: "Berlin",
      rating: "4.9",
      ads: "12 listings",
    },
    {
      name: "Elektro Fast",
      field: "Electrician",
      city: "Hamburg",
      rating: "5.0",
      ads: "8 listings",
    },
    {
      name: "Clean & Move",
      field: "Cleaning",
      city: "München",
      rating: "4.8",
      ads: "15 listings",
    },
  ],
  plansTag: "05 — BUSINESS PLANS",
  plansTitle: "START FOR FREE.",
  plansTitleAccent: "GROW WITH PRO.",
  plansLead:
    "Two levels of opportunity — for those just starting, and for those who need extra promotion tools.",
  planFreeName: "BUSINESS",
  planFreePrice: "Free",
  planFreeItems: [
    "Professional page",
    "Listings",
    "Portfolio",
    "Contacts",
    "Reviews",
    "Basic statistics",
  ],
  planFreeNote: "10% off promotion.",
  planProName: "BUSINESS PRO",
  planProPrice: "€9.90",
  planProPeriod: "/mo",
  planProItems: [
    "Everything in BUSINESS",
    "Advanced analytics",
    "Higher visibility",
    "Included promotions",
    "5 Highlights / mo",
    "2 TOP / mo",
  ],
  planProNote: "20% off promotion.",
  planCta: "Choose",
  readyTag: "06 — READY TO GROW?",
  readyTitle: "YOUR BUSINESS",
  readyTitleAccent: "DESERVES MORE.",
  readyLead: "Create a business profile and present your services to new clients.",
  readyCta: "Create business profile",
};

const de: BusinessDictionary = {
  metaTitle: "Für Unternehmen — TradeGround",
  metaDescription:
    "Erstellen Sie ein Business-Profil bei TradeGround: Unternehmensseite, Portfolio, Promotion und Statistiken für Kunden in ganz Deutschland.",
  heroTag: "01 — FOR BUSINESS",
  heroTitle: "IHR BUSINESS.",
  heroTitleAccent: "NEUE MÖGLICHKEITEN.",
  heroLead:
    "Erstellen Sie ein professionelles Profil, präsentieren Sie Ihre Leistungen und finden Sie Kunden in ganz Deutschland.",
  profileName: "Studio Nord",
  profileCity: "Berlin",
  profileRole: "Design & Renovation",
  profileOpen: "Jetzt geöffnet",
  profileHours: "Mo–Fr 09:00–18:00",
  profileDirections: ["Renovierung", "Interior Design", "Möbel"],
  toolsTag: "02 — BUSINESS TOOLS",
  toolsTitle: "ALLES FÜR",
  toolsTitleAccent: "IHR BUSINESS.",
  toolsLead: "Vom ersten Eindruck bis zur direkten Kundenanfrage.",
  tools: [
    {
      title: "Business-Profil",
      desc: "Name, Beschreibung, Kontakte, Öffnungszeiten und Leistungsbereiche.",
    },
    {
      title: "Portfolio",
      desc: "Zeigen Sie Arbeitsbeispiele und helfen Sie Kunden, das Ergebnis einzuschätzen.",
    },
    {
      title: "Promotion",
      desc: "Heben Sie Anzeigen hervor und steigern Sie die Sichtbarkeit im Marketplace.",
    },
    {
      title: "Statistik",
      desc: "Verfolgen Sie Aufrufe, Anfragen und Interesse an Ihrem Business.",
    },
  ],
  pageTag: "03 — YOUR BUSINESS PAGE",
  pageTitle: "IHR SCHAUFENSTER",
  pageTitleAccent: "BEI TRADEGROUND.",
  pageLead:
    "Nicht nur Anzeigen — eine eigene Seite, auf der Kunden das Unternehmen kennenlernen, Arbeiten, Angebote und Kontaktwege sehen können.",
  pageFeatures: ["Cover", "Bereiche", "Anzeigen", "Portfolio", "Bewertungen"],
  discoverTag: "04 — GET DISCOVERED",
  discoverTitle: "SIE WERDEN GESUCHT.",
  discoverTitleAccent: "LASSEN SIE SICH FINDEN.",
  discoverLead:
    "Nutzer suchen Spezialisten, Services und Unternehmen in ihren Städten. Präsentieren Sie Ihr Business dort, wo potenzielle Kunden es sehen können.",
  discoverFilterCity: "Stadt",
  discoverFilterField: "Bereich",
  discoverCards: [
    {
      name: "Studio Nord",
      field: "Interior Design",
      city: "Berlin",
      rating: "4.9",
      ads: "12 Anzeigen",
    },
    {
      name: "Elektro Fast",
      field: "Elektrik",
      city: "Hamburg",
      rating: "5.0",
      ads: "8 Anzeigen",
    },
    {
      name: "Clean & Move",
      field: "Reinigung",
      city: "München",
      rating: "4.8",
      ads: "15 Anzeigen",
    },
  ],
  plansTag: "05 — BUSINESS PLANS",
  plansTitle: "KOSTENLOS STARTEN.",
  plansTitleAccent: "MIT PRO WACHSEN.",
  plansLead:
    "Zwei Stufen — für den Start und für alle, die zusätzliche Promotion-Tools brauchen.",
  planFreeName: "BUSINESS",
  planFreePrice: "Kostenlos",
  planFreeItems: [
    "Professionelle Seite",
    "Anzeigen",
    "Portfolio",
    "Kontakte",
    "Bewertungen",
    "Basis-Statistik",
  ],
  planFreeNote: "10% Rabatt auf Promotion.",
  planProName: "BUSINESS PRO",
  planProPrice: "9,90 €",
  planProPeriod: "/Mon.",
  planProItems: [
    "Alles aus BUSINESS",
    "Erweiterte Analytik",
    "Höhere Sichtbarkeit",
    "Inklusive Promotionen",
    "5 Highlight / Mon.",
    "2 TOP / Mon.",
  ],
  planProNote: "20% Rabatt auf Promotion.",
  planCta: "Wählen",
  readyTag: "06 — READY TO GROW?",
  readyTitle: "IHR BUSINESS",
  readyTitleAccent: "VERDIENT MEHR.",
  readyLead:
    "Erstellen Sie ein Business-Profil und präsentieren Sie Ihre Leistungen neuen Kunden.",
  readyCta: "Business-Profil erstellen",
};

const dicts: Record<Locale, BusinessDictionary> = { ua, ru, en, de };

export function getBusinessDictionary(locale: Locale): BusinessDictionary {
  return dicts[locale] ?? ua;
}
