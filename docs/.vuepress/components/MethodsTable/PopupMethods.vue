<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#layer">Layer 图层</a>的 Popup 方法</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="polyline-bindpopup">
                <td>
                  <code
                    ><b>bindPopup</b>(<nobr
                      >&lt;String|HTMLElement|Function|Popup&gt;</nobr
                    >
                    <i>content</i>,
                    <nobr
                      >&lt;<a href="#popup-option">Popup options</a>&gt;</nobr
                    >
                    <i>options?</i>)</code
                  ><a data-anchor="polyline-bindpopup"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    将一个弹出式窗口与传入的
                    <code>content</code> 层绑定，并设置必要的事件监听器。如果
                    <code>Function</code>
                    被传递，它将接收图层作为第一个参数，并应返回
                    <code>String</code> 或 <code>HTMLElement</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-unbindpopup">
                <td>
                  <code><b>unbindPopup</b>()</code
                  ><a data-anchor="polyline-unbindpopup"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  移除之前用 <code>bindPopup</code> 绑定的弹出窗口。
                  <p></p>
                </td>
              </tr>
              <tr id="polyline-openpopup">
                <td>
                  <code
                    ><b>openPopup</b>(<nobr
                      >&lt;<a href="#latlng">LatLng</a>&gt;</nobr
                    >
                    <i>latlng?</i>)</code
                  ><a data-anchor="polyline-openpopup"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    在指定的
                    <code>latlng</code> 处打开绑定的弹出窗口，如果没有设置
                    <code>latlng</code>，则在默认的位置打开弹窗（popup）。
                  </p>
                </td>
              </tr>
              <tr id="polyline-closepopup">
                <td>
                  <code><b>closePopup</b>()</code
                  ><a data-anchor="polyline-closepopup"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    如果与当前图层绑定的弹窗（popup）时打开的，则关闭当前弹窗。
                  </p>
                </td>
              </tr>
              <tr id="polyline-togglepopup">
                <td>
                  <code><b>togglePopup</b>()</code
                  ><a data-anchor="polyline-togglepopup"></a>
                </td>
                <td><code>this</code></td>
                <td><p>根据当前状态，打开或关闭与该层绑定的弹出窗口。</p></td>
              </tr>
              <tr id="polyline-ispopupopen">
                <td>
                  <code><b>isPopupOpen</b>()</code
                  ><a data-anchor="polyline-ispopupopen"></a>
                </td>
                <td><code>boolean</code></td>
                <td>
                  <p>
                    如果与该层绑定的弹出窗口当前已打开，则返回
                    <code>true</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-setpopupcontent">
                <td>
                  <code
                    ><b>setPopupContent</b>(<nobr
                      >&lt;String|HTMLElement|Popup&gt;</nobr
                    >
                    <i>content</i>)</code
                  ><a data-anchor="polyline-setpopupcontent"></a>
                </td>
                <td><code>this</code></td>
                <td><p>设置绑定到该图层的弹出窗口的内容。</p></td>
              </tr>
              <tr id="polyline-getpopup">
                <td>
                  <code><b>getPopup</b>()</code
                  ><a data-anchor="polyline-getpopup"></a>
                </td>
                <td>
                  <code><a href="#popup">Popup</a></code>
                </td>
                <td><p>返回绑定到该图层的弹出窗口。</p></td>
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
