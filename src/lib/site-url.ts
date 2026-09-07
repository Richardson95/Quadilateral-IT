import { site } from "@/lib/site";

/**
 * Resolves the canonical site URL for metadata, the sitemap and robots.txt.
 *
 * Environment variables are not simply "set or unset" — a platform dashboard
 * happily stores an empty string, and Vercel's own host variables arrive
 * without a protocol. Both would crash `new URL()`, so every candidate is
 * normalised and parsed before it is accepted, with the value in site.ts as
 * the final fallback.
 */
function normalize(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    if (!url.hostname) return null;
    // Drop any path/query and the trailing slash so callers can concatenate.
    return `${url.protocol}//${url.host}`;
  } catch {
    return null;
  }
}

export const siteUrl: string =
  normalize(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalize(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalize(process.env.VERCEL_URL) ??
  normalize(site.url) ??
  "https://example.com";
