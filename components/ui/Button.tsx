import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "quiet"
  | "inverse"
  | "inverse-outline";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xs font-sans font-medium " +
  "transition-[background-color,border-color,color,box-shadow] duration-200 ease-(--ease-editorial) " +
  "disabled:pointer-events-none disabled:opacity-45";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-canvas hover:bg-burgundy",
  secondary:
    "border border-rule text-ink hover:border-ink hover:bg-ink hover:text-canvas",
  quiet:
    "px-0! text-ink underline decoration-rule decoration-1 underline-offset-[0.35em] hover:decoration-burgundy hover:text-burgundy",
  inverse: "bg-canvas text-ink hover:bg-gold-soft",
  "inverse-outline":
    "border border-rule-inverse text-canvas hover:border-gold-soft hover:text-gold-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.8125rem] tracking-[0.01em]",
  md: "h-11 px-6 text-[0.875rem] tracking-[0.015em]",
  lg: "h-13 px-8 text-[0.9375rem] tracking-[0.015em]",
};

interface CommonProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: ReactNode;
}

type LinkProps = CommonProps & {
  readonly href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  readonly href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkProps | NativeButtonProps;

/**
 * One button. `href` renders a link (routed through next/link for internal
 * paths); otherwise a native button. Nothing here is a link that goes nowhere.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
