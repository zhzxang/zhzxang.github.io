---
layout: home
---
{% include index.html %}
{% include header.html %}

{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}

{% include footer.html %}