<template>
  <div class="accordion expanded">
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="control-layers-getposition">
                <td>
                  <code><b>getPosition</b>()</code
                  ><a data-anchor="control-layers-getposition"></a>
                </td>
                <td><code>string</code></td>
                <td><p>返回控件的位置。</p></td>
              </tr>
              <tr id="control-layers-setposition">
                <td>
                  <code
                    ><b>setPosition</b>(<nobr>&lt;string&gt;</nobr>
                    <i>position</i>)</code
                  ><a data-anchor="control-layers-setposition"></a>
                </td>
                <td><code>this</code></td>
                <td><p>设置控件的位置。</p></td>
              </tr>
              <tr id="control-layers-getcontainer">
                <td>
                  <code><b>getContainer</b>()</code
                  ><a data-anchor="control-layers-getcontainer"></a>
                </td>
                <td><code>HTMLElement</code></td>
                <td><p>返回包含该控件的 HTMLElement。</p></td>
              </tr>
              <tr id="control-layers-addto">
                <td>
                  <code
                    ><b>addTo</b>(<nobr>&lt;<a href="#map">Map</a>&gt;</nobr>
                    <i>map</i>)</code
                  ><a data-anchor="control-layers-addto"></a>
                </td>
                <td><code>this</code></td>
                <td><p>将控件添加到给定的地图中。</p></td>
              </tr>
              <tr id="control-layers-remove">
                <td>
                  <code><b>remove</b>()</code
                  ><a data-anchor="control-layers-remove"></a>
                </td>
                <td><code>this</code></td>
                <td><p>将控件从当前活动的地图上删除。</p></td>
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
