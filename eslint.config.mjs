// eslint.config.js or eslint.config.mjs
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // ✅ Extend recommended Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore all generated Prisma files completely
  {
    ignores: ["src/generated/prisma/*"],
  },

  // ✅ Optional: If you want to lint Prisma files but disable specific rules instead of ignoring
  {
    files: ["src/generated/prisma/**/*.{ts,js}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
    },
  },
]

export default eslintConfig
