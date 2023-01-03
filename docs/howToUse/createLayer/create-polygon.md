# 创建多边形

调用后直接在地图上操作即可

## 示例

```ts
const layer = hnsdk.createPolygon(map, {
  // 双击标志删除点后触发
  deletedCallBack(e) {
    console.log(e);
  },
  // 绘制完成后触发
  drawEndCallBack(e) {
    console.log(e);
  },
});
```

## 参数

| 入参    | 类型   | 描述       |
| ------- | ------ | ---------- |
| map     | Map    | map 实例   |
| options | object | 初始化选项 |

## options

| 选项            | 类型     | 描述                                                 |
| --------------- | -------- | ---------------------------------------------------- |
| drawEndCallBack | function | 绘制完成后触发的回调函数有一个事件对象作为入参       |
| deletedCallBack | function | 双击标志删除点后触发的回调函数有一个事件对象作为入参 |

## 方法

<LayerMethodsTable />

## 返回

`Polygon` 矩形实例对象
