<template>
  <label> 继承自 <a href="#featuregroup">FeatureGroup</a> 的方法</label>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="geojson-bringtofront">
        <td>
          <code><b>bringToFront</b>()</code
          ><a data-anchor="geojson-bringtofront"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将图层组置于所有其他图层的顶部。</p></td>
      </tr>
      <tr id="geojson-bringtoback">
        <td>
          <code><b>bringToBack</b>()</code
          ><a data-anchor="geojson-bringtoback"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将图层组置于所有其他图层的底部。</p></td>
      </tr>
      <tr id="geojson-getbounds">
        <td>
          <code><b>getBounds</b>()</code><a data-anchor="geojson-getbounds"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td>
          <p>返回要素组的 LatLngBounds（由其子节点的边界和坐标创建）。</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// compoonents
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
