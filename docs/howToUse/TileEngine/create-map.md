# 创建地图实例

创建地图实例后可加载瓦片图，在地图上绘制内容等

## 示例

<CodeGroup>

<CodeGroupItem title='ts'>

```ts
// 使用 id 为 map 的 div 容器初始化地图，同时指定地图的中心点和缩放级别
const map = hnsdk.createMap('map' , {
  center : [51.505,-0.09],
  zoom : 2,
})
```

</CodeGroupItem>

<CodeGroupItem title='html'>

```html
<body>
  <div id="map"></div>
</body>
```

</CodeGroupItem>

</CodeGroup>

::: tip

后续代码实例中使用到 `map` 变量均为 `createMap` 函数返回的地图实例

:::

## 参数

| 入参    | 类型   | 描述              |
| ------- | ------ | ----------------- |
| mapId   | string | div容器的id       |
| options | object | map实例初始化参数 |

## options

| 选项    | 类型   | 描述                     |
| ------- | ------ | ------------------------ |
| center  | array  | 地图初始化时的中心点位置 |
| zoom    | number | 地图初始化时的缩放等级   |
| minZoom | number | 地图的最小缩放级别       |
| maxZoom | number | 地图的最大缩放级别       |

## 返回

`Map` map实例对象
