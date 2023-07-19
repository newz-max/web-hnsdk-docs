<template>
  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr>
        <td>breaks</td>
        <td>Array</td>
        <td>必填</td>
        <td>
          计算等值线的分级数组，每个选项是对象 break
          为参与计算的属性，并可以添加 PathOptions
          属性来设置不同级别的等值面样式
        </td>
      </tr>
      <tr>
        <td>zProperty</td>
        <td>String</td>
        <td>必填</td>
        <td>
          函数第一个入参 geojsonData 内 properties 属性中参与等值线计算的属性
        </td>
      </tr>
      <tr>
        <td>created</td>
        <td>Function</td>
        <td>*</td>
        <td>
          在每个等值面的 Layer 对象被创建后执行的函数，有两个参数： feature ,
          layer；feature 为每个等值面的 geojson 数据，layer 为等值面图层实例对象
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
