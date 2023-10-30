"use client";

import { useAddToHomescreen } from "@/hooks/use-add-to-home-screen";

import { Button } from "./ui/button";
import { Modal } from "./ui/modal";

export const AddToHomeScreen = () => {
  const { showPrompt, setShowPrompt, promptToInstall } = useAddToHomescreen();

  return (
    <Modal open={showPrompt} onClose={() => setShowPrompt(false)} title="Install the app">
      <div className="flex flex-col gap-4">
        <p>This app can be installed and added to your home screen.</p>
        <Button onClick={promptToInstall}>Add to home screen</Button>
      </div>
    </Modal>
  );
};
