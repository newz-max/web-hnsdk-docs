# TileLayer

用于在地图上加载和显示瓦片图层。 请注意，大多数tile服务器都需要属性，可以自定义配置

## 使用示例

```js
hnsdk.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
```

### URL 模板

表现为以下方式:

```js
'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
```

> `{s}` 是指可用的子域之一（按顺序使用，以帮助解决每个域的浏览器并行请求限制；子域值在选项中指定;默认为 `a`, `b` 或 `c` , 可以省略), `{z}` — 缩放级别, `{x}` 和 `{y}` — 瓦片坐标。 `{r}` 可以用来在URL中添加 "@2x" 以加载视网膜瓦片。

您可以在模板中使用自定义键，这些键将通过 TileLayer 选项进行 [evaluated]() ，如下所示：

```js
hnsdk.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
```

<TileLayerCreation />

<TileLayerOptions />