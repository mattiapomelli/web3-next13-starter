import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface BaseModalProps {
  open: boolean;
  onClose: () => void;
}

export interface ModalProps extends BaseModalProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Modal = ({ children, open, onClose, title, className }: ModalProps) => {
  const onOpenChange = (open: boolean) => {
    if (!open) onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
          <Dialog.Content
            className={twMerge(
              clsx(
                "w-[94%] max-w-md",
                "bg-base-100",
                "rounded-btn",
                "px-5 py-4",
                "relative",
                "max-h-[90vh]",
                "focus:outline-none",
                className,
              ),
            )}
          >
            <Dialog.Close
              className={clsx(
                "rounded-full p-1",
                "absolute right-2 top-2",
                "focus:outline-none",
                "focus-visible:ring",
                "focus-visible:ring-primary/20",
              )}
            >
              <XMarkIcon className="h-5 w-5 text-base-content" />
            </Dialog.Close>
            {title && <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>}
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
