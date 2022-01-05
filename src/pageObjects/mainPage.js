const pageCommands = {
  selectSideBarItem: function (value) {
    const selector = `//div[@data-index=${value}]`;
    return this.click("xpath", selector);
  },
  insertInput: function (value) {
    return this.setValue("@chatBoxInput", value);
  },
  submitInput: function () {
    return this.click("@chatBotSubmit");
  },
};

module.exports = {
  url: "https://chat.citynow.vn/home",
  commands: [pageCommands],
  elements: {
    sideBarItem: {
      selector: "//div[@data-index=8]",
      locateStrategy: "xpath",
    },
    chatBoxUsername: {
      selector: ".rcx-css-ps0pgs",
      locateStrategy: "css selector",
    },
    chatBoxInput: {
      selector: '//textarea[@name="msg"]',
      locateStrategy: "xpath",
    },
    chatBoxMessage: {
      selector: ".js-input-message-shadow",
      locateStrategy: "css selector",
    },
    chatBotSubmit: {
      selector: "//span[@data-desktop]",
      locateStrategy: "xpath",
    },
    messageShow: {
      selector: '//ul[@aria-live="polite"]',
      locateStrategy: "xpath",
    },
  },
};
