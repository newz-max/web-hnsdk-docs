# 绘制线

传入经纬度数组生成点实例对象

## 示例

```typescript
const layer = hnsdk.drawLine(
  [
    [
      [40, 40],
      [50, 50],
      [90, 0],
    ],
    [
      [35, 45],
      [45, 55],
    ],
  ],
  {
    style() {
      return {
        weight: 20,
        opacity: 0.5,
        lineCap: "square",
        lineJoin: "round",
        dashArray: "30,30,90",
        dashOffset: "60",
        fill: true,
        fillColor: "pink",
        fillOpacity: 0.5,
        fillRule: "evenodd",
        className: "xxx",
      };
    },
  }
);
layer.addTo(map);
```

## 参数

| 入参    | 类型   | 描述                     |
| ------- | ------ | ------------------------ |
| latlngs | array  | 经纬度数组，可以有多个线 |
| options | object | 初始化选项               |

## options

| 选项  | 类型     | 描述                                               |
| ----- | -------- | -------------------------------------------------- |
| style | function | 一个定义线条样式的函数，需要返回一个[对象](#style) |

## style

<GeoJsonLayerStyleTable />

## 方法

<LayerMethodsTable />

## 返回

`GeoJSON` 实例对象
