import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "header" | "footer" | "article" | "nav";

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
  /** `reading` is the 720px measure used for long-form prose. */
  readonly size?: "wide" | "narrow" | "reading";
  readonly as?: ContainerElement;
}

const sizes = {
  wide: "max-w-(--container-wide)",
  narrow: "max-w-(--container-narrow)",
  reading: "max-w-(--container-reading)",
} as const;

export function Container({ children, className, size = "wide", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16", sizes[size], className)}>
      {children}
    </Tag>
  );
}
