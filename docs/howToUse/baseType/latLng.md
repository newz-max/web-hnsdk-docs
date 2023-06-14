# LatLng 经纬度
代表一个具有一定经纬度的地理点。

## 使用示例
```js
var latlng = hnsdk.latLng(50.5, 30.5);
```
所有接受 LatLng 对象的 Leaflet 方法也接受它们的简单数组形式和简单对象形式（除非另有说明），所以这些行是等价的:
```js
map.panTo([50, 30]);
map.panTo({lng: 30, lat: 50});
map.panTo({lat: 50, lng: 30});
map.panTo(hnsdk.latLng(50, 30));
```
<LatLngCreation />

<LatLngMethods />

<LatLngProperties />