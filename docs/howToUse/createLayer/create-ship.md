# 创建船舶图标

传入经纬度数组生成船舶图标实例对象

## 示例

```ts
const layer = hnsdk.createShip(map, [
  {
    latlng: [40, 40],
    properties: {
      infos: { test: "随意数据，将绑定至船舶图标" },
      styles: {
        deg: 45,
        fill: red,
        fillOpacity: 0.5,
        iconType: "base",
        opacity: 1,
      },
    },
  },
]);
```

## 参数

| 入参    | 类型     | 描述                 |
| ------- | -------- | -------------------- |
| map     | Map      | 地图实例             |
| latlngs | latlng[] | 经纬度数据及船舶数据 |

## latlng

| 选项       | 类型   | 描述                                     |
| ---------- | ------ | ---------------------------------------- |
| latlng     | array  | 经纬度                                   |
| properties | object | 样式及数据 详见[properties](#properties) |

## properties

| 选项   | 类型   | 描述                                                       |
| ------ | ------ | ---------------------------------------------------------- |
| infos  | object | 任意内容，将绑定至船舶图标                                 |
| styles | object | 该船舶图标样式 详见[properties.Styles](#properties.Styles) |
|        |        |                                                            |

## properties.Styles

|             |        |                                                                 |
| ----------- | ------ | --------------------------------------------------------------- |
| 选项        | 类型   | 描述                                                            |
| deg         | number | 船头朝向 0 - 360                                                |
| fill        | string | 填充色                                                          |
| fillOpacity | number | 填充色透明度 0-1                                                |
| iconType    | string | 基础：base<br />航行中：run<br />转向：turn<br />浮桶：floating |
| opacity     | number | 图标透明度 0-1                                                  |

## 方法

<LayerMethodsTable />

## 返回

`GeoJSON` 实例对象
