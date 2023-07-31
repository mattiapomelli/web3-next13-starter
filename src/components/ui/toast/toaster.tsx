"use client";

import { Toast, ToastProvider, ToastViewport } from "./toast";
import { useToast } from "./use-toast";

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, ...props }) => (
        <Toast key={id} {...props} />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};
