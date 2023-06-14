<template>
  <h2 id="popup-factory">Creation</h2>

  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="popup-l-popup">
        <td>
          <code
            ><b>hnsdk.popup</b>(<nobr
              >&lt;<a href="#popup-option">Popup options</a>&gt;</nobr
            >
            <i>options?</i>, <nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>source?</i>)</code
          ><a data-anchor="popup-l-popup"></a>
        </td>
        <td>
          实例化一个
          <a href="#popup"><code>Popup</code></a> 对象，给定一个可选的
          <code>options</code> 对象，描述其外观和位置，以及一个可选的
          <code>source</code>
          对象，用它所指向的图层的引用来标记弹出窗口（popup）。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
