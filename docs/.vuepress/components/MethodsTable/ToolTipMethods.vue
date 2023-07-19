<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#layer">Layer 图层</a>的 Tooltip 方法</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="polyline-bindtooltip">
                <td>
                  <code
                    ><b>bindTooltip</b>(<nobr
                      >&lt;String|HTMLElement|Function|Tooltip&gt;</nobr
                    >
                    <i>content</i>,
                    <nobr
                      >&lt;<a href="#tooltip-option">Tooltip options</a
                      >&gt;</nobr
                    >
                    <i>options?</i>)</code
                  ><a data-anchor="polyline-bindtooltip"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    将工具提示（tooltip）绑定到传入的图层
                    <code>content</code> 并设置必要的事件侦听器。如果一个
                    <code>Function</code>
                    被传递，它将接收图层作为第一个参数，并应返回
                    <code>String</code> 或 <code>HTMLElement</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-unbindtooltip">
                <td>
                  <code><b>unbindTooltip</b>()</code
                  ><a data-anchor="polyline-unbindtooltip"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    移除之前用
                    <code>bindTooltip</code> 绑定的工具提示（tooltip）。
                  </p>
                </td>
              </tr>
              <tr id="polyline-opentooltip">
                <td>
                  <code
                    ><b>openTooltip</b>(<nobr
                      >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
                    >
                    <i>latlng?</i>)</code
                  ><a data-anchor="polyline-opentooltip"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    在指定的
                    <code>latlng</code>
                    处打开绑定的工具提示（tooltip），如果没有指定
                    <code>latlng</code>，则在默认的锚点打开工具提示（tooltip）。
                  </p>
                </td>
              </tr>
              <tr id="polyline-closetooltip">
                <td>
                  <code><b>closeTooltip</b>()</code
                  ><a data-anchor="polyline-closetooltip"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>如果该图层处于打开状态，则关闭绑定到该图层的工具提示。</p>
                </td>
              </tr>
              <tr id="polyline-toggletooltip">
                <td>
                  <code><b>toggleTooltip</b>()</code
                  ><a data-anchor="polyline-toggletooltip"></a>
                </td>
                <td><code>this</code></td>
                <td><p>根据当前状态打开或关闭绑定到该图层的工具提示。</p></td>
              </tr>
              <tr id="polyline-istooltipopen">
                <td>
                  <code><b>isTooltipOpen</b>()</code
                  ><a data-anchor="polyline-istooltipopen"></a>
                </td>
                <td><code>boolean</code></td>
                <td>
                  <p>
                    如果该层绑定的工具提示当前已打开，则返回 <code>true</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-settooltipcontent">
                <td>
                  <code
                    ><b>setTooltipContent</b>(<nobr
                      >&lt;String|HTMLElement|Tooltip&gt;</nobr
                    >
                    <i>content</i>)</code
                  ><a data-anchor="polyline-settooltipcontent"></a>
                </td>
                <td><code>this</code></td>
                <td><p>设置绑定到该层的工具提示的内容。</p></td>
              </tr>
              <tr id="polyline-gettooltip">
                <td>
                  <code><b>getTooltip</b>()</code
                  ><a data-anchor="polyline-gettooltip"></a>
                </td>
                <td>
                  <code><a href="#tooltip">Tooltip</a></code>
                </td>
                <td><p>返回绑定到该层的工具提示。</p></td>
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
