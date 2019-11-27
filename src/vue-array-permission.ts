/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-27 14:48:19
 * @Desc: main entrance
 */
class VueArrayPermission {
  permissions?: Array<string>
  constructor() {
    this.reset()
  }

  reset() {
    this.permissions = []
  }

  authorize(permissions: Array<string>): void {
    this.permissions = permissions
  }

  hasPermission(permission: string): boolean {
    if (this.permissions) {
      return this.permissions.findIndex(item => item === permission) === -1 ? false : true
    } else {
      return false
    }
  }
}

let Plugin = {
  install: function(Vue: any, options?: object) {
    let apermissionIns = new VueArrayPermission()
    Vue.apermission = apermissionIns
    Vue.prototype.$apermission = apermissionIns
    Vue.directive('ap-show', function(el: any, binding: any) {
      if (!apermissionIns.hasPermission(binding.arg)) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
      }
    })
  }
}

export default Plugin
