import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingExperience } from "@/components/landing-experience";
import {
  dictionaries,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

const ogImage = "/assets/og/og-image.svg";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolveLocale(locale: string): Locale {
  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const dictionary = dictionaries[rawLocale];

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `/${rawLocale}`,
      languages: {
        en: "/en",
        uk: "/uk",
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale: rawLocale === "uk" ? "uk_UA" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: dictionary.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: [ogImage],
    },
  };
}

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  return (
    <LandingExperience dictionary={dictionaries[locale]} locale={locale} />
  );
}
