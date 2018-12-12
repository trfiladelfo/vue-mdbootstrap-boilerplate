var webpack = require("webpack");

module.exports = {
  baseUrl: "mdb",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  } /*,
  devServer: {
    allowedHosts: ["domain.com"],
    proxy: {
      "/api/v2/*": {
        target: "http://ip",
        changeOrigin: true
      }
    }
  }*/
};
