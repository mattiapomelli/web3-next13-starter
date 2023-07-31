import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { Fragment, ReactNode } from "react";

import { Label } from "@/components/ui/label";

const variantVariant = {
  solid: "border-base-300 bg-base-300",
  outline: "border-base-300 bg-transparent",
  ghost: "border-transparent disabled:bg-transparent",
};

const sizeVariant = {
  xs: "input-xs h-8 min-w-[11rem] px-2.5",
  sm: "input-sm h-9 min-w-[12rem] px-3",
  md: "h-10 min-w-[13rem] px-4",
  lg: "input-lg h-11 min-w-[14rem] px-5",
};

const selectButtonVariants = cva(
  [
    "relative flex w-full items-center",
    "rounded-btn",
    "border-2",
    "text-left",
    "focus:outline-none focus:ring-primary/30 focus-visible:ring-4",
  ],
  {
    variants: {
      variant: variantVariant,
      size: sizeVariant,
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

const selectMenuVariants = cva(
  [
    "rounded-btn",
    "border-2",
    "absolute z-10",
    "mt-1 w-full overflow-auto",
    "py-1",
    "text-base",
    "shadow-lg",
    "ring-1 ring-base-content/5",
    "focus:outline-none",
  ],
  {
    variants: {
      variant: variantVariant,
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

const selectItemVariants = cva("relative flex cursor-pointer select-none items-center pr-4", {
  variants: {
    size: sizeVariant,
  },
  defaultVariants: {
    size: "md",
  },
});

const iconVariants = cva("", {
  variants: {
    size: {
      xs: "left-2.5 [&>svg]:max-h-3.5",
      sm: "left-3 [&>svg]:max-h-4",
      md: "left-3.5 [&>svg]:max-h-5",
      lg: "left-4 [&>svg]:max-h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconPaddingVariants = cva("", {
  variants: {
    size: {
      xs: "pl-7",
      sm: "pl-8",
      md: "pl-10",
      lg: "pl-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SelectProps extends VariantProps<typeof selectButtonVariants> {
  items: string[];
  value: string | undefined; // TODO: make this optional
  onValueChange: (value: string) => void;
  label?: string;
  block?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  className?: string;
}

export const Select = ({
  variant,
  size,
  items,
  value,
  onValueChange,
  placeholder,
  label,
  block,
  icon,
  className,
}: SelectProps) => {
  return (
    <div className={clsx("relative flex-col", block ? "flex" : "inline-flex", className)}>
      <Listbox value={value} onChange={onValueChange}>
        {/* Label */}
        {label && (
          <Listbox.Label className="cursor-pointer">
            <Label as="span">{label}</Label>
          </Listbox.Label>
        )}
        <div className="relative">
          {/* Trigger */}
          <Listbox.Button
            className={clsx(selectButtonVariants({ variant, size }), iconPaddingVariants({ size }))}
          >
            {/* Icon */}
            {icon && (
              <span
                className={clsx(
                  iconVariants({ size }),
                  "absolute top-1/2 -translate-y-1/2 [&>svg]:max-w-min",
                  "text-base-content-neutral",
                )}
              >
                {icon}
              </span>
            )}
            <span className="block truncate">{value || placeholder}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Menu */}
            <Listbox.Options className={selectMenuVariants({ variant })}>
              {items.map((item) => (
                <Listbox.Option
                  key={item}
                  className={({ active }) =>
                    clsx(
                      {
                        "text-primary bg-primary/10": active,
                      },
                      selectItemVariants({ size }),
                      iconPaddingVariants({ size }),
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={clsx("block truncate", selected ? "font-medium" : "font-normal")}
                      >
                        {item}
                      </span>
                      {/* Check Icon */}
                      {selected && (
                        <span
                          className={clsx(
                            iconVariants({ size }),
                            "absolute inset-y-0 flex items-center text-primary",
                          )}
                        >
                          <CheckIcon aria-hidden="true" className="h-full" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
