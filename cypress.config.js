const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "blockHosts":[
    "www.saucedemo.com/__socket/?EIO=4&transport=websocket",
    "www.saucedemo.com/__socket-graphql"
  ],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
