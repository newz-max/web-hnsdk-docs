# 绘制矩形

传入经纬度数组生成矩形面实例对象

## 示例

```ts
const layer = hnsdk.drawPolygon([
    [
      [
        [40, 40],
        [50, 60],
        [60, 60],
        [40, 40],
      ],
    ],
  ],{
  style(geoJsonFeature){
    return {
      color : red,
    }
  }
}
});

layer.addTo(map)
```

## 参数

| 入参    | 类型   | 描述                     |
| ------- | ------ | ------------------------ |
| latlngs | array  | 矩形数组，可以有多个矩形 |
| options | object | 初始化选项               |

## options

| 选项  | 类型     | 描述                                                       |
| ----- | -------- | ---------------------------------------------------------- |
| style | function | 必须返回一个对象，可选项详见 [styleOptions](#styleoptions) |

## styleOptions

| 选项        | 类型    | 描述                                                                  |
| ----------- | ------- | --------------------------------------------------------------------- |
| stroke      | boolean | 是否沿路径绘制边框。把它设置为`false` ，可以禁用多边形或圆形的边框。  |
| color       | string  | Stroke（描边）颜色                                                    |
| weight      | number  | Stroke（描边）宽度，单位：像素                                        |
| opacity     | number  | Stroke（描边）的不透明度                                              |
| fill        | boolean | 是否对路径进行颜色填充。设置为 `false` 可以禁止对多边形或圆形的填充。 |
| fillColor   | string  | 填充颜色。默认为 `color` 选项的值。                                   |
| fillOpacity | number  | 填充的不透明度。                                                      |

## 方法

<LayerMethodsTable />

## 返回

`GeoJSON` 实例对象
