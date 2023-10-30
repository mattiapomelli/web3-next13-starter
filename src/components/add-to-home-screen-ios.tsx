"use client";

import { useAddToHomescreeniOS } from "@/hooks/use-add-to-home-screen-ios";

import { Button } from "./ui/button";
import { Modal } from "./ui/modal";

export function AddToHomeScreeniOS() {
  const [showPrompt, setShowPrompt] = useAddToHomescreeniOS();

  return (
    <Modal open={showPrompt} onClose={() => setShowPrompt(false)} title="Install the app">
      <div className="flex flex-col gap-4">
        <p>
          This app can be installed and added to your home screen. Click on the Share button and
          then &quot;Add to Home Screen&quot;
        </p>
        <Button onClick={() => setShowPrompt(false)}>Ok</Button>
      </div>
    </Modal>
  );
}
