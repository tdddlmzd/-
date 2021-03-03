import Vue from 'vue'
import App from './app'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@router'
import store from '@state/store'
import global_ from '@components/_globals'
import "@assets/css/layout.css"
import "@assets/css/layout.scss"
import '@components/$axios'

import dispatch, { getParameters, handleParameter, clearParameters } from "@assets/js/dispatch";

import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui';
import Bus from '@components/Bus/index.js';
import $ from "jquery";
import BootstrapVue from 'bootstrap-vue'
import '@babel/polyfill';
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()
import CryptoJS from "crypto-js";
import validate from "@components/validate.js";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//中英文插件
import VueI18n from 'vue-i18n';
// 根据中文得到英文
import pinyin from 'js-pinyin'
import SockJS from "sockjs-client";
import Stomp from "stompjs";
// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

const getCookie = (name) => {
    try {
        let o = JSON.parse(localStorage[name])
        if (!o || o.expires < Date.now()) {
            return null
        } else {
            return o.value
        }
    } catch (e) {
        // 兼容其他localstorage
        // console.log(e)
        return localStorage[name]
    } finally {
    }
}

if (window.require) {
    var ipcRender = window.require("electron").ipcRenderer;
    // ipcRender.send("trace-message", "Tracking information will be pushed.");
}
Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./common/lang/zh'),   // 中文语言包
        'en-US': require('./common/lang/en')    // 英文语言包
    },
    silentTranslationWarn: true
});


// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
    // Ensure tests fail when Vue emits an error.
    Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

Vue.use(Bus);
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
Viewer.setDefaults({
    "inline": false,
    "button": false,
    "navbar": false,
    "title": false,
    "toolbar": true,
    "tooltip": true,
    "movable": true,
    "zoomable": true,
    "rotatable": true,
    "scalable": true,
    "transition": true,
    "fullscreen": true,
    "keyboard": true,
    "url": "data-source"
});
import title from '@components/title'
Vue.directive('title', title)
//自定义全局常量
Vue.prototype.urlLocal = window.location.host ? window.location.host.toUpperCase() : ''
Vue.prototype.GLOBAL = global_
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
//客户端下载地址
Vue.prototype.clientUrl = 'https://download.ijingzhun.com/download/latest'
//谷歌地图
Vue.prototype.mapUrl = 'https://map.ijingzhun.com/vt?lyrs=m@189&gl=cn&hl=zh-CN&x={x}&y={y}&z={z}'
//true为网站 false 为客户端
Vue.prototype.webClient = true
//全局报错反馈 联系客服
Vue.prototype.contactCustomer = function () {
    if (this.webClient) {
        //web端
        window.open("https://tb.53kf.com/code/client/638bf58335176d932b75ab10e96545745/1", '_blank')
    } else {
        //客户端
        this.$router.push({
            path: '/customer'
        })
    }
}

// 设置参数
Vue.prototype.setParams = function (data) {
    var that = this
    var md5 = ''
    $.ajax({
        url: that.GLOBAL.url + "schedules/web/set",
        type: "POST",
        async: false,
        data: JSON.stringify(data),
        headers: {
            Authorization: that.getToken(),
            "Content-Type": "application/json"
        },
        success: function (data) {
            if (data.content) { //有值
                md5 = data.content
            } else {
                that.$router.push({
                    path: '/'
                });
            }
        }
    })
    return md5
    // return new Promise((resolve, reject) => {
    //   that.$Axios.post(that.GLOBAL.url + "schedules/web/set",JSON.stringify(data), {
    //     headers: {
    //         Authorization: this.getToken(),
    //         "Content-Type": "application/json"
    //   },
    //   }).then((res) => {
    //     if(res.data.content){
    //       resolve(res.data.content)
    //     }else{
    //       that.$router.push({
    //         path: '/'
    //       })
    //     }
    //   })
    // })
}

// 设置参数
Vue.prototype.getParams = function (md5) {
    var that = this;
    var json = {};
    $.ajax({
        url: that.GLOBAL.url + `schedules/web/get?md5=${md5}`,
        type: "GET",
        async: false,
        headers: {
            Authorization: that.getToken()
        },
        success: function (data) {
            if (data.content) {
                json = data.content
            } else {
                that.$router.push({
                    path: '/'
                });
            }
        }
    });
    return json;
}

// 获取token
Vue.prototype.getToken = function () {
    var that = this;
    var authorization
    if (this.getCookie('gateway_token')) {
        authorization = this.getCookie('gateway_token');
    } else {
        authorization = null
    }


    //如果token失效重新获取
    if (authorization == null) {
        $.ajax({
            url: that.GLOBAL.url + "auth/oauth/token?grant_type=client_credentials",
            type: "POST",
            async: false,
            headers: {
                Authorization: 'Basic YXBwOnNlY3JldA=='
            },
            success: function (data) {
                if (data.access_token) {
                    authorization = "Bearer " + data.access_token;
                    //保存6小时
                    that.setCookie('gateway_token', authorization, data.expires_in);
                } else {
                    that.$message({
                        message: that.$t('messages.getTokenFailed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            },
            error: function () {
                that.$message({
                    message: that.$t('messages.erverException'),
                    type: "error",
                    customClass: "base-message-zindex"
                });
            }
        });
    }
    return authorization;
}


function toByteArray(basicAuth) {
    const _parse = CryptoJS.enc.Base64.parse, _this = Object.assign(Object.create(CryptoJS.enc.Base64), {_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='});
    const words = _parse.call(_this, basicAuth).words, cross = [];
    for(let ch of words) {
        const chunk = [];
        for (let i = 0; i < 4; i++) {
            chunk.unshift(ch & 0xff);
            ch = ch >>> 8;
        }
        cross.push(...chunk);
    }
    return cross;
}

function toWordArray(byteArray) {
    let newArray = [], i = 0, n = 0, k = 0;
    while (i < byteArray.length) {
        n = n << 8 | byteArray[i++];
        k++;
        if (k === 4) {
            newArray.push(n);
            n = 0;
            k = 0;
        }
    }
    return CryptoJS.lib.WordArray.create(newArray)
}


function decrypt(basicAuth) {
    if(basicAuth) {
        let cross = toByteArray(basicAuth), keys = [], encrypt = [];
        for(let i = 0; i < cross.length; i++) {
            if(i % 2 || keys.length >= 16) {
                encrypt.push(cross[i]);
            } else {
                keys.push(cross[i]);
            }
        }

        keys = toWordArray(keys);
        encrypt = toWordArray(encrypt);

        return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(CryptoJS.lib.CipherParams.create({ciphertext: encrypt}), keys, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })).toString();
    }
}

// 获取船舶定位token
Vue.prototype.getVesselToken = function (basicAuth) {
    var that = this;
    var authorization
    if (this.getCookie('vessel_token')) {
        authorization = this.getCookie('vessel_token');
    } else {
        authorization = null
    }

    //如果token失效重新获取
    if (authorization == null) {
        $.ajax({
            url: that.GLOBAL.url + `auth/oauth/token?grant_type=client_credentials`,
            type: "POST",
            async: false,
            headers: {
                authorization: 'Basic ' + decrypt(basicAuth)
                // authorization: 'Basic ' + basicAuth
            },
            success: function (data) {
                for (let i = 0; i < data.roles.length; i++) {
                    if (data.roles[i].authority == 'ais:iframe') {
                        if (data.access_token) {
                            authorization = "Bearer " + data.access_token;
                            //保存6小时
                            that.setCookie('vessel_token', authorization, data.expires_in);
                        } else {
                            that.$message({
                                message: that.$t('messages.getTokenFailed'),
                                type: "error",
                                customClass: "base-message-zindex"
                            });
                        }
                        return
                    }
                }
                that.$message({
                    message: that.$t('messages.contactAdmin'),
                    type: "error",
                    customClass: "base-message-zindex"
                });
            },
            error: function (data) {
                if (data.status == '401' || data.status == '403') {
                    that.$message({
                        message: that.$t('messages.contactAdmin'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                } else {
                    that.$message({
                        message: that.$t('messages.erverException'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            }
        });
    }
    return authorization;
}

//获取 拖车 token
Vue.prototype.getTruckToken = function (basicAuth) {
    var that = this;
    var authorization
    if (this.getCookie('truck_token')) {
        authorization = this.getCookie('truck_token');
    } else {
        authorization = null
    }


    //如果token失效重新获取
    if (authorization == null) {
        $.ajax({
            url: that.GLOBAL.url + `auth/oauth/token?grant_type=client_credentials`,
            type: "POST",
            headers: {
                authorization: 'Basic ' + decrypt(basicAuth)
                // authorization: 'Basic ' + basicAuth
            },
            async: false,
            success: function (data) {
                if (data.access_token) {
                    authorization = "Bearer " + data.access_token;
                    //保存6小时
                    that.setCookie('truck_token', authorization, data.expires_in);
                } else {
                    that.$message({
                        message: that.$t('messages.getTokenFailed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            },
            error: function (data) {
                if (data.status == '401') {
                    that.$message({
                        message: that.$t('messages.contactAdmin'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                } else if (data.status == '403') {

                } else {
                    that.$message({
                        message: that.$t('messages.erverException'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            }
        });
    }
    return authorization;
}

/**
 * 关闭loading
 */
Vue.prototype.loading = {
    closeAll: function (context) {
        getChildrens(context.$children)
    }
}

function getChildrens(childrens) {
    for (let index = 0; index < childrens.length; index++) {
        const element = childrens[index];
        if (element.loading) {
            element.loading = false;
        }
        if (element.$children.length > 0) {
            getChildrens(element.$children);
        }
    }
}

const toLogin = (redirect) => {
    // if (typeof redirect === 'function') {
    //     redirect = redirect();
    // }
    router.push({
        name: 'Login',
        params: {
            redirect
        }
    })
}

Vue.prototype.sampleData = function (val, redirect) {
    //val == 1 // 温馨提示：游客暂不支持此项查询，登录后可体验更多哦~  去登录'
    //var == 2 // 温馨提示：用户为登录只能查询示例 若想查询其他 请登录
    var that = this
    var messages = ''
    if(val == 1){
        messages = 'messages.searchTips'
    }else if(val == 2){
        messages = 'messages.sampleTips'
    }
    that.$alert(that.$t(messages), that.$t('messages.Tips'), {
        confirmButtonText: that.$t('messages.determine'),
        cancelButtonText: that.$t('messages.cancel'),
        customClass: 'messages_customClass',
        center: true,
        showClose: true
    })
        .then(() => {
            toLogin(redirect);
        })
        .catch(() => {
        });
}
//加载js
// Vue.prototype.loadJs = function (url, _callback_success, _callback_fail) {
//   var callback_success = function (response) {
//   };
//   var callback_fail = function (response) {
//   };
//   _callback_success = _callback_success || callback_success;
//   _callback_fail = _callback_fail || callback_fail;
//   $.getScript(url)
//     .done(_callback_success)
//     .fail(_callback_fail);
// }
//根据中文得到英文
Vue.prototype.getPinYin = function (val) {
    pinyin.setOptions({ checkPolyphone: false, charCase: 0 });
    return pinyin.getFullChars(val)
}
//处理节点信息
Vue.prototype.getNodeIndex = function (data) {
    let weekList = {
        'BKCF': 1, //'订舱',
        'EPRL': 2, //'放箱',
        'STSP': 3, //'提空箱',
        'FCGI': 4, //'返场',
        'CGGI': 5, //'入货',
        'CLOD': 6, //'封箱',
        'CYTC': 7, //'集港',
        'GITM': 8, //'进港',
        'PASS': 9, //'海放',
        'TMPS': 10, //'码放',
        'PRLD': 11, //'配载',
        'LOBD': 12, //'上船',
        'DLPT': 13, //'离港',
        'TSGT': 13.5, //中转进场
        'TSDP': 14, //'中转开航',
        'TSLB': 15, //'中转装船',
        'TSBA': 16, //'中转抵港',
        'TSCA': 16.5, //中转停泊
        'TSDC': 17, //'中转卸船',
        'BDAR': 18, //'到港',
        'POCA': 18.5, //停泊
        'DSCH': 19, //'卸船',
        'IRLB': 20, //铁路
        'IRDP': 21, //铁路
        'IRAR': 22, //铁路
        'IRDS': 23, //铁路
        'STCS': 24, //'提货',
        'RCVE': 25, //'还空',
        'SUOT': 26, //'退关',
        'CUIP': 27, //'查验',
    };
    if (weekList[data]) {
        return weekList[data]
    } else {
        return ''
    }
}
//sha256加密
Vue.prototype.CryptoJS = CryptoJS

//验证
Vue.prototype.validate = validate


Vue.prototype.setCookie = function (key, value, second) {
    // 设置过期原则
    if (!value) {
        localStorage.removeItem(key)
    } else {
        var seconds = second || 86400; // 默认保留1天
        var exp = new Date();
        localStorage[key] = JSON.stringify({
            value,
            expires: exp.getTime() + seconds * 1000
        })
    }
}
//读取cookies
Vue.prototype.getCookie = getCookie;
//删除cookies
Vue.prototype.delCookie = function (key) {
    localStorage.removeItem(key)
}

// websocket连接
Vue.prototype.createsocket = function () {
    // debugger
    var that = this;
    // var socket = new SockJS("http://localhost:9003/wechatWebsocket");
    var socket = new WebSocket(
        that.GLOBAL.socketUrl + that.userId
    );
    socket.onopen = function () {
        console.log("open");
    };

    socket.onmessage = function (e) {
        if (e.data != "SUCCESS") {
            that.ipcRender(e.data);
        }
    };

    socket.onclose = function () {
        console.log("close");
        setTimeout(() => {
            that.createsocket();
        }, 200);
    };
    that.GLOBAL.tracksocket = socket;
};

Vue.prototype.ipcRender = function (data) {
    // console.log(data);
    if (window.require) {
        ipcRender.send("trace-message", JSON.parse(data)); //}); //}
    }
};

(async () => {
    const userInfo = getCookie("authId");

    if (handleParameter() === 'reload') {
        return;
    }

    if (Vue.prototype.urlLocal.includes("TRACK")) {
        clearParameters();
    }

    let parameters = getParameters();

    if (parameters) {
        await dispatch(parameters, !!userInfo, new Vue({ router, store, i18n }))
    }

    // 百度统计
    router.beforeEach((to, from, next) => {
        if (to.path) {
            _hmt.push(['_trackPageview', '/#' + to.fullPath]);
        }
        next();
    });

    router.beforeEach((to, from, next) => {
        if (from.params.redirect && !to.params.redirect) {
            if (['Login', 'Regist', 'PhoneVerificationCodeLogin', 'ForgetPassword'].includes(to.name)) {
                return next({
                    name: to.name,
                    params: {
                        ...to.params,
                        redirect: from.params.redirect
                    },
                    query: to.query
                })
            }
        }
        next();
    });

    const app = new Vue({
        router,
        store,
        i18n,
        render: (h) => h(App),
    }).$mount('#app')

    // If running e2e tests...
    if (process.env.VUE_APP_TEST === 'e2e') {
        // Attach the app to the window, which can be useful
        // for manually setting state in Cypress commands
        // such as `cy.logIn()`.
        window.__app__ = app
    }
})();