<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#interactive-layer">交互层</a>的鼠标事件</label>
    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <thead>
              <tr>
                <th>事件</th>
                <th>数据</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr id="marker-click">
                <td>
                  <code><b>click</b></code
                  ><a data-anchor="marker-click"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当用户 click（或 tap）图层时触发。</td>
              </tr>
              <tr id="marker-dblclick">
                <td>
                  <code><b>dblclick</b></code
                  ><a data-anchor="marker-dblclick"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当用户 double-click（或 double-tap）图层时触发。</td>
              </tr>
              <tr id="marker-mousedown">
                <td>
                  <code><b>mousedown</b></code
                  ><a data-anchor="marker-mousedown"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当用户在图层上按下鼠标按钮时触发。</td>
              </tr>
              <tr id="marker-mouseup">
                <td>
                  <code><b>mouseup</b></code
                  ><a data-anchor="marker-mouseup"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当用户释放在图层上按下的鼠标按钮时触发。</td>
              </tr>
              <tr id="marker-mouseover">
                <td>
                  <code><b>mouseover</b></code
                  ><a data-anchor="marker-mouseover"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当鼠标进入图层时触发。</td>
              </tr>
              <tr id="marker-mouseout">
                <td>
                  <code><b>mouseout</b></code
                  ><a data-anchor="marker-mouseout"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>当鼠标离开图层时触发。</td>
              </tr>
              <tr id="marker-contextmenu">
                <td>
                  <code><b>contextmenu</b></code
                  ><a data-anchor="marker-contextmenu"></a>
                </td>
                <td>
                  <code><a href="#mouseevent">MouseEvent</a></code>
                </td>
                <td>
                  当用户在图层上点击右键时触发，如果此事件有监听者，则阻止默认的浏览器上下文菜单显示。在移动设备上，当用户长按时，也会在手机上触发。
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
</script>

<style lang="scss" scoped></style>
