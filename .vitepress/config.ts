import { defineConfig } from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import examples from "./sidebar/examples.js";
import jenkins from "./sidebar/jenkins.js";
import photography from "./sidebar/photography.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Note",
  titleTemplate: ":title",
  description: "note",
  themeConfig: {
    i18nRouting: false,
    siteTitle: "cycdc98",
    nav: [],
    sidebar: {
      "/examples/": examples,
      "/photography/": photography,
      "/jenkins/": jenkins,
    },
    aside: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/cycdc98/cycdc98.github.io" },
    ],
  },
  srcDir: "docs",
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    ssr: { noExternal: ["element-plus"] },
  },
});
