<template>
  <table>
    <thead>
      <tr>
        <th>选项</th>
        <th>类型</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>stroke</td>
        <td>Boolean</td>
        <td>
          是否沿路径绘制边框。把它设置为<code>false</code>
          ，可以禁用多边形或圆形的边框。
        </td>
      </tr>
      <tr>
        <td>color</td>
        <td>String</td>
        <td>Stroke（描边）颜色</td>
      </tr>
      <tr>
        <td>weight</td>
        <td>Number</td>
        <td>Stroke（描边）宽度，单位：像素</td>
      </tr>
      <tr>
        <td>opacity</td>
        <td>Number</td>
        <td>Stroke（描边）的不透明度</td>
      </tr>
      <tr>
        <td>lineCap</td>
        <td>String</td>
        <td>
          定义描边
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap"
            target="_blank"
            rel="noopener noreferrer"
            >结束时使用的形状<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >
          的字符串。
        </td>
      </tr>
      <tr>
        <td>lineJoin</td>
        <td>String</td>
        <td>
          定义在描边
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin"
            target="_blank"
            rel="noopener noreferrer"
            >转角处使用的形状<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >
          的字符串。
        </td>
      </tr>
      <tr>
        <td>dashArray</td>
        <td>String</td>
        <td>
          一个定义描边的点画线的
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray"
            target="_blank"
            rel="noopener noreferrer"
            >图案范式<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >的字符串。 在<a
            href="https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility"
            target="_blank"
            rel="noopener noreferrer"
            >一些旧的浏览器<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >中，对
          <a
            href="https://leafletjs.cn/reference.html#canvas"
            target="_blank"
            rel="noopener noreferrer"
            ><code>Canvas</code
            ><span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >-powered 图层不起作用。
        </td>
      </tr>
      <tr>
        <td>dashOffset</td>
        <td>String</td>
        <td>
          一个字符串，它定义了进入
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset"
            target="_blank"
            rel="noopener noreferrer"
            >dash 范式的距离，以 dash 开始<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >。 在<a
            href="https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility"
            target="_blank"
            rel="noopener noreferrer"
            >一些旧的浏览器<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >中，对
          <a
            href="https://leafletjs.cn/reference.html#canvas"
            target="_blank"
            rel="noopener noreferrer"
            ><code>Canvas</code
            ><span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >-powered 图层不起作用。
        </td>
      </tr>
      <tr>
        <td>fill</td>
        <td>Boolean</td>
        <td>
          是否对路径进行颜色填充。设置为
          <code>false</code> 可以禁止对多边形或圆形的填充。
        </td>
      </tr>
      <tr>
        <td>fillColor</td>
        <td>String</td>
        <td>填充颜色</td>
      </tr>
      <tr>
        <td>fillOpacity</td>
        <td>Number</td>
        <td>填充的不透明度。</td>
      </tr>
      <tr>
        <td>fillRule</td>
        <td>String</td>
        <td>
          一个字符串，定义
          <a
            href="https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule"
            target="_blank"
            rel="noopener noreferrer"
            >形状的内部区域<span
              ><svg
                class="external-link-icon"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                ></path>
                <polygon
                  fill="currentColor"
                  points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                ></polygon></svg
              ><span class="external-link-icon-sr-only"
                >open in new window</span
              ></span
            ></a
          >
          是如何被确定的。
        </td>
      </tr>
      <tr>
        <td>className</td>
        <td>String</td>
        <td>在一个元素上设置的自定义类名。仅适用于 SVG 渲染器。</td>
      </tr>
    </tbody>
  </table>
</template>
