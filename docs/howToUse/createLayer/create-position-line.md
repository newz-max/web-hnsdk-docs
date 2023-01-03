# 创建方位线

创建方位线 调用后直接在地图上操作即可

## 示例

```ts
const layer = hnsdk.createPositionLine(map);
setTimeout(() => {
  layer.layer.remove(); // 删除图层
}, 2000);
```

## 参数

| 入参 | 类型 | 描述     |
| ---- | ---- | -------- |
| map  | Map  | map 实例 |

## 方法

<LayerMethodsTable />

## 返回

`LayerGroup` 图层组实例对象
