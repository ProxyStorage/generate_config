'use strict'
const nodeNameBlackList = ['流量', '到期', '订阅', ' ISP：', '重置', '剩余', '套餐', 'Traffic', 'Expire']
const { getMagnification } = require('../utils/reName')

module.exports = {
  url: 'http://127.0.0.1:3000/download/collection/node?target=ClashMeta',
  type: 'clash',
  renameNode: (name) => {
    const magnification = getMagnification(name)
    let magnificationText = magnification > 1 ? '↑' : (magnification < 1 && magnification > 0) ? '↓' : ''
    if (name.includes('「🌸」') && name.includes('实验'))
      magnificationText = '↓'

    return name + magnificationText
  },
  nodeFilter: (config) => {
    if (nodeNameBlackList.some(keyword => config.nodeName.includes(keyword)))
      return false
    return true
  },
}
