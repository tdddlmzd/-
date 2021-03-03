import router from "@router/index";
import {isFunction, isPlainObject} from 'lodash';

const routes = ['Login', 'Regist', 'PhoneVerificationCodeLogin', 'ForgetPassword'];

router.beforeEach((to, from, next) => {
    if(from.params.initParameters && !to.params.initParameters && routes.includes(to.name)) {
        return next({
            name: to.name,
            query: to.query,
            params: Object.assign({}, to.params, {initParameters: from.params.initParameters})
        });
    }
    next();
});

const replace = (location) => {
    return new Promise(resolve => {
        router.replace(location, () => resolve(true), () => resolve(false));
    });
}

const importDefault = object => object.default || object;

let parameters;


export const handleParameter = () => {
    let query = location.search || '';
    if (query.startsWith('?')) {
        query = query.substring(1);
    }
    if (query) {
        if (isFunction(history.replaceState)) {
            history.replaceState(null, null, location.pathname);
        } else {
            location.search = '';
            localStorage.setItem('initParameters', query);
            return 'reload';
        }
    }

    query = query || localStorage.getItem('initParameters');

    if (query) {
        query = require('qs').parse(query);

        if (/\d+/.test(query['start'])) {
            query['start'] = new Date(parseInt(query['start']));
        }
        localStorage.removeItem('initParameters');

        return parameters = query;
    }
};

export const getParameters = () => {
    return routes.includes(router.currentRoute.name) ? router.currentRoute.params.initParameters : parameters;
}

export const clearParameters = () => parameters = null;


export default async function (parameter, isLogin, extra) {
    const {activeName} = parameter;

    if (['schedule', 'track', 'shipdt'].includes(activeName)) {

        if (activeName === 'shipdt') {
            return await replace({name: 'vessel'});
        }

        if (isLogin) {
            // 已登录
            let comp = importDefault(await import('@components/HomeSearch'));

            let vm = extra || {};

            if (isPlainObject(comp)) {
                vm = Object.assign(Object.create(vm), {
                    goSearch: comp.goSearch,
                    trackFollow: comp.trackFollow
                });

                if (isFunction(comp.data)) {
                    vm = Object.assign(Object.create(vm), comp.data.call(extra));
                }
            }

            vm = Object.create(Object.assign(Object.create(vm), parameter));

            const map = {
                schedule: 'goSearch',
                track: 'trackFollow'
            }

            try {
                let route = await vm[map[activeName]].call(vm);
                if (isFunction(route)) {
                    route = route();
                }
                return await replace(route);
            } catch (e) {

            }
        } else {
            // 未登录
            return await replace({
                name: 'Login', params: {
                    initParameters: parameter
                }
            });
        }
    }
}
