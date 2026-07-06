export const locales = ["en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const sharedHeroLabels = ["OBS", "WEB", "AI", "ADS", "MOTION", "BOTS"];

export const dictionaries = {
  en: {
    meta: {
      title: "OBSIDIUM ASCEND — Creator Systems Agency",
      description:
        "Premium creator systems agency for stream design, OBS setup, websites, advertising launches, AI production, automation and custom software.",
      locale: "en_US",
    },
    brand: {
      name: "OBSIDIUM ASCEND",
      mark: "OA",
      category: "Creator Systems Agency",
      slogan: "Don't just stream. Ascend.",
      line: "Design - Streams - Websites - Ads - Automation - Software",
      email: "hello@obsidium.ascend",
    },
    ui: {
      sectionEyebrow: "Obsidium Signal",
      readyLabel: "Ready",
      missionLabel: "Mission",
    },
    nav: {
      menuLabel: "Open navigation",
      closeLabel: "Close navigation",
      languageLabel: "Language",
      cta: "Start Ascend",
      items: [
        { href: "#systems", label: "Systems" },
        { href: "#packages", label: "Packages" },
        { href: "#protocol", label: "Protocol" },
        { href: "#cases", label: "Cases" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Creator Systems Agency",
      title: "OBSIDIUM ASCEND",
      headline: "We build premium creator systems.",
      subtitle:
        "From stream identity and OBS engineering to websites, ad launches, AI production, automation and custom software - everything your brand needs to ascend.",
      secondaryLine:
        "Design - Streams - Websites - Ads - Automation - Software",
      primary: "Start Ascend",
      secondary: "Explore Systems",
      reactorStatus: "Obsidian Core online",
      reactorSignal: "Creator launch systems",
      visualLabels: sharedHeroLabels,
    },
    trust: {
      text: "Built for Streamers - Creators - Gaming Clans - Digital Brands - Launch Teams",
      badges: [
        "OBS Studio",
        "Twitch",
        "Discord",
        "YouTube",
        "TikTok",
        "Figma",
        "AI Tools",
        "Web",
        "Bots",
        "Automation",
      ],
    },
    systems: {
      title: "Ascend Systems",
      subtitle:
        "One agency for your visual identity, stream setup, content engine, launch strategy and custom digital tools.",
      cards: [
        {
          title: "Stream Identity",
          text: "Twitch overlays, panels, alerts, webcam frames, offline screens and full channel visuals.",
        },
        {
          title: "OBS Engineering",
          text: "OBS scenes, audio/video setup, alerts, transitions, stream optimization and plugins.",
        },
        {
          title: "Creator Websites",
          text: "Landing pages, portfolio sites, gaming clan pages, agency websites and event pages.",
        },
        {
          title: "Scenario Lab",
          text: "Scripts for videos, intros, TikTok, YouTube, trailers, promo reels and AI video prompts.",
        },
        {
          title: "Ad Launch Systems",
          text: "TikTok Ads, Meta Ads, Google Ads, promo creatives, funnels and launch strategy.",
        },
        {
          title: "Discord Architecture",
          text: "Server structure, roles, channels, bots, rules, visuals and community experience.",
        },
        {
          title: "Motion & AI Production",
          text: "Animated logos, stingers, intros, AI visuals, cinematic prompts and promo assets.",
        },
        {
          title: "Custom Software",
          text: "Bots, dashboards, admin panels, automations, AI assistants, internal tools and web apps.",
        },
      ],
    },
    packages: {
      title: "Choose Your Ascend Level",
      subtitle:
        "Modular creator systems for channels, clans, brands, campaigns and custom technical builds.",
      requestLabel: "Request Package",
      cards: [
        {
          name: "CORE",
          badge: null,
          subtitle: "Starter creator setup.",
          features: [
            "Basic brand direction",
            "Avatar, banner and panels",
            "Simple overlay layout",
            "Basic OBS scene structure",
          ],
        },
        {
          name: "ASCEND",
          badge: "Most Popular",
          subtitle: "Full creator upgrade.",
          features: [
            "Full Twitch visual system",
            "OBS scenes and transitions",
            "Alerts and motion elements",
            "Discord visual structure",
            "Content direction",
          ],
        },
        {
          name: "BLACK",
          badge: "Premium",
          subtitle: "Premium brand system.",
          features: [
            "Full identity system",
            "Website or landing page",
            "Motion graphics pack",
            "Discord and community setup",
            "Launch creatives and ad visuals",
          ],
        },
        {
          name: "SYNTHESIS",
          badge: "Advanced",
          subtitle: "Custom software and automation.",
          features: [
            "Bots and automations",
            "Dashboards and admin panels",
            "AI assistants and internal tools",
            "Web apps and integrations",
            "Technical launch support",
          ],
        },
      ],
    },
    comparison: {
      title: "From random setup to premium creator brand.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Weak visuals",
        "Basic OBS",
        "No website",
        "No content system",
        "No launch strategy",
      ],
      after: [
        "Premium identity",
        "Stream system",
        "Website and funnel",
        "Discord community",
        "Ads and automation",
      ],
    },
    protocol: {
      title: "The Ascend Protocol",
      steps: [
        {
          step: "01",
          title: "Audit",
          text: "We analyze your channel, project, audience, visuals and growth goals.",
        },
        {
          step: "02",
          title: "Identity",
          text: "We create your visual direction, tone, colors, typography and brand system.",
        },
        {
          step: "03",
          title: "Build",
          text: "We build your OBS, overlays, Discord, website, motion assets and digital tools.",
        },
        {
          step: "04",
          title: "Launch",
          text: "We prepare content, ad creatives, campaign structure and launch assets.",
        },
        {
          step: "05",
          title: "Scale",
          text: "We improve the system with analytics, automation, new content and technical upgrades.",
        },
      ],
    },
    cases: {
      title: "Selected Missions",
      cards: [
        {
          title: "Streamer Rebrand",
          text: "Twitch identity, overlays, OBS scenes and motion pack.",
          tags: ["Twitch", "OBS", "Motion"],
          metric: "+240% visual consistency",
        },
        {
          title: "Gaming Clan Launch",
          text: "Clan website, Discord, recruitment visuals and TikTok content system.",
          tags: ["Discord", "Website", "TikTok"],
          metric: "3-day launch sprint",
        },
        {
          title: "Creator Website",
          text: "Premium landing page, personal brand and contact funnel.",
          tags: ["Web", "Brand", "Funnel"],
          metric: "Launch-ready site",
        },
        {
          title: "AI Promo Campaign",
          text: "AI visuals, cinematic video prompts and short-form content kit.",
          tags: ["AI", "Video", "Ads"],
          metric: "AI-assisted production",
        },
        {
          title: "Automation Dashboard",
          text: "Bots, internal tools, lead forms and campaign tracking.",
          tags: ["Bots", "Tools", "Automation"],
          metric: "Full system control",
        },
      ],
    },
    stack: {
      title: "Built with modern creator infrastructure.",
      badges: [
        "OBS Studio",
        "Twitch",
        "Discord",
        "YouTube",
        "TikTok",
        "Figma",
        "Photoshop",
        "After Effects",
        "CapCut",
        "Next.js",
        "React",
        "Tailwind",
        "AI Tools",
        "Bots",
        "Automation",
      ],
    },
    finalCta: {
      headline: "Ready to ascend your brand?",
      text: "Build a visual and technical system that makes your project look premium from the first click.",
      button: "Build My System",
    },
    footer: {
      category: "Creator Systems Agency",
      line: "Design - Streams - Websites - Ads - Automation - Software",
      links: [
        { href: "#systems", label: "Systems" },
        { href: "#packages", label: "Packages" },
        { href: "#protocol", label: "Protocol" },
        { href: "#cases", label: "Cases" },
        { href: "#contact", label: "Contact" },
      ],
      socials: ["Twitch", "Discord", "YouTube", "TikTok", "GitHub"],
    },
  },
  uk: {
    meta: {
      title: "OBSIDIUM ASCEND — Агенція систем для креаторів",
      description:
        "Преміальна агенція систем для креаторів: stream design, OBS setup, сайти, рекламні запуски, AI-продакшен, автоматизація та кастомний софт.",
      locale: "uk_UA",
    },
    brand: {
      name: "OBSIDIUM ASCEND",
      mark: "OA",
      category: "Агенція систем для креаторів",
      slogan: "Не просто стрім. Піднімайся вище.",
      line: "Дизайн - Стріми - Сайти - Реклама - Автоматизація - Софт",
      email: "hello@obsidium.ascend",
    },
    ui: {
      sectionEyebrow: "Obsidium Signal",
      readyLabel: "Готово",
      missionLabel: "Місія",
    },
    nav: {
      menuLabel: "Відкрити навігацію",
      closeLabel: "Закрити навігацію",
      languageLabel: "Мова",
      cta: "Почати Ascend",
      items: [
        { href: "#systems", label: "Системи" },
        { href: "#packages", label: "Пакети" },
        { href: "#protocol", label: "Протокол" },
        { href: "#cases", label: "Кейси" },
        { href: "#contact", label: "Контакт" },
      ],
    },
    hero: {
      eyebrow: "Агенція систем для креаторів",
      title: "OBSIDIUM ASCEND",
      headline: "Ми створюємо преміальні системи для креаторів.",
      subtitle:
        "Від стрім-ідентичності та налаштування OBS до сайтів, рекламних запусків, AI-продакшену, автоматизації та кастомного софту - усе, що потрібно бренду, щоб піднятися вище.",
      secondaryLine:
        "Дизайн - Стріми - Сайти - Реклама - Автоматизація - Софт",
      primary: "Почати Ascend",
      secondary: "Переглянути системи",
      reactorStatus: "Obsidian Core активний",
      reactorSignal: "Системи запуску креаторів",
      visualLabels: sharedHeroLabels,
    },
    trust: {
      text: "Створено для стрімерів - креаторів - gaming-кланів - digital-брендів - запусків",
      badges: [
        "OBS Studio",
        "Twitch",
        "Discord",
        "YouTube",
        "TikTok",
        "Figma",
        "AI Tools",
        "Web",
        "Bots",
        "Automation",
      ],
    },
    systems: {
      title: "Ascend Systems",
      subtitle:
        "Одна агенція для візуальної айдентики, стрім-сетапу, контент-системи, запуску реклами та кастомних digital-інструментів.",
      cards: [
        {
          title: "Stream Identity",
          text: "Оверлеї Twitch, панелі, alerts, webcam frames, offline screens і повний візуальний стиль каналу.",
        },
        {
          title: "OBS Engineering",
          text: "OBS-сцени, налаштування аудіо та відео, alerts, transitions, оптимізація стріму та плагіни.",
        },
        {
          title: "Creator Websites",
          text: "Лендинги, портфоліо, сторінки gaming-кланів, сайти агенцій та івент-сторінки.",
        },
        {
          title: "Scenario Lab",
          text: "Сценарії для відео, інтро, TikTok, YouTube, трейлерів, promo reels та AI video prompts.",
        },
        {
          title: "Ad Launch Systems",
          text: "TikTok Ads, Meta Ads, Google Ads, промо-креативи, funnels і стратегія запуску.",
        },
        {
          title: "Discord Architecture",
          text: "Структура сервера, ролі, канали, боти, правила, візуал і community experience.",
        },
        {
          title: "Motion & AI Production",
          text: "Анімовані логотипи, stingers, інтро, AI-візуали, cinematic prompts і promo assets.",
        },
        {
          title: "Custom Software",
          text: "Боти, dashboards, admin panels, автоматизації, AI-асистенти, внутрішні інструменти та web apps.",
        },
      ],
    },
    packages: {
      title: "Обери свій рівень Ascend",
      subtitle:
        "Модульні creator-системи для каналів, кланів, брендів, кампаній і кастомних технічних збірок.",
      requestLabel: "Замовити пакет",
      cards: [
        {
          name: "CORE",
          badge: null,
          subtitle: "Стартовий сетап для креатора.",
          features: [
            "Базовий напрям бренду",
            "Аватар, банер і панелі",
            "Простий overlay layout",
            "Базова структура OBS-сцен",
          ],
        },
        {
          name: "ASCEND",
          badge: "Найпопулярніший",
          subtitle: "Повний апгрейд креатора.",
          features: [
            "Повна візуальна система Twitch",
            "OBS-сцени та transitions",
            "Alerts і motion-елементи",
            "Візуальна структура Discord",
            "Контент-напрям",
          ],
        },
        {
          name: "BLACK",
          badge: "Преміум",
          subtitle: "Преміальна бренд-система.",
          features: [
            "Повна identity system",
            "Сайт або landing page",
            "Motion graphics pack",
            "Discord і community setup",
            "Launch creatives і рекламні візуали",
          ],
        },
        {
          name: "SYNTHESIS",
          badge: "Advanced",
          subtitle: "Кастомний софт і автоматизація.",
          features: [
            "Боти та автоматизації",
            "Dashboards і admin panels",
            "AI-асистенти та внутрішні інструменти",
            "Web apps та інтеграції",
            "Технічна підтримка запуску",
          ],
        },
      ],
    },
    comparison: {
      title: "Від хаотичного сетапу до преміального creator-бренду.",
      beforeTitle: "До",
      afterTitle: "Після",
      before: [
        "Слабкий візуал",
        "Базовий OBS",
        "Немає сайту",
        "Немає контент-системи",
        "Немає стратегії запуску",
      ],
      after: [
        "Преміальна айдентика",
        "Стрім-система",
        "Сайт і funnel",
        "Discord-комʼюніті",
        "Реклама та автоматизація",
      ],
    },
    protocol: {
      title: "Ascend Protocol",
      steps: [
        {
          step: "01",
          title: "Audit",
          text: "Аналізуємо канал, проєкт, аудиторію, візуал і цілі росту.",
        },
        {
          step: "02",
          title: "Identity",
          text: "Створюємо visual direction, tone of voice, кольори, типографіку та бренд-систему.",
        },
        {
          step: "03",
          title: "Build",
          text: "Будуємо OBS, overlays, Discord, сайт, motion assets і digital-інструменти.",
        },
        {
          step: "04",
          title: "Launch",
          text: "Готуємо контент, рекламні креативи, структуру кампаній і launch assets.",
        },
        {
          step: "05",
          title: "Scale",
          text: "Покращуємо систему через аналітику, автоматизацію, новий контент і технічні апгрейди.",
        },
      ],
    },
    cases: {
      title: "Selected Missions",
      cards: [
        {
          title: "Ребрендинг стрімера",
          text: "Twitch-айдентика, overlays, OBS-сцени та motion pack.",
          tags: ["Twitch", "OBS", "Motion"],
          metric: "+240% visual consistency",
        },
        {
          title: "Запуск gaming-клану",
          text: "Сайт клану, Discord, recruitment visuals і TikTok content system.",
          tags: ["Discord", "Website", "TikTok"],
          metric: "3-day launch sprint",
        },
        {
          title: "Сайт креатора",
          text: "Преміальний landing page, personal brand і contact funnel.",
          tags: ["Web", "Brand", "Funnel"],
          metric: "Launch-ready site",
        },
        {
          title: "AI Promo Campaign",
          text: "AI-візуали, cinematic video prompts і short-form content kit.",
          tags: ["AI", "Video", "Ads"],
          metric: "AI-assisted production",
        },
        {
          title: "Automation Dashboard",
          text: "Боти, внутрішні інструменти, lead forms і campaign tracking.",
          tags: ["Bots", "Tools", "Automation"],
          metric: "Full system control",
        },
      ],
    },
    stack: {
      title: "Побудовано на сучасній creator-інфраструктурі.",
      badges: [
        "OBS Studio",
        "Twitch",
        "Discord",
        "YouTube",
        "TikTok",
        "Figma",
        "Photoshop",
        "After Effects",
        "CapCut",
        "Next.js",
        "React",
        "Tailwind",
        "AI Tools",
        "Bots",
        "Automation",
      ],
    },
    finalCta: {
      headline: "Готовий підняти свій бренд вище?",
      text: "Створи візуальну та технічну систему, яка виглядає преміально з першого кліку.",
      button: "Побудувати систему",
    },
    footer: {
      category: "Creator Systems Agency",
      line: "Дизайн - Стріми - Сайти - Реклама - Автоматизація - Софт",
      links: [
        { href: "#systems", label: "Системи" },
        { href: "#packages", label: "Пакети" },
        { href: "#protocol", label: "Протокол" },
        { href: "#cases", label: "Кейси" },
        { href: "#contact", label: "Контакт" },
      ],
      socials: ["Twitch", "Discord", "YouTube", "TikTok", "GitHub"],
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
