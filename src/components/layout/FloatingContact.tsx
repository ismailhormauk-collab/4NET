"use client";

import { MessageCircle, Send, Plus, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <a
          href={siteConfig.telegram.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message on Telegram"
          className="flex items-center gap-2.5 rounded-full bg-[#29A9EB] py-3 pl-4 pr-5 text-sm font-semibold text-[#04141f] shadow-lg shadow-[#29A9EB]/30 transition-transform hover:scale-105"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Telegram
        </a>
        <a
          href={siteConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-[#04150c] shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="btn-gradient flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Plus className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
