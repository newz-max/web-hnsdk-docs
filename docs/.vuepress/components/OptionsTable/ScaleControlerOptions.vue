<template>
  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="control-scale-maxwidth">
        <td>
          <code><b>maxWidth</b></code
          ><a data-anchor="control-scale-maxwidth"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>100</code></td>
        <td>
          控件的最大宽度，单位是像素。宽度是动态设置的，以显示圆形值（如100、200、500）。
        </td>
      </tr>
      <tr id="control-scale-metric">
        <td>
          <code><b>metric</b></code
          ><a data-anchor="control-scale-metric"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>True</code></td>
        <td>是否显示公制比例线（米/公里）。</td>
      </tr>
      <tr id="control-scale-imperial">
        <td>
          <code><b>imperial</b></code
          ><a data-anchor="control-scale-imperial"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>True</code></td>
        <td>是否显示英制比例线（英里/英尺）。</td>
      </tr>
      <tr id="control-scale-updatewhenidle">
        <td>
          <code><b>updateWhenIdle</b></code
          ><a data-anchor="control-scale-updatewhenidle"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果为 <code>true</code>, 控件在
          <a href="#map-moveend"><code>移动结束</code></a
          >时被更新，否则它总是最新的(
          <a href="#map-move"><code>move</code></a> 时更新)。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
