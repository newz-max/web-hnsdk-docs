# 有记忆功能的物标标记
hnsdk.useStoreMarker 用于在地图上创建本地记忆的标记
## 使用示例
关于 新增、删除、获取所有 marker 的操作示例
```js
// 创建或读取以存在的本地存储记录
  const storeMarker = hnSdk.useStoreMarker(map, "test1");

// getMarkers获取该存储库中所有的 marker
  storeMarker.getMarkers().forEach((item) => {
    item.marker.addEventListener("click", markerClick);
  });

// add 方法创建新的 marker
  map.addEventListener("click", (e) => {
    const addMarkerRes = storeMarker.add(e.latlng);
    addMarkerRes.marker.addEventListener("click", markerClick);
  });

// del 方法删除已存在的 marker
  function markerClick(e) {
    storeMarker.del(e.target);
  }
```

关于更新 marker 状态的示例
```js
  const markers = storeMarker.getMarkers();
  const marker = markers[0].marker;
  // update 方法更新指定 marker 的经纬度
  map.addEventListener("click", (e) => {
    storeMarker.update(marker, e.latlng);
  });
```

## Creation
<UseStoreMarkerCreation />

## Methods 方法
<useStoreMarkerMethods />

<h2 id="RuntimeMarkerStoreItem">RuntimeMarkerStoreItem</h2>
<RuntimeMarkerStoreItem />