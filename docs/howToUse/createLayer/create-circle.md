# 创建圆

调用后直接在地图上操作即可

## 示例

```ts
const layer = hnsdk.createCircle(map, {
  // 绘制完成后触发
  drawEndCallBack(e) {
    setTimeout(() => {
      layer.remove(); // 删除图层
    }, 2000);
  },
});
```

## 参数

| 入参    | 类型   | 描述       |
| ------- | ------ | ---------- |
| map     | Map    | map 实例   |
| options | object | 初始化选项 |

## options

| 选项            | 类型     | 描述                                           |
| --------------- | -------- | ---------------------------------------------- |
| drawEndCallBack | function | 绘制完成后触发的回调函数有一个事件对象作为入参 |

## 方法

<LayerMethodsTable />

## 返回

`Circle` 圆实例对象
