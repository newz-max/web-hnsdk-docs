<template>
  <h2 id="polyline-option">Options 选项</h2>

  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="polyline-smoothfactor">
        <td>
          <code><b>smoothFactor</b></code
          ><a data-anchor="polyline-smoothfactor"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>1.0</code></td>
        <td>
          在每个缩放级别简化多段线的程度。更多意味着更好的性能和更平滑的外观，而更少意味着更精确的表现。
        </td>
      </tr>
      <tr id="polyline-noclip">
        <td>
          <code><b>noClip</b></code
          ><a data-anchor="polyline-noclip"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>禁用折线剪裁。</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// componets
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";

interface Props {
  showH2: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
