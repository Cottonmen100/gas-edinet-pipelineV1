import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,gs}"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        Logger: "readonly",
        SpreadsheetApp: "readonly",
        PropertiesService: "readonly",
        UrlFetchApp: "readonly",
        DriveApp: "readonly",
        HtmlService: "readonly",
        ScriptApp: "readonly",
        Utilities: "readonly",
        console: "readonly"
      }
    },
    plugins: { prettier: pluginPrettier },
    rules: {
      "no-unused-vars": "warn",
      // ★ .gs でもJSとして整形するよう Prettier に明示
      "prettier/prettier": ["warn", { parser: "babel" }]
    }
  },
  prettier
];
