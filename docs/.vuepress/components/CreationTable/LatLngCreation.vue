<template>
  <h2 id="latlng-factory">Creation</h2>

  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="latlng-l-latlng">
        <td>
          <code
            ><b>hnsdk.latLng</b>(<nobr>&lt;Number&gt;</nobr> <i>latitude</i>,
            <nobr>&lt;Number&gt;</nobr> <i>longitude</i>,
            <nobr>&lt;Number&gt;</nobr> <i>altitude?</i>)</code
          ><a data-anchor="latlng-l-latlng"></a>
        </td>
        <td>
          创建一个代表具有给定纬度和经度（以及可选的高度）的地理点的对象。
        </td>
      </tr>
      <tr id="latlng-l-latlng">
        <td>
          <code
            ><b>hnsdk.latLng</b>(<nobr>&lt;Array&gt;</nobr> <i>coords</i>)</code
          ><a data-anchor="latlng-l-latlng"></a>
        </td>
        <td>
          期待一个 <code>[Number, Number]</code> 或
          <code>[Number, Number, Number]</code> 形式的数组来代替。
        </td>
      </tr>
      <tr id="latlng-l-latlng">
        <td>
          <code
            ><b>hnsdk.latLng</b>(<nobr>&lt;Object&gt;</nobr>
            <i>coords</i>)</code
          ><a data-anchor="latlng-l-latlng"></a>
        </td>
        <td>
          期待一个形式为 <code>{lat: Number, lng: Number}</code> 或
          <code>{lat: Number, lng: Number, alt: Number}</code>
          的普通对象来代替。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
