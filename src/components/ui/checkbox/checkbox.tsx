import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";

const checkboxVariants = cva(
  [
    "border-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "focus:outline-none focus:ring-4 focus:ring-offset-0",
  ],
  {
    variants: {
      color: {
        primary: "text-primary focus:ring-primary/30",
        secondary: "text-secondary focus:ring-secondary/30",
        accent: "text-accent focus:ring-accent/30",
      },
      size: {
        xs: "h-3.5 w-3.5 rounded-sm focus:ring-2",
        sm: "h-4 w-4 rounded-sm focus:ring-2",
        md: "h-5 w-5 rounded focus:ring",
        lg: "h-6 w-6 rounded focus:ring",
      },
      variant: {
        solid: "border-base-300 bg-base-300",
        bordered: "border-base-300 bg-transparent hover:bg-base-300/40 disabled:bg-transparent",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      variant: "solid",
    },
  },
);

const labelVariants = cva("ml-2 select-none", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "color">,
    VariantProps<typeof checkboxVariants> {
  labelSize?: VariantProps<typeof labelVariants>["size"];
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox = forwardRef(
  (
    {
      checked,
      onValueChange,
      onChange: baseOnChange,
      color,
      size,
      variant,
      label,
      labelSize,
      disabled,
      className,
      ...props
    }: CheckboxProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      onValueChange?.(checked);
      baseOnChange?.(event);
    };

    return (
      <label
        htmlFor={id}
        className={clsx(
          "inline-flex select-none items-center",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className,
        )}
      >
        <input
          {...props}
          id={id}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          className={clsx(checkboxVariants({ color, size, variant }), {
            "cursor-pointer": !disabled,
          })}
        />
        {label && (
          <span
            className={clsx(
              labelVariants({ size: labelSize }),
              !disabled && (checked ? "opacity-100" : "opacity-50 hover:opacity-100"),
              { "opacity-50": disabled },
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
