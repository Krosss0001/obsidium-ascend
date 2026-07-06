"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const AscendScene = dynamic(
  () => import("@/components/ascend-scene").then((mod) => mod.AscendScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-background" />,
  },
);

type LandingExperienceProps = {
  dictionary: Dictionary;
  locale: Locale;
};

type VisualAsset = {
  readonly src: string;
  readonly alt: string;
};

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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-90px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function LanguageSwitcher({ label, locale }: { label: string; locale: Locale }) {
  return (
    <div aria-label={label} className="language-switch">
      {(["en", "uk"] as const).map((item) => (
        <Link
          className={cx("language-option", locale === item && "is-active")}
          href={`/${item}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

function ChapterHeading({
  kicker,
  title,
  text,
  center = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cx("chapter-heading", center && "chapter-heading-center")}>
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p className="chapter-copy">{text}</p> : null}
    </Reveal>
  );
}

function AssetVisual({
  visual,
  className,
  decorative = false,
}: {
  visual: VisualAsset;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <div className={cx("asset-frame", className)}>
      <Image
        alt={decorative ? "" : visual.alt}
        aria-hidden={decorative ? true : undefined}
        height={640}
        loading="eager"
        src={visual.src}
        unoptimized
        width={960}
      />
    </div>
  );
}

function FilmFrame({
  frame,
  index,
}: {
  frame: Dictionary["showreel"]["frames"][number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="showreel-frame">
        <div className="frame-perf frame-perf-top" />
        <div className="frame-preview">
          <Image
            alt={frame.visual.alt}
            height={320}
            loading="eager"
            src={frame.visual.src}
            unoptimized
            width={520}
          />
          <span className="frame-number">{frame.number}</span>
        </div>
        <div className="frame-caption">
          <p>{frame.label}</p>
          <span>{frame.text}</span>
        </div>
        <div className="frame-perf frame-perf-bottom" />
      </article>
    </Reveal>
  );
}

export function LandingExperience({
  dictionary,
  locale,
}: LandingExperienceProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!rootRef.current || shouldReduceMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(".film-line", {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.to(".projector-light", {
        opacity: 0.72,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, rootRef);

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <main
      ref={rootRef}
      className="relative isolate min-h-screen overflow-hidden bg-background text-foreground"
    >
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
        <div className="matte-nav mx-auto max-w-7xl">
          <Link
            aria-label={dictionary.brand.name}
            className="brand-lockup"
            href={`/${locale}`}
          >
            <span className="brand-mark">
              <Image
                alt=""
                aria-hidden
                height={44}
                loading="eager"
                src={dictionary.assets.mark}
                unoptimized
                width={44}
              />
            </span>
            <span className="brand-copy">
              <span>{dictionary.brand.name}</span>
              <small>{dictionary.brand.category}</small>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {dictionary.nav.items.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher label={dictionary.nav.languageLabel} locale={locale} />
            <a className="private-button private-button-compact" href="#contact">
              {dictionary.nav.cta}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher label={dictionary.nav.languageLabel} locale={locale} />
            <button
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? dictionary.nav.closeLabel : dictionary.nav.menuLabel
              }
              className="menu-button"
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
          <div className="mobile-menu mx-auto mt-2 max-w-7xl lg:hidden">
            {dictionary.nav.items.map((item) => (
              <a
                className="mobile-menu-link"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <ChevronRight aria-hidden className="size-4" />
              </a>
            ))}
            <a
              className="private-button mt-2 w-full justify-center"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.nav.cta}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        ) : null}
      </header>

      <section className="title-screen" id="studio">
        <div className="grain-layer" />
        <div className="projector-light" />
        <AscendScene />
        <Image
          alt=""
          aria-hidden
          className="hero-poster-layer"
          height={860}
          priority
          src={dictionary.assets.heroPoster}
          unoptimized
          width={640}
        />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-end gap-10 px-4 pb-12 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:pb-16">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">{dictionary.hero.eyebrow}</p>
            <h1 className="display-title" aria-label={dictionary.hero.title}>
              {dictionary.hero.titleParts.map((part, index) => (
                <span className="title-line" key={part}>
                  <span>{part}</span>
                  {index === 0 ? <i /> : null}
                </span>
              ))}
            </h1>
            <div className="hero-meta-row" aria-hidden>
              {dictionary.hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="hero-headline">{dictionary.hero.headline}</p>
            <p className="hero-subtitle">{dictionary.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="private-button" href="#contact">
                {dictionary.hero.primary}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
              <a className="ghost-button" href="#systems">
                {dictionary.hero.secondary}
              </a>
            </div>
          </motion.div>

          <Reveal className="hero-aside">
            <div className="studio-code">
              <span>OBSIDIUM / ASCEND</span>
              <p>{dictionary.hero.studioCode}</p>
              <i />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="studio-strip" aria-label={dictionary.credibility.text}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <Reveal>
            <p className="studio-strip-copy">{dictionary.credibility.text}</p>
          </Reveal>
          <div className="pillar-grid">
            {dictionary.credibility.pillars.map((pillar, index) => (
              <Reveal delay={index * 0.03} key={pillar}>
                <div className="pillar-line">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{pillar}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter-shell" id="systems">
        <ChapterHeading
          kicker="Systems"
          text={dictionary.systems.subtitle}
          title={dictionary.systems.title}
        />
        <div className="system-stack">
          {dictionary.systems.panels.map((panel, index) => (
            <Reveal delay={index * 0.04} key={panel.number}>
              <article
                className={cx(
                  "system-panel",
                  index % 2 === 1 && "system-panel-reverse",
                )}
              >
                <div className="panel-copy">
                  <span className="chapter-number">{panel.number}</span>
                  <span className="module-kicker">{panel.label}</span>
                  <h3>{panel.title}</h3>
                  <p>{panel.text}</p>
                  <p className="panel-deliverable">{panel.deliverable}</p>
                  <span className="film-line" />
                </div>
                <AssetVisual
                  className={cx("system-visual", `system-visual-${panel.mockup}`)}
                  visual={panel.visual}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="chapter-shell showreel-section">
        <ChapterHeading
          center
          kicker="Showreel"
          text={dictionary.showreel.text}
          title={dictionary.showreel.title}
        />
        <div className="showreel-strip">
          {dictionary.showreel.frames.map((frame, index) => (
            <FilmFrame frame={frame} index={index} key={frame.number} />
          ))}
        </div>
      </section>

      <section className="chapter-shell" id="missions">
        <ChapterHeading
          center
          kicker="Missions"
          title={dictionary.missions.title}
        />
        <Reveal className="mission-note">
          <p>{dictionary.missions.note}</p>
        </Reveal>
        <div className="mission-stack">
          {dictionary.missions.cards.map((mission, index) => (
            <Reveal delay={index * 0.05} key={mission.number}>
              <article className={cx("mission-panel", `mission-panel-${mission.mockup}`)}>
                <div className="mission-index">{mission.number}</div>
                <div className="mission-content">
                  <span className="mission-scope">{mission.scope}</span>
                  <h3>{mission.title}</h3>
                  <p>{mission.text}</p>
                  <div className="tag-row">
                    {mission.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="mission-outcome">
                    <span>{mission.outcomeLabel}</span>
                    <strong>{mission.outcome}</strong>
                  </div>
                </div>
                <AssetVisual
                  className={cx("mission-visual", `mission-visual-${mission.mockup}`)}
                  visual={mission.visual}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="black-label-section" id="black-label">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-28">
          <Reveal>
            <div className="black-label-copy">
              <p className="eyebrow">{dictionary.blackLabel.eyebrow}</p>
              <h2>{dictionary.blackLabel.title}</h2>
              <p>{dictionary.blackLabel.text}</p>
              <p className="black-label-note">{dictionary.blackLabel.note}</p>
              <a className="private-button" href="#contact">
                {dictionary.blackLabel.button}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </Reveal>

          <div className="black-label-right">
            <Reveal>
              <AssetVisual
                className="black-label-visual"
                visual={dictionary.blackLabel.visual}
              />
            </Reveal>
            <div className="tier-list">
              {dictionary.blackLabel.tiers.map((tier, index) => (
                <Reveal delay={index * 0.04} key={tier.name}>
                  <div
                    className={cx(
                      "tier-row",
                      tier.name === "BLACK" && "tier-row-black",
                    )}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{tier.name}</h3>
                    <div>
                      <p>{tier.text}</p>
                      <small>{tier.detail}</small>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-shell protocol-section" id="protocol">
        <ChapterHeading
          center
          kicker="Protocol"
          title={dictionary.protocol.title}
        />
        <div className="protocol-stack">
          {dictionary.protocol.steps.map((step, index) => (
            <Reveal delay={index * 0.04} key={step.number}>
              <article className="protocol-item">
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="studio-intake" id="contact">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="intake-panel">
              <div className="intake-copy">
                <div className="intake-seal">
                  <Image
                    alt=""
                    aria-hidden
                    height={84}
                    loading="eager"
                    src={dictionary.assets.seal}
                    unoptimized
                    width={84}
                  />
                </div>
                <p className="eyebrow">{dictionary.brand.category}</p>
                <h2>{dictionary.contact.headline}</h2>
                <p>{dictionary.contact.text}</p>
                <div className="contact-actions">
                  <a
                    className="private-button"
                    href={dictionary.brand.tiktokUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {dictionary.contact.tiktokCta}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                  <a className="ghost-button" href="#private-build-form">
                    {dictionary.contact.button}
                  </a>
                </div>
                <AssetVisual
                  className="contact-visual"
                  visual={dictionary.contact.visual}
                />
              </div>

              <form
                className="build-form"
                id="private-build-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsFormSubmitted(true);
                  requestAnimationFrame(() => {
                    document.getElementById("private-build-success")?.focus();
                  });
                }}
              >
                <div className="form-heading">
                  <span>OBSIDIUM / INTAKE</span>
                  <h3>{dictionary.contact.form.title}</h3>
                </div>
                <div className="form-grid">
                  {dictionary.contact.form.fields.map((field) => {
                    const inputId = `build-${field.name}`;

                    if (field.type === "select") {
                      return (
                        <label className="field-group" htmlFor={inputId} key={field.name}>
                          <span>{field.label}</span>
                          <select defaultValue="" id={inputId} name={field.name} required>
                            <option disabled value="">
                              {field.label}
                            </option>
                            {field.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>
                      );
                    }

                    if (field.type === "textarea") {
                      return (
                        <label
                          className="field-group field-group-wide"
                          htmlFor={inputId}
                          key={field.name}
                        >
                          <span>{field.label}</span>
                          <textarea id={inputId} name={field.name} required rows={5} />
                        </label>
                      );
                    }

                    return (
                      <label className="field-group" htmlFor={inputId} key={field.name}>
                        <span>{field.label}</span>
                        <input id={inputId} name={field.name} required type={field.type} />
                      </label>
                    );
                  })}
                </div>
                <button className="private-button" type="submit">
                  {dictionary.contact.form.submit}
                  <ArrowUpRight aria-hidden className="size-4" />
                </button>
                {isFormSubmitted ? (
                  <p
                    className="form-success"
                    id="private-build-success"
                    role="status"
                    tabIndex={-1}
                  >
                    {dictionary.contact.form.success}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer-shell">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div className="footer-lockup">
            <Image
              alt=""
              aria-hidden
              className="footer-mark"
              height={48}
              loading="eager"
              src={dictionary.assets.mark}
              unoptimized
              width={48}
            />
            <div>
              <p className="footer-brand">{dictionary.brand.name}</p>
              <p className="footer-category">{dictionary.footer.category}</p>
              <p className="footer-line">{dictionary.footer.line}</p>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {dictionary.footer.links.map((link) => (
              <a className="nav-link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact" aria-label="Contact links">
            <a
              href={dictionary.brand.tiktokUrl}
              rel="noreferrer"
              target="_blank"
            >
              {dictionary.footer.contact.tiktok}
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
            <a href={`mailto:${dictionary.brand.email}`}>
              {dictionary.footer.contact.email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
