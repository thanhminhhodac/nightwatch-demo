const loginCommands = {
  loginAs: function (username, password) {
    return this.setValue("@usernameInput", username)
      .setValue("@passwordInput", password)
      .click("@loginButton");
  },
};

module.exports = {
  url: "https://chat.citynow.vn",
  commands: [loginCommands],
  elements: {
    usernameInput: {
      selector: 'input[name="emailOrUsername"]',
      locateStrategy: "css selector",
    },
    passwordInput: {
      selector: 'input[name="pass"]',
      locateStrategy: "css selector",
    },
    loginForm: {
      selector: "#login-card",
      locateStrategy: "css selector",
    },
    loginButton: {
      selector: "button.login",
      locateStrategy: "css selector",
    },
    toastContainer: {
      selector: "#toast-container",
      locateStrategy: "css selector",
    },
  },
};
