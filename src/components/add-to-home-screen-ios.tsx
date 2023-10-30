"use client";

import { Dialog, DialogButton } from "konsta/react";

import { useAddToHomescreeniOS } from "@/hooks/use-add-to-home-screen-ios";
import ShareIcon from "@/icons/share.svg";

export function AddToHomeScreeniOS() {
  const [showPrompt, setShowPrompt] = useAddToHomescreeniOS();

  return (
    <Dialog
      opened={showPrompt}
      onBackdropClick={() => setShowPrompt(false)}
      title="Install app"
      content={
        <p>
          Click on the Share button <ShareIcon className="mb-1 inline-block h-4 w-4 shrink-0" /> and
          then &quot;Add to Home Screen&quot;
        </p>
      }
      buttons={<DialogButton onClick={() => setShowPrompt(false)}>Ok</DialogButton>}
    />
  );
}
