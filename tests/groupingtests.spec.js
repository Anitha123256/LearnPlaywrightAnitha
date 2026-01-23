import {test, expect} from '@playwright/test';
test.describe("Group 1" , () => {

test("Test case 1", async ({page})  => {



})

test("Test case 2", async ({page})  => {

//test.fail() // this test is expected to fail
  test.fixme() // this test is expected to be fixed in futures  or  it will skips the test cases
})
test("Test case 3", async ({page})  => {


    
})
})

test.describe.skip("Group 2" , () => {

test("Test case 4", async ({page})  => {



})

test("Test case 5", async ({page})  => {


    
})
test("Test case 6", async ({page})  => {


    
})
})