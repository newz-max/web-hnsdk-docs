# 通过港口编码获取港口详细信息

通过港口编码获取港口详细信息

## 示例

```ts
async function (){
  const res = await hnSdk.queryPortDetail("CNQIN");
  console.log(res, "res");
}
```

## 参数

| 入参     | 类型     | 描述      |
| -------- | -------- | --------- |
| mmsiList | string[] | mmsi 数组 |

## 返回

Promise<{data : [Response](#response)}>

## Response

| 选项                | 类型                                                                                                     | 描述         |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------------ |
| masterPort          | boolean                                                                                                  | 是否为主港口 |
| port                | [QueryPortDetailResponsePort](#queryportdetailresponseport-港口信息)                                     | 港口信息     |
| portAttachment      | [QueryPortDetailResponsePortAttachment](#queryportdetailresponseportattachment-港口附件)[]               | 港口附件     |
| portBerthsList      | [QueryPortDetailResponsePortBerthsList](#queryportdetailresponseportberthslist-港口泊位清单)[]           | 港口泊位清单 |
| portFacility        | [QueryPortDetailResponsePortFacility](#queryportdetailresponseportfacility-港口设施)                     | 港口设施     |
| portMedia           | [QueryPortDetailResponsePortMedia](#queryportdetailresponseportmedia-港口媒体)[]                         | 港口媒体     |
| portPlans           | [QueryPortDetailResponsePortPlans](#queryportdetailresponseportplans-港口计划)[]                         | 港口计划     |
| portSupply          | [QueryPortDetailResponsePortSupply](#queryportdetailresponseportsupply-港口供应)[]                       | 港口供应     |
| portsAuthAddresses  | [QueryPortDetailResponsePortsAuthAddresses](#queryportdetailresponseportsauthaddresses-港口验证地址)[]   | 港口验证地址 |
| portsOtherAddresses | [QueryPortDetailResponsePortsOtherAddresses](#queryportdetailresponseportsotheraddresses-港口其他地址)[] | 港口其他地址 |
| relatedPorts        | [QueryPortDetailResponseRelatedPorts](#queryportdetailresponserelatedports-相关港口)[]                   | 相关港口     |

## QueryPortDetailResponsePort-港口信息

| 选项             | 类型   | 描述         |
| ---------------- | ------ | ------------ |
| altName          | string | 替代名称     |
| country          | string | 国家         |
| ctrycode         | string | 国家编码     |
| portCode         | string | 港口编码     |
| portname         | string | 港口名称     |
| status           | string | 状态         |
| timezone         | string | 时区         |
| unlocode         | string | 解锁码       |
| worldportnumber  | string | 世界港口编号 |
| latitudedecimal  | number | 纬度         |
| longitudedecimal | number | 经度         |
| maxbeam          | number | 未知         |
| maxdwt           | number | 最大载重吨   |
| maximumdraft     | number | 最大吃水     |
| maxloa           | number | 最大限度     |
| portid           | number | 港口 id      |
| rid              | number | 未知         |

## QueryPortDetailResponsePortAttachment-港口附件

| 选项           | 类型   | 描述     |
| -------------- | ------ | -------- |
| mmsi           | string | mmsi     |
| attachmentType | string | 文件格式 |
| attachmentUuid | string | 文件 id  |
| createTime     | string | 创建时间 |
| remark         | string | 备注     |
| seqNo          | number | 序号     |

## QueryPortDetailResponsePortBerthsList-港口泊位清单

| 选项               | 类型   | 描述       |
| ------------------ | ------ | ---------- |
| berthName          | string | 泊位名称   |
| terminalName       | string | 终端名称   |
| terminalOperator   | string | 终端操作员 |
| facilityType       | string | 设施类型   |
| terminalType       | string | 终端类型   |
| latitudeIndicator  | string | 纬度指示器 |
| longitudeIndicator | string | 经度指示器 |
| rid                | number | 未知       |
| terminalId         | number | 终端 id    |
| portId             | number | 港口 id    |
| berthId            | number | 泊位 id    |
| decLatitude        | number | 纬度       |
| decLongitude       | number | 经度       |

## QueryPortDetailResponsePortFacility-港口设施

| 选项                | 类型   | 描述 |
| ------------------- | ------ | ---- |
| drybulkfacilities   | number | 暂无 |
| breakbulkfacilities | number | 暂无 |
| drydockfacilities   | number | 暂无 |
| containerfacilities | number | 暂无 |
| liquidfacilities    | number | 暂无 |
| lngfacilities       | number | 暂无 |
| lpgfacilities       | number | 暂无 |
| ispscompliant       | number | 暂无 |
| csicompliant        | number | 暂无 |
| passengerfacilities | number | 暂无 |
| rorofacilities      | number | 暂无 |
| rid                 | null   | 暂无 |
| portid              | null   | 暂无 |
| worldportnumber     | null   | 暂无 |
| altName             | null   | 暂无 |
| portname            | null   | 暂无 |
| status              | null   | 暂无 |
| masterpoid          | null   | 暂无 |
| masterPortName      | null   | 暂无 |
| latitudedecimal     | null   | 暂无 |
| longitudedecimal    | null   | 暂无 |
| unlocode            | null   | 暂无 |
| country             | null   | 暂无 |
| ctrycode            | null   | 暂无 |
| countrycode         | null   | 暂无 |
| countrycodeimo      | null   | 暂无 |
| countrycodeiso2     | null   | 暂无 |
| countrycodeiso3     | null   | 暂无 |
| countrycodeisono    | null   | 暂无 |
| regionname          | null   | 暂无 |
| timezone            | null   | 暂无 |
| daylightsavingtime  | null   | 暂无 |
| maximumdraft        | null   | 暂无 |
| maxdwt              | null   | 暂无 |
| maxloa              | null   | 暂无 |
| maxbeam             | null   | 暂无 |
| maxoffshoredraught  | null   | 暂无 |
| maxoffshoredwt      | null   | 暂无 |
| maxoffshoreloa      | null   | 暂无 |
| maxoffshorebcm      | null   | 暂无 |
| freetradezone       | null   | 暂无 |
| ecoport             | null   | 暂无 |
| emissioncontrolarea | null   | 暂无 |
| alternativename     | null   | 暂无 |
| continentname       | null   | 暂无 |
| fullportstyle       | null   | 暂无 |
| lastupdatedate      | null   | 暂无 |
| latitudeindicator   | null   | 暂无 |
| longitudeindicator  | null   | 暂无 |
| wsport              | null   | 暂无 |
| portCode            | null   | 暂无 |

## QueryPortDetailResponsePortMedia-港口媒体

| 选项       | 类型   | 描述 |
| ---------- | ------ | ---- |
| portCode   | string | 暂无 |
| mediaUuid  | string | 暂无 |
| mediaType  | number | 暂无 |
| sourceType | number | 暂无 |
| seqNo      | number | 暂无 |

## QueryPortDetailResponsePortPlans-港口计划

| 选项            | 类型   | 描述 |
| --------------- | ------ | ---- |
| rid             | 7171   | 暂无 |
| worldportnumber | string | 暂无 |
| mediaUuid       | string | 暂无 |

## QueryPortDetailResponsePortSupply-港口供应

| 选项         | 类型   | 描述 |
| ------------ | ------ | ---- |
| rid          | number | 暂无 |
| portId       | number | 暂无 |
| bunkersHfo   | number | 暂无 |
| bunkersDoGo  | number | 暂无 |
| bunkersLng   | number | 暂无 |
| freshWater   | number | 暂无 |
| deliveryHfo  | string | 暂无 |
| deliveryDoGo | string | 暂无 |
| deliveryFw   | string | 暂无 |

## QueryPortDetailResponsePortsAuthAddresses-港口验证地址

| 选项             | 类型   | 描述 |
| ---------------- | ------ | ---- |
| fullcompanyname  | string | 暂无 |
| telephone        | string | 暂无 |
| facsimile        | string | 暂无 |
| address          | string | 暂无 |
| officeurl        | string | 暂无 |
| businessarea     | string | 暂无 |
| representationid | number | 暂无 |
| rid              | any    | 暂无 |
| representingorg  | any    | 暂无 |
| officeid         | any    | 暂无 |
| companyname      | any    | 暂无 |
| country          | any    | 暂无 |
| telex            | any    | 暂无 |
| answerback       | any    | 暂无 |
| email            | any    | 暂无 |
| aohtelephone     | any    | 暂无 |
| lastupdate       | any    | 暂无 |
| addressline1     | any    | 暂无 |
| addressline2     | any    | 暂无 |
| addressline3     | any    | 暂无 |
| town             | any    | 暂无 |
| county           | any    | 暂无 |
| postalcode       | any    | 暂无 |

## QueryPortDetailResponsePortsOtherAddresses-港口其他地址

| 选项             | 类型   | 描述 |
| ---------------- | ------ | ---- |
| fullcompanyname  | string | 暂无 |
| telephone        | string | 暂无 |
| facsimile        | string | 暂无 |
| email            | string | 暂无 |
| address          | string | 暂无 |
| officeurl        | string | 暂无 |
| businessarea     | string | 暂无 |
| representationid | number | 暂无 |
| rid              | any    | 暂无 |
| representingorg  | any    | 暂无 |
| officeid         | any    | 暂无 |
| companyname      | any    | 暂无 |
| country          | any    | 暂无 |
| telex            | any    | 暂无 |
| answerback       | any    | 暂无 |
| aohtelephone     | any    | 暂无 |
| lastupdate       | any    | 暂无 |
| addressline1     | any    | 暂无 |
| addressline2     | any    | 暂无 |
| addressline3     | any    | 暂无 |
| town             | any    | 暂无 |
| county           | any    | 暂无 |
| postalcode       | any    | 暂无 |

## QueryPortDetailResponseRelatedPorts-相关港口

| 选项                | 类型   | 描述 |
| ------------------- | ------ | ---- |
| worldportnumber     | string | 暂无 |
| portname            | string | 暂无 |
| status              | string | 暂无 |
| masterpoid          | string | 暂无 |
| country             | string | 暂无 |
| timezone            | string | 暂无 |
| rid                 | number | 暂无 |
| portid              | number | 暂无 |
| latitudedecimal     | number | 暂无 |
| longitudedecimal    | number | 暂无 |
| altName             | any    | 暂无 |
| masterPortName      | any    | 暂无 |
| unlocode            | any    | 暂无 |
| ctrycode            | any    | 暂无 |
| countrycode         | any    | 暂无 |
| countrycodeimo      | any    | 暂无 |
| countrycodeiso2     | any    | 暂无 |
| countrycodeiso3     | any    | 暂无 |
| countrycodeisono    | any    | 暂无 |
| regionname          | any    | 暂无 |
| daylightsavingtime  | any    | 暂无 |
| maximumdraft        | any    | 暂无 |
| maxdwt              | any    | 暂无 |
| maxloa              | any    | 暂无 |
| maxbeam             | any    | 暂无 |
| maxoffshoredraught  | any    | 暂无 |
| maxoffshoredwt      | any    | 暂无 |
| maxoffshoreloa      | any    | 暂无 |
| maxoffshorebcm      | any    | 暂无 |
| drybulkfacilities   | any    | 暂无 |
| breakbulkfacilities | any    | 暂无 |
| drydockfacilities   | any    | 暂无 |
| containerfacilities | any    | 暂无 |
| liquidfacilities    | any    | 暂无 |
| lngfacilities       | any    | 暂无 |
| lpgfacilities       | any    | 暂无 |
| freetradezone       | any    | 暂无 |
| ispscompliant       | any    | 暂无 |
| csicompliant        | any    | 暂无 |
| ecoport             | any    | 暂无 |
| emissioncontrolarea | any    | 暂无 |
| alternativename     | any    | 暂无 |
| continentname       | any    | 暂无 |
| fullportstyle       | any    | 暂无 |
| lastupdatedate      | any    | 暂无 |
| latitudeindicator   | any    | 暂无 |
| longitudeindicator  | any    | 暂无 |
| passengerfacilities | any    | 暂无 |
| rorofacilities      | any    | 暂无 |
| wsport              | any    | 暂无 |
| portCode            | any    | 暂无 |
