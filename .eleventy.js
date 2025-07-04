const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const markdownItKatex = require('markdown-it-katex');
const striptags = require('striptags');

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml, yaml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  let markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItKatex, {
    throwOnError: false,
    strict: false
  });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy({
    "node_modules/katex/dist/katex.min.css": "css/katex.min.css",
    "node_modules/katex/dist/fonts": "css/fonts"
  });

  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("getDescription", (content, maxLength = 160) => {
    const text = striptags(content);
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "…";
    } else {
      return text;
    }
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("forRSS", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "forRSS",
			limit: 10,
		},
		metadata: {
			language: "ja",
			title: "500mLのホームページ",
			subtitle: "500mLによって書かれたホームページだよ",
			base: "https://500ml.moe/",
			author: {
				name: "500mL",
			}
		}
	});

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
