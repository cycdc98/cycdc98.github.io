import type { DefaultTheme } from "vitepress/theme";

const photography: DefaultTheme.SidebarItem[] = [
  {
    text: "摄影",
    collapsed: true,
    link: "/photography/",
    items: [
      {
        text: "曝光三要素",
        items: [
          {
            text: "快门",
            link: "/photography/exposure/shutter",
          },
          {
            text: "光圈",
            link: "/photography/exposure/aperture",
          },
          {
            text: "感光度",
            link: "/photography/exposure/iso",
          },
        ],
      },
    ],
  },
];

export default photography;
