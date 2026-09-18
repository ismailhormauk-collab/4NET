import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig, footerNavLinks, footerLegalLinks } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">
              IPTV 4NET provides flexible streaming subscription plans with support for compatible
              devices, simple setup and real customer assistance whenever you need it.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-text">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal navigation">
            <h3 className="text-sm font-semibold text-text">Legal</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-text">Contact Us</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
                >
                  <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
                >
                  <Send className="h-4 w-4 text-primary-soft" aria-hidden="true" />
                  {siteConfig.telegram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8 text-xs text-text-dim sm:flex-row sm:justify-between">
          <p>© {year} IPTV 4NET. All rights reserved.</p>
          <p>Streaming subscriptions for compatible devices. Content availability may vary.</p>
        </div>
      </div>
    </footer>
  );
}
