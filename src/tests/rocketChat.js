module.exports = {
  "@tags": ["chat"],

  beforeEach: function (browser) {
    browser.page
      .loginPage()
      .navigate()
      .waitForElementVisible("@loginForm", 3000)
      .loginAs("thanhminh.hodac", "Th@nhminh0602");
  },
  after: function (browser) {
    browser.end();
  },
  "Send message in rocket chat": function (browser) {
    let mainPage = browser.page.mainPage();

    mainPage
      .waitForElementVisible("span.rc-header__block", 3000)
      .selectSideBarItem(8)
      .insertInput("Test nightwatch")
      .pause(2000)
      .submitInput();

    mainPage.expect.element("@messageShow").text.to.contain("n");
  },
};
