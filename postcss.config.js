module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            content: ["./src/pages/**/*.js", "./src/components/**/*.js"],
            whitelist: ["html", "body"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
