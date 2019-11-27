/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-27 14:48:19
 * @Desc: main entrance
 */
var VueArrayPermission = /** @class */ (function () {
    function VueArrayPermission() {
        this.reset();
    }
    VueArrayPermission.prototype.reset = function () {
        this.permissions = [];
    };
    VueArrayPermission.prototype.authorize = function (permissions) {
        this.permissions = permissions;
    };
    VueArrayPermission.prototype.hasPermission = function (permission) {
        if (this.permissions) {
            return this.permissions.findIndex(function (item) { return item === permission; }) === -1 ? false : true;
        }
        else {
            return false;
        }
    };
    return VueArrayPermission;
}());
var Plugin = {
    install: function (Vue, options) {
        var apermissionIns = new VueArrayPermission();
        Vue.apermission = apermissionIns;
        Vue.prototype.$apermission = apermissionIns;
        Vue.directive('ap-show', function (el, binding) {
            if (!apermissionIns.hasPermission(binding.arg)) {
                el.style.display = 'none';
            }
            else {
                el.style.display = 'block';
            }
        });
    }
};

export default Plugin;
//# sourceMappingURL=vue-array-permission.es5.js.map
