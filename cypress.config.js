const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w6jzow',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
