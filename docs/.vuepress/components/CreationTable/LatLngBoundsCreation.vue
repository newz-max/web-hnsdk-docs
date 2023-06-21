<template>
  <h2 id="latlngbounds-factory">Creation</h2>

  <table>
    <ConstructorSynopsisHeader />

    <tbody>
      <tr id="latlngbounds-l-latlngbounds">
        <td>
          <code
            ><b>L.latLngBounds</b>(<nobr
              >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
            >
            <i>corner1</i>, <nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>corner2</i>)</code
          ><a data-anchor="latlngbounds-l-latlngbounds"></a>
        </td>
        <td>
          通过定义矩形的两个斜对角，创建一个
          <a href="#latlngbounds"><code>LatLngBounds</code></a> 对象。
        </td>
      </tr>
      <tr id="latlngbounds-l-latlngbounds">
        <td>
          <code
            ><b>L.latLngBounds</b>(<nobr>&lt;LatLng[]&gt;</nobr>
            <i>latlngs</i>)</code
          ><a data-anchor="latlngbounds-l-latlngbounds"></a>
        </td>
        <td>
          创建一个由其包含的地理点定义的
          <a href="#latlngbounds"><code>LatLngBounds</code></a> 对象。对于用
          <a href="#map-fitbounds"><code>fitBounds</code></a>
          缩放地图以适应一组特定的位置非常有用。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import ConstructorSynopsisHeader from "../CommonTable/ConstructorSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
