# LatLngBounds 经纬度边界

在地图上代表一个矩形的地理区域。

## 使用示例

```js
var corner1 = L.latLng(40.712, -74.227),
  corner2 = L.latLng(40.774, -74.125),
  bounds = L.latLngBounds(corner1, corner2);
```

所有接受 LatLngBounds 对象的 hnsdk 方法也接受它们的简单数组形式（除非另有说明），所以上面的边界例子可以这样传递:

```js
map.fitBounds([
  [40.712, -74.227],
  [40.774, -74.125],
]);
```

<LatLngBoundsCreation />

<LatLngBoundsMethods :showH2="true" />

<LatLngProperties />
