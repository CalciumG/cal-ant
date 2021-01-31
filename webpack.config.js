const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "main.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Roboto", variants: ["400", "700italic"] },
      ],
      /* ...options */
    }),
  ],
};
