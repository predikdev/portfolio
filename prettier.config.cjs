/** @type {import("prettier").Config} */
module.exports = {
  // ZÁKLAD
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 110,

  // ESTETIKA
  bracketSpacing: true,
  arrowParens: "always",

  // PLUGINY PRO TVŮJ STACK
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  // OVERRIDES – specifika pro některé typy souborů
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.yml", "*.yaml", "*.json", "*.md"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
