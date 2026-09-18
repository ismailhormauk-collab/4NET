import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "telegram";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "btn-gradient text-white hover:brightness-110 active:brightness-95",
  secondary:
    "glass-panel text-text hover:border-border-strong hover:bg-white/[0.08] border border-border",
  ghost: "text-text-muted hover:text-text hover:bg-white/[0.04]",
  whatsapp: "bg-[#25D366] text-[#04150c] hover:brightness-105 shadow-lg shadow-[#25D366]/20",
  telegram: "bg-[#29A9EB] text-[#04141f] hover:brightness-105 shadow-lg shadow-[#29A9EB]/20",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  if (props.href) {
    const {
      variant = "primary",
      size = "md",
      children,
      className = "",
      href,
      external,
      ...rest
    } = props;
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
  } = props as NativeButtonProps;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
