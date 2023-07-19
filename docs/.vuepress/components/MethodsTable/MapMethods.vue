<template>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="map-addhandler">
        <td>
          <code
            ><b>addHandler</b>(<nobr>&lt;String&gt;</nobr> <i>name</i>,
            <nobr>&lt;Function&gt;</nobr> <i>HandlerClass</i>)</code
          ><a data-anchor="map-addhandler"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            给定其名称和构造函数，将新的
            <a href="#handler"><code>Handler</code></a> 添加到地图。
          </p>
        </td>
      </tr>
      <tr id="map-remove">
        <td>
          <code><b>remove</b>()</code><a data-anchor="map-remove"></a>
        </td>
        <td><code>this</code></td>
        <td><p>销毁地图并清除所有相关的事件侦听器。</p></td>
      </tr>
      <tr id="map-createpane">
        <td>
          <code
            ><b>createPane</b>(<nobr>&lt;String&gt;</nobr> <i>name</i>,
            <nobr>&lt;HTMLElement&gt;</nobr> <i>container?</i>)</code
          ><a data-anchor="map-createpane"></a>
        </td>
        <td><code>HTMLElement</code></td>
        <td>
          <p>
            如果给定名称不存在，则创建一个新的<a href="#map-pane">map pane</a
            >，然后将其返回。
            该窗格被创建为容器的子级，或者被创建为主地图窗格的子级（如果未设置）。
          </p>
        </td>
      </tr>
      <tr id="map-getpane">
        <td>
          <code
            ><b>getPane</b>(<nobr>&lt;String|HTMLElement&gt;</nobr>
            <i>pane</i>)</code
          ><a data-anchor="map-getpane"></a>
        </td>
        <td><code>HTMLElement</code></td>
        <td>
          <p>
            返回一个地图窗口 <a href="#map-pane">map pane</a>，给它一个名称或者
            HTML 的节点。
          </p>
        </td>
      </tr>
      <tr id="map-getpanes">
        <td>
          <code><b>getPanes</b>()</code><a data-anchor="map-getpanes"></a>
        </td>
        <td><code>Object</code></td>
        <td>
          <p>
            返回一个普通对象，其中包含所有窗格的名称为键，并将窗格
            <a href="#map-pane">panes</a> 作为值。
          </p>
        </td>
      </tr>
      <tr id="map-getcontainer">
        <td>
          <code><b>getContainer</b>()</code
          ><a data-anchor="map-getcontainer"></a>
        </td>
        <td><code>HTMLElement</code></td>
        <td><p>返回一个包含地图的 HTML 节点。</p></td>
      </tr>
      <tr id="map-whenready">
        <td>
          <code
            ><b>whenReady</b>(<nobr>&lt;Function&gt;</nobr> <i>fn</i>,
            <nobr>&lt;Object&gt;</nobr> <i>context?</i>)</code
          ><a data-anchor="map-whenready"></a>
        </td>
        <td><code>this</code></td>
        <td>
          <p>
            当地图使用视图（中心和缩放）和至少一层初始化时，或者如果已经初始化，则立即运行给定的函数
            fn（如果已初始化）（可选地传递函数上下文）。
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

<style lang="scss" scoped></style>
