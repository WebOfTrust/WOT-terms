# Kerific Bookmarklet and Chrome Extension

## General

The “Kerific” bookmarklet / chrome webinspector will look for Keri-related terms, and add buttons below each paragraph with these terms. On click it will show definitions of the term in various Keri-related glossaries.

Clicking on the bookmarklet or extension will add the buttons.

The differences between the bookmarklet and the Chrome extension are:

- The bookmarklet is blocked on some sites, where the Chrome extension is allowed
- The bookmarklet is updated more frequently. They share the same source code but adding a new version of the exension to the Chrome store is a time consuming task and it takes about a day before it is approved.

## Bookmarklet

Drag the bookmarklet to your bookmarks bar / favorites bar → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="javascript:(function()%7B var existingScript = document.getElementById('kerific-83450285767488');var existingCSS = document.getElementById('kerific-css-83450285767488');if (existingScript) %7BexistingScript.remove();%7D if (existingCSS) %7BexistingCSS.remove();%7D var jsCode = document.createElement('script');jsCode.setAttribute('src', 'https://weboftrust.github.io/kerific/assets/index.js');jsCode.setAttribute('id', 'kerific-83450285767488');document.body.appendChild(jsCode);var cssCode = document.createElement('link');cssCode.setAttribute('rel', 'stylesheet');cssCode.setAttribute('type', 'text/css');cssCode.setAttribute('href', 'https://weboftrust.github.io/kerific/assets/index.css');cssCode.setAttribute('id', 'kerific-css-83450285767488');document.head.appendChild(cssCode);%7D)();">Kerific</a>

## Chrome browser extension (Chrome, Brave, …)

The “Kerific” Chrome extension is available in the webstore.

You find it here: <a target="_blank" rel="noopener" href="https://chromewebstore.google.com/detail/kerific/ckbmkbbmnfbeecfmoiohobcdmopekgmp">Kerific in Chrome webstore</a>
