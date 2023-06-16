<template>
  <h2 v-show="showH2" id="latlng-method">Methods 方法</h2>

  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="latlng-equals">
        <td>
          <code
            ><b>equals</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>otherLatLng</i>, <nobr>&lt;Number&gt;</nobr>
            <i>maxMargin?</i>)</code
          ><a data-anchor="latlng-equals"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>
            如果给定的
            <a href="#latlng"><code>LatLng</code></a>
            点在同一位置（在一个小的误差范围内），则返回 <code>true</code> 。
            误差范围可以通过设置 <code>maxMargin</code> 为一个小数字来重写。
          </p>
        </td>
      </tr>
      <tr id="latlng-tostring">
        <td>
          <code><b>toString</b>()</code><a data-anchor="latlng-tostring"></a>
        </td>
        <td><code>String</code></td>
        <td><p>返回点的字符串表示（用于调试目的）。</p></td>
      </tr>
      <tr id="latlng-distanceto">
        <td>
          <code
            ><b>distanceTo</b>(<nobr>&lt;<a href="#latlng">LatLng</a>&gt;</nobr>
            <i>otherLatLng</i>)</code
          ><a data-anchor="latlng-distanceto"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <p>
            返回使用
            <a href="https://en.wikipedia.org/wiki/Spherical_law_of_cosines"
              >球面余弦律</a
            >计算的与给定
            <a href="#latlng"><code>LatLng</code></a> 的距离（以米为单位）。
          </p>
        </td>
      </tr>
      <tr id="latlng-wrap">
        <td>
          <code><b>wrap</b>()</code><a data-anchor="latlng-wrap"></a>
        </td>
        <td>
          <code><a href="#latlng">LatLng</a></code>
        </td>
        <td>
          <p>
            返回一个新的
            <a href="#latlng"><code>LatLng</code></a>
            对象，该对象的经纬度被包裹，所以它总是在-180度和+180度之间。
          </p>
        </td>
      </tr>
      <tr id="latlng-tobounds">
        <td>
          <code
            ><b>toBounds</b>(<nobr>&lt;Number&gt;</nobr>
            <i>sizeInMeters</i>)</code
          ><a data-anchor="latlng-tobounds"></a>
        </td>
        <td>
          <code><a href="#latlngbounds">LatLngBounds</a></code>
        </td>
        <td>
          <p>
            返回一个新的
            <a href="#latlngbounds"><code>LatLngBounds</code></a>
            对象，其中每个边界与
            <a href="#latlng"><code>LatLng</code></a> 的距离为<code
              >sizeInMeters/2</code
            >
            米。
          </p>
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
