import {
  Tooltip as TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  TooltipContentProps,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { ReactNode, useEffect, useState } from "react";

const tooltipVariants = cva("rounded-btn z-30 max-w-[90vw] px-3 py-2 animate-in fade-in", {
  variants: {
    color: {
      primary: "bg-primary fill-primary text-primary-content",
      secondary: "bg-secondary fill-secondary text-secondary-content",
      accent: "bg-accent fill-accent text-accent-content",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  align?: TooltipContentProps["align"];
  side?: TooltipContentProps["side"];
  alignOffset?: number;
  sideOffset?: number;
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({ color, content, children, className, ...props }: TooltipProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("scroll", close);
    return () => document.removeEventListener("scroll", close);
  }, []);

  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={200} open={open}>
        <TooltipTrigger
          className={clsx("cursor-pointer", className)}
          asChild
          onClick={onOpen}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {children}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className={tooltipVariants({ color })}
            {...props}
          >
            <TooltipArrow height={8} width={14} />
            {content}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};
