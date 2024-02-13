const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = defineConfig({
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        additionalData: `@import "~@/assets/styles/variables.scss";`,
      },
    },
  },
});