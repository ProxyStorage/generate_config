/**
 * 初始化substore数据
 */

const { initSetting, configAction } = require('../utils/subStore')

const { SUBSTORE_GIT_USER, SUBSTORE_GIST_TOKEN, SUBSTORE_API_URL } = require('../constant/env')

function main() {
  if (SUBSTORE_GIT_USER && SUBSTORE_GIST_TOKEN && SUBSTORE_API_URL) {
    initSetting(SUBSTORE_API_URL, SUBSTORE_GIT_USER, SUBSTORE_GIST_TOKEN).then((r) => {
      if (r)
        configAction(SUBSTORE_API_URL)
    })
  }
}
main()