import type { DefaultTheme } from "vitepress/theme";

const examples: DefaultTheme.SidebarItem[] = [
  {
    text: "Examples",
    collapsed: true,
    items: [
      {
        text: "Markdown Examples",
        link: "/examples/markdown-examples",
      },
      {
        text: "Runtime API Examples",
        link: "/examples/api-examples",
      },
    ],
  },
];

export default examples;
