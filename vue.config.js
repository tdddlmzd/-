const appConfig = require('./src/app.config')
const webpack = require('webpack')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    performance: {
      // Only enable performance hints for production builds,
      // outside of tests.
      hints:
        process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      }),
      // new CompressionWebpackPlugin({
      //   filename: '[path].gz[query]',
      //   algorithm: 'gzip',
      //   test: /\.js$|\.html$|\.json$|\.css/,
      //   threshold: 0, // 只有大小大于该值的资源会被处理
      //   minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
      //   deleteOriginalAssets: true // 删除原文件
      // })
    ]
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  productionSourceMap: false,
  // Configure Webpack's dev server.
  // https://cli.vuejs.org/guide/cli-service.html
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
      { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
      { before: require('./tests/mock-api') }),
  },
  // 处理ie兼容问题
  transpileDependencies: ['webpack-dev-server/client'],
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js'];
    //压缩图片
    // config.module
    //       .rule('images')
    //       .use('image-webpack-loader')
    //       .loader('image-webpack-loader')
    //       .options({
    //         bypassOnDebug: true
    //       })
    //       .end()
  }
  
}
