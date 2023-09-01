# Cheat sheet writing a page

A few simple rules about headings, internal linking, images and more.

Everything that is important to do the right way but you keep forgetting how to do it.

## Headings

Start a page with a `#` followed by a space.

(If you start with a `##` then Docusaurus will ad a `#` based on the file name. Not desirable.)

Example:

`# Main title`

This will result in a `<h1>` in the final html after the Markdown is parsed.

Add structure to your document by adding `<h2>`, in Markdown a `##` followed by a space.

Example:

```
# Main title

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Subtitle 1

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium

## Subtitle 2

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

```

## Internal linking in the `docs` section

Internal linking is not easy in most content management systems. In Docusaurus it's difficult to keep all links working after renaming files. Here you will find best practise.

General rule: use relative links, and use the `.md` extension at the end.

Let's take this file system:

```
├── concepts
│   ├── concepts.md
│   └── keri-dev-env.md
├── education
│   ├── intro.md


```

To create a link inside education/intro.md TO concepts/concepts.md write the following:

```
[Link to concepts](../concepts/concepts.md)
```

If you do it this way, you can make Visual Studio Code work for you and update the links if you move or rename files.

You have to enable this feature. Go to settings and search for “markdown link update”. This video explains: https://www.youtube.com/watch?v=3hcN0yfOAzQ

There are more ways to create links, read about it on https://docusaurus.io/docs/markdown-features/links, but this is how we do it here.

## Inserting and styling images

### How to style images

Images are styled via CSS.

The following classes are available for styling:

```
.inline-thumb-start,
.inline-thumb-end,
.inline-small-start,
.inline-small-end,
.inline-medium-start,
.inline-medium-end,
```

Start means “to the left” (in left-to-right languages).

When no class is added the image will be 100% width.

There are two ways for styling images:

#### Add a class to the image

Use this when the image code is normal HTML.

Apply the classes by adding the class to the image. Note: do it like this. Example:

```
<img className="inline-thumb-start" src="…" alt="…">
```

Do not use ```class``` like in regular HTML, instead use ```className```.

#### Wrap the image in a div with a class

Use this when the image is added via Markdown code. Example:

```
<div className="inline-small-start">

[![foo](https://example.com/foo/bar)](https://example.com/foo/bar)

</div>
```

### How to link to the image

TBW

## Naming conventions

### Files and Directories

Use 
* [kebab-case](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Delimiter-separated_words)
* all lower case

This is how it is done in a default Docusaurus install.


Examples: 

Directory: `tutorial-basics`

File: `create-a-page.md`

Combined: `tutorial-basics/create-a-page.md`

### Media (images, video etc)

No conventions (yet), except one:
* remove spaces and replace with dash, underscore or nothing.