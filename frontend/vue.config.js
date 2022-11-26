const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
        },
      },
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
  },
})