const appConfig = require('./src/app.config')
const webpack = require('webpack')

const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  //本地图片访问
  //publicPath:__dirname+'/dist',
  publicPath:'',

  
  configureWebpack: {
    name: appConfig.title,
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    performance: {
      hints:
        process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&'warning',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      }),
      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, 
        minChunkSize: 100
      })
      // new CompressionWebpackPlugin({
      //   filename: '[path].gz[query]',
      //   algorithm: 'gzip',
      //   test: /\.js$|\.html$|\.json$|\.css/,
      //   threshold: 0, // 只有大小大于该值的资源会被处理
      //   minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
      //   deleteOriginalAssets: true // 删除原文件
      // })
    ],
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
    proxy: { //配置代理，解决跨域请求后台数据的问题
      '/api': {
        target: 'http://127.0.0.1:9000', //后台接口
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api':'/asd'
        }
      }
    }
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
  },
  parallel: require('os').cpus().length > 1, 
  
}
