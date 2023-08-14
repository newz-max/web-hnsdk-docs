<template>
  <h2 id="popup-factory">Creation</h2>

  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="point-l-point">
        <td>
          <code
            ><b>hnsdk.point</b>(<nobr>&lt;Number&gt;</nobr> <i>x</i>,
            <nobr>&lt;Number&gt;</nobr> <i>y</i>, <nobr>&lt;Boolean&gt;</nobr>
            <i>round?</i>)</code
          ><a data-anchor="point-l-point"></a>
        </td>
        <td>
          用给定的 <code>x</code> 和
          <code>y</code> 坐标创建一个点对象。如果可选的
          <code>round</code> 被设置为true，则对 <code>x</code> 和
          <code>y</code> 值进行舍入。
        </td>
      </tr>
      <tr id="point-l-point">
        <td>
          <code
            ><b>hnsdk.point</b>(<nobr>&lt;Number[]&gt;</nobr>
            <i>coords</i>)</code
          ><a data-anchor="point-l-point"></a>
        </td>
        <td>期待一个形式为 <code>[x, y]</code> 的数组来代替。</td>
      </tr>
      <tr id="point-l-point">
        <td>
          <code
            ><b>hnsdk.point</b>(<nobr>&lt;Object&gt;</nobr> <i>coords</i>)</code
          ><a data-anchor="point-l-point"></a>
        </td>
        <td>
          期待一个形式为 <code>{x: Number, y: Number}</code> 的普通对象来代替。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
