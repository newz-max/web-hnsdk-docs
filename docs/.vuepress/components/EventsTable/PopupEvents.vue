<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#layer">Layer</a> 的弹出（Popup）事件</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <EventDataSynopsisHeader />

            <tbody>
              <tr id="polyline-popupopen">
                <td>
                  <code><b>popupopen</b></code
                  ><a data-anchor="polyline-popupopen"></a>
                </td>
                <td>
                  <code><a href="#popupevent">PopupEvent</a></code>
                </td>
                <td>当绑定到该层的 popup 打开时触发</td>
              </tr>
              <tr id="polyline-popupclose">
                <td>
                  <code><b>popupclose</b></code
                  ><a data-anchor="polyline-popupclose"></a>
                </td>
                <td>
                  <code><a href="#popupevent">PopupEvent</a></code>
                </td>
                <td>当绑定到该层的 popup 关闭时触发</td>
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
import x from "../CommonTable/EventDataSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
