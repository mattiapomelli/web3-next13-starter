import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {},
  client: {},
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
