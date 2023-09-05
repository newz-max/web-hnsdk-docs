# Point 点

代表一个点，其 x 和 y 坐标为像素。

## 使用示例

```js
var point = hnsdk.point(200, 300);
```

所有接受 Point 对象的Leaflet方法和选项也接受它们的简单数组形式（除非另有说明），所以这些行是等价的:

```js
map.panBy([200, 300]);
map.panBy(hnsdk.point(200, 300));
```
注意， Point 不继承 hnsdk 的 Class 对象，这意味着新的类不能继承于它，新的方法也不能用 include 函数添加到它。

<PointCreation />

<PointMethods :showH2="true" />

<PointProperties />
