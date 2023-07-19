<template>
  <div class="accordion expanded">
    <label> 继承自 <a href="#evented">Evented</a> 的方法</label>

    <div class="accordion-overflow">
      <div class="accordion-content">
        <section>
          <table>
            <FunctionReturnSynopsisHeader />

            <tbody>
              <tr id="polyline-on">
                <td>
                  <code
                    ><b>on</b>(<nobr>&lt;String&gt;</nobr> <i>type</i>,
                    <nobr>&lt;Function&gt;</nobr> <i>fn</i>,
                    <nobr>&lt;Object&gt;</nobr> <i>context?</i>)</code
                  ><a data-anchor="polyline-on"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    为对象的特定事件类型添加一个监听函数（<code>fn</code>）。你可以选择性地指定监听器的上下文（这个关键字将指向的对象）。你也可以传递几个空格分隔的类型（例如，<code
                      >'click dblclick'</code
                    >）。
                  </p>
                </td>
              </tr>
              <tr id="polyline-on">
                <td>
                  <code
                    ><b>on</b>(<nobr>&lt;Object&gt;</nobr>
                    <i>eventMap</i>)</code
                  ><a data-anchor="polyline-on"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    添加一组 type/listener，例如
                    <code>{click: onClick, mousemove: onMouseMove}</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-off">
                <td>
                  <code
                    ><b>off</b>(<nobr>&lt;String&gt;</nobr> <i>type</i>,
                    <nobr>&lt;Function&gt;</nobr> <i>fn?</i>,
                    <nobr>&lt;Object&gt;</nobr> <i>context?</i>)</code
                  ><a data-anchor="polyline-off"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    移除一个先前添加的监听器函数。如果没有指定函数，它将从对象中删除该特定事件的所有监听器。请注意，如果您向
                    <code>on</code> 传递了一个自定义的上下文，您必须向
                    <code>off</code> 传递相同的上下文，以便删除监听器。
                  </p>
                </td>
              </tr>
              <tr id="polyline-off">
                <td>
                  <code
                    ><b>off</b>(<nobr>&lt;Object&gt;</nobr>
                    <i>eventMap</i>)</code
                  ><a data-anchor="polyline-off"></a>
                </td>
                <td><code>this</code></td>
                <td><p>删除一组 type/listener</p></td>
              </tr>
              <tr id="polyline-off">
                <td>
                  <code><b>off</b>()</code><a data-anchor="polyline-off"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    移除该对象上所有事件的所有监听器。这包括隐含的附加事件。
                  </p>
                </td>
              </tr>
              <tr id="polyline-fire">
                <td>
                  <code
                    ><b>fire</b>(<nobr>&lt;String&gt;</nobr> <i>type</i>,
                    <nobr>&lt;Object&gt;</nobr> <i>data?</i>,
                    <nobr>&lt;Boolean&gt;</nobr> <i>propagate?</i>)</code
                  ><a data-anchor="polyline-fire"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    触发指定类型的事件。您可以选择提供一个数据对象——侦听器函数的第一个参数将包含其属性，事件可以选择性地传播到事件父级。
                  </p>
                </td>
              </tr>
              <tr id="polyline-listens">
                <td>
                  <code
                    ><b>listens</b>(<nobr>&lt;String&gt;</nobr> <i>type</i>,
                    <nobr>&lt;Boolean&gt;</nobr> <i>propagate?</i>)</code
                  ><a data-anchor="polyline-listens"></a>
                </td>
                <td><code>Boolean</code></td>
                <td>
                  <p>
                    如果一个特定的事件类型有任何监听器连接到它，则返回
                    <code>true</code
                    >。验证可以选择性地被传播，如果父级有监听器连接到它，它将返回<code>true</code>。
                  </p>
                </td>
              </tr>
              <tr id="polyline-once">
                <td>
                  <code><b>once</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-once"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    与<a href="#evented-on"><code>on(...)</code></a
                    >的行为一样，不过监听器只会被触发一次后然后被删除。
                  </p>
                </td>
              </tr>
              <tr id="polyline-addeventparent">
                <td>
                  <code
                    ><b>addEventParent</b>(<nobr
                      >&lt;<a href="#evented">Evented</a>&gt;</nobr
                    >
                    <i>obj</i>)</code
                  ><a data-anchor="polyline-addeventparent"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    向父级 <a href="#evented"><code>Evented</code></a> 添加事件
                  </p>
                </td>
              </tr>
              <tr id="polyline-removeeventparent">
                <td>
                  <code
                    ><b>removeEventParent</b>(<nobr
                      >&lt;<a href="#evented">Evented</a>&gt;</nobr
                    >
                    <i>obj</i>)</code
                  ><a data-anchor="polyline-removeeventparent"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    删除之前向父级
                    <a href="#evented"><code>Evented</code></a> 添加的事件
                  </p>
                </td>
              </tr>
              <tr id="polyline-addeventlistener">
                <td>
                  <code><b>addEventListener</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-addeventlistener"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    同 <a href="#evented-on"><code>on(…)</code></a>
                  </p>
                </td>
              </tr>
              <tr id="polyline-removeeventlistener">
                <td>
                  <code><b>removeEventListener</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-removeeventlistener"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    同 <a href="#evented-off"><code>off(…)</code></a>
                  </p>
                </td>
              </tr>
              <tr id="polyline-clearalleventlisteners">
                <td>
                  <code><b>clearAllEventListeners</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-clearalleventlisteners"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    同 <a href="#evented-off"><code>off()</code></a>
                  </p>
                </td>
              </tr>
              <tr id="polyline-addonetimeeventlistener">
                <td>
                  <code><b>addOneTimeEventListener</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-addonetimeeventlistener"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    同 <a href="#evented-once"><code>once(…)</code></a>
                  </p>
                </td>
              </tr>
              <tr id="polyline-fireevent">
                <td>
                  <code><b>fireEvent</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-fireevent"></a>
                </td>
                <td><code>this</code></td>
                <td>
                  <p>
                    同 <a href="#evented-fire"><code>fire(…)</code></a>
                  </p>
                </td>
              </tr>
              <tr id="polyline-haseventlisteners">
                <td>
                  <code><b>hasEventListeners</b>(<i>…</i>)</code
                  ><a data-anchor="polyline-haseventlisteners"></a>
                </td>
                <td><code>Boolean</code></td>
                <td>
                  <p>
                    同 <a href="#evented-listens"><code>listens(…)</code></a>
                  </p>
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
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>

<style lang="scss" scoped></style>
