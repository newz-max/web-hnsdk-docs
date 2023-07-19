<template>
  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="polyline-l-polyline">
        <td>hnsdk.drawChoropleth(geojsonData , options)</td>
        <td>
          给出一个Layer对象，通过传递 geojson 格式的矩阵数据得到计算好等值面的
          Layer 对象
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
