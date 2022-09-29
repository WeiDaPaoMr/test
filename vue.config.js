const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8888,
    host: "localhost",
    open: false,
    proxy: {
      // 代理名称
      [process.env.VUE_APP_BASE_API]: {
        // 跨域地址
        target: process.env.VUE_APP_SERVICE_URL,
        // 是否开启跨域
        changeOrigin: true,
        // 重写路径
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})