import { defineClientConfig } from "@vuepress/client";
// components
import GeoJsonLayerStyleTable from "./components/GeoJsonLayerStyleTable/index.vue"; // geojson layer 样式参数
import LayerMethodsTable from "./components/LayerMethodsTable/index.vue"; // geojson layer methods 方法
import MapEventsTable from "./components/EventsTable/MapEventsTable.vue"; // geojson layer methods 方法
import AttributeTypeSynopsisHeader from "./components/CommonTable/AttributeTypeSynopsisHeader.vue"; // 表头：属性 类型 说明
import EventDataSynopsisHeader from "./components/CommonTable/EventDataSynopsisHeader.vue"; // 表头： 事件 表头 说明
import LayersControlEvent from "./components/EventsTable/LayersControlEvent.vue"; // LayersControlEvent 表格
import MapEventsMethodsTable from "./components/EventsTable/MapEventsMethodsTable.vue"; // mapEventMethods 表格
import UtilFunctionTable from "./components/FunctionTable/UtilFunctionTable.vue"; // Util Function 表格
import TileLayerCreation from "./components/CreationTable/TileLayerCreation.vue"; // tileLayer creation 表格
import TileLayerOptions from "./components/OptionsTable/TileLayerOptions.vue"; // tileLayer options 表格
import PopupCreation from "./components/CreationTable/PopupCreation.vue"; // tileLayer creation 表格
import PopupOptions from "./components/OptionsTable/PopupOptions.vue"; // popup options 表格
import TooltioCreation from "./components/CreationTable/TooltioCreation.vue"; // tileLayer creation 表格
import TooltipOptions from "./components/OptionsTable/TooltipOptions.vue"; // popup options 表格
import LatLngCreation from "./components/CreationTable/LatLngCreation.vue"; // tileLayer creation 表格
import LatLngMethods from "./components/MethodsTable/LatLngMethods.vue"; // tileLayer creation 表格
import LatLngProperties from "./components/PropertiesTable/LatLngProperties.vue"; // LatLng properties 表格
import MarkerCreation from "./components/CreationTable/MarkerCreation.vue"; // tileLayer creation 表格
import MarkerOptions from "./components/OptionsTable/MarkerOptions.vue"; // popup options 表格
import InteractiveEvents from "./components/EventsTable/InteractiveEvents.vue"; // LayersControlEvent 表格
import LayerEvents from "./components/EventsTable/LayerEvents.vue"; // LayersControlEvent 表格
import MarkerMethods from "./components/MethodsTable/MarkerMethods.vue"; // tileLayer creation 表格

export default defineClientConfig({
  enhance({ app }) {
    app.component("GeoJsonLayerStyleTable", GeoJsonLayerStyleTable);
    app.component("LayerMethodsTable", LayerMethodsTable);
    app.component("MapEventsTable", MapEventsTable);
    app.component("AttributeTypeSynopsisHeader", AttributeTypeSynopsisHeader);
    app.component("EventDataSynopsisHeader", EventDataSynopsisHeader);
    app.component("LayersControlEvent", LayersControlEvent);
    app.component("MapEventsMethodsTable", MapEventsMethodsTable);
    app.component("UtilFunctionTable", UtilFunctionTable);
    app.component("TileLayerCreation", TileLayerCreation);
    app.component("TileLayerOptions", TileLayerOptions);
    app.component("PopupCreation", PopupCreation);
    app.component("PopupOptions", PopupOptions);
    app.component("TooltioCreation", TooltioCreation);
    app.component("TooltipOptions", TooltipOptions);
    app.component("LatLngCreation", LatLngCreation);
    app.component("LatLngMethods", LatLngMethods);
    app.component("LatLngProperties", LatLngProperties);
    app.component("MarkerCreation", MarkerCreation);
    app.component("MarkerOptions", MarkerOptions);
    app.component("InteractiveEvents", InteractiveEvents);
    app.component("LayerEvents", LayerEvents);
    app.component("MarkerMethods", MarkerMethods);
  },
});
