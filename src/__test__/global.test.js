// =========== Str 
let str = 'Hello sexy'
test("Input have the word: Hello", ()=>{
  expect(str).toMatch(/Hello/);
  expect(str).toMatch(/sexy/);
})
// =========== Str Arrays
let fruits = ["Orange", "Apple", "Grapes"];
test("Is there fruits inside", ()=>{
  expect(fruits).toContain("Orange");
  expect(fruits).toContain("Apple");
  expect(fruits).toContain("Grapes");
})
// =========== Number
test("Input expect is greater than reference", ()=>{
  expect(10).toBeGreaterThan(9);
  expect(10).toBeGreaterThan(1);
})
// =========== Booleans
test("Is true",()=>{
  expect(true).toBeTruthy();
})
test("Is false",()=>{
  expect(false).toBeFalsy();
})
// =========== CallBacks
let reverseStr = (str, callBack)=>{
   callBack(str.split("").reverse().join(""))
}
test("reverse string",()=>{
  reverseStr('Jorge', (str)=>{
    expect(str).toBe("egroJ")
  })
})
// =========== Promise
const reverseStr1 = (str)=>{
  return new Promise((resolve, reject)=>{
    if(!str){
      reject(Error("Error"))
    }
    resolve(str.split("").reverse().join(""))
  });
};

test("reverse str by Promise",()=>{
  return reverseStr1("ana")
    .then((str)=>{
      expect(str).toBe("ana")
    });
});
// =========== Async & Await
test("Reverse str by Async & Await", async ()=>{
  const string = await reverseStr1("ana");  
  expect(string).toBe("ana")
})
// =========== Functions runs after of before to run test
// After: This Function let me run test with functions ran before the test 
// afterEach(()=> console.log("After each test"));
// afterAll(()=> console.log("After all test"));

// Before: 
// beforeEach(()=> console.log("Before each test"));
// beforeAll(()=> console.log("Before all test"));


/*
Watch y Coverage ===============================================================>
*/

