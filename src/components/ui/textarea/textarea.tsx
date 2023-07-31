import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { forwardRef, Ref, TextareaHTMLAttributes } from "react";

import { Label } from "@/components/ui/label";

const textAreaVariants = cva(
  [
    "border-2",
    "text-base-content",
    "placeholder:text-base-content-neutral",
    "focus:outline-none focus:ring-4",
    "w-full",
    "px-4",
    "rounded-btn",
  ],
  {
    variants: {
      variant: {
        solid: "border-base-300 bg-base-300 focus:border-base-300",
        outline: "border-base-300 bg-transparent focus:border-base-300",
        ghost: "border-transparent focus:border-transparent disabled:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
  block?: boolean;
  error?: string;
  controlId?: string;
  onValueChange?: (value: string) => void;
}

export const TextArea = forwardRef(
  (
    {
      variant,
      label,
      error,
      block = false,
      controlId,
      onValueChange,
      onChange: baseOnChange,
      maxLength,
      className,
      ...props
    }: TextAreaProps,
    ref?: Ref<HTMLTextAreaElement>,
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const { value } = event.currentTarget;
      onValueChange?.(value);
      baseOnChange?.(event);
    };

    return (
      <div className={clsx({ "inline-block": !block, className })}>
        {label && <Label htmlFor={controlId}>{label}</Label>}
        <div className="relative flex">
          <textarea
            id={controlId}
            ref={ref}
            onChange={handleChange}
            maxLength={maxLength}
            {...props}
            className={clsx(
              textAreaVariants({ variant }),
              error
                ? "!border-error focus:!border-error focus:ring-error/30"
                : "focus:ring-primary/30",
            )}
          />
        </div>
        {/* Error Message */}
        {error && (
          <label className="label mt-1 py-0">
            <span className="label-text text-error">{error}</span>
          </label>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
