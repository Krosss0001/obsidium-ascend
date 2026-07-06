export const locales = ["en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dictionaries = {
  en: {
    meta: {
      title: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
      description:
        "Premium black-label creator systems studio for stream identity, motion assets, websites, campaigns, automation and custom software.",
      locale: "en_US",
    },
    brand: {
      name: "OBSIDIUM ASCEND",
      mark: "OA",
      category: "Black-Label Motion & Creator Systems Studio",
      line: "Motion • Stream Identity • Websites • Campaigns • Automation • Software",
      email: "hello@obsidium.ascend",
    },
    nav: {
      menuLabel: "Open navigation",
      closeLabel: "Close navigation",
      languageLabel: "Language",
      cta: "Request Build",
      items: [
        { href: "#studio", label: "Studio" },
        { href: "#systems", label: "Systems" },
        { href: "#missions", label: "Missions" },
        { href: "#black-label", label: "Black Label" },
        { href: "#protocol", label: "Protocol" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Black-Label Motion & Creator Systems Studio",
      title: "OBSIDIUM ASCEND",
      headline: "Not a design pack. A cinematic creator system.",
      subtitle:
        "We build premium stream identities, motion assets, websites, campaigns, automations and custom software for creators who want to look impossible to ignore.",
      primary: "Request Private Build",
      secondary: "View Systems",
      studioCode: "Private build / motion system / launch architecture",
    },
    credibility: {
      text: "Built for creators, streamers, gaming clans and digital brands that need more than visuals.",
      pillars: ["Identity", "Motion", "Launch", "Systems"],
    },
    systems: {
      title: "Systems Behind the Image",
      subtitle:
        "Every build connects visual identity, motion, launch structure and technical infrastructure.",
      panels: [
        {
          number: "01",
          title: "Identity Direction",
          text: "A premium visual language for your channel, clan, product or personal brand: tone, typography, interface rules, overlays and brand presence.",
          mockup: "obs",
        },
        {
          number: "02",
          title: "Motion Production",
          text: "Stingers, animated logos, transitions, cinematic intros, promo assets and AI-assisted visual systems produced as one coherent motion language.",
          mockup: "timeline",
        },
        {
          number: "03",
          title: "Launch Presence",
          text: "Websites, landing pages, campaign visuals, content direction and launch assets that make the brand feel real before the first message.",
          mockup: "web",
        },
        {
          number: "04",
          title: "Automation Layer",
          text: "Bots, dashboards, lead systems, internal tools and custom software that remove manual friction after the brand goes live.",
          mockup: "automation",
        },
      ],
    },
    showreel: {
      title: "Built Like a Showreel. Launched Like a System.",
      text: "The final result is not a folder of graphics. It is a controlled visual and technical ecosystem that moves across stream, web, community, ads and operations.",
      frames: ["Concept", "Identity", "Motion", "Launch", "Scale"],
    },
    missions: {
      title: "Selected Missions",
      cards: [
        {
          number: "01",
          title: "Streamer Black System",
          text: "A cinematic Twitch identity with OBS scenes, motion transitions, Discord visual structure and launch-ready channel presence.",
          tags: ["Twitch", "OBS", "Motion", "Discord"],
          outcome: "Full creator visual system in 7 days",
          mockup: "stream",
        },
        {
          number: "02",
          title: "Gaming Clan Launch",
          text: "A recruitment-ready ecosystem with website structure, Discord architecture, TikTok direction and sharp clan visuals.",
          tags: ["Website", "Discord", "TikTok", "Recruitment"],
          outcome: "Launch-ready ecosystem",
          mockup: "clan",
        },
        {
          number: "03",
          title: "Creator Automation Stack",
          text: "Bots, dashboard flows, AI-assisted operations, campaign tracking and intake systems connected into one control layer.",
          tags: ["Bots", "Dashboard", "AI", "Campaigns"],
          outcome: "From manual workflow to system control",
          mockup: "dashboard",
        },
      ],
    },
    blackLabel: {
      title: "Black Label Builds",
      text: "For creators and brands that need a full private system — identity, motion, website, launch assets and custom tools handled as one build.",
      button: "Request Build",
      tiers: [
        {
          name: "CORE",
          text: "Lean visual start.",
        },
        {
          name: "ASCEND",
          text: "Full creator upgrade.",
        },
        {
          name: "BLACK",
          text: "Private premium build.",
        },
        {
          name: "SYNTHESIS",
          text: "Software and automation layer.",
        },
      ],
    },
    protocol: {
      title: "The Ascend Protocol",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          text: "We analyze your channel, audience, visual gap and technical stack.",
        },
        {
          number: "02",
          title: "Direct",
          text: "We define the visual direction, motion style and system architecture.",
        },
        {
          number: "03",
          title: "Produce",
          text: "We create the identity, stream assets, website, motion and tools.",
        },
        {
          number: "04",
          title: "Launch",
          text: "We package the campaign, community, content and release flow.",
        },
        {
          number: "05",
          title: "Operate",
          text: "We improve the system through analytics, automation and new assets.",
        },
      ],
    },
    contact: {
      headline: "Build the system behind your next level.",
      text: "Tell us what you are building. We will shape the identity, motion, launch presence and technical system around it.",
      button: "Request Private Build",
    },
    footer: {
      category: "Black-Label Motion & Creator Systems Studio",
      line: "Motion • Stream Identity • Websites • Campaigns • Automation • Software",
      links: [
        { href: "#studio", label: "Studio" },
        { href: "#systems", label: "Systems" },
        { href: "#missions", label: "Missions" },
        { href: "#black-label", label: "Black Label" },
        { href: "#protocol", label: "Protocol" },
        { href: "#contact", label: "Contact" },
      ],
    },
  },
  uk: {
    meta: {
      title: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
      description:
        "Преміальна black-label студія creator systems для stream identity, motion assets, сайтів, кампаній, автоматизації та кастомного софту.",
      locale: "uk_UA",
    },
    brand: {
      name: "OBSIDIUM ASCEND",
      mark: "OA",
      category: "Black-Label Motion & Creator Systems Studio",
      line: "Motion • Стрім-айдентика • Сайти • Кампанії • Автоматизація • Софт",
      email: "hello@obsidium.ascend",
    },
    nav: {
      menuLabel: "Відкрити навігацію",
      closeLabel: "Закрити навігацію",
      languageLabel: "Мова",
      cta: "Замовити",
      items: [
        { href: "#studio", label: "Студія" },
        { href: "#systems", label: "Системи" },
        { href: "#missions", label: "Місії" },
        { href: "#black-label", label: "Black Label" },
        { href: "#protocol", label: "Протокол" },
        { href: "#contact", label: "Контакт" },
      ],
    },
    hero: {
      eyebrow: "Black-Label Motion & Creator Systems Studio",
      title: "OBSIDIUM ASCEND",
      headline: "Не дизайн-пак. А кінематична система для креатора.",
      subtitle:
        "Ми створюємо преміальні stream identities, motion assets, сайти, кампанії, автоматизації та кастомний софт для креаторів, які хочуть виглядати неможливо для ігнорування.",
      primary: "Замовити Private Build",
      secondary: "Переглянути системи",
      studioCode: "Private build / motion system / launch architecture",
    },
    credibility: {
      text: "Створено для креаторів, стрімерів, gaming-кланів і digital-брендів, яким потрібен не просто візуал.",
      pillars: ["Айдентика", "Motion", "Запуск", "Системи"],
    },
    systems: {
      title: "Системи за образом",
      subtitle:
        "Кожна система поєднує айдентику, motion, launch-структуру та технічну інфраструктуру.",
      panels: [
        {
          number: "01",
          title: "Identity Direction",
          text: "Преміальна візуальна мова для каналу, клану, продукту або personal brand: tone, типографіка, interface rules, overlays і бренд-присутність.",
          mockup: "obs",
        },
        {
          number: "02",
          title: "Motion Production",
          text: "Stingers, анімовані логотипи, transitions, cinematic intros, promo assets і AI-assisted visual systems як одна цілісна motion-мова.",
          mockup: "timeline",
        },
        {
          number: "03",
          title: "Launch Presence",
          text: "Сайти, landing pages, campaign visuals, content direction і launch assets, які роблять бренд реальним ще до першого повідомлення.",
          mockup: "web",
        },
        {
          number: "04",
          title: "Automation Layer",
          text: "Боти, dashboards, lead systems, internal tools і custom software, які прибирають ручну роботу після запуску бренду.",
          mockup: "automation",
        },
      ],
    },
    showreel: {
      title: "Зібрано як showreel. Запущено як система.",
      text: "Фінальний результат — це не папка з графікою. Це керована візуальна й технічна екосистема, яка працює у stream, web, community, ads та operations.",
      frames: ["Concept", "Identity", "Motion", "Launch", "Scale"],
    },
    missions: {
      title: "Selected Missions",
      cards: [
        {
          number: "01",
          title: "Streamer Black System",
          text: "Кінематична Twitch-айдентика з OBS-сценами, motion transitions, Discord visual structure і launch-ready channel presence.",
          tags: ["Twitch", "OBS", "Motion", "Discord"],
          outcome: "Повна visual system за 7 днів",
          mockup: "stream",
        },
        {
          number: "02",
          title: "Gaming Clan Launch",
          text: "Recruitment-ready екосистема зі структурою сайту, Discord architecture, TikTok direction і гострим візуалом клану.",
          tags: ["Website", "Discord", "TikTok", "Recruitment"],
          outcome: "Launch-ready ecosystem",
          mockup: "clan",
        },
        {
          number: "03",
          title: "Creator Automation Stack",
          text: "Боти, dashboard flows, AI-assisted operations, campaign tracking і intake systems, з'єднані в один control layer.",
          tags: ["Bots", "Dashboard", "AI", "Campaigns"],
          outcome: "Від ручного workflow до system control",
          mockup: "dashboard",
        },
      ],
    },
    blackLabel: {
      title: "Black Label Builds",
      text: "Для креаторів і брендів, яким потрібна повна private system — айдентика, motion, сайт, launch assets і custom tools як один build.",
      button: "Замовити",
      tiers: [
        {
          name: "CORE",
          text: "Lean visual start.",
        },
        {
          name: "ASCEND",
          text: "Full creator upgrade.",
        },
        {
          name: "BLACK",
          text: "Private premium build.",
        },
        {
          name: "SYNTHESIS",
          text: "Software and automation layer.",
        },
      ],
    },
    protocol: {
      title: "Ascend Protocol",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          text: "Аналізуємо канал, аудиторію, visual gap і technical stack.",
        },
        {
          number: "02",
          title: "Direct",
          text: "Визначаємо visual direction, motion style і system architecture.",
        },
        {
          number: "03",
          title: "Produce",
          text: "Створюємо identity, stream assets, сайт, motion і tools.",
        },
        {
          number: "04",
          title: "Launch",
          text: "Пакуємо кампанію, community, контент і release flow.",
        },
        {
          number: "05",
          title: "Operate",
          text: "Покращуємо систему через analytics, automation і нові assets.",
        },
      ],
    },
    contact: {
      headline: "Побудуй систему за своїм наступним рівнем.",
      text: "Розкажи, що ти будуєш. Ми сформуємо навколо цього айдентику, motion, launch presence і technical system.",
      button: "Замовити Private Build",
    },
    footer: {
      category: "Black-Label Motion & Creator Systems Studio",
      line: "Motion • Стрім-айдентика • Сайти • Кампанії • Автоматизація • Софт",
      links: [
        { href: "#studio", label: "Студія" },
        { href: "#systems", label: "Системи" },
        { href: "#missions", label: "Місії" },
        { href: "#black-label", label: "Black Label" },
        { href: "#protocol", label: "Протокол" },
        { href: "#contact", label: "Контакт" },
      ],
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
