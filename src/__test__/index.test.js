const randomCity = require("../index.js");

test("Return a random city from a Array", ()=>{
  expect(typeof(randomCity())).toBe("string")
})

// jest src/__test__/index.test.js for only run this test file

describe("testing randomCity() functionality", ()=>{
  test("Return a random city from a Array", ()=>{
    expect(typeof(randomCity())).toBe("string")
  });
  
  test("Verify is Cali not exist", ()=>{
    expect(typeof(randomCity())).not.toMatch(/Cali/);
  });
})