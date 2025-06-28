import { defineConfig } from 'vitepress'

import examples from './sidebar/examples.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Note",
  description: "note",
  themeConfig: {
    i18nRouting: false,
    siteTitle: "Hello World",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: examples.text!, link: examples.items![0].link! }
    ],
    sidebar: [
      examples
    ],
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cycdc98/cycdc98.github.io' }
    ]
  },
  srcDir: 'docs',
})
