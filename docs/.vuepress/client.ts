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
import LatLngBoundsCreation from "./components/CreationTable/LatLngBoundsCreation.vue"; // tileLayer creation 表格
import LatLngBoundsMethods from "./components/MethodsTable/LatLngBoundsMethods.vue"; // tileLayer creation 表格
import PolylineOptions from "./components/OptionsTable/PolylineOptions.vue"; // tileLayer options 表格
import PopupEvents from "./components/EventsTable/PopupEvents.vue"; // LayersControlEvent 表格
import ToolTipEvents from "./components/EventsTable/ToolTipEvents.vue"; // LayersControlEvent 表格
import PolylineMethods from "./components/MethodsTable/PolylineMethods.vue"; // tileLayer creation 表格
import LayerMethods from "./components/MethodsTable/LayerMethods.vue"; // tileLayer creation 表格
import PopupMethods from "./components/MethodsTable/PopupMethods.vue"; // tileLayer creation 表格
import ToolTipMethods from "./components/MethodsTable/ToolTipMethods.vue"; // tileLayer creation 表格
import EventedMethods from "./components/MethodsTable/EventedMethods.vue"; // tileLayer creation 表格
import DrawChoroplethCreation from "./components/CreationTable/DrawChoroplethCreation.vue"; // tileLayer creation 表格
import DrawChoroplethOptions from "./components/OptionsTable/DrawChoroplethOptions.vue"; // tileLayer options 表格
import FeatureGroupEvents from "./components/EventsTable/FeatureGroupEvents.vue"; // LayersControlEvent 表格
import GeoJSONMethods from "./components/MethodsTable/GeoJSONMethods.vue"; // tileLayer creation 表格
import FeatureGrpupMethods from "./components/MethodsTable/FeatureGrpupMethods.vue"; // tileLayer creation 表格
import LayerGroupMethods from "./components/MethodsTable/LayerGroupMethods.vue"; // tileLayer creation 表格
import MapStatusChangeEvents from "./components/EventsTable/MapStatusChangeEvents.vue"; // LayersControlEvent 表格
import MapMethods from "./components/MethodsTable/MapMethods.vue"; // tileLayer creation 表格
import DrawWindCreation from "./components/CreationTable/DrawWindCreation.vue"; // tileLayer creation 表格
import DrawWindOptions from "./components/OptionsTable/DrawWindOptions.vue"; // tileLayer options 表格
import LayerControlerCreation from "./components/CreationTable/LayerControlerCreation.vue"; // tileLayer creation 表格
import LayersControlerOptions from "./components/OptionsTable/LayersControlerOptions.vue"; // tileLayer options 表格
import ControlOptions from "./components/OptionsTable/ControlOptions.vue"; // tileLayer options 表格
import LayersControlerMethods from "./components/MethodsTable/LayersControlerMethods.vue"; // tileLayer creation 表格
import ControlerMethods from "./components/MethodsTable/ControlerMethods.vue"; // tileLayer creation 表格
import CreateMapTranslate from "./components/Other/CreateMapTranslate.vue"; // tileLayer creation 表格
import CreateMapGetStatus from "./components/Other/CreateMapGetStatus.vue"; // tileLayer creation 表格

export default defineClientConfig({
  enhance({ app }) {
    app.component("GeoJsonLayerStyleTable", GeoJsonLayerStyleTable);
    app.component("LayerMethodsTable", LayerMethodsTable);
    app.component("AttributeTypeSynopsisHeader", AttributeTypeSynopsisHeader);
    app.component("EventDataSynopsisHeader", EventDataSynopsisHeader);
    app.component("LayersControlEvent", LayersControlEvent);
    app.component("UtilFunctionTable", UtilFunctionTable);
    app.component("LatLngMethods", LatLngMethods);
    app.component("LatLngProperties", LatLngProperties);
    app.component("MarkerMethods", MarkerMethods);
    app.component("TileLayerCreation", TileLayerCreation);
    app.component("PopupCreation", PopupCreation);
    app.component("TooltioCreation", TooltioCreation);
    app.component("LatLngCreation", LatLngCreation);
    app.component("MarkerCreation", MarkerCreation);
    app.component("LatLngBoundsCreation", LatLngBoundsCreation);
    app.component("MapEventsTable", MapEventsTable);
    app.component("MapEventsMethodsTable", MapEventsMethodsTable);
    app.component("InteractiveEvents", InteractiveEvents);
    app.component("LayerEvents", LayerEvents);
    app.component("TileLayerOptions", TileLayerOptions);
    app.component("PopupOptions", PopupOptions);
    app.component("TooltipOptions", TooltipOptions);
    app.component("MarkerOptions", MarkerOptions);
    app.component("LatLngBoundsMethods", LatLngBoundsMethods);
    app.component("PolylineOptions", PolylineOptions);
    app.component("PopupEvents", PopupEvents);
    app.component("ToolTipEvents", ToolTipEvents);
    app.component("PolylineMethods", PolylineMethods);
    app.component("LayerMethods", LayerMethods);
    app.component("PopupMethods", PopupMethods);
    app.component("ToolTipMethods", ToolTipMethods);
    app.component("EventedMethods", EventedMethods);
    app.component("DrawChoroplethCreation", DrawChoroplethCreation);
    app.component("DrawChoroplethOptions", DrawChoroplethOptions);
    app.component("FeatureGroupEvents", FeatureGroupEvents);
    app.component("GeoJSONMethods", GeoJSONMethods);
    app.component("FeatureGrpupMethods", FeatureGrpupMethods);
    app.component("LayerGroupMethods", LayerGroupMethods);
    app.component("MapStatusChangeEvents", MapStatusChangeEvents);
    app.component("MapMethods", MapMethods);
    app.component("DrawWindCreation", DrawWindCreation);
    app.component("DrawWindOptions", DrawWindOptions);
    app.component("LayerControlerCreation", LayerControlerCreation);
    app.component("LayersControlerOptions", LayersControlerOptions);
    app.component("ControlOptions", ControlOptions);
    app.component("LayersControlerMethods", LayersControlerMethods);
    app.component("ControlerMethods", ControlerMethods);
    app.component("CreateMapTranslate", CreateMapTranslate);
    app.component("CreateMapGetStatus", CreateMapGetStatus);
  },
});
