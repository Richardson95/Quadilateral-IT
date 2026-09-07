import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Backdrop } from "@/components/ui/backdrop";
import { BackToTop, ScrollProgress } from "@/components/ui/chrome";
import { site } from "@/lib/site";
import { structuredData } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Software, AI & Data Consultancy`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "IT consultancy",
    "software development agency",
    "AI automation",
    "AI engineering",
    "data analytics",
    "email marketing",
    "software maintenance",
    "product design",
    "tech academy",
    "Nigeria software company",
    "Lagos developers",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Software, AI & Data Consultancy`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software, AI & Data Consultancy`,
    description: site.description,
    creator: "@quadilateralit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#05060d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}
    >
      <body>
        <Providers>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-(--bg-elevated) focus:px-5 focus:py-3 focus:text-sm focus:font-semibold"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <Backdrop />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
        </Providers>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(siteUrl)) }}
        />
      </body>
    </html>
  );
}
