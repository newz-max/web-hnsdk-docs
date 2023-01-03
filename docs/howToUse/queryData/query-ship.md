# 查询船舶信息

查询船舶信息

## 示例

```ts
async function start() {
  const res = await hnSdk.queryShip("413384150");
  console.log(res, "res");
}
```

## 参数

| 入参 | 类型   | 描述      |
| ---- | ------ | --------- |
| mmsi | string | 船舶 mmsi |

## 返回

Promise<{data : [Response](#response)}>

## Response

| 选项                | 类型   | 描述           |
| ------------------- | ------ | -------------- |
| vesselType          | string | 船只类型       |
| vesselTypeNameCn    | string | 船只类型中文   |
| vesselTypeNameEn    | string | 船只类型英文   |
| vesselSubType       | string | 船只子类型     |
| vesselSubTypeNameCn | string | 船只子类型中文 |
| vesselSubTypeNameEn | string | 船只子类型英文 |
| imo                 | string | imo            |
| callsign            | string | 呼号           |
| nameEn              | string | 船舶英文名     |
| nameCn              | string | 船舶中文名     |
| flagCtry            | string | 国家国旗       |
| flagCtryNameCn      | string | 国家国旗中文   |
| flagCtryNameEn      | string | 国家国旗英文   |
| classSociety        | string | 未知           |
| classSocietyNameCn  | string | 未知           |
| classSocietyNameEn  | string | 未知           |
| buildYear           | string | 建造年         |
| buildYearMonth      | string | 建造月         |
| operatorBody        | string | 未知           |
| operatorBodyCn      | string | 未知           |
| manageBody          | string | 未知           |
| manageBodyCn        | string | 未知           |
| ownerBody           | string | 未知           |
| ownerBodyCn         | string | 未知           |
| fleetBody           | string | 未知           |
| shipStatus          | string | 船舶状态       |
| mmsi                | number | mmsi           |
| vesselMmsi          | number | 船舶 mmsi      |
| dwt                 | number | 载重吨         |
| grt                 | number | 容积总吨       |
| net                 | number | 未知           |
| length              | number | 船长           |
| width               | number | 船宽           |
| height              | number | 船高           |
| draught             | number | 吃水           |
| speed               | number | 船速           |
| calibre             | number | 口径           |
| retireYearMonth     | number | 退休年月       |
| nextMmsi            | number | 下一个         |
| totalBunkerCapacity | number | 未知           |
