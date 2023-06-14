# Popup 弹出窗口
<p>用于在地图的某些位置打开弹出窗口。使用 <a href="#map-openpopup">Map.openPopup</a> 打开弹出窗口，同时确保一次只打开一个弹出窗口（推荐使用），或者使用 <a href="#map-addlayer">Map.addLayer</a> 打开任意多个。</p>

## 使用示例

如果您只想将弹出窗口（popup）绑定到标记（marker）单击然后打开它，这其实很简单：

```js
marker.bindPopup(popupContent).openPopup();
```

像折线（polylines）这样的路径叠加也有一个 `bindPopup` 方法。这是在地图上打开弹出窗口的更复杂的方法：

```js
var popup = hnsdk.popup()
    .setLatLng(latlng)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);
```

<PopupCreation />

<PopupOptions />