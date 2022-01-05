module.exports = {
  "@tags": ["second"],
  "Step 1: navigate to hacker new page": function (browser) {
    browser
      .url("https://news.ycombinator.com/")
      .useXpath()
      .waitForElementVisible("//b[@class='hnname']")
      .assert.containsText("//b[@class='hnname']", "Hacker News");
  },

  "Step 2: click on header to navigate to newsest": function (browser) {
    browser.assert
      .containsText("//span[@class='pagetop']", "new")
      .click("//a[@href='newest']")
      .waitForElementVisible("//span[@class='topsel']")
      .assert.urlEquals("https://news.ycombinator.com/newest")
      .assert.containsText("//span[@class='topsel']", "new");
  },
};
