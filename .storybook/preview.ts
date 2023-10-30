import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    dataThemes: {
      defaultValue: {
        list: [
          { name: "Light", dataTheme: "light", color: "#F5F5F7" },
          { name: "Dark", dataTheme: "dark", color: "#000000" },
        ],
      },
    },
  },
};

export default preview;
