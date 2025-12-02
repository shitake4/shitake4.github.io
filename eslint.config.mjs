import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: {
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
    },
  },
];

export default config;
