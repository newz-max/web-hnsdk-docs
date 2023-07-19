<template>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="polyline-togeojson">
        <td>
          <code
            ><b>toGeoJSON</b>(<nobr>&lt;Number|false&gt;</nobr>
            <i>precision?</i>)</code
          ><a data-anchor="polyline-togeojson"></a>
        </td>
        <td><code>Object</code></td>
        <td>
          <p>
            坐标值使用具有指定 <code>precision</code> 的
            <a href="#util-formatnum"><code>formatNum</code></a>
            函数进行四舍五入。返回折线的
            <a href="http://en.wikipedia.org/wiki/GeoJSON"
              ><code>GeoJSON</code></a
            >
            表示 (作为 GeoJSON <code>LineString</code> 或
            <code>MultiLineString</code> Feature)。
          </p>
        </td>
      </tr>
      <tr id="polyline-getlatlngs">
        <td>
          <code><b>getLatLngs</b>()</code
          ><a data-anchor="polyline-getlatlngs"></a>
        </td>
        <td><code>LatLng[]</code></td>
        <td>
          <p>
            返回 path（路径）中的点的数组，如果是多段折线，则返回点的嵌套数组。
          </p>
        </td>
      </tr>
      <tr id="polyline-setlatlngs">
        <td>
          <code
            ><b>setLatLngs</b>(<nobr>&lt;LatLng[]&gt;</nobr>
            <i>latlngs</i>)</code
          ><a data-anchor="polyline-setlatlngs"></a>
        </td>
        <td><code>this</code></td>
        <td><p>用给定的地理点数组替换多段折线中的所有点。</p></td>
      </tr>
      <tr id="polyline-isempty">
        <td>
          <code><b>isEmpty</b>()</code><a data-anchor="polyline-isempty"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果折线没有经纬度，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="polyline-closestlayerpoint">
        <td>
          <code
            ><b>closestLayerPoint</b>(<nobr
              >&lt;<a href="#point">Point</a>&gt;</nobr
            >
            <i>p</i>)</code
          ><a data-anchor="polyline-closestlayerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>返回折线上最接近 <code>p</code> 的点。</p>
        </td>
      </tr>
      <tr id="polyline-getcenter">
        <td>
          <code><b>getCenter</b>()</code
          ><a data-anchor="polyline-getcenter"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            返回折线的中心坐标 (<a href="http://en.wikipedia.org/wiki/Centroid"
              >centroid</a
            >) 。
          </p>
        </td>
      </tr>
      <tr id="polyline-getbounds">
        <td>
          <code><b>getBounds</b>()</code
          ><a data-anchor="polyline-getbounds"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td>
          <p>
            返回路径的 <a href="#latlngbounds"><code>LatLngBounds</code></a> 。
          </p>
        </td>
      </tr>
      <tr id="polyline-addlatlng">
        <td>
          <code
            ><b>addLatLng</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng</i>, <nobr>&lt;LatLng[]&gt;</nobr> <i>latlngs?</i>)</code
          ><a data-anchor="polyline-addlatlng"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            将一个给定的点添加到折线上。默认情况下，如果是多段折线，会添加到折线的第一个环上，但是可以通过传递一个特定的环作为LatLng数组来重写（你可以提前用
            <a href="#polyline-getlatlngs"><code>getLatLngs</code></a
            >访问）。
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
