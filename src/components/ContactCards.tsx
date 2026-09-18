import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="glass-panel-strong flex flex-col items-start gap-4 rounded-3xl border border-border p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-text">WhatsApp</h3>
          <p className="mt-1 text-sm text-text-muted">{siteConfig.whatsapp.display}</p>
        </div>
        <p className="text-sm leading-relaxed text-text-muted">
          Fast responses for new subscriptions, setup help and general questions.
        </p>
        <Button href={siteConfig.whatsapp.link} external variant="whatsapp" className="w-full">
          Chat on WhatsApp
        </Button>
      </div>

      <div className="glass-panel-strong flex flex-col items-start gap-4 rounded-3xl border border-border p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#29A9EB]/15 text-[#29A9EB]">
          <Send className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-text">Telegram</h3>
          <p className="mt-1 text-sm text-text-muted">{siteConfig.telegram.handle}</p>
        </div>
        <p className="text-sm leading-relaxed text-text-muted">
          Message our team for order help, billing questions or account support.
        </p>
        <Button href={siteConfig.telegram.link} external variant="telegram" className="w-full">
          Message on Telegram
        </Button>
      </div>
    </div>
  );
}
