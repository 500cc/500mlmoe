---
title: 500mLのホームページ
layout: layouts/index.njk
---

どうも。

*"萌え命"*

500mLです。

---

<h3 class="align-center"> ☆更新履歴☆ </h3>

TBA

---

<h3 class="align-center"> ☆コンテンツ☆ </h3>

<div>
  <ul>
    {% for content in contents.contents %}
      <li type="square"><a href={{ content.url }}>{{ content.title }}</a></li>
      {{ content.desc }}
    {% endfor %}
  </ul>
</div>