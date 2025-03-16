---
title: 500mLのホームページ
layout: layouts/base.njk
---

# {{ title }}

どうも。

*"萌え命"*

500mLです。

---

### ☆更新履歴☆

TBA

---

### ☆コンテンツ☆

<div>
  <ul>
    {% for content in contents.contents %}
      <li type="square"><a href={{ content.url }}>{{ content.title }}</a></li>
      {{ content.desc }}
    {% endfor %}
  </ul>
</div>