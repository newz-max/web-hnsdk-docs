<template>
  <h2 id="Function">Function</h2>
  <table>
    <FunctionReturnSynopsisHeader />

    <tbody>
      <tr id="util-extend">
        <td>
          <code
            ><b>extend</b>(<nobr>&lt;Object&gt;</nobr> <i>dest</i>,
            <nobr>&lt;Object&gt;</nobr> <i>src?</i>)</code
          ><a data-anchor="util-extend"></a>
        </td>
        <td><code>Object</code></td>
        <td>
          将 <code>src</code> 对象（或多个对象）的属性合并到
          <code>dest</code> 对象中并返回后者。有一个
          <code>hnsdk.extend</code> 的快捷方式。
        </td>
      </tr>
      <tr id="util-create">
        <td>
          <code
            ><b>create</b>(<nobr>&lt;Object&gt;</nobr> <i>proto</i>,
            <nobr>&lt;Object&gt;</nobr> <i>properties?</i>)</code
          ><a data-anchor="util-create"></a>
        </td>
        <td><code>Object</code></td>
        <td>
          对
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
            >Object.create</a
          >
          的兼容性 polyfill
        </td>
      </tr>
      <tr id="util-bind">
        <td>
          <code
            ><b>bind</b>(<nobr>&lt;Function&gt;</nobr> <i>fn</i>,
            <i>…</i>)</code
          ><a data-anchor="util-bind"></a>
        </td>
        <td><code>Function</code></td>
        <td>
          返回一个与传递的参数绑定的新函数，就像
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"
            >Function.prototype.bind</a
          >. 。有一个 <code>hnsdk.bind()</code> 的快捷方式
        </td>
      </tr>
      <tr id="util-stamp">
        <td>
          <code><b>stamp</b>(<nobr>&lt;Object&gt;</nobr> <i>obj</i>)</code
          ><a data-anchor="util-stamp"></a>
        </td>
        <td><code>Number</code></td>
        <td>返回一个对象的唯一 ID，如果它没有 ID 就给它分配一个。</td>
      </tr>
      <tr id="util-throttle">
        <td>
          <code
            ><b>throttle</b>(<nobr>&lt;Function&gt;</nobr> <i>fn</i>,
            <nobr>&lt;Number&gt;</nobr> <i>time</i>,
            <nobr>&lt;Object&gt;</nobr> <i>context</i>)</code
          ><a data-anchor="util-throttle"></a>
        </td>
        <td><code>Function</code></td>
        <td>
          返回一个函数，该函数以给定的范围 <code>上下文</code> 执行函数
          <code>fn</code> (因此， <code>this</code> 关键字指的是
          <code>fn</code> 代码中的 <code>context</code> )。 在给定的时间内，函数
          <code>fn</code> 将被调用不超过一 <code>次</code> 。
          被绑定的函数收到的参数将是绑定函数时传递的任何参数，然后是调用绑定函数时传递的任何参数。有一个
          <code>hnsdk.throttle</code> 的快捷方式。
        </td>
      </tr>
      <tr id="util-wrapnum">
        <td>
          <code
            ><b>wrapNum</b>(<nobr>&lt;Number&gt;</nobr> <i>num</i>,
            <nobr>&lt;Number[]&gt;</nobr> <i>range</i>,
            <nobr>&lt;Boolean&gt;</nobr> <i>includeMax?</i>)</code
          ><a data-anchor="util-wrapnum"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          返回数字 <code>num</code> modulo <code>range</code> 的方式，使其位于
          <code>range[0]</code> 和 <code>range[1]</code> 内。除非
          <code>includeMax</code> 被设置为
          <code>true</code> ，否则返回的值将总是小于<code>range[1]</code> 。
        </td>
      </tr>
      <tr id="util-falsefn">
        <td>
          <code><b>falseFn</b>()</code><a data-anchor="util-falsefn"></a>
        </td>
        <td><code>Function</code></td>
        <td>返回一个总是返回 <code>false</code> 的函数。</td>
      </tr>
      <tr id="util-formatnum">
        <td>
          <code
            ><b>formatNum</b>(<nobr>&lt;Number&gt;</nobr> <i>num</i>,
            <nobr>&lt;Number|false&gt;</nobr> <i>precision?</i>)</code
          ><a data-anchor="util-formatnum"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          返回四舍五入到小数点后的 <code>数字</code>
          <code>num</code> ，或者默认为6位小数。
        </td>
      </tr>
      <tr id="util-trim">
        <td>
          <code><b>trim</b>(<nobr>&lt;String&gt;</nobr> <i>str</i>)</code
          ><a data-anchor="util-trim"></a>
        </td>
        <td><code>String</code></td>
        <td>
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"
            >String.prototype.trim</a
          >的兼容性 polyfill
        </td>
      </tr>
      <tr id="util-splitwords">
        <td>
          <code><b>splitWords</b>(<nobr>&lt;String&gt;</nobr> <i>str</i>)</code
          ><a data-anchor="util-splitwords"></a>
        </td>
        <td><code>String[]</code></td>
        <td>在空白处对字符串进行修剪和分割，并返回各部分的数组。</td>
      </tr>
      <tr id="util-setoptions">
        <td>
          <code
            ><b>setOptions</b>(<nobr>&lt;Object&gt;</nobr> <i>obj</i>,
            <nobr>&lt;Object&gt;</nobr> <i>options</i>)</code
          ><a data-anchor="util-setoptions"></a>
        </td>
        <td><code>Object</code></td>
        <td>
          将给定的属性合并到 <code>obj</code> 对象的 <code>选项</code> 中,
          返回生成的选项。 参见 <code>Class 选项</code> 。有一个
          <code>hnsdk.setOptions</code> 快捷方式。
        </td>
      </tr>
      <tr id="util-getparamstring">
        <td>
          <code
            ><b>getParamString</b>(<nobr>&lt;Object&gt;</nobr> <i>obj</i>,
            <nobr>&lt;String&gt;</nobr> <i>existingUrl?</i>,
            <nobr>&lt;Boolean&gt;</nobr> <i>uppercase?</i>)</code
          ><a data-anchor="util-getparamstring"></a>
        </td>
        <td><code>String</code></td>
        <td>
          将一个对象转换为一个参数URL字符串，例如，
          <code>{a: "foo", b: "bar"}</code> 翻译为
          <code>'?a=foo&amp;b=bar'</code> 。如果设置了
          <code>existingUrl</code> ，参数将被附加在最后。如果
          <code>大写字母</code> 为 <code>true</code>, 参数名称将被大写字母化
          (例如 <code>'?A=foo&amp;B=bar'</code>)
        </td>
      </tr>
      <tr id="util-template">
        <td>
          <code
            ><b>template</b>(<nobr>&lt;String&gt;</nobr> <i>str</i>,
            <nobr>&lt;Object&gt;</nobr> <i>data</i>)</code
          ><a data-anchor="util-template"></a>
        </td>
        <td><code>String</code></td>
        <td>
          简单的模板化工具，接受
          <code>'Hello {a}, {b}'</code> 形式的模板字符串和
          <code>{a: 'foo', b: 'bar'}</code>这样的数据对象，返回已评估的字符串
          <code>('Hello foo, bar')</code
          >。你也可以为数据值指定函数而不是字符串——它们将通过
          <code>data</code> 作为参数被评估。
        </td>
      </tr>
      <tr id="util-isarray">
        <td>
          <code><b>isArray</b>(<i>obj</i>)</code
          ><a data-anchor="util-isarray"></a>
        </td>
        <td><code>Boolean</code></td>
        <td>
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
            >Array.isArray</a
          >的兼容性 polyfill
        </td>
      </tr>
      <tr id="util-indexof">
        <td>
          <code
            ><b>indexOf</b>(<nobr>&lt;Array&gt;</nobr> <i>array</i>,
            <nobr>&lt;Object&gt;</nobr> <i>el</i>)</code
          ><a data-anchor="util-indexof"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
            >Array.prototype.indexOf</a
          >
          的兼容性 polyfill
        </td>
      </tr>
      <tr id="util-requestanimframe">
        <td>
          <code
            ><b>requestAnimFrame</b>(<nobr>&lt;Function&gt;</nobr> <i>fn</i>,
            <nobr>&lt;Object&gt;</nobr> <i>context?</i>,
            <nobr>&lt;Boolean&gt;</nobr> <i>immediate?</i>)</code
          ><a data-anchor="util-requestanimframe"></a>
        </td>
        <td><code>Number</code></td>
        <td>
          当浏览器重绘时，安排 <code>fn</code> 被执行。如果给定的话，
          <code>fn</code> 被绑定到 <code>context</code> 。如果设置了
          <code>immediate</code> ，如果浏览器没有对
          <a
            href="https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame"
            ><code>window.requestAnimationFrame</code></a
          >
          的本地支持，<code>fn</code>
          会被立即调用，否则会被延迟。返回一个请求ID，可以用来取消请求。
        </td>
      </tr>
      <tr id="util-cancelanimframe">
        <td>
          <code
            ><b>cancelAnimFrame</b>(<nobr>&lt;Number&gt;</nobr> <i>id</i>)</code
          ><a data-anchor="util-cancelanimframe"></a>
        </td>
        <td><code>undefined</code></td>
        <td>
          取消之前的 <code>requestAnimFrame</code>。可以参考
          <a
            href="https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame"
            >window.cancelAnimationFrame</a
          >。
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import FunctionReturnSynopsisHeader from "../CommonTable/FunctionReturnSynopsisHeader.vue";
</script>
