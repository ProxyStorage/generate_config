const hostname = [
  // 其他
  'sub.store',
  // 网易
  'music.163.com',
]
const disableHostName = [
  // apple
  'gateway.icloud.com',
  'gateway.icloud.com.cn',
  'weather-data.apple.com',
  'buy.itunes.apple.com',
  // mac 端 百度云盘客户端
  'pan.baidu.com',
  'update.pan.baidu.com',
  // tg 客户端
  '95.161.76.101',
  // 京东
  'www.jd.com',
  // 腾讯
  'safebrowsing.urlsec.qq.com',
  'wetype.weixin.qq.com',
  // google
  'www.google.com',
  // 其他
  '*.facebook.com',
  '*.instagram.com',
  '*.twitter.com',
  '*.tiktokv.com',
  '*.snssdk.com',
  '*.pstatp.com',
]

const list = []
hostname.forEach((i) => {
  list.push(i)
})
disableHostName.forEach((i) => {
  list.push(i)
  list.push(`-${i}`)
})

module.exports = {
  hostname: list.join(', '),
  disabledHostName: disableHostName.join(', '),
}
