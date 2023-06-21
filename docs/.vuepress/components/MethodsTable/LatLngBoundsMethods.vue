<template>
  <h2 v-show="showH2" id="latlngbounds-method">Methods 方法</h2>

  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="latlngbounds-extend">
        <td>
          <code
            ><b>extend</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng</i>)</code
          ><a data-anchor="latlngbounds-extend"></a>
        </td>
        <td><code>this</code></td>
        <td><p>扩展边界以包含给定的点</p></td>
      </tr>
      <tr id="latlngbounds-extend">
        <td>
          <code
            ><b>extend</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>otherBounds</i>)</code
          ><a data-anchor="latlngbounds-extend"></a>
        </td>
        <td><code>this</code></td>
        <td><p>扩展边界以包含给定的边界</p></td>
      </tr>
      <tr id="latlngbounds-pad">
        <td>
          <code><b>pad</b>(<nobr>&lt;Number&gt;</nobr> <i>bufferRatio</i>)</code
          ><a data-anchor="latlngbounds-pad"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td>
          <p>
            返回通过在每个方向上以给定的比率扩展或缩减当前边界而创建的边界。
            例如，比率为 0.5 时，界线在每个方向上都会延伸 50% 。
            负值将缩减边界。
          </p>
        </td>
      </tr>
      <tr id="latlngbounds-getcenter">
        <td>
          <code><b>getCenter</b>()</code
          ><a data-anchor="latlngbounds-getcenter"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回边界的中心点。</p></td>
      </tr>
      <tr id="latlngbounds-getsouthwest">
        <td>
          <code><b>getSouthWest</b>()</code
          ><a data-anchor="latlngbounds-getsouthwest"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回边界的西南点。</p></td>
      </tr>
      <tr id="latlngbounds-getnortheast">
        <td>
          <code><b>getNorthEast</b>()</code
          ><a data-anchor="latlngbounds-getnortheast"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回边界的东北点。</p></td>
      </tr>
      <tr id="latlngbounds-getnorthwest">
        <td>
          <code><b>getNorthWest</b>()</code
          ><a data-anchor="latlngbounds-getnorthwest"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回边界的西北点。</p></td>
      </tr>
      <tr id="latlngbounds-getsoutheast">
        <td>
          <code><b>getSouthEast</b>()</code
          ><a data-anchor="latlngbounds-getsoutheast"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td><p>返回边界的东南点。</p></td>
      </tr>
      <tr id="latlngbounds-getwest">
        <td>
          <code><b>getWest</b>()</code
          ><a data-anchor="latlngbounds-getwest"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回边界的西经度</p></td>
      </tr>
      <tr id="latlngbounds-getsouth">
        <td>
          <code><b>getSouth</b>()</code
          ><a data-anchor="latlngbounds-getsouth"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回边界的南纬度</p></td>
      </tr>
      <tr id="latlngbounds-geteast">
        <td>
          <code><b>getEast</b>()</code
          ><a data-anchor="latlngbounds-geteast"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回边界的东经度</p></td>
      </tr>
      <tr id="latlngbounds-getnorth">
        <td>
          <code><b>getNorth</b>()</code
          ><a data-anchor="latlngbounds-getnorth"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回边界的北纬度</p></td>
      </tr>
      <tr id="latlngbounds-contains">
        <td>
          <code
            ><b>contains</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>otherBounds</i>)</code
          ><a data-anchor="latlngbounds-contains"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果该矩形包含给定的矩形，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="latlngbounds-contains">
        <td>
          <code
            ><b>contains</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>latlng</i>)</code
          ><a data-anchor="latlngbounds-contains"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果矩形包含给定的点，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="latlngbounds-intersects">
        <td>
          <code
            ><b>intersects</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>otherBounds</i>)</code
          ><a data-anchor="latlngbounds-intersects"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>
            如果矩形与给定的边界相交，返回
            <code>true</code> 。如果两个边界至少有一个共同点，则它们相交。
          </p>
        </td>
      </tr>
      <tr id="latlngbounds-overlaps">
        <td>
          <code
            ><b>overlaps</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>otherBounds</i>)</code
          ><a data-anchor="latlngbounds-overlaps"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>
            如果矩形与给定的边界重叠，返回
            <code>true</code> 。如果两个边界的交点是一个区域，那么它们就会重叠。
          </p>
        </td>
      </tr>
      <tr id="latlngbounds-tobboxstring">
        <td>
          <code><b>toBBoxString</b>()</code
          ><a data-anchor="latlngbounds-tobboxstring"></a>
        </td>
        <td><code>String</code></td>
        <td>
          <p>
            返回一个包含'southwest_lng、southwest_lat、northeast_lng、northeast_lat'格式的包围盒坐标的字符串。对于向返回地理数据的网络服务发送请求很有用。
          </p>
        </td>
      </tr>
      <tr id="latlngbounds-equals">
        <td>
          <code
            ><b>equals</b>(<nobr
              >&lt;<a href="#latlngbounds">LatLngBounds</a>&gt;</nobr
            >
            <i>otherBounds</i>, <nobr>&lt;Number&gt;</nobr>
            <i>maxMargin?</i>)</code
          ><a data-anchor="latlngbounds-equals"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>
            如果矩形与给定的边界相当（在一个小的误差范围内），则返回
            <code>true</code> 。误差范围可以通过设置
            <code>maxMargin</code> 为一个小数字来重写。
          </p>
        </td>
      </tr>
      <tr id="latlngbounds-isvalid">
        <td>
          <code><b>isValid</b>()</code
          ><a data-anchor="latlngbounds-isvalid"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果边界被正确初始化，则返回 <code>true</code> 。</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";

interface Props {
  showH2?: boolean;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
