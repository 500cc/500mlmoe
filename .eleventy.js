module.exports = function (eleventyConfig) {
  // パススルーコピーの設定 (必要な場合)
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // 出力ディレクトリの設定
  return {
    dir: {
      input: ".", // 入力ディレクトリ (通常はプロジェクトルート)
      output: "_site", // 出力ディレクトリ (GitHub Pagesの推奨)
    },
  };
};
