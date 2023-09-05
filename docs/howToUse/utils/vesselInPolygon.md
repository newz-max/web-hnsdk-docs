# 标记区域内判定
检测船舶标记是否在区域内
## 示例
```js
  const latlng = L.latLng({ lng: 88.90624999999949, lat: 20.46818922264039 });
  const marker = L.marker(latlng).addTo(map);

  const polygon = {
    type: "Feature",
    properties: {},
    geometry: {
      coordinates: [
        [
          [79.41406249999915, 29.228890030193952],
          [81.17187499999955, 18.312810846425336],
          [92.77343749999943, 15.45368022434559],
          [102.6171874999988, 19.642587534012634],
          [95.05859374999886, 30.75127777625717],
          [79.41406249999915, 29.228890030193952],
        ],
      ],
      type: "Polygon",
    },
  };
  const inArea = hnSdk.vesselInPolygon(marker, polygon);
  console.log(inArea.inPolygon); // true

```