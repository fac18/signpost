import getData from '../utils/getData'

//assuming that there are multiple getData functions, and multiple
//AirTable calls within these e.g. for All data and for data filtered by service type

test('Jest is working', () => {
  expect(true).toBeTruthy()
})

describe('Testing Air Table get calls', () => {
  test('returns all data', () => {
    getData('Welfare').then(res => {
      expect(res.length).toBeGreaterThan(0)
    })
  })
  test('returns data by showers category', () => {
    getData('Showers').then(res => {
      expect(res.length).toBeGreaterThan(0)
    })
  })
})
