import type { DefaultTheme } from "vitepress/theme";

const examples: DefaultTheme.SidebarItem = {
  text: "Examples",
  collapsed: true,
  items: [
    {
      text: "Markdown Examples",
      link: "/vitepress-examples/markdown-examples",
    },
    { text: "Runtime API Examples", link: "/vitepress-examples/api-examples" },
  ],
};

export default examples;
