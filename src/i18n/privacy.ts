import type { Locale } from "./config";

export type PrivacyDictionary = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const ua: PrivacyDictionary = {
  metaTitle: "Політика конфіденційності — TradeGround",
  metaDescription:
    "Як TradeGround збирає, використовує та захищає ваші дані в Telegram Marketplace.",
  title: "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ",
  updated: "Оновлено: листопад 2025",
  sections: [
    {
      heading: "Загальні положення",
      paragraphs: [
        "TradeGround — marketplace у Telegram для життя в Німеччині. Ця політика пояснює, які дані ми обробляємо, коли ви користуєтесь нашим сайтом tradeground та ботом TradeGround у Telegram.",
        "Користуючись сервісом, ви погоджуєтесь із цією політикою. Якщо ви не згодні — припиніть використання сервісу.",
      ],
    },
    {
      heading: "Які дані ми збираємо",
      paragraphs: [
        "Дані, які ви надаєте самі: ім’я, контакт (email або Telegram), текст повідомлень у формах на сайті, інформація в оголошеннях і профілі в Telegram-боті.",
        "Технічні дані: мова інтерфейсу, тип пристрою, приблизні дані про використання сайту (cookies, локальні налаштування мови).",
        "Дані Telegram: ідентифікатор користувача, нікнейм і повідомлення в межах бота — відповідно до політики Telegram.",
      ],
    },
    {
      heading: "Навіщо ми використовуємо дані",
      paragraphs: [
        "Щоб надавати доступ до Marketplace, підтримувати зв’язок між користувачами, відповідати на звернення та покращувати сервіс.",
        "Щоб надсилати сервісні повідомлення (підтримка, безпека, важливі зміни в роботі платформи).",
        "Ми не продаємо ваші персональні дані третім сторонам.",
      ],
    },
    {
      heading: "Передача та зберігання",
      paragraphs: [
        "Дані можуть оброблятися постачальниками хостингу, аналітики та інфраструктури Telegram. Ми передаємо лише мінімум, необхідний для роботи сервісу.",
        "Дані зберігаються стільки, скільки потрібно для цілей сервісу або дотримання законодавства ЄС/Німеччини.",
      ],
    },
    {
      heading: "Ваші права",
      paragraphs: [
        "Ви маєте право на доступ, виправлення, видалення та обмеження обробки даних, а також право заперечувати проти обробки — у межах GDPR.",
        "Щоб скористатися правами, напишіть на tradegrnd@gmail.com або в Telegram @tradeground_support.",
      ],
    },
    {
      heading: "Контакти",
      paragraphs: [
        "З питань щодо конфіденційності: tradegrnd@gmail.com, Telegram @tradeground_support.",
        "Офіційні звернення також можна надіслати через сторінку контактів на цьому сайті.",
      ],
    },
  ],
};

const ru: PrivacyDictionary = {
  metaTitle: "Политика конфиденциальности — TradeGround",
  metaDescription:
    "Как TradeGround собирает, использует и защищает ваши данные в Telegram Marketplace.",
  title: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
  updated: "Обновлено: ноябрь 2025",
  sections: [
    {
      heading: "Общие положения",
      paragraphs: [
        "TradeGround — marketplace в Telegram для жизни в Германии. Эта политика объясняет, какие данные мы обрабатываем, когда вы пользуетесь нашим сайтом и ботом TradeGround в Telegram.",
        "Используя сервис, вы соглашаетесь с этой политикой. Если вы не согласны — прекратите использование сервиса.",
      ],
    },
    {
      heading: "Какие данные мы собираем",
      paragraphs: [
        "Данные, которые вы предоставляете сами: имя, контакт (email или Telegram), текст сообщений в формах на сайте, информация в объявлениях и профиле в Telegram-боте.",
        "Технические данные: язык интерфейса, тип устройства, приблизительные данные об использовании сайта (cookies, локальные настройки языка).",
        "Данные Telegram: идентификатор пользователя, никнейм и сообщения в рамках бота — в соответствии с политикой Telegram.",
      ],
    },
    {
      heading: "Зачем мы используем данные",
      paragraphs: [
        "Чтобы предоставлять доступ к Marketplace, поддерживать связь между пользователями, отвечать на обращения и улучшать сервис.",
        "Чтобы отправлять сервисные сообщения (поддержка, безопасность, важные изменения в работе платформы).",
        "Мы не продаём ваши персональные данные третьим сторонам.",
      ],
    },
    {
      heading: "Передача и хранение",
      paragraphs: [
        "Данные могут обрабатываться поставщиками хостинга, аналитики и инфраструктуры Telegram. Мы передаём только минимум, необходимый для работы сервиса.",
        "Данные хранятся столько, сколько нужно для целей сервиса или соблюдения законодательства ЕС/Германии.",
      ],
    },
    {
      heading: "Ваши права",
      paragraphs: [
        "Вы имеете право на доступ, исправление, удаление и ограничение обработки данных, а также право возражать против обработки — в рамках GDPR.",
        "Чтобы воспользоваться правами, напишите на tradegrnd@gmail.com или в Telegram @tradeground_support.",
      ],
    },
    {
      heading: "Контакты",
      paragraphs: [
        "По вопросам конфиденциальности: tradegrnd@gmail.com, Telegram @tradeground_support.",
        "Официальные обращения также можно отправить через страницу контактов на этом сайте.",
      ],
    },
  ],
};

const en: PrivacyDictionary = {
  metaTitle: "Privacy Policy — TradeGround",
  metaDescription:
    "How TradeGround collects, uses, and protects your data in the Telegram Marketplace.",
  title: "PRIVACY POLICY",
  updated: "Last updated: November 2025",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "TradeGround is a Telegram marketplace for life in Germany. This policy explains what data we process when you use our website and the TradeGround bot on Telegram.",
        "By using the service, you agree to this policy. If you do not agree, please stop using the service.",
      ],
    },
    {
      heading: "Data we collect",
      paragraphs: [
        "Data you provide: name, contact details (email or Telegram), messages sent via website forms, listing and profile information in the Telegram bot.",
        "Technical data: interface language, device type, approximate site usage (cookies, saved language preferences).",
        "Telegram data: user ID, username, and messages within the bot — as defined by Telegram’s policies.",
      ],
    },
    {
      heading: "How we use data",
      paragraphs: [
        "To provide Marketplace access, connect buyers and sellers, respond to requests, and improve the service.",
        "To send service-related messages (support, security, important platform updates).",
        "We do not sell your personal data to third parties.",
      ],
    },
    {
      heading: "Sharing and retention",
      paragraphs: [
        "Data may be processed by hosting, analytics, and Telegram infrastructure providers. We only share the minimum required to operate the service.",
        "Data is retained as long as needed for service purposes or legal compliance in the EU/Germany.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You may request access, correction, deletion, restriction of processing, or object to processing under GDPR.",
        "Contact tradegrnd@gmail.com or Telegram @tradeground_support to exercise your rights.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Privacy questions: tradegrnd@gmail.com, Telegram @tradeground_support.",
        "You can also reach us via the contacts page on this website.",
      ],
    },
  ],
};

const de: PrivacyDictionary = {
  metaTitle: "Datenschutzrichtlinie — TradeGround",
  metaDescription:
    "Wie TradeGround Ihre Daten im Telegram-Marketplace erhebt, nutzt und schützt.",
  title: "DATENSCHUTZRICHTLINIE",
  updated: "Stand: November 2025",
  sections: [
    {
      heading: "Allgemeines",
      paragraphs: [
        "TradeGround ist ein Telegram-Marketplace für das Leben in Deutschland. Diese Richtlinie erklärt, welche Daten wir verarbeiten, wenn Sie unsere Website und den TradeGround-Bot in Telegram nutzen.",
        "Mit der Nutzung des Dienstes stimmen Sie dieser Richtlinie zu. Wenn Sie nicht einverstanden sind, nutzen Sie den Dienst bitte nicht weiter.",
      ],
    },
    {
      heading: "Welche Daten wir erheben",
      paragraphs: [
        "Von Ihnen bereitgestellte Daten: Name, Kontakt (E-Mail oder Telegram), Nachrichten über Website-Formulare, Anzeigen- und Profilinformationen im Telegram-Bot.",
        "Technische Daten: Sprache der Oberfläche, Gerätetyp, ungefähre Nutzungsdaten der Website (Cookies, gespeicherte Spracheinstellungen).",
        "Telegram-Daten: Nutzer-ID, Benutzername und Nachrichten innerhalb des Bots — gemäß den Richtlinien von Telegram.",
      ],
    },
    {
      heading: "Wofür wir Daten nutzen",
      paragraphs: [
        "Um den Marketplace bereitzustellen, Nutzer zu verbinden, Anfragen zu beantworten und den Dienst zu verbessern.",
        "Um servicebezogene Mitteilungen zu senden (Support, Sicherheit, wichtige Plattform-Updates).",
        "Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte.",
      ],
    },
    {
      heading: "Weitergabe und Speicherung",
      paragraphs: [
        "Daten können von Hosting-, Analyse- und Telegram-Infrastruktur-Anbietern verarbeitet werden. Wir geben nur das Minimum weiter, das für den Betrieb nötig ist.",
        "Daten werden so lange gespeichert, wie es für den Dienst oder die Einhaltung von EU-/deutschem Recht erforderlich ist.",
      ],
    },
    {
      heading: "Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gemäß DSGVO.",
        "Schreiben Sie an tradegrnd@gmail.com oder Telegram @tradeground_support.",
      ],
    },
    {
      heading: "Kontakt",
      paragraphs: [
        "Datenschutzfragen: tradegrnd@gmail.com, Telegram @tradeground_support.",
        "Sie können uns auch über die Kontaktseite dieser Website erreichen.",
      ],
    },
  ],
};

export const privacyDictionaries: Record<Locale, PrivacyDictionary> = {
  ua,
  ru,
  en,
  de,
};

export function getPrivacyDictionary(locale: Locale): PrivacyDictionary {
  return privacyDictionaries[locale] ?? privacyDictionaries.ua;
}