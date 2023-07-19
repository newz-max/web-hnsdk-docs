<template>
  <h4 id="map-map-state-change-events">地图状态变更事件</h4>

  <table>
    <EventDataSynopsisHeader />

    <tbody>
      <tr id="map-zoomlevelschange">
        <td>
          <code><b>zoomlevelschange</b></code
          ><a data-anchor="map-zoomlevelschange"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>当地图上的缩放级别数因添加或移除图层而更改时触发。</td>
      </tr>
      <tr id="map-resize">
        <td>
          <code><b>resize</b></code
          ><a data-anchor="map-resize"></a>
        </td>
        <td>
          <code><a href="#resizeevent">ResizeEvent</a></code>
        </td>
        <td>调整地图大小时触发。</td>
      </tr>
      <tr id="map-unload">
        <td>
          <code><b>unload</b></code
          ><a data-anchor="map-unload"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>当使用 <a href="#map-remove">remove</a> 方法销毁地图时触发。</td>
      </tr>
      <tr id="map-viewreset">
        <td>
          <code><b>viewreset</b></code
          ><a data-anchor="map-viewreset"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>
          当地图需要重绘其内容时触发（通常发生在地图缩放或加载时）。 对于创建
          custom overlays 非常有用。
        </td>
      </tr>
      <tr id="map-load">
        <td>
          <code><b>load</b></code
          ><a data-anchor="map-load"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>地图初始化时触发（首次设置其中心和缩放比例时）。</td>
      </tr>
      <tr id="map-zoomstart">
        <td>
          <code><b>zoomstart</b></code
          ><a data-anchor="map-zoomstart"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>地图缩放即将更改时（例如在缩放动画之前）触发。</td>
      </tr>
      <tr id="map-movestart">
        <td>
          <code><b>movestart</b></code
          ><a data-anchor="map-movestart"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>当地图视图开始更改时触发（例如，用户开始拖动地图）。</td>
      </tr>
      <tr id="map-zoom">
        <td>
          <code><b>zoom</b></code
          ><a data-anchor="map-zoom"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>在缩放级别的任何更改（包括缩放和飞行动画）期间反复触发。</td>
      </tr>
      <tr id="map-move">
        <td>
          <code><b>move</b></code
          ><a data-anchor="map-move"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>在地图的任何移动过程中反复触发，包括平移和飞行动画。</td>
      </tr>
      <tr id="map-zoomend">
        <td>
          <code><b>zoomend</b></code
          ><a data-anchor="map-zoomend"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>在任何动画执行完毕地图更新后都会触发。</td>
      </tr>
      <tr id="map-moveend">
        <td>
          <code><b>moveend</b></code
          ><a data-anchor="map-moveend"></a>
        </td>
        <td>
          <code><a href="#event">Event</a></code>
        </td>
        <td>地图中心停止更改时触发（例如，用户停止拖动地图）。</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import EventDataSynopsisHeader from "../CommonTable/EventDataSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
