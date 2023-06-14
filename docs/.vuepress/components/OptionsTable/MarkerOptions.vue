<template>
  <h2 id="marker-option">Options 选项</h2>

  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="marker-icon">
        <td>
          <code><b>icon</b></code
          ><a data-anchor="marker-icon"></a>
        </td>
        <td>
          <code><a href="#icon">Icon</a></code>
        </td>
        <td><code>*</code></td>
        <td>
          用于渲染标记（marker）的图标实例。有关如何自定义标记（marker）图标的详细信息，请参阅<a
            href="#icon"
          >
            Icon 文档</a
          >。如果未指定，<a href="#icon-default"
            ><code>hnsdk.Icon.Default</code></a
          >
          则使用公共实例。
        </td>
      </tr>
      <tr id="marker-keyboard">
        <td>
          <code><b>keyboard</b></code
          ><a data-anchor="marker-keyboard"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>是否可以用键盘标记并按回车键进行点击。</td>
      </tr>
      <tr id="marker-title">
        <td>
          <code><b>title</b></code
          ><a data-anchor="marker-title"></a>
        </td>
        <td><code>String</code></td>
        <td><code>''</code></td>
        <td>
          悬停在标记（marker）上时出现的浏览器 tooltip
          提示文本内容（默认情况下没有 tooltip 提示）。
          <a
            href="https://leafletjs.com/examples/accessibility/#markers-must-be-labelled"
            >对无障碍环境很有帮助</a
          >。
        </td>
      </tr>
      <tr id="marker-alt">
        <td>
          <code><b>alt</b></code
          ><a data-anchor="marker-alt"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'Marker'</code></td>
        <td>
          Icon图标的 <code>alt</code> 属性提示文本内容。
          <a
            href="https://leafletjs.com/examples/accessibility/#markers-must-be-labelled"
            >对无障碍环境很有帮助</a
          >。
        </td>
      </tr>
      <tr id="marker-zindexoffset">
        <td>
          <code><b>zIndexOffset</b></code
          ><a data-anchor="marker-zindexoffset"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>0</code></td>
        <td>
          默认情况下，标记（marker）图像 zIndex
          是根据其纬度自动设置的。如果您想将标记置于所有其他标记（marker）之上(或之下)，则使用此选项指定一个高值，如
          <code>1000</code>(或高的负值)。
        </td>
      </tr>
      <tr id="marker-opacity">
        <td>
          <code><b>opacity</b></code
          ><a data-anchor="marker-opacity"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>1.0</code></td>
        <td>标记（marker）的不透明度。</td>
      </tr>
      <tr id="marker-riseonhover">
        <td>
          <code><b>riseOnHover</b></code
          ><a data-anchor="marker-riseonhover"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果为
          <code>true</code
          >，当你把鼠标悬停在它上面时，该标记（marker）会在其他标记之上。
        </td>
      </tr>
      <tr id="marker-riseoffset">
        <td>
          <code><b>riseOffset</b></code
          ><a data-anchor="marker-riseoffset"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>250</code></td>
        <td>用于 <code>riseOnHover</code> 功能的 z-index 偏移。</td>
      </tr>
      <tr id="marker-pane">
        <td>
          <code><b>pane</b></code
          ><a data-anchor="marker-pane"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'markerPane'</code></td>
        <td><code>Map pane</code> 将添加标记图标的位置。</td>
      </tr>
      <tr id="marker-shadowpane">
        <td>
          <code><b>shadowPane</b></code
          ><a data-anchor="marker-shadowpane"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'shadowPane'</code></td>
        <td><code>Map pane</code> 将添加标记阴影的位置。</td>
      </tr>
      <tr id="marker-bubblingmouseevents">
        <td>
          <code><b>bubblingMouseEvents</b></code
          ><a data-anchor="marker-bubblingmouseevents"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          当为
          <code>true</code>
          时，此标记上的鼠标事件将触发地图上的相同事件(除非使用
          <a href="#domevent-stoppropagation"
            ><code>hnsdk.DomEvent.stopPropagation</code></a
          >）。
        </td>
      </tr>
      <tr id="marker-autopanonfocus">
        <td>
          <code><b>autoPanOnFocus</b></code
          ><a data-anchor="marker-autopanonfocus"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          When <code>true</code>, the map will pan whenever the marker is
          focused (via e.g. pressing <code>tab</code> on the keyboard) to ensure
          the marker is visible within the map's bounds
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
