<script setup>
import { withBase } from '@vuepress/client'
</script>
# 绘制等值线色块图

## 使用示例

下载示例中的：<a :href="withBase('/json/geojsonData.json')" download="geojsonData.json">geojsonData</a>

下载示例中的：<a :href="withBase('/json/breaks.json')" download="breaks.json">breaks</a>


```js
const layer = hnsdk.drawChoropleth(geojsonData, {
  breaks,
  zProperty: "break",
  created(feature, layer) {
    layer.on("mouseover", () => {
      layer.setStyle({
        fillOpacity: 0.9,
      });
    });
    layer.on("mouseout", () => {
      layer.setStyle({
        fillOpacity: 0.4,
      });
    });
  },
});

layer.addTo(map)
```

## Creation

<DrawChoroplethCreation />

## Options 选项
<DrawChoroplethOptions />

## Events 事件
<FeatureGroupEvents />

<InteractiveEvents />

<LayerEvents />

<PopupEvents />

<ToolTipEvents />

## Methods 方法

<GeoJSONMethods />

<FeatureGrpupMethods />

<LayerGroupMethods />

<LayerMethods />

<PopupMethods />

<ToolTipMethods />

<EventedMethods />