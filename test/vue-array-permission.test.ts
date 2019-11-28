import { VueArrayPermission } from '../src/vue-array-permission'

describe('permission src test', () => {
  let per = new VueArrayPermission()
  it('unauthorize test', () => {
    expect(per.v('a')).toBeFalsy()
    expect(per.vAnd(['a', 'b'])).toBeFalsy()
    expect(per.vOr(['a', 'b'])).toBeFalsy()
  })
  it('authorize test', () => {
    per.authorize(['a', 'b', 'c'])
    expect(per.getPermission().length).not.toBe(0)
    expect(per.getPermission()).toContain('a')
  })
  it('addPermission pass string test', () => {
    per.authorize(['a', 'b', 'c'])
    per.addPermission('new1')
    expect(per.v('a')).toBeTruthy()
    expect(per.v('new1')).toBeTruthy()
  })
  it('addPermission pass Array test', () => {
    per.authorize(['a', 'b', 'c'])
    per.addPermission(['new2', 'new3'])
    expect(per.v('a')).toBeTruthy()
    expect(per.v('new2')).toBeTruthy()
    expect(per.v('new3')).toBeTruthy()
  })
  it('verify test', () => {
    per.authorize(['a', 'b', 'c'])
    expect(per.v('a')).toBeTruthy()
    expect(per.v('d')).toBeFalsy()
  })
  it('verifyAnd test', () => {
    per.authorize(['a', 'b', 'c'])
    expect(per.vAnd(['a', 'b'])).toBeTruthy()
    expect(per.vAnd(['a', 'b', 'c', 'd'])).toBeFalsy()
    expect(per.vAnd(['a', 'd'])).toBeFalsy()
  })
  it('verifyOr test', () => {
    per.authorize(['a', 'b', 'c'])
    expect(per.vOr(['a', 'd'])).toBeTruthy()
    expect(per.vOr(['e', 'd'])).toBeFalsy()
  })
  it('reset test', () => {
    per.reset()
    expect(per.getPermission().length).toBe(0)
  })
})
