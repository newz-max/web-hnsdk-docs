<template>
  <div class="accordion expanded">
    <label>
      继承自 <a href="#layer">Layer 图层</a>的工具提示（Tooltip）事件</label
    >
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <EventDataSynopsisHeader />

            <tbody>
              <tr id="polyline-tooltipopen">
                <td>
                  <code><b>tooltipopen</b></code
                  ><a data-anchor="polyline-tooltipopen"></a>
                </td>
                <td>
                  <code><a href="#tooltipevent">TooltipEvent</a></code>
                </td>
                <td>当绑定到该层的 tooltip 打开时触发。</td>
              </tr>
              <tr id="polyline-tooltipclose">
                <td>
                  <code><b>tooltipclose</b></code
                  ><a data-anchor="polyline-tooltipclose"></a>
                </td>
                <td>
                  <code><a href="#tooltipevent">TooltipEvent</a></code>
                </td>
                <td>当绑定到该层的 tooltip 关闭时触发。</td>
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
import EventDataSynopsisHeader from "../CommonTable/EventDataSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
