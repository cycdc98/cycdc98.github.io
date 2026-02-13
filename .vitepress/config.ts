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
    lastUpdated: {
      text: "更新时间",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
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
