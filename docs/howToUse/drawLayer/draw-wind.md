<script setup>
import { withBase } from '@vuepress/client'
</script>
# 绘制风速图标

## 使用示例

下载示例中的：<a :href="withBase('/json/windGeojsonData.json')" download="geojsonData.json">windGeojsonData</a>

```js
const layer = hnsdk.drawWind(grid)
layer.addTo(map)
```

## Creation

<DrawWindCreation />

## Options 选项
<DrawWindOptions />

## Events 事件
<InteractiveEvents />

<LayerEvents />

<PopupEvents />

<ToolTipEvents />

## Methods 方法

<LayerGroupMethods />

<LayerMethods />

<PoupMethods />

<ToolTipMethods />

<EventedMethods />