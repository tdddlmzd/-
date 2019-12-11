import store from '@state/store'
import List from './views/List'
import Mine from './views/Mine'
import Notice from './views/Notice'

export default [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@views/Home'], resolve),
    // meta: {
    //   authRequired: true,
    // },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
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
  {
    path: '/list/:pol/:polId/:pod/:podId/:start/:dateType/:t',
    name: 'List',
    component: resolve => require(['@views/List'], resolve)
  },
  {
    path: '/details/:pol/:polId/:pod/:podId/:vessel/:voyage/:dateType/:start/:id/:isTransit/:isGc/:startTime/:endTime',
    name: 'Details',
    component: resolve => require(['@views/Details'], resolve)
  },
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => require(['@views/Mine'], resolve),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        var reg = new RegExp("(^| )currentUser=([^;]*)(;|$)");
        if (document.cookie.match(reg)){
          next();
        } 
        else {
          next({ name: 'Home' })
        }
      },
    },
  },
  {
    path: '/notice',
    name: 'Notice',
    component: resolve => require(['@views/Notice'], resolve),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        var reg = new RegExp("(^| )currentUser=([^;]*)(;|$)");
        if (document.cookie.match(reg)){
          next();
        } 
        else {
          next({ name: 'Home' })
        }
      },
    },
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
