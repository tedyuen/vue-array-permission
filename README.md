# vue-array-permission

## Install

```bash
$ npm i vue-array-permission --save
```

## Usage

```js
import VueArrayPermission from "vue-array-permission";

Vue.use(VueArrayPermission);

Vue.vap.authorize(['test:permission1','test:permission2','test:permission3']);

Vue.vap.v('test:permission1'); // console.log(true);

Vue.vap.vAnd(['test:permission1','test:permission2']); // console.log(true);
Vue.vap.vAnd(['test:permission1','test:permission4']); // console.log(false);

Vue.vap.vOr(['test:permission1','test:permission4']); // console.log(true);
Vue.vap.vOr(['test:permission4','test:permission5']); // console.log(false);

Vue.vap.reset(); // clear the permissions.

// If u don't has permission the div will not show. and style display none.
// This directive can only be used on the Base Tag like '<div> <span>'.
<div v-ap-show:test:permission1></div>
````

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/tedyuen/vue-array-permission/issues).

## License

[MIT](LICENSE)