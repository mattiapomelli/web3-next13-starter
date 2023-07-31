import { clsx } from "clsx";
import { ElementType, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  as?: ElementType;
}

export const Label = ({ children, htmlFor, className, as: Tag = "label" }: LabelProps) => {
  return (
    <Tag
      className={twMerge(
        clsx(
          "mb-1 flex w-full items-center gap-2 text-sm font-semibold",
          { "cursor-pointer": htmlFor },
          className,
        ),
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Tag>
  );
};
