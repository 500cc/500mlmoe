---
title: メタ・ストア
layout: layouts/base.njk
pagination:
  data: items.items
  size: 20
---

<div class="shade-box">
メタ・ストアとは<br>
世界には商品を販売するサービスが乱立し、個人の販売物も各サービスにバラバラに配置されていることが多くなった。これは、そういった販売先が分散してしまう問題に対する1つの回答である。

要は自分が売ってるものの画像とリンクを販売サービスを横断する形でひとまとめにしたということです。
</div>

<div class="item-grid">
  {% for item in pagination.items %}<article class="item-card shade-box">
    <div class="image-container">
      <img src="{{ item.img }}" alt="商品名">
    </div>
    <div class="content">
      <h3 class="title">{{ item.title }}</h3>
      <h3 class="price">¥{{ item.price | comma }}</h3>
      <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.store }}で購入する</a>
    </div>
  </article>{% endfor %}
</div>

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


