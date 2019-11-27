# vue-array-permission

## Install

```bash
$ npm i vue-array-permission --save
```

## Usage

```js
import VueArrayPermission from "vue-array-permission";

Vue.use(VueArrayPermission);

Vue.apermission.authorize(['test:permission1','test:permission1']);

Vue.apermission.hasPermission('test:permission1'); // console.log(true);

Vue.apermission.reset(); // clear the permissions and god flag.

// if u don't has permission the div will not show. and style display none.
<div v-ap-show:test:permission1></div>
````

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/tedyuen/vue-array-permission/issues).

## License

[MIT](LICENSE)