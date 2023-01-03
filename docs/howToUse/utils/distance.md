# 计算两个经纬度之间的距离

计算两个经纬度之间的距离

## 示例

```typescript
const distanceRes = hnsdk.distance([40,40] , [50,50] , {
  units : 'kilometers'
})

console.log(distanceRes)
```

## 参数

| 入参    | 类型            | 描述                 |
| ------- | --------------- | -------------------- |
| from    | [number,number] | 起始点               |
| to      | [number,number] | 目标点               |
| options | Object          | [可配置项](#options) |

## options

| 选项  | 类型   | 描述                                               |
| ----- | ------ | -------------------------------------------------- |
| units | String | 单位，可选的有 degrees、radians、miles、kilometers |

## 返回

计算后的数字结果
