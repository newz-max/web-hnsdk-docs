<template>
  <h2 id="popup-option">Options 选项</h2>

  <table>
    <OptionsTypeDefaultValueSynopsisHeader />
    <tbody>
      <tr id="popup-pane">
        <td>
          <code><b>pane</b></code
          ><a data-anchor="popup-pane"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'popupPane'</code></td>
        <td><code>Map pane</code> where the popup will be added.</td>
      </tr>
      <tr id="popup-offset">
        <td>
          <code><b>offset</b></code
          ><a data-anchor="popup-offset"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><code>Point(0, 7)</code></td>
        <td>The offset of the popup position.</td>
      </tr>
      <tr id="popup-maxwidth">
        <td>
          <code><b>maxWidth</b></code
          ><a data-anchor="popup-maxwidth"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>300</code></td>
        <td>Popup 的最大宽度，以像素为单位。</td>
      </tr>
      <tr id="popup-minwidth">
        <td>
          <code><b>minWidth</b></code
          ><a data-anchor="popup-minwidth"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>50</code></td>
        <td>Popup 的最小宽度，以像素为单位。</td>
      </tr>
      <tr id="popup-maxheight">
        <td>
          <code><b>maxHeight</b></code
          ><a data-anchor="popup-maxheight"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>null</code></td>
        <td>
          设置后，如果其内容超过它，则在 Popup 内创建给定高度的可滚动容器。
        </td>
      </tr>
      <tr id="popup-autopan">
        <td>
          <code><b>autoPan</b></code
          ><a data-anchor="popup-autopan"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          如果你不想让地图做平移动画，把它设置为
          <code>false</code>，以适应打开的 Popup。
        </td>
      </tr>
      <tr id="popup-autopanpaddingtopleft">
        <td>
          <code><b>autoPanPaddingTopLeft</b></code
          ><a data-anchor="popup-autopanpaddingtopleft"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><code>null</code></td>
        <td>自动平移后，Popup 与地图左上角之间的边距。</td>
      </tr>
      <tr id="popup-autopanpaddingbottomright">
        <td>
          <code><b>autoPanPaddingBottomRight</b></code
          ><a data-anchor="popup-autopanpaddingbottomright"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><code>null</code></td>
        <td>自动平移后，Popup 与地图右下角之间的边距。</td>
      </tr>
      <tr id="popup-autopanpadding">
        <td>
          <code><b>autoPanPadding</b></code
          ><a data-anchor="popup-autopanpadding"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><code>Point(5, 5)</code></td>
        <td>相当于将左上角和右下角自动平移填充设置为相同的值。</td>
      </tr>
      <tr id="popup-keepinview">
        <td>
          <code><b>keepInView</b></code
          ><a data-anchor="popup-keepinview"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果您想防止用户在弹出窗口（popup）打开时将其移出屏幕，请将其设置为<code>true</code>。
        </td>
      </tr>
      <tr id="popup-closebutton">
        <td>
          <code><b>closeButton</b></code
          ><a data-anchor="popup-closebutton"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>控制弹出窗口中是否有关闭按钮。</td>
      </tr>
      <tr id="popup-autoclose">
        <td>
          <code><b>autoClose</b></code
          ><a data-anchor="popup-autoclose"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          如果您想重写在打开另一个弹出框时关闭弹出框的默认行为,请将其设置为
          <code>false</code>。
        </td>
      </tr>
      <tr id="popup-closeonescapekey">
        <td>
          <code><b>closeOnEscapeKey</b></code
          ><a data-anchor="popup-closeonescapekey"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          如果你想覆盖 ESC 键关闭弹出窗口 (popup) 的默认行为，将其设置为
          <code>false</code>。
        </td>
      </tr>
      <tr id="popup-closeonclick">
        <td>
          <code><b>closeOnClick</b></code
          ><a data-anchor="popup-closeonclick"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>*</code></td>
        <td>
          如果您想覆盖用户点击地图时关闭弹出窗口的默认行为，请设置它。默认为地图
          <a href="#map-closepopuponclick"><code>closePopupOnClick</code></a>
          选项。
        </td>
      </tr>
      <tr id="popup-classname">
        <td>
          <code><b>className</b></code
          ><a data-anchor="popup-classname"></a>
        </td>
        <td><code>String</code></td>
        <td><code>''</code></td>
        <td>为弹出窗口（popup）设置自定义 CSS 类名称。</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
