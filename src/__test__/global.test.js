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
test("reverse string work",()=>{
  reverseStr('Jorge', (str)=>{
    expect(str).toBe("egroJ")
  })
})

