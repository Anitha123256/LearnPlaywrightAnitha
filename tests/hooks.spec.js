import {test, expect} from '@playwright/test';
test.beforeEach(() => {
    console.log("Before each tests")
}) 
test.afterEach(() => {
    console.log("After each tests")
}) 

test.beforeAll(() => {
    console.log("Before all tests one time")
})


test.afterAll(() => {
    console.log("After all tests one time")
})
test("Test case 1", async ({page})  => {
console.log("1st test case")
})
test("Test case 2", async ({page})  => {
console.log("2nd test case")
})
test("Test case 3", async ({page})  => {
console.log("3rd test case")
})