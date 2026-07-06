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
      titleParts: ["OBSIDIUM", "ASCEND"],
      headline: "A cinematic operating system for serious creators.",
      subtitle:
        "Private visual direction, motion production, launch presence and technical tooling for creator brands that need to feel authored, not assembled.",
      primary: "Request Private Build",
      secondary: "View Systems",
      studioCode: "Private build / motion direction / launch architecture",
      meta: ["OBSIDIAN TITLE SEQUENCE", "MOTION SYSTEM 01", "PRIVATE STUDIO"],
    },
    credibility: {
      text: "Built for creators, streamers, gaming clans and digital brands that have outgrown loose assets and need a complete studio system.",
      pillars: ["Identity", "Motion", "Launch", "Systems"],
    },
    systems: {
      title: "Systems Behind the Image",
      subtitle:
        "Each build connects the surface people see with the production layer that makes it repeatable.",
      panels: [
        {
          number: "01",
          label: "Visual Command",
          title: "Identity Direction",
          text: "A black-label visual language for your channel, clan, product or personal brand: type, tone, overlays, interface rules and presence.",
          deliverable: "Brand direction, stream kit, interface grammar",
          mockup: "obs",
        },
        {
          number: "02",
          label: "Motion Cut",
          title: "Motion Production",
          text: "Stingers, animated marks, transitions, intros and promo assets produced as one restrained cinematic motion language.",
          deliverable: "Timeline logic, motion package, launch edits",
          mockup: "timeline",
        },
        {
          number: "03",
          label: "Launch Surface",
          title: "Launch Presence",
          text: "Websites, campaign visuals and content direction that make the project feel established before the first campaign goes live.",
          deliverable: "Landing system, campaign pages, funnel cues",
          mockup: "web",
        },
        {
          number: "04",
          label: "Control Layer",
          title: "Automation Layer",
          text: "Bots, dashboards, lead flows and custom internal tools that turn the brand into an operating system after launch.",
          deliverable: "Dashboards, automations, assistant workflows",
          mockup: "automation",
        },
      ],
    },
    showreel: {
      title: "Built Like a Showreel. Launched Like a System.",
      text: "The output is not a folder of graphics. It is a controlled sequence that moves from concept to public launch and keeps operating afterward.",
      frames: [
        {
          number: "01",
          label: "Concept",
          text: "Position, audience, visual tension.",
        },
        {
          number: "02",
          label: "Identity",
          text: "The look becomes a language.",
        },
        {
          number: "03",
          label: "Motion",
          text: "Movement rules, not random effects.",
        },
        {
          number: "04",
          label: "Launch",
          text: "Web, community and campaign surface.",
        },
        {
          number: "05",
          label: "Scale",
          text: "Automation and iteration layer.",
        },
      ],
    },
    missions: {
      title: "Selected Missions",
      cards: [
        {
          number: "01",
          title: "Streamer Black System",
          scope: "Private channel rebrand",
          text: "A cinematic Twitch identity with OBS scenes, motion transitions, Discord structure and a launch-ready channel presence.",
          tags: ["Twitch", "OBS", "Motion", "Discord"],
          outcomeLabel: "Outcome",
          outcome: "Full creator visual system in 7 days",
          mockup: "stream",
        },
        {
          number: "02",
          title: "Gaming Clan Launch",
          scope: "Recruitment ecosystem",
          text: "A clan launch surface with website structure, Discord architecture, TikTok direction and disciplined recruitment visuals.",
          tags: ["Website", "Discord", "TikTok", "Recruitment"],
          outcomeLabel: "Outcome",
          outcome: "Launch-ready ecosystem",
          mockup: "clan",
        },
        {
          number: "03",
          title: "Creator Automation Stack",
          scope: "Operations layer",
          text: "Bots, dashboard flows, AI-assisted operations, campaign tracking and intake systems connected into one control layer.",
          tags: ["Bots", "Dashboard", "AI", "Campaigns"],
          outcomeLabel: "Outcome",
          outcome: "From manual workflow to system control",
          mockup: "dashboard",
        },
      ],
    },
    blackLabel: {
      eyebrow: "Private Studio",
      title: "Black Label Builds",
      text: "For creators and brands that need the full system handled as one private production: identity, motion, website, launch assets and custom tools.",
      note: "Limited build windows. No template packages. Every system is directed around the creator's market, format and technical stack.",
      button: "Request Build",
      tiers: [
        {
          name: "CORE",
          text: "Lean visual start.",
          detail: "A focused identity foundation for creators who need a clean first system.",
        },
        {
          name: "ASCEND",
          text: "Full creator upgrade.",
          detail: "Stream identity, OBS structure, motion elements and community surface.",
        },
        {
          name: "BLACK",
          text: "Private premium build.",
          detail: "A complete black-label production across identity, motion, web and launch.",
        },
        {
          name: "SYNTHESIS",
          text: "Software and automation layer.",
          detail: "Bots, dashboards, integrations and AI-assisted internal tools.",
        },
      ],
    },
    protocol: {
      title: "The Ascend Protocol",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          text: "We identify the gap between how the project looks, how it operates and how it needs to be perceived.",
        },
        {
          number: "02",
          title: "Direct",
          text: "We set the visual direction, motion rules, launch structure and technical architecture before production begins.",
        },
        {
          number: "03",
          title: "Produce",
          text: "We build the identity, stream assets, website, motion kit and tools as one connected production.",
        },
        {
          number: "04",
          title: "Launch",
          text: "We package the public surface: campaign assets, community flow, content cues and release sequence.",
        },
        {
          number: "05",
          title: "Operate",
          text: "We refine the system with analytics, automation, new assets and technical upgrades after launch.",
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
      titleParts: ["OBSIDIUM", "ASCEND"],
      headline: "Кінематична операційна система для серйозних креаторів.",
      subtitle:
        "Private visual direction, motion production, launch presence і technical tooling для creator-брендів, які мають виглядати авторськи, а не зібрано з шаблонів.",
      primary: "Замовити Private Build",
      secondary: "Переглянути системи",
      studioCode: "Private build / motion direction / launch architecture",
      meta: ["OBSIDIAN TITLE SEQUENCE", "MOTION SYSTEM 01", "PRIVATE STUDIO"],
    },
    credibility: {
      text: "Створено для креаторів, стрімерів, gaming-кланів і digital-брендів, які виросли з окремих assets і потребують цілісної studio system.",
      pillars: ["Айдентика", "Motion", "Запуск", "Системи"],
    },
    systems: {
      title: "Системи за образом",
      subtitle:
        "Кожен build поєднує видиму поверхню бренду з production layer, який робить її повторюваною.",
      panels: [
        {
          number: "01",
          label: "Visual Command",
          title: "Identity Direction",
          text: "Black-label візуальна мова для каналу, клану, продукту або personal brand: type, tone, overlays, interface rules і presence.",
          deliverable: "Brand direction, stream kit, interface grammar",
          mockup: "obs",
        },
        {
          number: "02",
          label: "Motion Cut",
          title: "Motion Production",
          text: "Stingers, анімовані marks, transitions, intros і promo assets як одна стримана cinematic motion-мова.",
          deliverable: "Timeline logic, motion package, launch edits",
          mockup: "timeline",
        },
        {
          number: "03",
          label: "Launch Surface",
          title: "Launch Presence",
          text: "Сайти, campaign visuals і content direction, які роблять проєкт сформованим ще до першого запуску кампанії.",
          deliverable: "Landing system, campaign pages, funnel cues",
          mockup: "web",
        },
        {
          number: "04",
          label: "Control Layer",
          title: "Automation Layer",
          text: "Боти, dashboards, lead flows і custom internal tools, які перетворюють бренд на operating system після запуску.",
          deliverable: "Dashboards, automations, assistant workflows",
          mockup: "automation",
        },
      ],
    },
    showreel: {
      title: "Зібрано як showreel. Запущено як система.",
      text: "Результат — не папка з графікою. Це керована послідовність від концепту до публічного запуску, яка продовжує працювати після релізу.",
      frames: [
        {
          number: "01",
          label: "Concept",
          text: "Позиція, аудиторія, visual tension.",
        },
        {
          number: "02",
          label: "Identity",
          text: "Образ стає мовою бренду.",
        },
        {
          number: "03",
          label: "Motion",
          text: "Рухові правила, не випадкові ефекти.",
        },
        {
          number: "04",
          label: "Launch",
          text: "Web, community і campaign surface.",
        },
        {
          number: "05",
          label: "Scale",
          text: "Automation та iteration layer.",
        },
      ],
    },
    missions: {
      title: "Selected Missions",
      cards: [
        {
          number: "01",
          title: "Streamer Black System",
          scope: "Private channel rebrand",
          text: "Кінематична Twitch-айдентика з OBS-сценами, motion transitions, Discord structure і launch-ready channel presence.",
          tags: ["Twitch", "OBS", "Motion", "Discord"],
          outcomeLabel: "Результат",
          outcome: "Повна visual system за 7 днів",
          mockup: "stream",
        },
        {
          number: "02",
          title: "Gaming Clan Launch",
          scope: "Recruitment ecosystem",
          text: "Clan launch surface зі структурою сайту, Discord architecture, TikTok direction і дисциплінованим recruitment-візуалом.",
          tags: ["Website", "Discord", "TikTok", "Recruitment"],
          outcomeLabel: "Результат",
          outcome: "Launch-ready ecosystem",
          mockup: "clan",
        },
        {
          number: "03",
          title: "Creator Automation Stack",
          scope: "Operations layer",
          text: "Боти, dashboard flows, AI-assisted operations, campaign tracking і intake systems, з'єднані в один control layer.",
          tags: ["Bots", "Dashboard", "AI", "Campaigns"],
          outcomeLabel: "Результат",
          outcome: "Від ручного workflow до system control",
          mockup: "dashboard",
        },
      ],
    },
    blackLabel: {
      eyebrow: "Private Studio",
      title: "Black Label Builds",
      text: "Для креаторів і брендів, яким потрібна повна private production: айдентика, motion, сайт, launch assets і custom tools як один build.",
      note: "Обмежені production windows. Без template packages. Кожна система створюється під ринок, формат і technical stack креатора.",
      button: "Замовити",
      tiers: [
        {
          name: "CORE",
          text: "Lean visual start.",
          detail: "Фокусна identity foundation для чистого першого system-рівня.",
        },
        {
          name: "ASCEND",
          text: "Full creator upgrade.",
          detail: "Stream identity, OBS structure, motion elements і community surface.",
        },
        {
          name: "BLACK",
          text: "Private premium build.",
          detail: "Повна black-label production: identity, motion, web і launch.",
        },
        {
          name: "SYNTHESIS",
          text: "Software and automation layer.",
          detail: "Bots, dashboards, integrations і AI-assisted internal tools.",
        },
      ],
    },
    protocol: {
      title: "Ascend Protocol",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          text: "Визначаємо gap між тим, як проєкт виглядає, як працює і як має сприйматись.",
        },
        {
          number: "02",
          title: "Direct",
          text: "Фіксуємо visual direction, motion rules, launch structure і technical architecture до production.",
        },
        {
          number: "03",
          title: "Produce",
          text: "Створюємо identity, stream assets, сайт, motion kit і tools як одну систему.",
        },
        {
          number: "04",
          title: "Launch",
          text: "Пакуємо public surface: campaign assets, community flow, content cues і release sequence.",
        },
        {
          number: "05",
          title: "Operate",
          text: "Покращуємо систему через analytics, automation, нові assets і technical upgrades.",
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
