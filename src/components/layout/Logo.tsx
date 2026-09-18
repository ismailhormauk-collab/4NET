import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/logo-mark.png"
        alt={`${siteConfig.name} logo`}
        width={1774}
        height={478}
        priority
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
