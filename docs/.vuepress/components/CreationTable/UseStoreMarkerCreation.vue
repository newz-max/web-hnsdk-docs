<template>
  <h2 id="tooltip-factory">Creation</h2>

  <ConstructorSynopsisHeader />

  <table>
    <tbody>
      <tr id="tooltip-l-tooltip">
        <td>
          <code
            ><b>hnsdk.useStoreMarker</b>(<nobr
              >&lt;<a href="#map">map</a>&gt;</nobr
            >
            <i>Map</i>, <nobr>&lt;<a href="#groupid">groupId</a>&gt;</nobr>
            <i>string</i>)</code
          ><a data-anchor="tooltip-l-tooltip"></a>
        </td>
        <td>
          给出一个地图实例和分组id的参数，返回该组在本地创建的标记组实例，如果传入的分组id不存在，则创建一个新的分组
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
