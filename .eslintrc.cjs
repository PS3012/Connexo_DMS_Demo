module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    OPENAI_API_KEY: "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",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
