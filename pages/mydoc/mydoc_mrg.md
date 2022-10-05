---
title: Glossary layout
tags: [formatting, special_layouts]
keywords: definitions, glossaries, terms, style guide
last_updated: Oct 5, 2022
summary: "Your glossary page can take advantage of definitions stored in a data file. This gives you the ability to reuse the same definition in multiple places. Additionally, you can use Bootstrap classes to arrange your definition list horizontally."
sidebar: mydoc_sidebar
permalink: mydoc_mrg.html
toc: false
folder: mydoc
---

{% capture termscopedir %}{{site.data.mrgtest.terminology.scopedir}}{% endcapture %}

<ul>
{% for entry in site.data.mrgtest.entries %}
  
  {% if entry.scopetag == {{site.data.mrgtest.terminology.scopetag}} %}
    {% capture urlmd %}{{termscopedir}}/terms/{{entry.locator}}{% endcapture %}
  {% endif %}

  {% for scope in site.data.mrgtest.scopes %}
    {% if entry.scopetag == {{scope.scopetag}} %}
        {% capture urlmd %}{{scope.scopedir}}/{{entry.locator}}{% endcapture %}
    {% endif %}
  {% endfor %}


  <li>
    <ul>id= {{ entry.id }}</ul>
    <ul>termtype= {{ entry.termtype }}</ul>
    <ul><b>termid= {{ entry.termid }}</b></ul>
    <ul>formphrases= {{ entry.formphrases }}</ul>
    <ul>status= {{ entry.status }}</ul>
    <ul>grouptags= {{ entry.grouptags }}</ul>
    <ul>created= {{ entry.created }}</ul>
    <ul>updated= {{ entry.updated }}</ul>
    <ul>vsntag= {{ entry.vsntag }}</ul>
    <ul>commit= {{ entry.commit }}</ul>
    <ul>contributors= {{ entry.contributors }}</ul>
    <ul>headingids= {{ entry.headingids }}</ul>
    <ul>locator= {{ entry.locator }}</ul>
    <ul>navurl= {{ entry.navurl }}</ul>
    <ul>To glossary item: <b><a href="{{urlmd}}">{{ entry.termid }}</a></b></ul>
  </li>
{% endfor %}
</ul>



{% include links.html %}
