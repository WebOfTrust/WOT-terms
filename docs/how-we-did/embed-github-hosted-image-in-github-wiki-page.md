---
sidebar: HowWeDidSidebar
---
# Embed a Github-hosted image in a Github wiki page

## Issue

The URL of an image hosted on Github is not what it seems.

> **Example**\
> The link the image was broken here: https://trustoverip.github.io/acdc/glossary#prefix, it did not show an image. However, copying the image link results in "https://github.com/WebOfTrust/keri/blob/main/images/prefix.png", and if you paste this link, you do get an image!

What's going on here? And why is this relevant?

We are better off knowing what the difference between 'raw' and 'generated' in Github means, so we can move faster and more be efficient. Read on.

## Confusion

When you check an image into Github, and then browse to the image's path in the repo, github doesn't display the raw picture.

Rather, it displays **a generated html page** that includes a bunch of Github framing so you can see the repo, the version history, etc.

> **Example continued**\
> If you look at the wiki page for the glossary entry in question: https://github.com/trustoverip/acdc/wiki//prefix, you will see that the URL of the image is https://github.com/WebOfTrust/keri/blob/main/images/prefix.png.

Even though that URL ends with "png", what it returns is not a raw PNG, but an actual web page.

## How to do it the right way?

To embed an image properly in a github wiki page (whether the wiki page is a terms wiki or not), **you need to get the URL for the raw image file**. You can get this done by

THREE different ways!

A.

1. clicking the button that says "Download" and
2. right-clicking the image and choose "Copy Image Address"

> Example result: `https://raw.githubusercontent.com/WebOfTrust/keri/main/images/prefix.png`

OR

B.

1. right-clicking on the button that says "Download" and
2. choosing "Copy Link"

> Example result: `https://github.com/WebOfTrust/keri/raw/main/images/prefix.png`

Either way will work. Here's the proof :), that I've deleted already:

<img src="https://hackmd.io/_uploads/B1l9wwX-09.png" width="700" />

C. Just add `?raw=true` to the URL

> example result: https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true

Either way will work. And here is the proof, that I've already deleted of course from the production environment:

<img src="https://hackmd.io/_uploads/S15bh7Z09.png" width="800" />

## Resume

I think this will fix your broken image links and resolve the issue mentioned above.
