import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4 sm:bottom-7 sm:right-7">
      <a
        href={siteConfig.telegram.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on Telegram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#29A9EB] text-white shadow-[0_0_22px_6px_rgba(41,169,235,0.45)] transition-transform hover:scale-105"
      >
        <Send className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={siteConfig.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_22px_6px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
