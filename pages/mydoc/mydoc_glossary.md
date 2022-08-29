---
title: Glossary layout
tags: [formatting, special_layouts]
keywords: definitions, glossaries, terms, style guide
last_updated: July 3, 2016
summary: "Your glossary page can take advantage of definitions stored in a data file. This gives you the ability to reuse the same definition in multiple places. Additionally, you can use Bootstrap classes to arrange your definition list horizontally."
sidebar: mydoc_sidebar
permalink: mydoc_glossary.html
toc: false
folder: mydoc
---

{% for term in site.terms %}
  <h2>
    <a href="{{ term.permalink | relative_url }}">
      {{ term.Term }} - explained at level {{ term.Level }}
    </a>
  </h2>
  <h3>{{ term.Text }}</h3>
  <p>{{ term.content | excerpt }}</p>
{% endfor %}


{% include links.html %}
