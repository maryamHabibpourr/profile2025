import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off", // در Next.js نیازی به import React نیست
      "jsx-a11y/anchor-is-valid": "off", // لینک های Next.js به a نیاز ندارن
      "@next/next/no-img-element": "off" // برای استفاده از <img> به جای <Image> در Next.js
    },
  },
];

export default eslintConfig;









