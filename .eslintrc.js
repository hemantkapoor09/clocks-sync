module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:security/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["security"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "vetur.format.defaultFormatterOptions": {
      "prettier": {
        "trailingComma": "all"
      }
    }
  },
  overrides: [
    {
      env: {
        jest: true
      },
      files: [
        ".eslintrc.js",
        "**/tests/**/*.{j,t}s?(x)",
        "**/*.spec.{j,t}s?(x)"
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
};
