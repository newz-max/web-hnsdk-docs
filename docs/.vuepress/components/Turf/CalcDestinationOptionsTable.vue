<template>
  <table>
    <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>units</td>
        <td>String</td>
        <td>"kilometers"</td>
        <td>单位，可选的有 degrees、radians、miles、kilometers</td>
      </tr>
      <tr>
        <td>properties</td>
        <td>Object</td>
        <td>{}</td>
        <td>出参 type 为 Point 的 GeoJSON 的 properties 属性</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
</script>
