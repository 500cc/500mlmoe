---
title: 500mLのホームページ
layout: layouts/index.njk
---

どうも。

*"萌え命"*

500mLです。

---

<h3 class="align-center"> ☆更新履歴☆ </h3>

<ul>
  {% for post in collections.blog limit:5 %}
    <li type="square">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
      <small>({{ post.data.date | dateDisplay }})</small>
    </li>
  {% endfor %}
</ul>

<p class="align-center"> RSSフィードはこちら→<a href="/feed.xml">◆</a></p>

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