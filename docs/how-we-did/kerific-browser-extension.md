# Kerific Bookmarklet and Chrome Extension

## General

The “Kerific” bookmarklet / chrome webinspector will look for Keri-related terms, and add buttons below each paragraph with these terms. On click it will show definitions of the term in various Keri-related glossaries.

Clicking on the bookmarklet or extension will add the buttons.

The differences between the bookmarklet and the Chrome extension are:

- The bookmarklet is blocked on some sites, where the Chrome extension is allowed
- The bookmarklet is updated more frequently. They share the same source code but adding a new version of the exension to the Chrome store is a time consuming task and it takes about a day before it is approved.

## Bookmarklet

Drag the bookmarklet to your bookmarks bar / favorites bar → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="javascript:(function()%7Bvar%20existingScript%20=%20document.getElementById('kerific-83450285767488');if%20(existingScript)%20%7BexistingScript.remove();%7Dvar%20jsCode%20=%20document.createElement('script');jsCode.setAttribute('src',%20'https://weboftrust.github.io/WOT-terms/js/kerific/scripts/content.js');jsCode.setAttribute('id',%20'kerific-83450285767488');document.body.appendChild(jsCode);%7D)();">Kerific</a>

## Chrome browser extension (Chrome, Brave, …)

The “Kerific” Chrome extension is available in the webstore.

You find it here: <a target="_blank" rel="noopener" href="https://chromewebstore.google.com/detail/kerific/ckbmkbbmnfbeecfmoiohobcdmopekgmp">Kerific in Chrome webstore</a>
