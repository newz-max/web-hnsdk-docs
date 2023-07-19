<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#featuregroup">FeatureGroup</a> 的事件</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <EventDataSynopsisHeader />

            <tbody>
              <tr id="geojson-layeradd">
                <td>
                  <code><b>layeradd</b></code
                  ><a data-anchor="geojson-layeradd"></a>
                </td>
                <td>
                  <code><a href="#layerevent">LayerEvent</a></code>
                </td>
                <td>
                  当一个图层被添加到该
                  <a href="#featuregroup"><code>FeatureGroup</code></a> 时触发。
                </td>
              </tr>
              <tr id="geojson-layerremove">
                <td>
                  <code><b>layerremove</b></code
                  ><a data-anchor="geojson-layerremove"></a>
                </td>
                <td>
                  <code><a href="#layerevent">LayerEvent</a></code>
                </td>
                <td>
                  当一个图层被从该
                  <a href="#featuregroup"><code>FeatureGroup</code></a
                  >中移除时触发。
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
import EventDataSynopsisHeader from "../CommonTable/EventDataSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
