# 模糊查询港口列表

模糊查询港口列表数据

## 示例

```ts
async function start() {
  const res = await hnSdk.queryPortList({
    ctryCode: "CN",
    kw: "青岛",
  });
  console.log(res, "res");
}
```

## 参数

| 入参   | 类型   | 描述                    |
| ------ | ------ | ----------------------- |
| params | Object | [请求查询参数](#params) |

## params

| 选项     | 类型   | 描述           |
| -------- | ------ | -------------- |
| ctryCode | String | 国家，默认 CN  |
| kw       | String | 地区，默认青岛 |

## 返回

Promise<{data : [Response](#response)[]}>

## Response

| 选项       | 类型   | 描述       |
| ---------- | ------ | ---------- |
| aliasNames | String | 别名       |
| ctryCode   | String | 国家代码   |
| ctryNameCn | String | 国家中文   |
| ctryNameEn | String | 国家英文   |
| nameCn     | String | 地区中文   |
| nameEn     | String | 地区英文   |
| namePinyin | String | 地区拼音   |
| namePy     | String | 地区首字母 |
| portCode   | String | 港口代码   |
| tzOffset   | any    |            |
