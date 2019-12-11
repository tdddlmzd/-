import Vue from 'vue'
import App from './app'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@router'
import store from '@state/store'
import global_ from '@components/_globals'
import {
  Pagination, Dialog, Autocomplete, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem, MenuItemGroup, Input, InputNumber, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup, Switch, Select, Option, OptionGroup, Button, ButtonGroup, Table, TableColumn, DatePicker, TimeSelect, TimePicker, Popover, Tooltip, Breadcrumb, BreadcrumbItem, Form, FormItem, Tabs, TabPane, Tag, Tree, Alert, Slider, Icon, Row, Col, Upload, Progress, Spinner, Badge, Card, Rate, Steps, Step, Carousel, CarouselItem, Collapse, CollapseItem, Cascader, ColorPicker, Transfer, Container, Header, Aside, Main, Footer, Timeline, TimelineItem, Link, Divider, Image, Calendar, Backtop, PageHeader, CascaderPanel, Loading, MessageBox, Message, Notification
} from 'element-ui';

import $ from "jquery";
import BootstrapVue from 'bootstrap-vue'
import '@babel/polyfill';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import CryptoJS from "crypto-js";
import validate from "@components/validate.js";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);
Vue.use(ElementUI);
Vue.use(BootstrapVue);

Vue.use(Viewer);
Viewer.setDefaults({ "inline": false, "button": false, "navbar": false, "title": false, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" });

//自定义全局常量
Vue.prototype.GLOBAL = global_

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

// 获取token
// Vue.prototype.getToken = function () {
//   var that = this;
//   var authorization = ""
//   $.ajax({
//     url: that.GLOBAL.url + "auth/token?username=webCustomer&password=123456",
//     type: "GET",
//     async: false,
//     success: function (data) {
//       if (data.status == 1 && data.message == 'SUCCESS') {
//         authorization = 'Bearer ' + data.content
//       } else {
            // that.$message({
            //   message: "获取token失败",
            //   type: "error",
            //   customClass: "base-message-zindex"
            // });
//       }
//     },
//     error: function () {
//       that.$message({
//   message: "服务器异常",
//   type: "error",
//   customClass: "base-message-zindex"
// });
//     }
//   });
//   return authorization;
// }


// 获取token
Vue.prototype.getToken = function () {
  var that = this;
  var authorization = this.getCookie('gateway_token');
  //如果token失效重新获取
  if (authorization == null) {
    $.ajax({
      url: that.GLOBAL.url + "auth/token?username=webCustomer&password=" + that.CryptoJS.SHA256("123456" + that.GLOBAL.salt).toString(),
      type: "GET",
      async: false,
      success: function (data) {
        if (data.status == 1 && data.message == 'SUCCESS') {
          authorization = 'Bearer ' + data.content;
          //保存6小时
          that.setCookie('gateway_token', authorization, 0.25);
        } else {
          that.$message({
            message: "获取token失败",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      },
      error: function () {
        that.$message({
          message: "服务器异常",
          type: "error",
          customClass: "base-message-zindex"
        });
      }
    });
  }
  return authorization;
}

//加载js
Vue.prototype.loadJs = function (url, _callback_success, _callback_fail) {
  var callback_success = function (response) {
  };
  var callback_fail = function (response) {
  };
  _callback_success = _callback_success || callback_success;
  _callback_fail = _callback_fail || callback_fail;
  $.getScript(url)
    .done(_callback_success)
    .fail(_callback_fail);
}

//sha256加密
Vue.prototype.CryptoJS = CryptoJS

//验证
Vue.prototype.validate = validate

//写cookies
Vue.prototype.setCookie = function (name, value, day) {
  if (day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
  } else {
    document.cookie = name + "=" + escape(value) + ';path=/';
  }
}
//读取cookies
Vue.prototype.getCookie = function (name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
//删除cookies
Vue.prototype.delCookie = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1000);
  var cval = this.getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toGMTString();
}

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
