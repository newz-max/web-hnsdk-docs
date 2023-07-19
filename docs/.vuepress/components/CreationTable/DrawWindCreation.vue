<template>
  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr>
        <td>hnsdk.drawWind(geojsonData)</td>
        <td>
          给出一个LayerGroup对象，通过传递 geojson
          格式的经纬度点数据绘制风速图标
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
