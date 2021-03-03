import Vue from 'vue'
import Axios from 'axios'
import router from '@router'
import { Message } from 'element-ui'
import global_ from '@components/_globals'
// 获取token
function getToken() {
    var authorization
    if (localStorage.getItem('gateway_token')) {
        authorization = localStorage.getItem('gateway_token');
    } else {
        authorization = null
    }
    if (authorization == null) {
        $.ajax({
            url: global_.url + "auth/oauth/token?grant_type=client_credentials",
            type: "POST",
            async: false,
            headers: {
                Authorization: 'Basic YXBwOnNlY3JldA=='
            },
            success: function(data) {
                if (data.access_token) {
                    authorization = "Bearer " + data.access_token;
                    //保存6小时
                    localStorage.setItem('gateway_token', authorization, data.expires_in)
                } else {
                    Message({
                        message: that.$t('messages.getTokenFailed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            },
            error: function() {
                Message({
                    message: that.$t('messages.erverException'),
                    type: "error",
                    customClass: "base-message-zindex"
                });
            }
        });
    }
    return authorization;
}

//全局 axios
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status == 401 || error.response.status == 403) {
        localStorage.removeItem("currentUser"); //删除用户信息
        localStorage.removeItem("authId"); // 删除用户id
        localStorage.removeItem("userMobile"); //删除用户名
        localStorage.removeItem("password"); // 删除 密码
        localStorage.removeItem("gateway_token"); // 删除 token
        localStorage.removeItem('userMobile'); // 删除用户登录的用户名/手机号
        localStorage.removeItem('language'); // 删除存储的语言
        localStorage.removeItem('detailList') //删除用户搜索记录
        localStorage.removeItem("updateUserName");
        localStorage.removeItem("currentUser"); //删除登录用户信息
        localStorage.removeItem("authId"); //删除登录用户信息
        localStorage.removeItem('weChat')
        localStorage.removeItem('vessel_token')
        localStorage.removeItem('truck_token')
    }
    if (router.history.current.name == 'Truck' || router.history.current.name == 'vesselifream') { //代表此处是 ifream表单
        if (error.response.status == 401 || error.response.status == 403) {

        }
    } else {
        if (error.response.status == 401) {
            router.push({
                path: '/Login'
            })
        }
        if (error.response.status == 403) {
            // 退出登录使用默认token
            getToken()
                // $(".userinfo-link").css("background-color", "inherit");
                //   $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
                //     "display",
                //     "none"
                //   );
            router.push({
                path: '/Login'
            })
        }
        if (error.response.status == 429) {
            Message({
                    message: "您的操作过于频繁，请稍后再试",
                    type: "warning",
                    customClass: "base-message-zindex"
                })
                //   that.loading.closeAll(that)
        }
    }
    return Promise.reject(error)
})
Vue.prototype.$Axios = Axios