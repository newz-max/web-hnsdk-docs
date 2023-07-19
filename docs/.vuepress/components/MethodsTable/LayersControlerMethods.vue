<template>
  <div class="accordion expanded">
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="control-layers-addbaselayer">
                <td>
                  <code
                    ><b>addBaseLayer</b>(<nobr
                      >&lt;<a href="#layer">Layer</a>&gt;</nobr
                    >
                    <i>layer</i>, <nobr>&lt;String&gt;</nobr> <i>name</i>)</code
                  ><a data-anchor="control-layers-addbaselayer"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    在控件中添加一个具有给定名称的基础图层（单选按钮条目）。
                  </p>
                </td>
              </tr>
              <tr id="control-layers-addoverlay">
                <td>
                  <code
                    ><b>addOverlay</b>(<nobr
                      >&lt;<a href="#layer">Layer</a>&gt;</nobr
                    >
                    <i>layer</i>, <nobr>&lt;String&gt;</nobr> <i>name</i>)</code
                  ><a data-anchor="control-layers-addoverlay"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>在控件中添加一个具有给定名称的覆盖物（复选框条目）。</p>
                </td>
              </tr>
              <tr id="control-layers-removelayer">
                <td>
                  <code
                    ><b>removeLayer</b>(<nobr
                      >&lt;<a href="#layer">Layer</a>&gt;</nobr
                    >
                    <i>layer</i>)</code
                  ><a data-anchor="control-layers-removelayer"></a>
                </td>
                <td><code>this</code></td>
                <td><p>从控件中移除给定的图层。</p></td>
              </tr>
              <tr id="control-layers-expand">
                <td>
                  <code><b>expand</b>()</code
                  ><a data-anchor="control-layers-expand"></a>
                </td>
                <td><code>this</code></td>
                <td><p>如果是折叠的，则展开控制容器。</p></td>
              </tr>
              <tr id="control-layers-collapse">
                <td>
                  <code><b>collapse</b>()</code
                  ><a data-anchor="control-layers-collapse"></a>
                </td>
                <td><code>this</code></td>
                <td><p>如果展开，则折叠控制容器。</p></td>
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
