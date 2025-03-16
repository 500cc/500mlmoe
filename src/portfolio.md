---
title: ポートフォリオ
layout: layouts/base.njk
---

## {{ title }}

{% for work in works.works %}

<div class="works-container" width="100%">
  <div>{{ work.title }}</div>
  <div>{{ work.date }}</div>
  <div><img width="100%" src={{ work.img }}></div>
  <div><p class="works-desc">{{ work.desc }}</p></div>
</div>

{% endfor %}