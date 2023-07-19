<template>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="geojson-adddata">
        <td>
          <code><b>addData</b>(<i>data</i>)</code
          ><a data-anchor="geojson-adddata"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将一个 GeoJSON 对象添加到图层中。</p></td>
      </tr>
      <tr id="geojson-resetstyle">
        <td>
          <code><b>resetStyle</b>(<i>layer?</i>)</code
          ><a data-anchor="geojson-resetstyle"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            将给定的矢量图层的样式重置为原始的 GeoJSON
            样式，对于在悬停事件后重置样式很有用。如果省略了
            <code>layer</code> ，当前图层中的所有要素的样式都会被重置。
          </p>
        </td>
      </tr>
      <tr id="geojson-setstyle">
        <td>
          <code><b>setStyle</b>(<i>style</i>)</code
          ><a data-anchor="geojson-setstyle"></a>
        </td>
        <td><code>this</code></td>
        <td><p>用给定的样式函数改变 GeoJSON 矢量图层的样式。</p></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
