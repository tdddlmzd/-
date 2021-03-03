// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    // Look for files in the current directory
    '.',
    // Do not look in subdirectories
    false,
    // Only include "_base-" prefixed .vue files
    /_base-[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
        // Get the PascalCase version of the component name
    const componentName = upperFirst(
            camelCase(
                fileName
                // Remove the "./_" from the beginning
                .replace(/^\.\/_/, '')
                // Remove the file extension from the end
                .replace(/\.\w+$/, '')
            )
        )
        // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})

let client_id = "jingzhun";
let client_secret = "jingzhun2020";
let basic_auth = "Basic YXBwOnNlY3JldA==";

//批量模板下载地址
const excelUrl = "https://jingzhun.s3.cn-northwest-1.amazonaws.com.cn/";

//实名认证图片
let basic_icon = 'https://s3.cn-northwest-1.amazonaws.com.cn/xdata'
    // 服务器地址

//测试地址
let url = "http://gateway.test.ijingzhun.com/"; //测试环境地址
let socketUrl = "ws://ms.test.ijingzhun.com/websocket?user="  //测试

// 线上地址
// let url = "https://api.ijingzhun.com/"; //正式环境地址
// let socketUrl = "wss://ms.ijingzhun.com/websocket?user=" //线上

//其他地址
// let url = "http://192.168.1.8:9000/"; //王宁本地
// let url = "http://192.168.1.47:9000/"; //义斌本地
// let url = "http://192.168.1.72:9000/"; //宋颖本地
// let url = "http://192.168.1.37:9000/"; //吴本地
// let url = "http://192.168.1.12:9000/"; //朱本地
// let url = "http://192.168.1.42:9000/"; //振本地
// let url = "http://192.168.1.126:9000/"; //陈本地

// let url = "http://192.168.1.42:9000/"; //振本地
// let socketUrl = "ws://192.168.1.42:9005/websocket?user="



if (process.env.NODE_ENV === "development") {
    // 如果是开发环境用本地地址
    // 测试地址
    url = "http://gateway.test.ijingzhun.com/"; //测试环境地址
    socketUrl = "ws://ms.test.ijingzhun.com/websocket?user="  //测试

    //线上地址
    // url = "http://120.55.234.41/"; //正式环境地址
    // url = "https://api.ijingzhun.com/"; //正式环境地址
    // socketUrl = "wss://ms.ijingzhun.com/websocket?user=" //线上

    //其他地址
    // url = "http://192.168.1.8:9000/"; //王宁本地
    // url = "http://192.168.1.47:9000/"; //义斌本地
    // url = "http://192.168.1.72:9000/"; //宋颖本地
    // url = "http://192.168.1.37:9000/"; //吴本地
    // url = "http://192.168.1.12:9000/"; //朱本地
    //   url = "http://192.168.1.42:9000/"; //振本地
}



const salt = "NJXngVrIvOkReOolu2MZRl6dJvF8i3Sl";

export default {
    url, //服务器地址,
    salt, //随机数
    excelUrl, //批量模板下载地址
    socketUrl,
    tracksocket: null, //socket 变量
    client_id,
    client_secret,
    basic_auth,
    basic_icon
};