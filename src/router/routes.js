import store from '@state/store'
import List from './views/List'
import Mine from './views/Mine'
import Notice from './views/Notice'

export default [

  //首页
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@views/Home'], resolve),
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: resolve => require(['@views/login'], resolve),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the Home page instead
  //         next({ name: 'Home' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  //登录
  {
    path: '/Login',
    name: 'Login',
    component: resolve => require(['@components/Login'], resolve),
  },
  //注册
  {
    path: '/Regist',
    name: 'Regist',
    component: resolve => require(['@components/Regist'], resolve),
  },
  //忘记密码
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: resolve => require(['@components/ForgetPassword'], resolve),
  },
  //手机验证码登陆
  {
    path: '/PhoneVerificationCodeLogin',
    name: 'PhoneVerificationCodeLogin',
    component: resolve => require(['@components/PhoneVerificationCodeLogin'], resolve),
  },
  //船期首页
  {
    path: '/route/record',
    name: 'Route',
    component: resolve => require(['@views/Route'], resolve),
  },
  
  //船期列表
  {
    path: '/route/:POLPOD/:id',
    name: 'List',
    component: resolve => require(['@views/List'], resolve),
  },
  //船期详情
  {
    path: '/route-detail/:id',
    name: 'Details',
    component: resolve => require(['@views/Details'], resolve),
  },
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => require(['@views/Mine'], resolve),
  },
  {
    path: '/notice',
    name: 'Notice',
    component: resolve => require(['@views/Notice'], resolve),
  },
  {
    path: '/port-cnsha', //上海港区
    name: 'portCnsha',
    component: resolve => require(['@views/ShangHaiPort'], resolve),
  },
  {
    path: '/port-cnsha-detail/:referenceno/:id', //上海港区详情页
    name: 'portCnshaDetail',
    component: resolve => require(['@views/TrackDetail'], resolve),
  },
  {
    path: '/track', //跟踪
    name: 'Track',
    component: resolve => require(['@views/Tracking'], resolve),
  },
  {
    path: '/track-detail/:referenceno/:id', //货物跟踪详情页
    name: 'TrackDetail',
    component: resolve => require(['@views/TrackDetail'], resolve),
  },
  {
    path: '/shippingLine/:id', //航线
    name: 'ShippingLine',
    component: resolve => require(['@views/ShippingLine'], resolve),
  },
  {
    path: '/truck', //集卡
    name: 'setCards',
    component: resolve => require(['@views/SetCards'], resolve),
  },
  {
    path: '/truck/iframe/:basicAuth', //中交兴路
    name: 'Truck',
    component: resolve => require(['@views/Truck'], resolve),
  },
  {
    path: '/truck/iframe/:basicAuth/:truckNo', //中交兴路
    name: 'Truck',
    component: resolve => require(['@views/Truck'], resolve),
  },
  // {
  //   path: '/truck/iframe/:username/:password/:truckNo', //中交兴路
  //   name: 'Truck',
  //   component: resolve => require(['@views/Truck'], resolve),
  // },

  {
    path: '/customer', //下载
    name: 'Customer',
    component: resolve => require(['@views/customer'], resolve),
  },
  {
    path: '/downLoad', //下载
    name: 'DownLoad',
    component: resolve => require(['@views/DownLoad'], resolve),
  },
  {
    path: '/console', //控制台
    name: 'Console',
    component: resolve => require(['@views/Console'], resolve),
  },
  {
    path: '/vessel', //船舶定位
    name: 'vessel',
    component: resolve => require(['@views/Shipdt'], resolve),
  },
  {
    path: '/vessel/iframe/:basicAuth/:shipparma', //船舶定位
    name: 'vesselifream',
    component: resolve => require(['@views/ShipIfream'], resolve),
  },
  {
    path: '/vessel/iframe/:basicAuth', //船舶定位
    name: 'vesselifream',
    component: resolve => require(['@views/ShipIfream'], resolve),
  },
  {
    path: '/introduction', //简介
    name: 'Introduction',
    component: resolve => require(['@views/Introduction'], resolve),
  },
  {
    path: '/contactUs', //联系我们
    name: 'ContactUs',
    component: resolve => require(['@views/ContactUs'], resolve),
  },
  {
    path: '/api', //API
    name: 'API',
    component: resolve => require(['@views/Dataser'], resolve),
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: resolve => require(['@views/register'], resolve),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the Home page instead
  //         next({ name: 'Home' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/confirm-account',
  //   name: 'confirm-account',
  //   component: resolve => require(['@views/confirm'], resolve),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the Home page instead
  //         next({ name: 'Home' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/forget-password',
  //   name: 'forget-password',
  //   component: resolve => require(['@views/forgetPassword'], resolve),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the Home page instead
  //         next({ name: 'Home' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   meta: {
  //     authRequired: true,
  //     beforeResolve(routeTo, routeFrom, next) {
  //       store.dispatch('auth/logOut')
  //       const authRequiredOnPreviousRoute = routeFrom.matched.some(
  //         (route) => route.meta.authRequired
  //       )
  //       // Navigate back to previous page, or Home as a fallback
  //       next(authRequiredOnPreviousRoute ? { name: 'Home' } : { ...routeFrom })
  //     },
  //   },
  // },
  {
    path: '/404',
    name: '404',
    component: require('@views/_404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
