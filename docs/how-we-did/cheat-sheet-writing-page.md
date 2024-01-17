# Cheat sheet: writing a page inside `/docs`

What is this: A few rules about headings, internal linking, images and more that we kept in mind. It's *how we did* it.

For who: Anyone documenting in the KERI Suite and WOT-terms repo specifically.

What problem does it solve: Everything that is important to do the right way, but you keep forgetting how to do it. Here's the cheat sheet to remind you and assist you.

What's the result: The KERI Suite uses Docusaurus to generate enhanced technical documentation. Complying with the rules in this cheat sheet means optimal readability, less broken links, well-styled images, etc.

<div class="alert alert-info" role="alert">

## Strongly recommended

Use an editor that fixes markdown links when changing file names or moving files. We recommend * Visual Studio Code * (https://code.visualstudio.com).

Change default setting in Visual Studio Code:

* Go to preferences
* Type in search field: “markdown link update”
* Set to “prompt” or “always”

(This video explains: https://www.youtube.com/watch?v=3hcN0yfOAzQ)

</div>

## General

Use empty lines between every block:

Right:

```
# Main title

## Subtitle

A paragraph text

Another paragraph text
```

Wrong:

```
# Main title
## Subtitle
A paragraph text
Another paragraph text
```

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

## Links: Internal linking in the `docs` section


<div class="alert alert-info" role="alert">

### Warnings

* Unlike a CMS like Wordpress, Docusaurus is file based. Renaming a file means that a link to this file no longer works if the file name is not also changed inside the link.

* After renaming a file or directory you will have to restart the localserver to take effect. Also it is recommended to use an incognito browser to avoid caching issues. (And even then it looks like sometimes it may take while before links start to work.)

</div>

### Linking from page to page

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

If you do it this way, you can make Visual Studio Code [work for you](#strongly-recommended) and update the links if you move or rename files.

There are more ways to create links, read about it on https://docusaurus.io/docs/markdown-features/links, but this is how we do it here.

### Create links to anchors in the same page

To create a link to an anchor in the same page:

```
[anchor link inside the same page](#foo)
```

### Linking to an anchor in another page

```
[Link to concepts](../concepts/concepts.md#foo)
```

## Links: External linking

```
[link text](https://www.example.com)
```

## Inserting and styling images

### How to insert images in your text

* Use html syntax (not markdown)
* however, use `className` and not the normal `class`
* and use `require` for local images
* do not add html attributes like `width` or `height` and do not use `style='…'`
* always use an `alt` attribute. If the image is decorative leave it empty (`alt=""`), else write something as if you explain the image to someone on the phone

You can copy these examples and use it (there is a copy button available at the right):

#### To insert a local image

```
<img className="inline-small-start" src={require('/static/img/foo.png').default} alt="Foo" />
```
#### To insert a local image that is a link

```
<a href="https://www.example.com"><img className="inline-small-start" src={require('/static/img/foo.png').default} alt="Foo" /></a>
```

#### To insert a remote image

```
<img className="inline-small-start" src='https://www.example.dom/img/foo.png' alt="Foo" />
```

#### To insert a remote image that is a link

```
<a href="https://www.example.com"><img className="inline-small-start" src='https://www.example.dom/img/foo.png' alt="Foo" /></a>
```
You can insert images using Markdown but you cannot style these images using classes (CSS). So that is not very usable. That is why we use html syntax.




### How to style images

Images are styled via CSS.

The following classes are available for styling (there is a copy button available at the right):

```
inline-thumb-start
```
```
inline-thumb-end
```
```
inline-small-start
```

```
inline-small-end
```

```
inline-medium-start
```

```
inline-medium-end
```

Start means “to the left” (in left-to-right languages).

When no class is added the image will be 100% width.

### How to link to the image

TBW

More info: https://docusaurus.io/docs/markdown-features/assets#images

## Naming conventions

### Files and Directories

Use 
* [kebab-case](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Delimiter-separated_words)
* all lower case (except… in the glossary, where you will find files like `ACDC.md` etc. These abbreviations need to be uppercase)

This is how it is done in a default Docusaurus install.


Examples: 

Directory: `tutorial-basics`

File: `create-a-page.md`

Combined: `tutorial-basics/create-a-page.md`

### Media (images, video etc)

No conventions (yet), except two:
* remove spaces and replace with dash, underscore or nothing.
* put all media files in `/static` (and not in an image dir somewhere in `/doc`).

## Sidebar Menu

### Ordering

The sidebar menu is autogenerated and sorted alphanumerically.

```
├── concepts
│   ├── concepts.md
│   └── keri-dev-env.md
├── education
│   ├── intro.md
```

The directories “concepts” and “education” are called “categories” in Docusaurus. To give them a custom order, do as follows:

```
├── 02_concepts
│   ├── concepts.md
│   └── keri-dev-env.md
├── 01_education
│   ├── intro.md
```

As a bonus effect, the Visual Studio File Explorer will rearrange the directories, so will other systems like MacOS Finder etc. It is simple, effective (and intuitive for most people).


The `01_` and `02_` are removed and not visible in the browser. Renumbering will change paths in internal links but Visual Studio Code will fix these paths for you if you [have configured it to do so](#strongly-recommended).

## Final note
Thank you for going all the way down the cheat sheet. Have a great time writing!