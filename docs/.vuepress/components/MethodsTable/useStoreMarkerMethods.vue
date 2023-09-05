<template>
  <div class="accordion expanded">
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="polyline-bindtooltip">
                <td>
                  add(<code><a href="#latlng">LatLng</a></code
                  >)
                </td>
                <td>
                  <code
                    ><a href="#RuntimeMarkerStoreItem"
                      >RuntimeMarkerStoreItem</a
                    ></code
                  >
                </td>
                <td>返回一个对象，包含三个属性：iconUrl、latlng、marker</td>
              </tr>

              <tr id="polyline-bindtooltip">
                <td>
                  del(<code><a href="#Marker">Marker</a></code
                  >)
                </td>
                <td>
                  <code>void</code>
                </td>
                <td>删除传入的 marker ，会同步更新本地的存储结果</td>
              </tr>

              <tr id="polyline-bindtooltip">
                <td>getMarkers()</td>
                <td>
                  <code
                    ><a href="#RuntimeMarkerStoreItem">RuntimeMarkerStoreItem</a
                    >[]</code
                  >
                </td>
                <td>函数返回一个包含所有标记的数组</td>
              </tr>

              <tr id="polyline-bindtooltip">
                <td>
                  update(<code><a href="#Marker">Marker</a></code
                  >, <code><a href="#LatLng">LatLng</a></code
                  >)
                </td>
                <td>
                  <code
                    ><a href="#RuntimeMarkerStoreItem"
                      >RuntimeMarkerStoreItem</a
                    >
                    | undefined</code
                  >
                </td>
                <td>更新marker的经纬度</td>
              </tr>

              <tr id="polyline-bindtooltip">
                <td>allUpdate()</td>
                <td>void</td>
                <td>
                  处理一些边界情况，主动更新所有的物标并全部添加到地图上，之前创建的物标会被销毁，加载在地图上的将会是新的
                  marker 实例
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
// components
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
