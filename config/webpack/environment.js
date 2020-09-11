const { environment } = require("@rails/webpacker");
const webpack = require("webpack");

environment.plugins.append(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    "window.Tether": "tether",
    Popper: ["popper.js", "default"],
  })
);

module.exports = environment;
