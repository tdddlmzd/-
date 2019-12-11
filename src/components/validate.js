export default class validate {

    /**
     * 判断字符串是否为空
     * @param str
     * @returns {boolean}
     */
    static isNull(str) {
        return str == null || str.length === 0 || str === '';
    }

    /**
     *
     * @desc  判断是否为身份证号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }

    /**
     *
     * @desc   判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isPhone(str) {
        return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
    }

    /**
     *
     * @desc   判断是否为座机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isWorkPhone(str) {
        return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(str)
    }

    /**
     *
     * @desc  判断密码是否合法
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isvalidPassword(str) {
        return /^[\w_-]{6,16}$/.test(str)
    }

    /**
     *
     * @desc  判断邮箱是否合法
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isEmail(str) {
        return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
    }

}
