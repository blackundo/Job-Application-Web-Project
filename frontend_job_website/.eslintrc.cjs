module.exports = {
  root: true,
  env: { browser: true, es2020: true },
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
<<<<<<< HEAD
    "react/prop-types": "off",
  },

=======
  },
  rules: {
    "react/prop-types": "off",
  },
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
  // presets: ["@babel/preset-env", "@babel/preset-react"],
};
