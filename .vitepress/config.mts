import { defineConfig } from "vitepress";

import examples from "./sidebar/examples.mjs";
import photography from "./sidebar/photography.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Note",
  description: "note",
  themeConfig: {
    i18nRouting: false,
    siteTitle: "Hello World",
    nav: [
      { text: examples[0].text!, link: examples[0].items![0].link! },
      { text: photography[0].text!, link: "/photography" },
    ],
    sidebar: {
      "/examples/": examples,
      "/photography/": photography,
    },
    aside: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/cycdc98/cycdc98.github.io" },
    ],
  },
  srcDir: "docs",
});
