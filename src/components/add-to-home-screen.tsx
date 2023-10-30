"use client";

import { Actions, ActionsButton, ActionsGroup, ActionsLabel } from "konsta/react";

import { useAddToHomescreen } from "@/hooks/use-add-to-home-screen";

export const AddToHomeScreen = () => {
  const { showPrompt, setShowPrompt, promptToInstall } = useAddToHomescreen();

  return (
    <Actions opened={showPrompt} onBackdropClick={() => setShowPrompt(false)}>
      <ActionsGroup>
        <ActionsLabel>Install the app</ActionsLabel>
        <ActionsButton onClick={promptToInstall}>Add to home screen</ActionsButton>
      </ActionsGroup>
      <ActionsGroup>
        <ActionsButton onClick={() => setShowPrompt(false)}>Cancel</ActionsButton>
      </ActionsGroup>
    </Actions>
  );
};
