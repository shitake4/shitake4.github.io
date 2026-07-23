import nextConfig from "eslint-config-next/core-web-vitals";
import jsxA11y from "eslint-plugin-jsx-a11y";

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: {
      // eslint-config-next has already registered the `jsx-a11y` plugin instance;
      // redeclaring it via jsxA11y.flatConfigs.recommended causes
      // `ConfigError: Cannot redefine plugin "jsx-a11y"`, so only merge the rules here.
      ...jsxA11y.flatConfigs.recommended.rules,
      "@next/next/no-img-element": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "warn",
    },
  },
];

export default config;
