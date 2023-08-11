<template>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="map-getzoomscale">
        <td>
          <code
            ><b>getZoomScale</b>(<nobr>&lt;Number&gt;</nobr> <i>toZoom</i>,
            <nobr>&lt;Number&gt;</nobr> <i>fromZoom</i>)</code
          ><a data-anchor="map-getzoomscale"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回要应用于从缩放级别从缩放到缩放的地图过渡的比例因子。
            在内部使用以帮助缩放动画。
          </p>
        </td>
      </tr>
      <tr id="map-getscalezoom">
        <td>
          <code
            ><b>getScaleZoom</b>(<nobr>&lt;Number&gt;</nobr> <i>scale</i>,
            <nobr>&lt;Number&gt;</nobr> <i>fromZoom</i>)</code
          ><a data-anchor="map-getscalezoom"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回地图最终到达的缩放级别，如果它处于fromZoom
            级别，并且所有内容都按比例缩放scale。
            <a href="#map-getZoomScale"><code>getZoomScale</code></a>
            的逆向方法。
          </p>
        </td>
      </tr>
      <tr id="map-project">
        <td>
          <code
            ><b>project</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng</i>, <nobr>&lt;Number&gt;</nobr> <i>zoom</i>)</code
          ><a data-anchor="map-project"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            <a href="#latlng"><code>LatLng</code></a> 根据地图CRS的投影来
            投影地理坐标，然后zoom根据CRS的 尺寸对其进行分级
            <a href="#transformation"><code>Transformation</code></a>
            。结果是相对于CRS原点的像素坐标。
          </p>
        </td>
      </tr>
      <tr id="map-unproject">
        <td>
          <code
            ><b>unproject</b>(<nobr>&lt;<a href="#point">Point</a>&gt;</nobr>
            <i>point</i>, <nobr>&lt;Number&gt;</nobr> <i>zoom</i>)</code
          ><a data-anchor="map-unproject"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            逆向 <a href="#map-project"><code>project</code></a>
          </p>
        </td>
      </tr>
      <tr id="map-layerpointtolatlng">
        <td>
          <code
            ><b>layerPointToLatLng</b>(<nobr
              >&lt;<a href="#point">Point</a>&gt;</nobr
            >
            <i>point</i>)</code
          ><a data-anchor="map-layerpointtolatlng"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            给定相对于<a href="#map-getpixelorigin">origin pixel</a
            >的相应像素坐标，转换为相应的地理坐标（对于当前缩放级别）。
          </p>
        </td>
      </tr>
      <tr id="map-latlngtolayerpoint">
        <td>
          <code
            ><b>latLngToLayerPoint</b>(<nobr
              >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
            >
            <i>latlng</i>)</code
          ><a data-anchor="map-latlngtolayerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            给定地理坐标，转换为相对于<a href="#map-getpixelorigin"
              >origin pixel</a
            >的相应像素坐标。（在地图上进行位置叠加时比较有用）
          </p>
        </td>
      </tr>
      <tr id="map-wraplatlng">
        <td>
          <code
            ><b>wrapLatLng</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng</i>)</code
          ><a data-anchor="map-wraplatlng"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            如果它们在CRS的边界之外，则返回一个<a href="#latlng"
              ><code>LatLng</code></a
            >，lat并lng根据地图的CRS
            wrapLat和wrapLng属性进行包装。默认情况下，这意味着经度包裹在数据线周围，所以它的值在-180和+180度之间。
          </p>
        </td>
      </tr>
      <tr id="map-wraplatlngbounds">
        <td>
          <code
            ><b>wrapLatLngBounds</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>bounds</i>)</code
          ><a data-anchor="map-wraplatlngbounds"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td>
          <p>
            返回
            <a href="#latlngbounds"><code>LatLngBounds</code></a>
            与给定的大小相同的大小，确保其中心在CRS的边界内。默认情况下，这意味着中心经度被包裹在数据线周围，因此它的值在-180和+180度之间，并且大多数边界与CRS的界限重叠。
          </p>
        </td>
      </tr>
      <tr id="map-distance">
        <td>
          <code
            ><b>distance</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng1</i>, <nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng2</i>)</code
          ><a data-anchor="map-distance"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>根据地图的参考系来返回两个地理位置之间的距离，默认为米。</p></td>
      </tr>
      <tr id="map-containerpointtolayerpoint">
        <td>
          <code
            ><b>containerPointToLayerPoint</b>(<nobr
              >&lt;<a href="#point">Point</a>&gt;</nobr
            >
            <i>point</i>)</code
          ><a data-anchor="map-containerpointtolayerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            给定相对于地图container容器的像素坐标，返回相对于<a
              href="#map-getpixelorigin"
              >origin pixel</a
            >的相应像素坐标。
          </p>
        </td>
      </tr>
      <tr id="map-layerpointtocontainerpoint">
        <td>
          <code
            ><b>layerPointToContainerPoint</b>(<nobr
              >&lt;<a href="#point">Point</a>&gt;</nobr
            >
            <i>point</i>)</code
          ><a data-anchor="map-layerpointtocontainerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            给定相对于<a href="#map-getpixelorigin">origin pixel</a
            >的像素坐标，返回相对于地图container容器的相应像素坐标。
          </p>
        </td>
      </tr>
      <tr id="map-containerpointtolatlng">
        <td>
          <code
            ><b>containerPointToLatLng</b>(<nobr
              >&lt;<a href="#point">Point</a>&gt;</nobr
            >
            <i>point</i>)</code
          ><a data-anchor="map-containerpointtolatlng"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            给定相对于地图container容器的像素坐标，返回对应的地理坐标（对于当前缩放级别）。
          </p>
        </td>
      </tr>
      <tr id="map-latlngtocontainerpoint">
        <td>
          <code
            ><b>latLngToContainerPoint</b>(<nobr
              >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
            >
            <i>latlng</i>)</code
          ><a data-anchor="map-latlngtocontainerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>给定地理坐标，返回相对于地图container容器的相应像素坐标。</p>
        </td>
      </tr>
      <tr id="map-mouseeventtocontainerpoint">
        <td>
          <code
            ><b>mouseEventToContainerPoint</b>(<nobr
              >&lt;<a href="#mouseevent">MouseEvent</a>&gt;</nobr
            >
            <i>ev</i>)</code
          ><a data-anchor="map-mouseeventtocontainerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            给定一个MouseEvent对象，返回相对于发生事件的地图容器的像素坐标（与地图左上角相关）。
          </p>
        </td>
      </tr>
      <tr id="map-mouseeventtolayerpoint">
        <td>
          <code
            ><b>mouseEventToLayerPoint</b>(<nobr
              >&lt;<a href="#mouseevent">MouseEvent</a>&gt;</nobr
            >
            <i>ev</i>)</code
          ><a data-anchor="map-mouseeventtolayerpoint"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td>
          <p>
            给定一个MouseEvent对象，返回相对于事件发生的<a
              href="#map-getpixelorigin"
              >origin pixel</a
            >的像素坐标。
          </p>
        </td>
      </tr>
      <tr id="map-mouseeventtolatlng">
        <td>
          <code
            ><b>mouseEventToLatLng</b>(<nobr
              >&lt;<a href="#mouseevent">MouseEvent</a>&gt;</nobr
            >
            <i>ev</i>)</code
          ><a data-anchor="map-mouseeventtolatlng"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>给定一个MouseEvent对象，返回发生事件的地理坐标。</p></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>
