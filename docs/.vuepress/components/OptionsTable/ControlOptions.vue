<template>
  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="control-position">
        <td>
          <code><b>position</b></code
          ><a data-anchor="control-position"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'topright'</code></td>
        <td>
          控件的位置（地图的一个角）。可能的值是 <code>'topleft'</code>、
          <code>'topright'</code>、 <code>'bottomleft'</code> 或
          <code>'bottomright'</code>
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
