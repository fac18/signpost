import getData from '../utils/getData'

//assuming that there are multiple getData functions, and multiple
//AirTable calls within these e.g. for All data and for data filtered by service type

test('Jest is working', () => {
  expect(true).toBeTruthy()
})

describe('Testing Air Table recieves calls', () => {
  test('returns all data', () => {
    getData('All').then(res => {
      expect(res.length).toBeGreaterThan(0)
    })
  })
  test('returns data by showers category', () => {
    getData('Showers').then(res => {
      expect(res.length).toBeGreaterThan(0)
    })
  })
  test('test equality', () => {
    getData('Shelter').then(res => {
      expect(res.results).toEqual(`Test`)
    })
  })
  test('test equality', () => {
    const mockResponse = {
      records: [
        {
          id: 'recGIFLNsg1SO6EVo',
          fields: {},
          createdTime: '2020-01-21T17:09:54.000Z',
        },
      ],
    }
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    )
    return getData('Shelter').then(res => {
      expect(res.records[1].id).toEqual(`ecGIFLNsg1SO6Edakjdbahwkd`)
    })
  })
})
