---
title: リンク集
layout: layouts/base.njk
---

ここにはリンクがいっぱいあるよ 相互リンクとか募集

うちのリンクバナーはこれ！自由に使ってね

<br>

<img class="align-center" src="/img/banner.gif">

<br>

---

<h2 class="align-center">みなさん</h2>
{% for link in links.links %}
    <div class="link-container">{% if link.banner %}
        <a href={{ link.url }} target="_blank" rel="noopener noreferrer" class="grid-item"><img src={{ link.banner }}></a>{% endif %}
    <h3 class="grid-item {% if not link.banner %} bannerless {% endif %}"><a href={{ link.url }} target="_blank" rel="noopener noreferrer">{{ link.title }}</a> - {{link.author}}さんのホームページ</h3><p class="comment grid-item">{{ link.comment }}</p>
    </div>
{% endfor %}