/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-28 16:37:18
 * @Desc: main entrance
 */
export class VueArrayPermission {
  // permission datas
  permissions: Array<string> = []
  constructor() {
    this.reset()
  }

  getPermission() {
    return this.permissions
  }

  reset() {
    this.permissions = []
  }

  authorize(permissions: Array<string>): void {
    this.permissions = permissions
  }

  addPermission(permission: Array<string> | string): void {
    this.permissions = this.permissions.concat(permission)
  }

  v(permission: string): boolean {
    return this.permissions.findIndex(item => item === permission) === -1 ? false : true
  }

  vAnd(permission: Array<string>): boolean {
    let flag = true
    for (let temp of permission) {
      if (this.permissions.findIndex(item => item === temp) === -1) {
        flag = false
        break
      }
    }
    return flag
  }

  vOr(permission: Array<string>): boolean {
    let flag = false
    for (let temp of permission) {
      if (this.permissions.findIndex(item => item === temp) !== -1) {
        flag = true
        break
      }
    }
    return flag
  }
}
enum TYPE {
  visible,
  hidden
}

let Plugin = {
  install: function(Vue: any, options?: object) {
    let apermissionIns = new VueArrayPermission()
    Vue.vap = apermissionIns
    Vue.prototype.$vap = apermissionIns
    Vue.directive('ap-show', function(el: any, binding: any) {
      el.style.visibility = apermissionIns.v(binding.arg) ? TYPE[TYPE.visible] : TYPE[TYPE.hidden]
    })
    Vue.directive('ap-v', function(el: any, binding: any) {
      el.style.visibility = apermissionIns.v(binding.value) ? TYPE[TYPE.visible] : TYPE[TYPE.hidden]
    })
    Vue.directive('ap-vand', function(el: any, binding: any) {
      el.style.visibility = apermissionIns.vAnd(binding.value)
        ? TYPE[TYPE.visible]
        : TYPE[TYPE.hidden]
    })
    Vue.directive('ap-vor', function(el: any, binding: any) {
      el.style.visibility = apermissionIns.vOr(binding.value)
        ? TYPE[TYPE.visible]
        : TYPE[TYPE.hidden]
    })
  }
}

export default Plugin
