<template>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="map-getcenter">
        <td>
          <code><b>getCenter</b>()</code><a data-anchor="map-getcenter"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回地图中心点的经纬度</p></td>
      </tr>
      <tr id="map-getzoom">
        <td>
          <code><b>getZoom</b>()</code><a data-anchor="map-getzoom"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回地图此时的缩放级别</p></td>
      </tr>
      <tr id="map-getbounds">
        <td>
          <code><b>getBounds</b>()</code><a data-anchor="map-getbounds"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td><p>返回当前地图的矩形边界</p></td>
      </tr>
      <tr id="map-getminzoom">
        <td>
          <code><b>getMinZoom</b>()</code><a data-anchor="map-getminzoom"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回地图的最小缩放级别（如果在地图或任何图层的 minZoom
            选项中设置过），或者默认为 0。
          </p>
        </td>
      </tr>
      <tr id="map-getmaxzoom">
        <td>
          <code><b>getMaxZoom</b>()</code><a data-anchor="map-getmaxzoom"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回地图的最大缩放级别（如果在地图或任何图层的 maxZoom
            选项中设置过）
          </p>
        </td>
      </tr>
      <tr id="map-getboundszoom">
        <td>
          <code
            ><b>getBoundsZoom</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>bounds</i>, <nobr>&lt;Boolean&gt;</nobr> <i>inside?</i>,
            <nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>padding?</i>)</code
          ><a data-anchor="map-getboundszoom"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回给定边界与地图视图完全吻合的最大缩放级别。如果
            inside（可选）被设置为
            true，该方法反而会返回地图视图完全适合给定边界的最小缩放级别。
          </p>
        </td>
      </tr>
      <tr id="map-getsize">
        <td>
          <code><b>getSize</b>()</code><a data-anchor="map-getsize"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><p>返回地图容器的当前大小（以像素为单位）。</p></td>
      </tr>
      <tr id="map-getpixelbounds">
        <td>
          <code><b>getPixelBounds</b>()</code
          ><a data-anchor="map-getpixelbounds"></a>
        </td>
        <td>
          <code><a href="#bounds">Bounds</a></code>
        </td>
        <td>
          <p>
            返回当前地图视图的投影像素坐标的边界（有时在图层和叠加实现中很有用）。
          </p>
        </td>
      </tr>
      <tr id="map-getpixelorigin">
        <td>
          <code><b>getPixelOrigin</b>()</code
          ><a data-anchor="map-getpixelorigin"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            返回地图层左上角的投影像素坐标（在自定义图层和叠加实现中很有用）。
          </p>
        </td>
      </tr>
      <tr id="map-getpixelworldbounds">
        <td>
          <code
            ><b>getPixelWorldBounds</b>(<nobr>&lt;Number&gt;</nobr>
            <i>zoom?</i>)</code
          ><a data-anchor="map-getpixelworldbounds"></a>
        </td>
        <td>
          <code><a href="#bounds">Bounds</a></code>
        </td>
        <td>
          <p>
            返回指定缩放级别的世界地图边界的像素坐标。如果 zoom
            参数省略，则使用地图的当前缩放级别。
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
