---
layout: default
---

<header>
  <h1>{{ site.title }}</h1>
</header>

<hr class="stylish"/>

<main class="home-main">
  <section id="posts">
    <div class="parent">
      {% for post in site.posts %}
        <div class="post-wrapper">
          <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <a class="post-link" href="{{ post.url }}">
            {{ post.title }}
          </a>
        </div>
      {% endfor %}
    </div>
  </section>
</main>
