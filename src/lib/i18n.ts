export const locales = ["en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const projectTypes = [
  "Stream Identity",
  "OBS Setup",
  "Discord / Community",
  "Website / Landing Page",
  "Motion / AI Video",
  "Ads / Launch Campaign",
  "Custom Software / Automation",
  "Full Black Label Build",
] as const;

export const dictionaries = {
  en: {
    meta: {
      title: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
      description:
        "Premium black-label creator systems studio for stream identity, motion assets, websites, campaigns, automation and custom software.",
      locale: "en_US",
      ogImageAlt:
        "OBSIDIUM ASCEND black-label motion and creator systems studio preview.",
    },
    assets: {
      mark: "/assets/brand/obsidium-mark.svg",
      wordmark: "/assets/brand/obsidium-wordmark.svg",
      seal: "/assets/brand/black-label-seal.svg",
      heroPoster: "/assets/brand/obsidian-monolith-poster.svg",
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
      posterAlt: "Obsidian monolith poster for OBSIDIUM ASCEND.",
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
          visual: {
            src: "/assets/frames/identity-system.svg",
            alt: "Abstract identity system board with typography strips and channel frames.",
          },
        },
        {
          number: "02",
          label: "Motion Cut",
          title: "Motion Production",
          text: "Stingers, animated marks, transitions, intros and promo assets produced as one restrained cinematic motion language.",
          deliverable: "Timeline logic, motion package, launch edits",
          mockup: "timeline",
          visual: {
            src: "/assets/frames/motion-system.svg",
            alt: "Cinematic motion timeline with keyframes and transition markers.",
          },
        },
        {
          number: "03",
          label: "Launch Surface",
          title: "Launch Presence",
          text: "Websites, campaign visuals and content direction that make the project feel established before the first campaign goes live.",
          deliverable: "Landing system, campaign pages, funnel cues",
          mockup: "web",
          visual: {
            src: "/assets/frames/launch-system.svg",
            alt: "Launch system surface with website wireframe and campaign panels.",
          },
        },
        {
          number: "04",
          label: "Control Layer",
          title: "Automation Layer",
          text: "Bots, dashboards, lead flows and custom internal tools that turn the brand into an operating system after launch.",
          deliverable: "Dashboards, automations, assistant workflows",
          mockup: "automation",
          visual: {
            src: "/assets/frames/automation-system.svg",
            alt: "Automation layer interface with dashboard nodes and status rows.",
          },
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
          visual: {
            src: "/assets/frames/showreel-concept.svg",
            alt: "Concept frame with positioning map and brand tension lines.",
          },
        },
        {
          number: "02",
          label: "Identity",
          text: "The look becomes a language.",
          visual: {
            src: "/assets/frames/showreel-identity.svg",
            alt: "Identity frame with wordmark grid and typography samples.",
          },
        },
        {
          number: "03",
          label: "Motion",
          text: "Movement rules, not random effects.",
          visual: {
            src: "/assets/frames/showreel-motion.svg",
            alt: "Motion frame with timeline markers and motion path.",
          },
        },
        {
          number: "04",
          label: "Launch",
          text: "Web, community and campaign surface.",
          visual: {
            src: "/assets/frames/showreel-launch.svg",
            alt: "Launch frame with website, campaign and community panels.",
          },
        },
        {
          number: "05",
          label: "Scale",
          text: "Automation and iteration layer.",
          visual: {
            src: "/assets/frames/showreel-scale.svg",
            alt: "Scale frame with analytics controls and automation nodes.",
          },
        },
      ],
    },
    missions: {
      title: "Selected Missions",
      note: "Concept systems based on real creator needs.",
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
          visual: {
            src: "/assets/missions/streamer-black-system.svg",
            alt: "Streamer black system concept poster with OBS scene architecture and stream frames.",
          },
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
          visual: {
            src: "/assets/missions/gaming-clan-launch.svg",
            alt: "Gaming clan launch concept poster with recruitment site and community structure.",
          },
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
          visual: {
            src: "/assets/missions/creator-automation-stack.svg",
            alt: "Creator automation stack concept poster with dashboard, bots and campaign tracking.",
          },
        },
      ],
    },
    blackLabel: {
      eyebrow: "Private Studio",
      title: "Black Label Builds",
      text: "For creators and brands that need the full system handled as one private production: identity, motion, website, launch assets and custom tools.",
      note: "Limited build windows. No template packages. Every system is directed around the creator's market, format and technical stack.",
      button: "Request Build",
      visual: {
        src: "/assets/brand/black-label-system.svg",
        alt: "Private black-label build dossier with platinum lines and violet rim light.",
      },
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
      visual: {
        src: "/assets/frames/private-build-request.svg",
        alt: "Private build request dossier interface for OBSIDIUM ASCEND.",
      },
      form: {
        title: "Private Build Request",
        submit: "Prepare Request",
        success:
          "Request prepared. Connect this form to email or Telegram to receive submissions.",
        projectTypes,
        fields: [
          { name: "name", label: "Name", type: "text" },
          { name: "contact", label: "Email or Telegram", type: "text" },
          { name: "projectType", label: "Project type", type: "select" },
          { name: "needs", label: "What do you need?", type: "textarea" },
          { name: "budget", label: "Budget range", type: "text" },
          { name: "timeline", label: "Timeline", type: "text" },
        ],
      },
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
      ogImageAlt:
        "Превʼю OBSIDIUM ASCEND: black-label motion і creator systems studio.",
    },
    assets: {
      mark: "/assets/brand/obsidium-mark.svg",
      wordmark: "/assets/brand/obsidium-wordmark.svg",
      seal: "/assets/brand/black-label-seal.svg",
      heroPoster: "/assets/brand/obsidian-monolith-poster.svg",
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
      cta: "Замовити Build",
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
      posterAlt: "Обсидіановий моноліт-постер OBSIDIUM ASCEND.",
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
          text: "Black-label візуальна мова для каналу, клану, продукту або personal brand: типографіка, тон, overlays, interface rules і presence.",
          deliverable: "Brand direction, stream kit, interface grammar",
          mockup: "obs",
          visual: {
            src: "/assets/frames/identity-system.svg",
            alt: "Абстрактна identity board з типографічними смугами та channel frames.",
          },
        },
        {
          number: "02",
          label: "Motion Cut",
          title: "Motion Production",
          text: "Stingers, анімовані marks, transitions, intros і promo assets як одна стримана cinematic motion-мова.",
          deliverable: "Timeline logic, motion package, launch edits",
          mockup: "timeline",
          visual: {
            src: "/assets/frames/motion-system.svg",
            alt: "Кінематичний motion timeline з keyframes і transition markers.",
          },
        },
        {
          number: "03",
          label: "Launch Surface",
          title: "Launch Presence",
          text: "Сайти, campaign visuals і content direction, які роблять проєкт сформованим ще до першого запуску кампанії.",
          deliverable: "Landing system, campaign pages, funnel cues",
          mockup: "web",
          visual: {
            src: "/assets/frames/launch-system.svg",
            alt: "Launch system surface із website wireframe та campaign panels.",
          },
        },
        {
          number: "04",
          label: "Control Layer",
          title: "Automation Layer",
          text: "Боти, dashboards, lead flows і custom internal tools, які перетворюють бренд на operating system після запуску.",
          deliverable: "Dashboards, automations, assistant workflows",
          mockup: "automation",
          visual: {
            src: "/assets/frames/automation-system.svg",
            alt: "Automation layer interface з dashboard nodes і status rows.",
          },
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
          visual: {
            src: "/assets/frames/showreel-concept.svg",
            alt: "Concept frame з positioning map і brand tension lines.",
          },
        },
        {
          number: "02",
          label: "Identity",
          text: "Образ стає мовою бренду.",
          visual: {
            src: "/assets/frames/showreel-identity.svg",
            alt: "Identity frame з wordmark grid і typography samples.",
          },
        },
        {
          number: "03",
          label: "Motion",
          text: "Рухові правила, не випадкові ефекти.",
          visual: {
            src: "/assets/frames/showreel-motion.svg",
            alt: "Motion frame з timeline markers і motion path.",
          },
        },
        {
          number: "04",
          label: "Launch",
          text: "Web, community і campaign surface.",
          visual: {
            src: "/assets/frames/showreel-launch.svg",
            alt: "Launch frame з website, campaign і community panels.",
          },
        },
        {
          number: "05",
          label: "Scale",
          text: "Automation та iteration layer.",
          visual: {
            src: "/assets/frames/showreel-scale.svg",
            alt: "Scale frame з analytics controls і automation nodes.",
          },
        },
      ],
    },
    missions: {
      title: "Selected Missions",
      note: "Концепт-системи на основі реальних потреб креаторів.",
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
          visual: {
            src: "/assets/missions/streamer-black-system.svg",
            alt: "Концепт-постер Streamer Black System з OBS scene architecture і stream frames.",
          },
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
          visual: {
            src: "/assets/missions/gaming-clan-launch.svg",
            alt: "Концепт-постер Gaming Clan Launch з recruitment site і community structure.",
          },
        },
        {
          number: "03",
          title: "Creator Automation Stack",
          scope: "Operations layer",
          text: "Боти, dashboard flows, AI-assisted operations, campaign tracking і intake systems, зʼєднані в один control layer.",
          tags: ["Bots", "Dashboard", "AI", "Campaigns"],
          outcomeLabel: "Результат",
          outcome: "Від ручного workflow до system control",
          mockup: "dashboard",
          visual: {
            src: "/assets/missions/creator-automation-stack.svg",
            alt: "Концепт-постер Creator Automation Stack із dashboard, bots і campaign tracking.",
          },
        },
      ],
    },
    blackLabel: {
      eyebrow: "Private Studio",
      title: "Black Label Builds",
      text: "Для креаторів і брендів, яким потрібна повна private production: айдентика, motion, сайт, launch assets і custom tools як один build.",
      note: "Обмежені production windows. Без template packages. Кожна система створюється під ринок, формат і technical stack креатора.",
      button: "Замовити Build",
      visual: {
        src: "/assets/brand/black-label-system.svg",
        alt: "Private black-label build dossier із platinum lines і violet rim light.",
      },
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
      visual: {
        src: "/assets/frames/private-build-request.svg",
        alt: "Private build request dossier interface для OBSIDIUM ASCEND.",
      },
      form: {
        title: "Private Build Request",
        submit: "Підготувати заявку",
        success:
          "Заявку підготовлено. Підключіть форму до email або Telegram, щоб отримувати звернення.",
        projectTypes,
        fields: [
          { name: "name", label: "Імʼя", type: "text" },
          { name: "contact", label: "Email або Telegram", type: "text" },
          { name: "projectType", label: "Тип проєкту", type: "select" },
          { name: "needs", label: "Що потрібно?", type: "textarea" },
          { name: "budget", label: "Бюджет", type: "text" },
          { name: "timeline", label: "Терміни", type: "text" },
        ],
      },
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
