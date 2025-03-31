// eslint.config.js (oder der Name deiner Flat Config Datei)

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import mdx from "eslint-plugin-mdx"; // Importiere das MDX Plugin direkt

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialisiere FlatCompat, um ältere Konfigurationen laden zu können
const compat = new FlatCompat({
  baseDirectory: __dirname,
  // resolvePluginsRelativeTo: __dirname, // Kann manchmal nötig sein
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // Verwende compat.extends, um die Next.js und Prettier Konfigurationen zu laden.
  // "plugin:prettier/recommended" lädt eslint-plugin-prettier und eslint-config-prettier
  // und sollte idealerweise nach anderen Konfigurationen kommen, die Regeln definieren.
  ...compat.extends(
    "next/core-web-vitals",
    // "next/typescript", // next/core-web-vitals enthält oft schon TS-Support
    "plugin:prettier/recommended"
  ),

  // Konfiguriere das MDX Plugin für Flat Config
  // Siehe Doku von eslint-plugin-mdx für Flat Config: https://github.com/mdx-js/eslint-mdx/tree/main/packages/eslint-plugin-mdx#flat-config
  {
    files: ["**/*.mdx"], // Wende diese Konfiguration nur auf .mdx Dateien an
    ...mdx.flat, // Standard-Konfiguration für MDX
    // Optional: Überschreibe oder füge MDX spezifische Regeln hinzu
    // rules: {
    //   ...mdx.flat.rules,
    //   "prettier/prettier": "warn", // Beispiel: Prettier nur als Warnung in MDX
    // }
  },
  {
    files: ["**/*.md", "**/*.mdx"], // Globale MDX-Prozessor-Einstellung
     processor: "mdx/remark",
     plugins: {
       mdx: mdx
     },
     rules: {
       "prettier/prettier": "off" // Oft sinnvoll, Prettier im Code innerhalb von MD/MDX zu deaktivieren
     }
   },

  // Zusätzliche globale Regeln oder Konfigurationen (optional)
  // {
  //   rules: {
  //     // Eigene Regelüberschreibungen hier
  //   }
  // }
];

export default eslintConfig;