"use client";

import { CheckIcon, XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef, ElementRef, ReactNode, Ref, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={clsx(
      "fixed z-[100] max-h-screen p-4",
      "w-full md:max-w-[420px]",
      "flex flex-col-reverse gap-4 sm:flex-col",
      "top-0 sm:bottom-0 sm:right-0 sm:top-auto",
      className,
    )}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

interface ToastProps extends Omit<ToastPrimitives.ToastProps, "type"> {
  description?: string;
  action?: ReactNode;
  type?: "success" | "warning" | "error";
}

const Toast = forwardRef(
  (
    { className, title, description, action, type, ...props }: ToastProps,
    ref: Ref<HTMLLIElement>,
  ) => {
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={twMerge(
          clsx(
            "group relative",
            "w-full p-6 pr-8",
            "border border-base-300 bg-base-200",
            "rounded-md shadow-lg",
            "flex items-center justify-between gap-4",
            "pointer-events-auto overflow-hidden",
            "transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
            className,
          ),
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {type && (
            <div
              className={clsx(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                { "bg-success": type === "success" },
                { "bg-warning": type === "warning" },
                { "bg-error": type === "error" },
              )}
            >
              {type === "success" && <CheckIcon className="h-5 w-5 text-success-content" />}
              {type === "warning" && (
                <ExclamationTriangleIcon className="h-6 w-6 text-warning-content" />
              )}
              {type === "error" && (
                <ExclamationTriangleIcon className="h-6 w-6 text-error-content" />
              )}
            </div>
          )}
          <div className="flex flex-col gap-1">
            {title && (
              <ToastPrimitives.Title className={clsx("text-sm font-bold", className)}>
                {title}
              </ToastPrimitives.Title>
            )}
            {description && (
              <ToastPrimitives.Description
                className={clsx("text-sm text-base-content-neutral", className)}
              >
                {description}
              </ToastPrimitives.Description>
            )}
          </div>
        </div>
        {action && (
          <ToastPrimitives.Action altText="Action" asChild>
            {action}
          </ToastPrimitives.Action>
        )}
        <ToastPrimitives.Close
          className={clsx(
            "absolute right-2 top-2",
            "rounded-md p-1",
            "text-base-content-neutral hover:text-base-content",
            "opacity-0 transition-opacity group-hover:opacity-100",
            "focus:opacity-100 focus:outline-none focus:ring-2",
            className,
          )}
          toast-close=""
        >
          <XMarkIcon className="h-4 w-4" />
        </ToastPrimitives.Close>
      </ToastPrimitives.Root>
    );
  },
);

Toast.displayName = ToastPrimitives.Root.displayName;

export { type ToastProps, ToastProvider, ToastViewport, Toast };
