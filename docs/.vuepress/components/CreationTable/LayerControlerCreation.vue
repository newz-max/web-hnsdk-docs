<template>
  <h2 id="control-layers-factory">Creation</h2>

  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="control-layers-l-control-layers">
        <td>
          <code
            ><b>hnsdk.control.layers</b>(<nobr>&lt;Object&gt;</nobr>
            <i>baselayers?</i>, <nobr>&lt;Object&gt;</nobr> <i>overlays?</i>,
            <nobr
              >&lt;<a href="#control-layers-option">Control.Layers options</a
              >&gt;</nobr
            >
            <i>options?</i>)</code
          ><a data-anchor="control-layers-l-control-layers"></a>
        </td>
        <td>
          创建一个具有给定图层的图层控件。基本图层将用单选按钮切换，而覆盖物图层将用复选框切换。注意，所有的基本图层都应该在基本图层对象中传递，但在地图实例化过程中，只有一个图层应该被添加到地图中。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
