// importing the modules from playwright modules
const {test, expect} = require('@playwright/test')

// Creating test block
test('My first test', async ({page}) =>{

  await  page.goto('https://www.google.com/')
  await expect(page).toHaveTitle('Google')
})