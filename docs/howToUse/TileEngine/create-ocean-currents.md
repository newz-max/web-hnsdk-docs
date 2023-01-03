# 洋流叠加瓦片图

创建洋流叠加瓦片图,一定要在 init 函数返回成功异步结果后调用

## 示例

```typescript
async function start() {
  const layer = await hnsdk.createOceanCurrents();
  layer.addTo(map);
}
```

## 方法

<LayerMethodsTable />

## 返回

`TileLayer.WMS` 实例对象
