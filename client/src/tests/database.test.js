const getData = require("../utils/getData");

//assuming that there are multiple getData functions, and multiple
//AirTable calls within these e.g. for All data and for data filtered by service type
const getAirTableAll = getData.airTableAll;
const getAirTableByService = getData.airTableByService;

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("Testing Air Table get calls", () => {
  test("returns all data", () => {
    const results = getAirTableAll();
    expect(results.length).toBeGreaterThan(0);
  });
  test("returns data by showers category", () => {
    const results = getAirTableByService();
    expect(results.length).toBeGreaterThan(0);
  });
});
