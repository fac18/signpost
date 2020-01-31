import getData from './getData'

jest.mock('./getData')

test('test equality', () => {
  return getData('Shelter').then(res => {
    expect(res.records[0].id).toEqual(`recGIFLNsg1SO6EVo`)
  })
})
