const geckodriver = require("geckodriver").path;
const chromedriver = require("chromedriver").path;

module.exports = {
  src_folders: ["src/tests"],
  output_folder: "src/testOutput",
  page_objects_path: "src/pageObjects",

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true,
      },
      webdriver: {
        start_process: true,
        log_path: "src/webdriverLog",
        server_path: geckodriver,
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true,
      },
      webdriver: {
        server_path: geckodriver,
        cli_args: ["--log", "debug"],
        port: 4444,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
      },
      webdriver: {
        server_path: chromedriver,
        port: 4445,
        cli_path: [],
      },
    },
  },
};
