# 创建多段折线

<p>一个主动地图上通过点击绘制折线覆盖物的方法。扩展自  <a href="#path"><code>Path</code></a>。</p>

## 示例

```ts
const layer = hnsdk.createPolyline(map, {
  color: "red",
});
```

## 参数

| 入参    | 类型   | 描述       |
| ------- | ------ | ---------- |
| map     | Map    | map 实例   |
| options | object | 初始化选项 |

<PolylineOptions showH2 />

<GeoJsonLayerStyleTable />

<InteractiveEvents />

## Events 事件

<LayerEvents />

<PopupEvents />

<ToolTipEvents />

## Methods 方法

<PolylineMethods />

<LayerMethods />
<!-- <LayerMethodsTable /> -->
<PopupMethods />

<ToolTipMethods />

<EventedMethods />
## 返回

`Polyline` 多线段实例对象
