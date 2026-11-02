import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import type { PageData } from "./model";
const root = document.getElementById("root");
const payload = document.getElementById("page-data");
if (root && payload) {
  const page = JSON.parse(payload.textContent || "{}") as PageData;
  hydrateRoot(root, <App page={page} />);
}
// Carry the theme between file:// pages, where storage can be isolated by path.
document.addEventListener(
  "click",
  (event) => {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!anchor) return;
    const raw = anchor.getAttribute("href");
    if (!raw || raw.startsWith("#") || /^[a-z]+:/i.test(raw)) return;
    const url = new URL(raw, location.href);
    if (url.pathname.endsWith(".html")) {
      url.searchParams.set(
        "theme",
        document.documentElement.dataset.theme || "light",
      );
      anchor.href = url.href;
    }
  },
  true,
);
