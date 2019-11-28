/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-28 16:37:18
 * @Desc: main entrance
 */
var VueArrayPermission = /** @class */ (function () {
    function VueArrayPermission() {
        // permission datas
        this.permissions = [];
        this.reset();
    }
    VueArrayPermission.prototype.getPermission = function () {
        return this.permissions;
    };
    VueArrayPermission.prototype.reset = function () {
        this.permissions = [];
    };
    VueArrayPermission.prototype.authorize = function (permissions) {
        this.permissions = permissions;
    };
    VueArrayPermission.prototype.addPermission = function (permission) {
        this.permissions = this.permissions.concat(permission);
    };
    VueArrayPermission.prototype.v = function (permission) {
        return this.permissions.findIndex(function (item) { return item === permission; }) === -1 ? false : true;
    };
    VueArrayPermission.prototype.vAnd = function (permission) {
        var flag = true;
        var _loop_1 = function (temp) {
            if (this_1.permissions.findIndex(function (item) { return item === temp; }) === -1) {
                flag = false;
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, permission_1 = permission; _i < permission_1.length; _i++) {
            var temp = permission_1[_i];
            var state_1 = _loop_1(temp);
            if (state_1 === "break")
                break;
        }
        return flag;
    };
    VueArrayPermission.prototype.vOr = function (permission) {
        var flag = false;
        var _loop_2 = function (temp) {
            if (this_2.permissions.findIndex(function (item) { return item === temp; }) !== -1) {
                flag = true;
                return "break";
            }
        };
        var this_2 = this;
        for (var _i = 0, permission_2 = permission; _i < permission_2.length; _i++) {
            var temp = permission_2[_i];
            var state_2 = _loop_2(temp);
            if (state_2 === "break")
                break;
        }
        return flag;
    };
    return VueArrayPermission;
}());
var TYPE;
(function (TYPE) {
    TYPE[TYPE["visible"] = 0] = "visible";
    TYPE[TYPE["hidden"] = 1] = "hidden";
})(TYPE || (TYPE = {}));
var Plugin = {
    install: function (Vue, options) {
        var apermissionIns = new VueArrayPermission();
        Vue.vap = apermissionIns;
        Vue.prototype.$vap = apermissionIns;
        Vue.directive('ap-v', function (el, binding) {
            el.style.visibility = apermissionIns.v(binding.value) ? TYPE[TYPE.visible] : TYPE[TYPE.hidden];
        });
        Vue.directive('ap-vand', function (el, binding) {
            el.style.visibility = apermissionIns.vAnd(binding.value) ? TYPE[TYPE.visible] : TYPE[TYPE.hidden];
        });
        Vue.directive('ap-vor', function (el, binding) {
            el.style.visibility = apermissionIns.vOr(binding.value) ? TYPE[TYPE.visible] : TYPE[TYPE.hidden];
        });
    }
};

export default Plugin;
export { VueArrayPermission };
//# sourceMappingURL=vue-array-permission.es5.js.map
