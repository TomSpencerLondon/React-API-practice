require('@babel/polyfill')
module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.spec\\.js$',
  setUpFilesAfterEnv: 'expect-puppeteer'
}
