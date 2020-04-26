require('@babel/polyfill')
module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.spec\\.js$',
  setupFilesAfterEnv: ['expect-puppeteer', "<rootDir>/node_modules/regenerator-runtime/runtime"]
}
