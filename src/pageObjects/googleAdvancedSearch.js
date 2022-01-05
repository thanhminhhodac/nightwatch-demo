var pageCommands = {
  selectOptions(selector, value) {
    return this.click(selector).click(`.goog-menuitem[value="${value}"]`);
  },
  setQuery(value) {
    return this.setValue("@mainQueryInput", value);
  },
  search() {
    return this.click("@submitButton");
  },
};

module.exports = {
  url: "https://www.google.com/advanced_search",
  commands: [pageCommands],
  elements: {
    mainQueryInput: 'input[name="as_q"]',
    languageDropdown: "#lr_button",
    regionDropdown: "#cr_button",
    submitButton: ".jfk-button.jfk-button-action",
  },
};
