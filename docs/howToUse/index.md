# init 获取鉴权

绝大部分获取数据类 API 都需要在完成初始化获取鉴权后才可使用

## 示例

```ts
async function start(){
  await hnsdk.init({
  user : '账户',
  pass : '密码',
})

// 其它 sdk API 调用
}
```

## 参数

| 入参    | 类型   | 描述     |
| ------- | ------ | -------- |
| options | object | 账户密码 |



## options

| 属性 | 类型   | 描述 |
| ---- | ------ | ---- |
| user | string | 账户 |
| pass | string | 密码 |

## 返回

`Promsie<string>`



