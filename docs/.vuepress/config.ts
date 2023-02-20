import { defineUserConfig, defaultTheme } from "vuepress";
// plugins
import { searchPlugin } from "@vuepress/plugin-search";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";

export default defineUserConfig({
  base: "/web-sdk-doc/",
  lang: "zh-CN",
  title: "海宁 WEB SDK",
  description: "海宁 WEB SDK 文档",
  theme: defaultTheme({
    logo: "/imgs/logo.png",
    navbar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "使用",
        link: "/howToUse/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "起步",
          children: ["/guide/index.md", "/guide/getting-started.md"],
        },
      ],
      "/howToUse/": [
        {
          text: "初始化",
          children: ["/howToUse/"],
        },
        {
          text: "瓦片引擎",
          children: [
            "/howToUse/TileEngine/create-map.md",
            "/howToUse/TileEngine/create-default-tileLayer.md",
            "/howToUse/TileEngine/create-ocean-currents.md",
          ],
        },
        {
          text: "创建图层",
          children: [
            "/howToUse/createLayer/create-position-line.md",
            "/howToUse/createLayer/create-circle.md",
            "/howToUse/createLayer/create-polygon.md",
            "/howToUse/createLayer/create-ship.md",
          ],
        },
        {
          text: "绘制图层",
          children: [
            "/howToUse/drawLayer/draw-polygon.md",
            "/howToUse/drawLayer/draw-point.md",
            "/howToUse/drawLayer/draw-line.md",
          ],
        },
        {
          text: "工具",
          children: ["/howToUse/utils/distance.md", "/howToUse/utils/area.md"],
        },
        {
          text: "数据",
          children: [
            "/howToUse/queryData/query-port-list.md",
            "/howToUse/queryData/query-port-detail.md",
            "/howToUse/queryData/query-ship-location.md",
            "/howToUse/queryData/query-ship.md",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    }),
    vuepressPluginAnchorRight(),
  ],
});
