const getData = require('../utils/getData')

//assuming that there are multiple getData functions, and multiple
//AirTable calls within these e.g. for All data and for data filtered by service type

test('Jest is working', () => {
  expect(true).toBeTruthy()
})

describe('Testing Air Table get calls', () => {
  test('returns all data', () => {
    const results = getData('Welfare')
    expect(results.length).toBeGreaterThan(0)
  })
  test('returns data by showers category', () => {
    const results = getData('Showers')
    expect(results.length).toBeGreaterThan(0)
  })
})
