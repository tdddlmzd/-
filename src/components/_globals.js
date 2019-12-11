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


// 服务器地址
let url = "http://192.168.0.199:8099/";
if (process.env.NODE_ENV === "development") {
  // 如果是开发环境用本地地址
  url = "https://data.360fob.com/";
}
const salt = "NJXngVrIvOkReOolu2MZRl6dJvF8i3Sl";

export default {
  url, //服务器地址,
  salt,//随机数
};
