import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes, ReactNode, Ref, useId } from "react";

import { Label } from "@/components/ui/label";

const inputVariants = ({
  hasLeftIcon,
  hasRightIcon,
}: {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}) =>
  cva(
    [
      "input",
      "border-2",
      "text-base-content",
      "placeholder:text-base-content-neutral",
      "focus:outline-none focus:ring-4",
      "w-full",
    ],
    {
      variants: {
        size: {
          xs: ["input-xs h-8 px-2.5", { "pl-7": hasLeftIcon }, { "pr-7": hasRightIcon }],
          sm: ["input-sm h-9 px-3", { "pl-8": hasLeftIcon }, { "pr-8": hasRightIcon }],
          md: ["h-10 px-4", { "pl-10": hasLeftIcon }, { "pr-10": hasRightIcon }],
          lg: ["input-lg h-11 px-5", { "pl-12": hasLeftIcon }, { "pr-12": hasRightIcon }],
        },
        variant: {
          solid: "border-base-300 bg-base-300 focus:border-base-300",
          outline: "border-base-300 bg-transparent focus:border-base-300",
          ghost: "border-transparent focus:border-transparent disabled:bg-transparent",
        },
      },
      defaultVariants: {
        size: "md",
        variant: "solid",
      },
    },
  );

const iconVariants = ({ position }: { position: "left" | "right" }) =>
  cva(["absolute", "text-base-content-neutral", "[&>svg]:max-w-min", "top-1/2 -translate-y-1/2"], {
    variants: {
      size: {
        xs: ["[&>svg]:max-h-3.5", position === "left" ? "left-2.5" : "right-2.5"],
        sm: ["[&>svg]:max-h-4", position === "left" ? "left-3" : "right-3"],
        md: ["[&>svg]:max-h-5", position === "left" ? "left-3.5" : "right-3.5"],
        lg: ["[&>svg]:max-h-6", position === "left" ? "left-4" : "right-4"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  });

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<ReturnType<typeof inputVariants>> {
  placeholder?: string;
  label?: string;
  topRightLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  block?: boolean;
  error?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

export const Input = forwardRef(
  (
    {
      variant,
      size,
      placeholder,
      label,
      topRightLabel,
      bottomLeftLabel,
      bottomRightLabel,
      leftIcon,
      rightIcon,
      disabled,
      block,
      error,
      className,
      onValueChange,
      onChange: baseOnChange,
      ...props
    }: InputProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      onValueChange?.(value);
      baseOnChange?.(event);
    };

    return (
      <div className={clsx("relative flex-col", block ? "flex" : "inline-flex", className)}>
        {/* Labels */}
        {(label || topRightLabel) && (
          <div className="label py-0">
            {label && <Label htmlFor={id}>{label}</Label>}
            {topRightLabel && <Label>{topRightLabel}</Label>}
          </div>
        )}
        {/* Left Icon */}
        {leftIcon && (
          <span className={iconVariants({ position: "left" })({ size })}>{leftIcon}</span>
        )}
        <input
          {...props}
          id={id}
          ref={ref}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          className={clsx(
            inputVariants({
              hasLeftIcon: leftIcon !== undefined,
              hasRightIcon: rightIcon !== undefined,
            })({ variant, size }),
            error
              ? "!border-error focus:!border-error focus:ring-error/30"
              : "focus:ring-primary/30",
          )}
        />
        {/* Right Icon */}
        {rightIcon && (
          <span className={iconVariants({ position: "right" })({ size })}>{rightIcon}</span>
        )}
        {/* Bottom labels */}
        {(bottomLeftLabel || bottomRightLabel) && (
          <div className="label mt-1 py-0">
            {bottomLeftLabel && <Label className="mb-0">{bottomLeftLabel}</Label>}
            {bottomRightLabel && <Label className="mb-0">{bottomRightLabel}</Label>}
          </div>
        )}
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

Input.displayName = "Input";
