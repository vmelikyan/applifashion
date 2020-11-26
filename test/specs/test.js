const mainPage = require('../pageobjects/main.page');
const { Target } = require('@applitools/eyes-webdriverio')


describe('AppliFashion', () => {

  beforeEach(() => {
    // v1         -> tlcHackathonMasterV1.html
    // dev-branch -> tlcHackathonDev.html
    // master     -> tlcHackathonMasterV2.html
    browser.url('tlcHackathonMasterV1.html');
  })

  it('Test 1', () => {
      browser.eyesCheck('main page');
  });

  it('Test 2', () => {
    mainPage.colorFilter('Black').click();
    mainPage.filterBtn.click()
    browser.eyesCheck('filter by color', Target.region(mainPage.shoesGrid));
  });

  it('Test 3', () => {
    mainPage.shoe('Appli Air x Night').click()
    browser.eyesCheck('product details');
  });
});