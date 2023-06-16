<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#layer">Layer 图层</a> 的事件</label>
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <EventDataSynopsisHeader />

            <tbody>
              <tr id="marker-add">
                <td>
                  <code><b>add</b></code
                  ><a data-anchor="marker-add"></a>
                </td>
                <td>
                  <code><a href="#event">Event</a></code>
                </td>
                <td>在图层添加到地图后触发</td>
              </tr>
              <tr id="marker-remove">
                <td>
                  <code><b>remove</b></code
                  ><a data-anchor="marker-remove"></a>
                </td>
                <td>
                  <code><a href="#event">Event</a></code>
                </td>
                <td>从地图中移除图层后触发</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventDataSynopsisHeader from "../CommonTable/EventDataSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
