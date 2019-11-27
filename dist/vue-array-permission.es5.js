/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-27 15:18:30
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
    VueArrayPermission.prototype.v = function (permission) {
        if (this.permissions) {
            return this.permissions.findIndex(function (item) { return item === permission; }) === -1 ? false : true;
        }
        else {
            return false;
        }
    };
    VueArrayPermission.prototype.vAnd = function (permission) {
        if (permission && this.permissions) {
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
        }
        else {
            return false;
        }
    };
    VueArrayPermission.prototype.vOr = function (permission) {
        if (permission && this.permissions) {
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
        Vue.vap = apermissionIns;
        Vue.prototype.$vap = apermissionIns;
        Vue.directive('ap-show', function (el, ref, vnode) {
            if (!apermissionIns.v(ref.arg)) {
                el.style.display = 'none';
            }
            // let value = apermissionIns.hasPermission(ref.arg);
            // vnode = locateNode(vnode);
            // var transition$$1 = vnode.data && vnode.data.transition;         //尝试获取transition，如果v-show绑定的标签外层套了一个transition则会把信息保存到该对象里 这是transition的组件分支，可先忽略 
            // var originalDisplay = el.__vOriginalDisplay =                      //保存最初的display属性
            //   el.style.display === 'none' ? '' : el.style.display;
            // if (value && transition$$1) {                                     //如果transition$$1存在的话
            //   vnode.data.show = true;
            //   enter(vnode, function () {
            //     el.style.display = originalDisplay;
            //   });
            // } else {
            //   el.style.display = value ? originalDisplay : 'none';             //否则直接根据value的值是否可以转换为1来设置el.style.display属性
            // }
        });
    }
};

export default Plugin;
export { VueArrayPermission };
//# sourceMappingURL=vue-array-permission.es5.js.map
