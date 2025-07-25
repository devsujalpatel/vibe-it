import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Your base config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ❌ Ignore Prisma generated files
  {
    files: ["src/generated/prisma/**"],
    rules: {
      // Disable all rules for generated files
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
    languageOptions: {
      parserOptions: {
        // Let ESLint know it's JavaScript
        sourceType: "module",
      },
    },
  },
]

export default eslintConfig
