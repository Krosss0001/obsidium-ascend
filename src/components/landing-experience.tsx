"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Brush,
  Check,
  ChevronRight,
  Gem,
  Globe,
  Megaphone,
  Menu,
  MonitorPlay,
  Network,
  Palette,
  PanelsTopLeft,
  RadioTower,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import {
  SiDiscord,
  SiFigma,
  SiGithub,
  SiNextdotjs,
  SiObsstudio,
  SiReact,
  SiTailwindcss,
  SiTiktok,
  SiTwitch,
  SiTypescript,
  SiYoutube,
} from "react-icons/si";
import type { Dictionary, Locale } from "@/lib/i18n";

const AscendScene = dynamic(
  () => import("@/components/ascend-scene").then((mod) => mod.AscendScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-obsidian" />,
  },
);

const serviceIcons = [
  Palette,
  RadioTower,
  Globe,
  MonitorPlay,
  Megaphone,
  Network,
  Sparkles,
  Bot,
];

const protocolIcons = [ShieldCheck, Brush, ServerCog, Rocket, Workflow];

const platformIcons = {
  "OBS Studio": SiObsstudio,
  Twitch: SiTwitch,
  Discord: SiDiscord,
  YouTube: SiYoutube,
  TikTok: SiTiktok,
  Figma: SiFigma,
  Web: Globe,
  Bots: Bot,
  Automation: Workflow,
  "AI Tools": BrainCircuit,
  Photoshop: PanelsTopLeft,
  "After Effects": Sparkles,
  CapCut: MonitorPlay,
  "Next.js": SiNextdotjs,
  React: SiReact,
  Tailwind: SiTailwindcss,
  GitHub: SiGithub,
} as const;

const stackCore = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Tailwind", icon: SiTailwindcss },
];

type LandingExperienceProps = {
  dictionary: Dictionary;
  locale: Locale;
};

type IconComponent = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean;
}>;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ delay, duration: 0.72, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cx(
        "mx-auto mb-10 max-w-4xl",
        align === "center" && "text-center",
        align === "left" && "ml-0",
      )}
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-toxic">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-tight text-platinum sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-8 text-muted-platinum sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

function LanguageSwitcher({ label, locale }: { label: string; locale: Locale }) {
  return (
    <div
      aria-label={label}
      className="grid h-10 grid-cols-2 overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-1 shadow-[inset_0_0_24px_rgba(255,255,255,0.04)]"
    >
      {(["en", "uk"] as const).map((item) => (
        <Link
          className={cx(
            "grid min-w-11 place-items-center rounded-[4px] px-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition",
            locale === item
              ? "bg-platinum text-obsidian shadow-[0_0_22px_rgba(34,211,238,0.22)]"
              : "text-muted-platinum hover:text-platinum",
          )}
          href={`/${item}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

function IconBadge({ label }: { label: string }) {
  const Icon =
    (platformIcons[label as keyof typeof platformIcons] as IconComponent) ??
    Sparkles;

  return (
    <span className="signal-badge">
      <Icon aria-hidden className="size-4" />
      {label}
    </span>
  );
}

export function LandingExperience({
  dictionary,
  locale,
}: LandingExperienceProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || shouldReduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(".signal-line", {
        scaleX: 1,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.to(".scanline", {
        yPercent: 240,
        duration: 6.5,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    return () => context.revert();
  }, [shouldReduceMotion]);

  const mailHref = `mailto:${dictionary.brand.email}?subject=OBSIDIUM ASCEND`;

  return (
    <main
      ref={rootRef}
      className="relative isolate min-h-screen overflow-hidden bg-background text-foreground"
    >
      <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-6">
        <div className="glass-nav mx-auto max-w-7xl">
          <Link
            aria-label={dictionary.brand.name}
            className="group flex items-center gap-3"
            href={`/${locale}`}
          >
            <span className="grid size-10 place-items-center rounded-md border border-cyan/25 bg-white/[0.06] font-mono text-xs font-black text-cyan shadow-[0_0_28px_rgba(34,211,238,0.18)] transition group-hover:border-purple-neon/60">
              {dictionary.brand.mark}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold uppercase tracking-[0.26em] text-platinum">
                {dictionary.brand.name}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-platinum sm:block">
                {dictionary.brand.category}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {dictionary.nav.items.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher label={dictionary.nav.languageLabel} locale={locale} />
            <a className="button-chrome h-10 px-4 text-xs" href="#contact">
              {dictionary.nav.cta}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher label={dictionary.nav.languageLabel} locale={locale} />
            <button
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? dictionary.nav.closeLabel : dictionary.nav.menuLabel
              }
              className="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.05] text-platinum"
              onClick={() => setIsMenuOpen((value) => !value)}
              type="button"
            >
              {isMenuOpen ? (
                <X aria-hidden className="size-5" />
              ) : (
                <Menu aria-hidden className="size-5" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-cyan/20 bg-obsidian/92 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-2xl md:hidden">
            {dictionary.nav.items.map((item) => (
              <a
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-platinum transition hover:bg-white/[0.05] hover:text-platinum"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <ChevronRight aria-hidden className="size-4 text-cyan" />
              </a>
            ))}
            <a
              className="button-chrome mt-2 w-full justify-center"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.cta}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        ) : null}
      </header>

      <section className="cyber-grid relative min-h-[100svh] overflow-hidden border-b border-white/10 px-4 pb-12 pt-28 sm:px-8 lg:px-12">
        <div className="fine-noise pointer-events-none absolute inset-0 opacity-[0.11]" />
        <div className="scanline pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-cyan/12 via-transparent to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_50%_0%,rgba(143,77,255,0.28),transparent_58%)]" />
        <AscendScene labels={dictionary.hero.visualLabels} />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-toxic sm:text-sm">
              {dictionary.hero.eyebrow}
            </p>
            <h1 className="chrome-title mt-5 text-balance text-5xl font-black leading-[0.88] sm:text-7xl lg:text-8xl">
              {dictionary.hero.title}
            </h1>
            <p className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-platinum sm:text-5xl">
              {dictionary.brand.slogan}
            </p>
            <p className="mt-5 max-w-3xl text-balance text-xl leading-8 text-cyan sm:text-2xl">
              {dictionary.hero.headline}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-platinum sm:text-lg">
              {dictionary.hero.subtitle}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-platinum/70">
              {dictionary.hero.secondaryLine}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="#contact">
                {dictionary.hero.primary}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
              <a className="button-secondary" href="#systems">
                {dictionary.hero.secondary}
                <Sparkles aria-hidden className="size-4 text-cyan" />
              </a>
            </div>
          </motion.div>

          <Reveal className="hidden justify-self-end lg:block">
            <div className="hud-panel w-[360px]">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-toxic">
                  {dictionary.hero.reactorStatus}
                </span>
                <span className="size-2 rounded-full bg-toxic shadow-[0_0_18px_rgba(102,255,153,0.8)]" />
              </div>
              <p className="mt-5 text-2xl font-semibold text-platinum">
                {dictionary.hero.reactorSignal}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {dictionary.hero.visualLabels.map((label) => (
                  <span className="hud-chip" key={label}>
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-7 space-y-3">
                {stackCore.map(({ icon: Icon, label }) => (
                  <div className="flex items-center justify-between" key={label}>
                    <span className="flex items-center gap-2 text-sm text-muted-platinum">
                      <Icon aria-hidden className="size-4 text-cyan" />
                      {label}
                    </span>
                    <span className="font-mono text-xs text-platinum/70">
                      {dictionary.ui.readyLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="signal-strip border-b border-white/10 px-4 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-balance text-center font-mono text-xs uppercase tracking-[0.26em] text-muted-platinum">
            {dictionary.trust.text}
          </p>
          <div className="mt-5 overflow-hidden">
            <div className="marquee-track flex w-max gap-3 will-change-transform">
              {[...dictionary.trust.badges, ...dictionary.trust.badges].map(
                (badge, index) => (
                  <IconBadge label={badge} key={`${badge}-${index}`} />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="systems">
        <SectionHeading
          eyebrow={dictionary.ui.sectionEyebrow}
          subtitle={dictionary.systems.subtitle}
          title={dictionary.systems.title}
        />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.systems.cards.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <Reveal delay={index * 0.035} key={service.title}>
                <article className="gradient-card group min-h-[310px] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="icon-vault">
                      <Icon aria-hidden className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-platinum/40">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-platinum">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-platinum">
                    {service.text}
                  </p>
                  <span className="signal-line mt-8 block h-px origin-left scale-x-0 bg-gradient-to-r from-purple-neon via-cyan to-transparent" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-carbon/70" id="packages">
        <SectionHeading
          align="center"
          eyebrow={dictionary.ui.sectionEyebrow}
          subtitle={dictionary.packages.subtitle}
          title={dictionary.packages.title}
        />
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-4">
          {dictionary.packages.cards.map((item) => {
            const highlighted = item.name === "ASCEND";
            const black = item.name === "BLACK";

            return (
              <Reveal delay={highlighted ? 0.08 : 0} key={item.name}>
                <article
                  className={cx(
                    "gradient-card package-card flex min-h-[520px] flex-col p-6",
                    highlighted && "package-card-featured",
                    black && "shine-card",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-3xl font-black tracking-[0.08em] text-platinum">
                      {item.name}
                    </h3>
                    {item.badge ? (
                      <span className="rounded-md border border-toxic/30 bg-toxic/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-toxic">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-base leading-7 text-muted-platinum">
                    {item.subtitle}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {item.features.map((feature) => (
                      <li className="flex gap-3 text-sm leading-6 text-platinum/78" key={feature}>
                        <Check
                          aria-hidden
                          className="mt-1 size-4 shrink-0 text-cyan"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="button-secondary mt-auto w-full justify-center" href="#contact">
                    {dictionary.packages.requestLabel}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          align="center"
          eyebrow={dictionary.ui.sectionEyebrow}
          title={dictionary.comparison.title}
        />
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="contrast-panel contrast-before">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-platinum">
                {dictionary.comparison.beforeTitle}
              </p>
              <ul className="mt-8 space-y-4">
                {dictionary.comparison.before.map((item) => (
                  <li className="flex items-center gap-3 text-lg text-platinum/72" key={item}>
                    <span className="size-2 rounded-full bg-purple-neon/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="contrast-panel contrast-after">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-toxic">
                {dictionary.comparison.afterTitle}
              </p>
              <ul className="mt-8 space-y-4">
                {dictionary.comparison.after.map((item) => (
                  <li className="flex items-center gap-3 text-lg text-platinum" key={item}>
                    <BadgeCheck aria-hidden className="size-5 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-graphite" id="protocol">
        <SectionHeading
          align="center"
          eyebrow={dictionary.ui.sectionEyebrow}
          title={dictionary.protocol.title}
        />
        <div className="protocol-line mx-auto grid max-w-7xl gap-4 lg:grid-cols-5">
          {dictionary.protocol.steps.map((step, index) => {
            const Icon = protocolIcons[index % protocolIcons.length];

            return (
              <Reveal delay={index * 0.05} key={step.step}>
                <article className="protocol-step">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-cyan">{step.step}</span>
                    <Icon aria-hidden className="size-5 text-toxic" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-platinum">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-platinum">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell" id="cases">
        <SectionHeading
          align="center"
          eyebrow={dictionary.ui.sectionEyebrow}
          title={dictionary.cases.title}
        />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-5">
          {dictionary.cases.cards.map((mission, index) => (
            <Reveal delay={index * 0.04} key={mission.title}>
              <article className="gradient-card mission-card min-h-[360px] p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-toxic">
                    {dictionary.ui.missionLabel} 0{index + 1}
                  </span>
                  <Gem aria-hidden className="size-4 text-cyan" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-platinum">
                  {mission.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-platinum">
                  {mission.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {mission.tags.map((tag) => (
                    <span className="case-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-8 border-t border-white/10 pt-5 font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                  {mission.metric}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell bg-carbon/70">
        <SectionHeading
          align="center"
          eyebrow={dictionary.ui.sectionEyebrow}
          title={dictionary.stack.title}
        />
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {dictionary.stack.badges.map((badge) => (
            <IconBadge label={badge} key={badge} />
          ))}
        </div>
      </section>

      <section className="section-shell" id="contact">
        <Reveal>
          <div className="final-cta mx-auto max-w-7xl px-5 py-14 sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-toxic">
                  {dictionary.brand.category}
                </p>
                <h2 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-tight text-platinum sm:text-6xl">
                  {dictionary.finalCta.headline}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-platinum sm:text-lg">
                  {dictionary.finalCta.text}
                </p>
              </div>
              <a className="button-primary justify-center" href={mailHref}>
                {dictionary.finalCta.button}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.26em] text-platinum">
              {dictionary.brand.name}
            </p>
            <p className="mt-3 text-sm text-muted-platinum">
              {dictionary.footer.category}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-platinum/60">
              {dictionary.footer.line}
            </p>
          </div>
          <div className="grid gap-5">
            <nav className="flex flex-wrap gap-4 lg:justify-end" aria-label="Footer navigation">
              {dictionary.footer.links.map((link) => (
                <a className="nav-link" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {dictionary.footer.socials.map((social) => (
                <IconBadge label={social} key={social} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
