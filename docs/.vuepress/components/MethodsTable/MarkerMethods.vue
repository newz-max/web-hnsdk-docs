<template>
  <section>
    <div class="section-comments">
      除了<a href="#layer">共享层方法</a>，如
      <code>addTo()</code>、<code>remove()</code>、类似 bindPopup() 的
      <a href="#popup">popup 方法</a>之外，你还可以使用以下方法：
    </div>

    <table>
      <thead>
        <tr>
          <th>方法</th>
          <th>返回值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr id="marker-getlatlng">
          <td>
            <code><b>getLatLng</b>()</code
            ><a data-anchor="marker-getlatlng"></a>
          </td>
          <td>
            <code><a href="#latlng">LatLng</a></code>
          </td>
          <td><p>返回标记的当前地理位置。</p></td>
        </tr>
        <tr id="marker-setlatlng">
          <td>
            <code
              ><b>setLatLng</b>(<nobr
                >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
              >
              <i>latlng</i>)</code
            ><a data-anchor="marker-setlatlng"></a>
          </td>
          <td><code>this</code></td>
          <td><p>将标记位置更改为指定坐标。</p></td>
        </tr>
        <tr id="marker-setzindexoffset">
          <td>
            <code
              ><b>setZIndexOffset</b>(<nobr>&lt;Number&gt;</nobr>
              <i>offset</i>)</code
            ><a data-anchor="marker-setzindexoffset"></a>
          </td>
          <td><code>this</code></td>
          <td>
            <p>
              更改标记的 <a href="#marker-zindexoffset">zIndex 偏移量</a> 。
            </p>
          </td>
        </tr>
        <tr id="marker-geticon">
          <td>
            <code><b>getIcon</b>()</code><a data-anchor="marker-geticon"></a>
          </td>
          <td>
            <code><a href="#icon">Icon</a></code>
          </td>
          <td><p>返回标记使用的当前图标</p></td>
        </tr>
        <tr id="marker-seticon">
          <td>
            <code
              ><b>setIcon</b>(<nobr>&lt;<a href="#icon">Icon</a>&gt;</nobr>
              <i>icon</i>)</code
            ><a data-anchor="marker-seticon"></a>
          </td>
          <td><code>this</code></td>
          <td><p>更改标记图标。</p></td>
        </tr>
        <tr id="marker-setopacity">
          <td>
            <code
              ><b>setOpacity</b>(<nobr>&lt;Number&gt;</nobr>
              <i>opacity</i>)</code
            ><a data-anchor="marker-setopacity"></a>
          </td>
          <td><code>this</code></td>
          <td><p>更改标记的透明度。</p></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped></style>
