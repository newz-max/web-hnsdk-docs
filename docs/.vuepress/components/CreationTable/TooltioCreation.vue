<template>
  <h2 id="tooltip-factory">Creation</h2>

  <ConstructorSynopsisHeader />

  <table>
    <tbody>
      <tr id="tooltip-l-tooltip">
        <td>
          <code
            ><b>hnsdk.tooltip</b>(<nobr
              >&lt;<a href="#tooltip-option">Tooltip options</a>&gt;</nobr
            >
            <i>options?</i>, <nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>source?</i>)</code
          ><a data-anchor="tooltip-l-tooltip"></a>
        </td>
        <td>
          实例化一个 Tooltip 对象，给定一个可选的
          <code>options</code> 对象，描述其外观和位置，以及一个可选的
          <code>source</code> 对象，用它所指向的 Layer 的引用来标记 Tooltip。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
