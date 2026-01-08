import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: {
      "@next/next/no-img-element": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "warn",
    },
  },
];

export default config;
