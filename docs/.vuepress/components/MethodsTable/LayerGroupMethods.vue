<template>
  <label> 继承自 <a href="#layergroup">LayerGroup</a> 的方法</label>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="geojson-togeojson">
        <td>
          <code
            ><b>toGeoJSON</b>(<nobr>&lt;Number|false&gt;</nobr>
            <i>precision?</i>)</code
          ><a data-anchor="geojson-togeojson"></a>
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
            表示 (作为 GeoJSON <code>FeatureCollection</code>,
            <code>GeometryCollection</code>, 或
            <code>MultiPoint</code> Feature)。
          </p>
        </td>
      </tr>
      <tr id="geojson-addlayer">
        <td>
          <code
            ><b>addLayer</b>(<nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>layer</i>)</code
          ><a data-anchor="geojson-addlayer"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将给定的图层添加到组中。</p></td>
      </tr>
      <tr id="geojson-removelayer">
        <td>
          <code
            ><b>removeLayer</b>(<nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>layer</i>)</code
          ><a data-anchor="geojson-removelayer"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将给定的图层从组中移除。</p></td>
      </tr>
      <tr id="geojson-removelayer">
        <td>
          <code><b>removeLayer</b>(<nobr>&lt;Number&gt;</nobr> <i>id</i>)</code
          ><a data-anchor="geojson-removelayer"></a>
        </td>
        <td><code>this</code></td>
        <td><p>将具有给定内部ID的图层从组中移除。</p></td>
      </tr>
      <tr id="geojson-haslayer">
        <td>
          <code
            ><b>hasLayer</b>(<nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>layer</i>)</code
          ><a data-anchor="geojson-haslayer"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果给定的图层当前被添加到组中，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="geojson-haslayer">
        <td>
          <code><b>hasLayer</b>(<nobr>&lt;Number&gt;</nobr> <i>id</i>)</code
          ><a data-anchor="geojson-haslayer"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <p>如果给定的内部 ID 当前被添加到组中，则返回 <code>true</code> 。</p>
        </td>
      </tr>
      <tr id="geojson-clearlayers">
        <td>
          <code><b>clearLayers</b>()</code
          ><a data-anchor="geojson-clearlayers"></a>
        </td>
        <td><code>this</code></td>
        <td><p>移除组中的所有图层。</p></td>
      </tr>
      <tr id="geojson-invoke">
        <td>
          <code
            ><b>invoke</b>(<nobr>&lt;String&gt;</nobr> <i>methodName</i>,
            <i>…</i>)</code
          ><a data-anchor="geojson-invoke"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            对该组中包含的每个图层调用
            <code>methodName</code> ，并传递任何附加参数。如果包含的图层没有实现
            <code>methodName</code>，则没有效果。
          </p>
        </td>
      </tr>
      <tr id="geojson-eachlayer">
        <td>
          <code
            ><b>eachLayer</b>(<nobr>&lt;Function&gt;</nobr> <i>fn</i>,
            <nobr>&lt;Object&gt;</nobr> <i>context?</i>)</code
          ><a data-anchor="geojson-eachlayer"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>遍历该组的各图层，可以选择指定迭代器函数的上下文。</p>
          <pre><code class="language-js hljs javascript">group.eachLayer(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">layer</span>) </span>{
    layer.bindPopup(<span class="hljs-string">'Hello'</span>);
});
</code></pre>
        </td>
      </tr>
      <tr id="geojson-getlayer">
        <td>
          <code><b>getLayer</b>(<nobr>&lt;Number&gt;</nobr> <i>id</i>)</code
          ><a data-anchor="geojson-getlayer"></a>
        </td>
        <td>
          <code><a href="#layer">Layer</a></code>
        </td>
        <td><p>返回具有给定内部 ID 的图层。</p></td>
      </tr>
      <tr id="geojson-getlayers">
        <td>
          <code><b>getLayers</b>()</code><a data-anchor="geojson-getlayers"></a>
        </td>
        <td><code>Layer[]</code></td>
        <td><p>返回所有添加到组中的图层的数组。</p></td>
      </tr>
      <tr id="geojson-setzindex">
        <td>
          <code
            ><b>setZIndex</b>(<nobr>&lt;Number&gt;</nobr> <i>zIndex</i>)</code
          ><a data-anchor="geojson-setzindex"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            对包含在该组中的每个图层调用 <code>setZIndex</code> ，并传递 z-index
            。
          </p>
        </td>
      </tr>
      <tr id="geojson-getlayerid">
        <td>
          <code
            ><b>getLayerId</b>(<nobr>&lt;<a href="#layer">Layer</a>&gt;</nobr>
            <i>layer</i>)</code
          ><a data-anchor="geojson-getlayerid"></a>
        </td>
        <td><code>Number</code></td>
        <td><p>返回一个图层的内部 ID</p></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// compoonents
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
