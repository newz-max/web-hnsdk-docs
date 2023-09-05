# 创建航线、船舶运动方法集
合并在一起的船舶相关功能，包含：点击点图绘制航线、船舶标记在航线上运动

## 示例
关于绘制航线并将船舶标记添加到航线上的示例，绘制航线时会以船舶位置为起点
```js
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [88.90624999999949, 20.46818922264039],
          type: "Point",
        },
      },
    ],
  };
  const geojsonLayer = hnSdk.drawVessel(geojson);
  const vessel = geojsonLayer.getLayers()[0];
  const markerMotion = hnSdk.useMarkerMotion(map, vessel);

  const pathPromise = markerMotion.startPath(false);
```
在绘制完成的航线上按照特定速率让船舶运动
```js
pathPromise.then( paths => {
    const speed = 10000
    markerMotion.startMotion(paths , speed)
})
```

