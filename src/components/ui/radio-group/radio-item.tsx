import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RadioItem = ({ label, checked, className, ...props }: RadioItemProps) => {
  return (
    <label className="flex cursor-pointer items-center">
      <input
        type="radio"
        className={clsx(
          "cursor-pointer text-primary",
          "focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-0",
          { "mr-2": label },
          className,
        )}
        checked={checked}
        {...props}
      />
      {label && (
        <span
          className={clsx(
            "text-sm",
            checked ? "font-bold" : "font-normal text-base-content-neutral",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
