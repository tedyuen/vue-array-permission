/*
 * @Author: Ted Yuen
 * @Date: 2019-11-27 10:52:01
 * @Last Modified by: Ted Yuen
 * @Last Modified time: 2019-11-27 15:18:30
 * @Desc: main entrance
 */
export class VueArrayPermission {
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

  v(permission: string): boolean {
    if (this.permissions) {
      return this.permissions.findIndex(item => item === permission) === -1 ? false : true
    } else {
      return false
    }
  }

  vAnd(permission: Array<string>): boolean {
    if (permission && this.permissions) {
      let flag = true
      for (let temp of permission) {
        if (this.permissions.findIndex(item => item === temp) === -1) {
          flag = false
          break
        }
      }
      return flag
    } else {
      return false
    }
  }

  vOr(permission: Array<string>): boolean {
    if (permission && this.permissions) {
      let flag = false
      for (let temp of permission) {
        if (this.permissions.findIndex(item => item === temp) !== -1) {
          flag = true
          break
        }
      }
      return flag
    } else {
      return false
    }
  }
}

let Plugin = {
  install: function(Vue: any, options?: object) {
    let apermissionIns = new VueArrayPermission()
    Vue.vap = apermissionIns
    Vue.prototype.$vap = apermissionIns
    Vue.directive('ap-show', function(el: any, ref: any, vnode: any) {
      if (!apermissionIns.v(ref.arg)) {
        el.style.display = 'none'
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
    })
  }
}

export default Plugin
