# How to style images

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

There are two ways for styling images:

## Add a class to the image

Use this when the image code is normal HTML.

Apply the classes by adding the class to the image. Note: do it like this. Example:

```
<img className="inline-thumb-start" src="…" alt="…">
```

Do not use ```class``` like in regular HTML, instead use ```className```.

## Wrap the image in a div with a class

Use this when the image is added via Markdown code. Example:

```
<div className="inline-small-start">

[![foo](https://example.com/foo/bar)](https://example.com/foo/bar)

</div>
```

