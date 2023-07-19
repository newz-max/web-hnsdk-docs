<template>
  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="control-layers-collapsed">
        <td>
          <code><b>collapsed</b></code
          ><a data-anchor="control-layers-collapsed"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          如果为 <code>true</code>,
          该控件将被折叠成一个图标，并在鼠标悬停或触摸时展开。
        </td>
      </tr>
      <tr id="control-layers-autozindex">
        <td>
          <code><b>autoZIndex</b></code
          ><a data-anchor="control-layers-autozindex"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          如果为 <code>true</code>, 控件将以递增的顺序为其所有图层分配
          zIndexes，以便在开/关它们时保留顺序。
        </td>
      </tr>
      <tr id="control-layers-hidesinglebase">
        <td>
          <code><b>hideSingleBase</b></code
          ><a data-anchor="control-layers-hidesinglebase"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果为 <code>true</code>,
          当只有一个基础图层时，控件中的基础图层将被隐藏。
        </td>
      </tr>
      <tr id="control-layers-sortlayers">
        <td>
          <code><b>sortLayers</b></code
          ><a data-anchor="control-layers-sortlayers"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          是否对各图层进行排序。如果是 <code>false</code>,
          ，图层将保持它们被添加到控件中的顺序。
        </td>
      </tr>
      <tr id="control-layers-sortfunction">
        <td>
          <code><b>sortFunction</b></code
          ><a data-anchor="control-layers-sortfunction"></a>
        </td>
        <td><code>Function</code></td>
        <td><code>*</code></td>
        <td>
          一个
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
            >排序函数</a
          >
          ，当 <code>sortLayers</code> 为
          <code>true</code>时，它将被用于对图层进行排序。该函数同时接收
          <a href="#layer"><code>hnsdk.Layer</code></a> 实例和它们的名字，如
          <code>sortFunction(layerA, layerB, nameA, nameB)</code
          >。默认情况下，它按照名字的字母顺序对图层进行排序。
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
