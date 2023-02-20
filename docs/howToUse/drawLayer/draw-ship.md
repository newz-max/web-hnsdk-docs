# 绘制船舶图标

传入标准 GeoJSON 格式数据生成船舶图标实例对象

## 示例

```ts
// 推荐使用 turf.js 对数据进行格式化 遍历等操作
const points = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        iconStyle: {
          type: "base",
          deg: 45,
          fill: "red",
          fillOpacity: 0.5,
          opacity: 1,
        },
        test: "test",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.23420673067342, -72.55849561953549],
      },
    },
  ],
};

const layer = hnsdk.drawShip(points);

layer.addTo(map);
```

## 参数

| 入参    | 类型                                    | 描述                                   |
| ------- | --------------------------------------- | -------------------------------------- |
| geojson | [featureCollection](#featureCollection) | GeoJSON FeatureCollection 标准格式数据 |

## featureCollection

| 选项     | 类型                  | 描述                                              |
| -------- | --------------------- | ------------------------------------------------- |
| type     | String                | 类型 必须为 FeatureCollection                     |
| features | [feature](#feature)[] | 特征组 每一项是每个船舶图标经纬度、及携带数据对象 |

## feature

| 选项       | 类型                      | 描述                         |
| ---------- | ------------------------- | ---------------------------- |
| type       | String                    | 类型 必须为 Feature          |
| properties | [properties](#properties) | 特征携带数据，iconStyle 必填 |
| geometry   | [geometry](#geometry)     | 经纬度数据                   |

## geometry

| 选项        | 类型              | 描述                 |
| ----------- | ----------------- | -------------------- |
| type        | String            | 类型 必须为 Point    |
| coordinates | [Number , Number] | 经纬度数组，前经后纬 |

## properties

| 选项      | 类型                    | 描述             |
| --------- | ----------------------- | ---------------- |
| iconStyle | [iconStyle](#iconStyle) | 船舶图标样式     |
| 任何      | 任何                    | 船舶图标携带数据 |
|           |                         |                  |

## properties.Styles

|             |        |                                                                 |
| ----------- | ------ | --------------------------------------------------------------- |
| 选项        | 类型   | 描述                                                            |
| deg         | number | 船头朝向 0 - 360                                                |
| fill        | string | 填充色                                                          |
| fillOpacity | number | 填充色透明度 0-1                                                |
| type        | string | 基础：base<br />航行中：run<br />转向：turn<br />浮桶：floating |
| opacity     | number | 图标透明度 0-1                                                  |

## 方法

<LayerMethodsTable />

## 返回

`GeoJSON` 实例对象
