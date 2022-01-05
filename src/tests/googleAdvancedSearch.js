module.exports = {
  "@tags": ["third"],
  "Step 1: Go to Advance Search page": function (browser) {
    let ggPage = browser.page.googleAdvancedSearch();
    ggPage.navigate().assert.title("Tìm kiếm nâng cao của Google");
  },

  "Step 2: Insert keywords to main input Query": function (browser) {
    let ggPage = browser.page.googleAdvancedSearch();
    ggPage
      .navigate()
      .setQuery("nightwatch")
      .selectOptions("@languageDropdown", "lang_vi")
      .selectOptions("@regionDropdown", "countryVN")
      .pause(3000)
      .search();
  },
};
