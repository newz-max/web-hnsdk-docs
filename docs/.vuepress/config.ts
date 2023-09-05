import { defineUserConfig, defaultTheme, viteBundler } from "vuepress";
// plugins
import { searchPlugin } from "@vuepress/plugin-search";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";
import path from "path";

export default defineUserConfig({
  base: "/web-sdk-doc/",
  lang: "zh-CN",
  title: "海宁 WEB SDK",
  description: "海宁 WEB SDK 文档",
  head: [["link", { rel: "icon", href: "/web-sdk-doc/imgs/logo.ico" }]],
  theme: defaultTheme({
    logo: "/imgs/logo.png",
    navbar: [
      {
        text: "指南",
        link: "/guide/getting-started",
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
          // children: ["/guide/index.md", "/guide/getting-started.md"],
          children: ["/guide/getting-started.md"],
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
            "/howToUse/tileLayer/tileLayer.md",
          ],
        },
        {
          text: "创建图层",
          children: [
            "/howToUse/createLayer/create-position-line.md",
            "/howToUse/createLayer/create-circle.md",
            "/howToUse/createLayer/create-polygon.md",
            "/howToUse/createLayer/create-ship.md",
            "/howToUse/createLayer/create-polyline.md",
          ],
        },
        {
          text: "绘制图层",
          children: [
            "/howToUse/drawLayer/draw-polygon.md",
            "/howToUse/drawLayer/draw-point.md",
            "/howToUse/drawLayer/draw-line.md",
            "/howToUse/drawLayer/draw-vessel.md",
            "/howToUse/drawLayer/draw-choropleth.md",
            "/howToUse/drawLayer/draw-wind.md",
          ],
        },
        {
          text: "计算工具",
          children: [
            "/howToUse/utils/distance.md",
            "/howToUse/utils/area.md",
            "/howToUse/utils/calcDestination.md",
            "/howToUse/utils/toMercator.md",
            "/howToUse/utils/vesselInPolygon.md",
          ],
        },
        {
          text: "Util 常用方法类",
          children: ["/howToUse/util/util.md"],
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
        {
          text: "UI 图层",
          children: [
            "/howToUse/uiLayer/popup.md",
            "/howToUse/uiLayer/tooltip.md",
            "/howToUse/uiLayer/marker.md",
          ],
        },
        {
          text: "基本类型",
          children: [
            "/howToUse/baseType/latLng.md",
            "/howToUse/baseType/latLngBounds.md",
            "/howToUse/baseType/point.md",
          ],
        },
        {
          text: "控件",
          children: [
            "/howToUse/controler/layers-controler.md",
            "/howToUse/controler/scale-controler.md",
          ],
        },
        {
          text: "扩展工具",
          children: [
            "/howToUse/extendsTools/storageMarker.md",
            "/howToUse/extendsTools/markerMotion.md",
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

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname),
        },
      },
    },
  }),
});
