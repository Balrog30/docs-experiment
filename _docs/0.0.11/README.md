---
layout: docs
title: Documentation
version: 0.0.11
latest: false
permalink: /docs/0.0.11/index.html
---

- [Guides]({{site.baseurl}}/docs/{{page.version}}/guides/)
{% assign guides = site.docs | where:'version', page.version | where:'category', 'Guides' | where:'latest', page.latest %}
{% for guide in guides %}
{% if guide.title != guide.category %}
  - [{{ guide.title }}]({{ guide.url | prepend: site.baseurl }})
{% endif%}
{% endfor %}

- [Examples]({{site.baseurl}}/docs/{{page.version}}/examples/)
{% assign examples = site.docs | where:'version', page.version | where:'category', 'Examples' | where:'latest', page.latest %}
{% for example in examples %}
{% if example.title != example.category %}
  - [{{ example.title }}]({{ example.url | prepend: site.baseurl }})
{% endif%}
{% endfor %}