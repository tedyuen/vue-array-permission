import { VueArrayPermission } from '../src/vue-array-permission'
describe('permission test', () => {
  let per = new VueArrayPermission()
  per.authorize(['a', 'b', 'c'])
  it('verifyAnd test', () => {
    expect(per.vAnd(['a', 'b'])).toBeTruthy()
    expect(per.vAnd(['a', 'b', 'c', 'd'])).toBeFalsy()
    expect(per.vAnd(['a', 'd'])).toBeFalsy()
  })
  it('verifyOr test', () => {
    expect(per.vOr(['a', 'd'])).toBeTruthy()
    expect(per.vOr(['e', 'd'])).toBeFalsy()
  })
})
