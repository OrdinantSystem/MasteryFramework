import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { unified } from "@astrojs/markdown-remark";
import { mathOptions } from "./src/lib/math-options.mjs";

// KaTeX emits visual HTML and accessible MathML. Index the explanation rather
// than duplicating those representations in search excerpts.
function ignoreRenderedMathInSearch() {
  return (tree) => {
    const visit = (node) => {
      if (
        node.type === "element" &&
        node.properties?.className?.includes("katex")
      ) {
        node.properties["data-pagefind-ignore"] = "all";
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

function centeredTables() {
  return (tree, file) => {
    const locale = String(file.path || "").includes("/es/")
      ? "es"
      : String(file.path || "").includes("/de/")
        ? "de"
        : "en";
    const visit = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type === "element" && child.tagName === "table") {
          // Analysis truth tables contain only binary values in their body.
          // Leave numerical and explanatory tables in other contexts untouched.
          if (String(file.path || "").includes("/analysis/")) {
            const cells = [];
            const collect = (node) => {
              if (node.type === "element" && node.tagName === "td") cells.push(node);
              else node.children?.forEach(collect);
            };
            collect(child);
            const value = (cell) => cell.children?.every((node) => node.type === "text")
              ? cell.children.map((node) => node.value).join("").trim()
              : "";
            if (cells.length && cells.every((cell) => /^[01]$/.test(value(cell)))) {
              for (const cell of cells) cell.properties["data-truth-value"] = value(cell);
            }
          }
          return {
            type: "element",
            tagName: "div",
            properties: {
              className: ["table-scroll"],
              tabIndex: 0,
              role: "region",
              "aria-label": { en: "Table", de: "Tabelle", es: "Tabla" }[locale],
            },
            children: [child],
          };
        }
        visit(child);
        return child;
      });
    };
    visit(tree);
  };
}

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || "https://example.github.io",
  base: process.env.BASE_PATH || "/",
  i18n: {
    locales: ["en", "de", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, mathOptions],
        ignoreRenderedMathInSearch,
        centeredTables,
      ],
    }),
  },
  devToolbar: { enabled: false },
});
