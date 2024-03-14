// require() is a node js built-in function used to load modules present in separate files
// Here we are loading test and expect modules from playwright package
const {test, expect} = require('@playwright/test')

// loading the javascript functions we created in demo file
const {hello, helloworld} = require('./demo/hello')

console.log(hello());
console.log(helloworld());