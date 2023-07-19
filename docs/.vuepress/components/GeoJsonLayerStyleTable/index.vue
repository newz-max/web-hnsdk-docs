<template>
  <label> 继承自 <a href="#path">Path</a> 的选项</label>

  <table>
    <thead>
      <tr>
        <th>选项</th>
        <th>类型</th>
        <th>描述</th>
      </tr>
    </thead>

    <tbody>
      <tr id="path-stroke">
        <td>
          <code><b>stroke</b></code
          ><a data-anchor="path-stroke"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          是否沿路径绘制边框。把它设置为<code>false</code>
          ，可以禁用多边形或圆形的边框。
        </td>
      </tr>
      <tr id="path-color">
        <td>
          <code><b>color</b></code
          ><a data-anchor="path-color"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'#3388ff'</code></td>
        <td>Stroke（描边）颜色</td>
      </tr>
      <tr id="path-weight">
        <td>
          <code><b>weight</b></code
          ><a data-anchor="path-weight"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>3</code></td>
        <td>Stroke（描边）宽度，单位：像素</td>
      </tr>
      <tr id="path-opacity">
        <td>
          <code><b>opacity</b></code
          ><a data-anchor="path-opacity"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>1.0</code></td>
        <td>Stroke（描边）的不透明度</td>
      </tr>
      <tr id="path-linecap">
        <td>
          <code><b>lineCap</b></code
          ><a data-anchor="path-linecap"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'round'</code></td>
        <td>
          定义描边
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap"
            >结束时使用的形状</a
          >
          的字符串。
        </td>
      </tr>
      <tr id="path-linejoin">
        <td>
          <code><b>lineJoin</b></code
          ><a data-anchor="path-linejoin"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'round'</code></td>
        <td>
          定义在描边
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin"
            >转角处使用的形状</a
          >
          的字符串。
        </td>
      </tr>
      <tr id="path-dasharray">
        <td>
          <code><b>dashArray</b></code
          ><a data-anchor="path-dasharray"></a>
        </td>
        <td><code>String</code></td>
        <td><code>null</code></td>
        <td>
          一个定义描边的点画线的
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray"
            >图案范式</a
          >的字符串。 在<a
            href="https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility"
            >一些旧的浏览器</a
          >中，对 <a href="#canvas"><code>Canvas</code></a
          >-powered 图层不起作用。
        </td>
      </tr>
      <tr id="path-dashoffset">
        <td>
          <code><b>dashOffset</b></code
          ><a data-anchor="path-dashoffset"></a>
        </td>
        <td><code>String</code></td>
        <td><code>null</code></td>
        <td>
          一个字符串，它定义了进入
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset"
            >dash 范式的距离，以 dash 开始</a
          >。 在<a
            href="https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility"
            >一些旧的浏览器</a
          >中，对 <a href="#canvas"><code>Canvas</code></a
          >-powered 图层不起作用。
        </td>
      </tr>
      <tr id="path-fill">
        <td>
          <code><b>fill</b></code
          ><a data-anchor="path-fill"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>depends</code></td>
        <td>
          是否对路径进行颜色填充。设置为
          <code>false</code> 可以禁止对多边形或圆形的填充。
        </td>
      </tr>
      <tr id="path-fillcolor">
        <td>
          <code><b>fillColor</b></code
          ><a data-anchor="path-fillcolor"></a>
        </td>
        <td><code>String</code></td>
        <td><code>*</code></td>
        <td>
          填充颜色。默认为
          <a href="#path-color"><code>color</code></a> 选项的值。
        </td>
      </tr>
      <tr id="path-fillopacity">
        <td>
          <code><b>fillOpacity</b></code
          ><a data-anchor="path-fillopacity"></a>
        </td>
        <td><code>Number</code></td>
        <td><code>0.2</code></td>
        <td>填充的不透明度。</td>
      </tr>
      <tr id="path-fillrule">
        <td>
          <code><b>fillRule</b></code
          ><a data-anchor="path-fillrule"></a>
        </td>
        <td><code>String</code></td>
        <td><code>'evenodd'</code></td>
        <td>
          一个字符串，定义
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule"
            >形状的内部区域</a
          >
          是如何被确定的。
        </td>
      </tr>
      <tr id="path-bubblingmouseevents">
        <td>
          <code><b>bubblingMouseEvents</b></code
          ><a data-anchor="path-bubblingmouseevents"></a>
        </td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>
          当为 <code>true</code>时，这个路径上的鼠标事件将在地图上触发相同的事件
          (除非使用
          <a href="#domevent-stoppropagation"
            ><code>hnsdk.DomEvent.stopPropagation</code></a
          >
          )。
        </td>
      </tr>
      <tr id="path-renderer">
        <td>
          <code><b>renderer</b></code
          ><a data-anchor="path-renderer"></a>
        </td>
        <td>
          <code><a href="#renderer">Renderer</a></code>
        </td>
        <td><code></code></td>
        <td>
          在这个路径上使用这个特定的
          <a href="#renderer"><code>Renderer（渲染器）</code></a> 实例。
          优先于地图的
          <a href="#map-renderer">default renderer（默认渲染器）</a>。
        </td>
      </tr>
      <tr id="path-classname">
        <td>
          <code><b>className</b></code
          ><a data-anchor="path-classname"></a>
        </td>
        <td><code>String</code></td>
        <td><code>null</code></td>
        <td>在一个元素上设置的自定义类名。仅适用于 SVG 渲染器。</td>
      </tr>
    </tbody>
  </table>
</template>
