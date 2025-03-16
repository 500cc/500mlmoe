module.exports = function(value, siteName) {
    if (this.page.url === '/') {
      return siteName; // トップページの場合、サイト名のみを返す
    } else {
      return `${value} - ${siteName}`; // 他のページの場合、「ページ名 - サイト名」を返す
    }
  };