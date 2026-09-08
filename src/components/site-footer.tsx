import { Mail } from "lucide-react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/logo";
import { nav, services, site, tracks } from "@/lib/site";

const socialLinks = [
  { href: site.socials.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: site.socials.x, label: "X", icon: XIcon },
  { href: site.socials.github, label: "GitHub", icon: GitHubIcon },
  { href: site.socials.instagram, label: "Instagram", icon: InstagramIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-[color-mix(in_oklab,var(--bg-elevated)_60%,transparent)]">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} Engineering, AI, data and design for teams who care what
              gets shipped.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-400"
            >
              <Mail className="size-4" />
              {site.email}
            </a>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-(--fg)"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Services"
            links={services.slice(0, 6).map((service) => ({
              label: service.title,
              href: "#services",
            }))}
          />

          <FooterColumn
            title="Academy"
            links={tracks.map((track) => ({ label: track.title, href: "#academy" }))}
          />

          <FooterColumn
            title="Company"
            links={[
              ...nav.map((item) => ({ label: item.label, href: item.href })),
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-subtle sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-(--fg)"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
