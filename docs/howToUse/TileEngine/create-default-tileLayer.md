# 默认瓦片图

调用后将返回地图瓦片图加载实例，调用对象继承的 addTo 函数后将直接在地图上呈现默认的瓦片地图

## 示例

```ts
const layer = hnsdk.createDefaultTileLayer();
layer.addTo(map);
```

## 方法

<LayerMethodsTable />

## 返回

`TileLayer` 瓦片图实例对象
