const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))
  }
  // devServer: {
  // host: 'http://localhost:8080/',
  // open: true,
  // proxy: {
  //   '/api': {
  //     target: '',
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  // }
  // }
}
