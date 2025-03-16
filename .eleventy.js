const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml, yaml", (contents) => yaml.load(contents));
  eleventyConfig.addFilter("pageTitle", require("./src/_includes/filters/pageTitle.js"));

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
