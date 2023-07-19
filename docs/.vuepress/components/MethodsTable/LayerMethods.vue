<template>
  <div class="accordion expanded">
    <label>继承自 <a href="#layer">Layer 图层</a>的方法</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="polyline-addto">
                <td>
                  <code
                    ><b>addTo</b>(<nobr>&lt;Map|LayerGroup&gt;</nobr>
                    <i>map</i>)</code
                  ><a data-anchor="polyline-addto"></a>
                </td>
                <td><code>this</code></td>
                <td><p>将图层添加到指定的地图或图层组（LayerGroup）。</p></td>
              </tr>
              <tr id="polyline-remove">
                <td>
                  <code><b>remove</b>()</code
                  ><a data-anchor="polyline-remove"></a>
                </td>
                <td><code>this</code></td>
                <td><p>从当前处于活动状态的地图中删除图层。</p></td>
              </tr>
              <tr id="polyline-removefrom">
                <td>
                  <code
                    ><b>removeFrom</b>(<nobr
                      >&lt;<a href="#map">Map</a>&gt;</nobr
                    >
                    <i>map</i>)</code
                  ><a data-anchor="polyline-removefrom"></a>
                </td>
                <td><code>this</code></td>
                <td><p>从指定的地图中删除图层</p></td>
              </tr>
              <tr id="polyline-removefrom">
                <td>
                  <code
                    ><b>removeFrom</b>(<nobr
                      >&lt;<a href="#layergroup">LayerGroup</a>&gt;</nobr
                    >
                    <i>group</i>)</code
                  ><a data-anchor="polyline-removefrom"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    从指定的
                    <a href="#layergroup"><code>LayerGroup</code></a>
                    中删除该图层。
                  </p>
                </td>
              </tr>
              <tr id="polyline-getpane">
                <td>
                  <code
                    ><b>getPane</b>(<nobr>&lt;String&gt;</nobr>
                    <i>name?</i>)</code
                  ><a data-anchor="polyline-getpane"></a>
                </td>
                <td><code>HTMLElement</code></td>
                <td>
                  <p>
                    返回代表地图上指定窗格的 <code>HTMLElement</code>。如果
                    <code>name</code> 被省略，则返回该层的窗格。
                  </p>
                </td>
              </tr>
              <tr id="polyline-getattribution">
                <td>
                  <code><b>getAttribution</b>()</code
                  ><a data-anchor="polyline-getattribution"></a>
                </td>
                <td><code>String</code></td>
                <td>
                  <p>
                    由 <code>attribution 控件</code>使用，返回
                    <a href="#gridlayer-attribution">attribution 选项</a>。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
// components
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
