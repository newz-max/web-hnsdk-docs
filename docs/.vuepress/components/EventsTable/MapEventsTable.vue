<template>
  <h2 id="图层事件" v-show="showTitle">图层事件</h2>
  <table>
    <EventDataSynopsisHeader />

    <tbody>
      <tr>
        <td>baselayerchange</td>
        <td><a href="#LayersControlEvent">LayersControlEvent</a></td>
        <td>通过图层控件更改基本图层时触发。</td>
      </tr>
      <tr>
        <td>overlayadd</td>
        <td><a href="#LayersControlEvent">LayersControlEvent</a></td>
        <td>通过图层控件选择叠加图层时触发。</td>
      </tr>
      <tr>
        <td>overlayremove</td>
        <td><a href="#LayersControlEvent">LayersControlEvent</a></td>
        <td>通过图层控件取消选择叠加图层时触发。</td>
      </tr>
      <tr>
        <td>layeradd</td>
        <td><a href="#LayerEvent">LayerEvent</a></td>
        <td>将新图层添加到地图时触发。</td>
      </tr>
      <tr>
        <td>layerremove</td>
        <td><a href="#LayerEvent">LayerEvent</a></td>
        <td>从地图上删除某些图层时触发</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
// components
// import EventDataSynopsisHeader from "@/components/CommonTable/EventDataSynopsisHeader.vue";
import EventDataSynopsisHeader from "../CommonTable/EventDataSynopsisHeader.vue";

interface Props {
  showTitle?: boolean;
}
defineProps<Props>();
</script>
