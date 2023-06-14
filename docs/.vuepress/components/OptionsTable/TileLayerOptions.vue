<template>
  <h2 id="tilelayer-option">Options 选项</h2>

  <table>
    <OptionsTypeDefaultValueSynopsisHeader />

    <tbody>
      <tr id="tilelayer-minzoom">
        <td>
          <code><b>minZoom</b></code
          ><a data-anchor="tilelayer-minzoom"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>0</code></td>
        <td>此图层将显示的最小缩放级别（包括最小）</td>
      </tr>
      <tr id="tilelayer-maxzoom">
        <td>
          <code><b>maxZoom</b></code
          ><a data-anchor="tilelayer-maxzoom"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>18</code></td>
        <td>此图层将显示的最大缩放级别（包括最大）</td>
      </tr>
      <tr id="tilelayer-subdomains">
        <td>
          <code><b>subdomains</b></code
          ><a data-anchor="tilelayer-subdomains"></a>
        </td>
        <td><code>String|String[]</code></td>
        <td><code>'abc'</code></td>
        <td>
          瓦片服务的子域。
          可以以一个字符串（其中每个字母是一个子域名）或字符串数组的形式传递。
        </td>
      </tr>
      <tr id="tilelayer-errortileurl">
        <td>
          <code><b>errorTileUrl</b></code
          ><a data-anchor="tilelayer-errortileurl"></a>
        </td>
        <td><code>String</code></td>
        <td><code>''</code></td>
        <td>显示瓦片图像的 URL，以代替加载失败的瓦片。</td>
      </tr>
      <tr id="tilelayer-zoomoffset">
        <td>
          <code><b>zoomOffset</b></code
          ><a data-anchor="tilelayer-zoomoffset"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>0</code></td>
        <td>平铺 URL 中使用的缩放数字将与此值发生偏移。</td>
      </tr>
      <tr id="tilelayer-tms">
        <td>
          <code><b>tms</b></code
          ><a data-anchor="tilelayer-tms"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果为 <code>true</code>，则反转瓦片的 Y 轴编号 (为
          <a href="https://en.wikipedia.org/wiki/Tile_Map_Service">TMS</a>
          服务启用此选项)。
        </td>
      </tr>
      <tr id="tilelayer-zoomreverse">
        <td>
          <code><b>zoomReverse</b></code
          ><a data-anchor="tilelayer-zoomreverse"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果设置为 true，则图块 URL 中使用的缩放数字将被反转 (<code
            >maxZoom - zoom</code
          >
          而不是 <code>zoom</code>)
        </td>
      </tr>
      <tr id="tilelayer-detectretina">
        <td>
          <code><b>detectRetina</b></code
          ><a data-anchor="tilelayer-detectretina"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>
          如果
          <code>true</code>
          并且用户在视网膜显示器上，它将请求四个指定大小一半的瓦片和更大的缩放级别，以使用高分辨率。
        </td>
      </tr>
      <tr id="tilelayer-crossorigin">
        <td>
          <code><b>crossOrigin</b></code
          ><a data-anchor="tilelayer-crossorigin"></a>
        </td>
        <td><code>Boolean|String</code></td>
        <td><code>false</code></td>
        <td>
          是否将 crossOrigin 属性添加到瓦片中。 如果提供了字符串，则所有瓦片的
          crossOrigin 属性都将设置为提供的字符串。
          如果您想访问平铺像素数据，则需要这样做。 有关有效的字符串值，请参阅
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"
            >CORS 设置</a
          >。
        </td>
      </tr>
      <tr id="tilelayer-referrerpolicy">
        <td>
          <code><b>referrerPolicy</b></code
          ><a data-anchor="tilelayer-referrerpolicy"></a>
        </td>
        <td><code>Boolean|String</code></td>
        <td><code>false</code></td>
        <td>
          是否将referrerPolicy
          属性添加到图块中。如果提供了字符串，则所有图块都将其 referrerPolicy
          属性设置为提供的字符串。如果您的地图的渲染上下文具有严格的默认值，但您的图块提供者需要有效的引用者，则可能需要这样做（例如，验证
          API 令牌）。 请参考
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy"
            >HTMLImageElement.referrerPolicy</a
          >
          了解有效的字符串值。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
