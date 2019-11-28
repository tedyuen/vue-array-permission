# vue-array-permission

## Install

```bash
$ npm i vue-array-permission --save
```

## Usage

```js
import VueArrayPermission from "vue-array-permission";
Vue.use(VueArrayPermission);

// init permission
Vue.vap.authorize(['test:permission1','test:permission2','test:permission3']);

// Add permission
Vue.vap.addPermission('new:permission');
Vue.vap.addPermission(['new:permission1','new:permission2']);

// clear the permissions.
Vue.vap.reset(); 

// hasPermission ?
Vue.vap.v('test:permission1'); // console.log(true);

Vue.vap.vAnd(['test:permission1','test:permission2']); // console.log(true);
Vue.vap.vAnd(['test:permission1','test:permission4']); // console.log(false);

Vue.vap.vOr(['test:permission1','test:permission4']); // console.log(true);
Vue.vap.vOr(['test:permission4','test:permission5']); // console.log(false);


// If u don't has permission the div will not show. and style visibility hidden.
// Single permission
<div v-ap-v:test="`test:permission1`">Content</div>  // visible
<div v-ap-v:test="`test:permission4`">Content</div>  // hidden

// Multiple permissions 'and'
<div v-ap-vand="['test:permission1','test:permission2']">Content</div> // visible
<div v-ap-vand="['test:permission1','test:permission4']">Content</div> // hidden

// Multiple permissions 'or'
<div v-ap-vor="['test:permission1','test:permission4']">Content</div>
<div v-ap-vor="['test:permission4','test:permission5']">Content</div>

````

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/tedyuen/vue-array-permission/issues).

## License

[MIT](LICENSE)