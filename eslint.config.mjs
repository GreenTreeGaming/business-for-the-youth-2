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
      '@next/next/no-html-link-for-pages': 'off', // Disables the <a> navigation warning
      '@next/next/no-img-element': 'off',        // Disables the <img> optimization warning
    },
  },
];

export default eslintConfig;