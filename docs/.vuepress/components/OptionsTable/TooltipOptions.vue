<template>
  <h2 id="tooltip-option">Options 选项</h2>

  <table>
    <OptionsTypeDefaultValueSynopsisHeader />
    <tbody>
      <tr id="tooltip-pane">
        <td>
          <code><b>pane</b></code
          ><a data-anchor="tooltip-pane"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'tooltipPane'</code></td>
        <td><code>地图窗格</code>将添加 Tooltip 的位置。</td>
      </tr>
      <tr id="tooltip-offset">
        <td>
          <code><b>offset</b></code
          ><a data-anchor="tooltip-offset"></a>
        </td>
        <td>
          <code><a href="#point">Point</a></code>
        </td>
        <td><code>Point(0, 0)</code></td>
        <td>Tooltip 位置的可选偏移。</td>
      </tr>
      <tr id="tooltip-direction">
        <td>
          <code><b>direction</b></code
          ><a data-anchor="tooltip-direction"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'auto'</code></td>
        <td>
          打开 Tooltip
          的方向。可能的值有：<code>right</code>、<code>left</code>、
          <code>top</code
          >、<code>bottom</code>、<code>center</code>、<code>auto</code>。
          <code>auto</code> 将之间进行动态切换 <code>right</code> 和
          <code>left</code> 根据地图上的工具提示位置。
        </td>
      </tr>
      <tr id="tooltip-permanent">
        <td>
          <code><b>permanent</b></code
          ><a data-anchor="tooltip-permanent"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>是永久打开 Tooltip 还是只在鼠标移动时打开。</td>
      </tr>
      <tr id="tooltip-sticky">
        <td>
          <code><b>sticky</b></code
          ><a data-anchor="tooltip-sticky"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>如果为 true，Tooltip 将跟随鼠标移动，而不是固定在特征中心。</td>
      </tr>
      <tr id="tooltip-opacity">
        <td>
          <code><b>opacity</b></code
          ><a data-anchor="tooltip-opacity"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>0.9</code></td>
        <td>Tooltip 容器透明度。</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import OptionsTypeDefaultValueSynopsisHeader from "../CommonTable/OptionsTypeDefaultValueSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
