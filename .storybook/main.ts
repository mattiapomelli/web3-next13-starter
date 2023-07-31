import type { StorybookConfig } from "@storybook/nextjs";

import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-data-theme-switcher",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Support path aliases
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    // This modifies the existing image rule to exclude .svg files
    // since we want to handle those files with @svgr/webpack
    const imageRule = config?.module?.rules?.find((rule) => {
      if (!rule || rule === "...") return false;
      if (!rule.test) return false;
      if (!(rule.test instanceof RegExp)) return false;
      return rule.test.test(".svg");
    });
    if (imageRule && imageRule !== "...") {
      imageRule.exclude = /\.svg$/;
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default config;
