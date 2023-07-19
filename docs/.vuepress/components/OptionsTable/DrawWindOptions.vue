<template>
  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr>
        <td>geojsonData</td>
        <td>Object</td>
        <td>必填</td>
        <td>
          geojson FeatureCollection 格式的 经纬点数据 每个点中的 properties
          中有必填的 speed 、deg 字段 speed 是风速 deg 是 风向 0 - 360
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
