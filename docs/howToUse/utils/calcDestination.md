# 以经纬度为参照物计算指定角度、距离的终点
接收入参的点作为参照物，通过指定单位的距离计算出目标点的位置
> 若以 degress 为单位，将使用 Haversine 公式说明整体曲率

## 参数
<CalcDestinationParamsTable />

## options
<CalcDestinationOptionsTable />

## 使用示例
```js
  const point = {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [88.90624999999949, 20.46818922264039],
      type: "Point",
    },
  };

  const endPoint = hnSdk.calcDestination(point, 1000, 45, {
    units: "kilometers",
  });

  const geojsonLayer = hnSdk.geoJSON(endPoint).addTo(map);
```