(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueArrayPermission = factory());
}(this, (function () { 'use strict';

  /*
   * @Author: Ted Yuen
   * @Date: 2019-11-27 10:52:01
   * @Last Modified by: Ted Yuen
   * @Last Modified time: 2019-11-27 12:15:35
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
          Vue.directive('permission', function (el, binding) {
              if (typeof binding.expression === 'string') {
                  if (apermissionIns.hasPermission(binding.expression)) {
                      el.style.display = 'none';
                  }
                  else {
                      el.style.display = 'block';
                  }
              }
          });
      }
  };

  return Plugin;

})));
//# sourceMappingURL=vue-array-permission.umd.js.map
