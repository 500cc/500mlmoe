---
title: ブログ
layout: layouts/base.njk
pagination:
  data: collections.blog
  size: 20
---

<ul>
  {% for post in pagination.items %}
    <li type="square"><a href="{{ post.url }}">{{ post.data.title }}</a> <small>({{ post.data.date | dateDisplay }})</small></li>
  {% endfor %}
</ul>

<nav class="pagination">
  <div class="pagination-prev">
    {% if pagination.href.previous %}
      <a href="{{ pagination.href.previous }}">前のページ</a>
    {% endif %}
  </div>
  <div class="pagination-next">
    {% if pagination.href.next %}
      <a href="{{ pagination.href.next }}">次のページ</a>
    {% endif %}
  </div>
</nav>