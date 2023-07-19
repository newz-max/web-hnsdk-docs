# Layers 图层
<p>图层控件使用户能够在不同的基础图层之间进行切换，并打开/关闭覆盖物图层 扩展自 <a href="#control"><code>Control</code></a> 。</p>

## 使用示例
```js
var baseLayers = {
    "Mapbox": mapbox,
    "OpenStreetMap": osm
};

var overlays = {
    "Marker": marker,
    "Roads": roadsLayer
};

hnsdk.control.layers(baseLayers, overlays).addTo(map);
```

<p> <code>baseLayers</code> 和 <code>overlays</code> 参数是对象字面， layer 名作为键， <a href="#layer"><code>Layer</code></a> 对象是值:</p>

```js
{
    "<someName1>": layer1,
    "<someName2>": layer2
}
```
<p>图层名称可以包含 HTML，这使你可以为项目添加额外的样式:</p>

```js
{"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
```

<LayerControlerCreation />

## Options 选项
<LayersControlerOptions />

<label> 继承自 <a href="#control">Control</a> 的选项</label>
<ControlOptions />

## Methods 方法
<LayersControlerMethods />

<label> 继承自 <a href="#control">Control</a> 的方法</label>
<ControlerMethods />