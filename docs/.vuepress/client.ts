import { defineClientConfig } from "@vuepress/client";
// components
import GeoJsonLayerStyleTable from "./components/GeoJsonLayerStyleTable/index.vue"; // geojson layer 样式参数
import LayerMethodsTable from "./components/LayerMethodsTable/index.vue"; // geojson layer methods 方法

export default defineClientConfig({
  enhance({ app }) {
    app.component("GeoJsonLayerStyleTable", GeoJsonLayerStyleTable);
    app.component("LayerMethodsTable", LayerMethodsTable);
  },
});
