# 经纬度转换为大地平面坐标

## 参数
<ToMercatorParams />

## 示例
```js
  const xy = hnSdk.toMercator(hnsdk.latLng({lat : 20.46818922264039 , lng : 88.90624999999949}))

  xy.x  // 经度
  xy.y  // 纬度
```