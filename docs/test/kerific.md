# Kerific Bookmarklet and Chrome Extension

## General

The “Kerific” bookmarklet / chrome webinspector will look for Keri-related terms, and add buttons below each paragraph with these terms. On click it will show definitions of the term in various Keri-related glossaries.

Clicking on the bookmarklet or extension will add the buttons.

## Bookmarklet

Drag the bookmarklet to your bookmarks bar / favorites bar → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="javascript:(function()%7Bvar%20existingScript%20=%20document.getElementById('kerific-83450285767488');if%20(existingScript)%20%7BexistingScript.remove();%7Dvar%20jsCode%20=%20document.createElement('script');jsCode.setAttribute('src',%20'https://weboftrust.github.io/WOT-terms/js/kerific/scripts/content.js');jsCode.setAttribute('id',%20'kerific-83450285767488');document.body.appendChild(jsCode);%7D)();">Kerific</a>



## Chrome browser extension (Chrome, Brave, …)

The “Kerific” Chrome extension is currently under review.

In the meantime you can download this zip → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="https://weboftrust.github.io/WOT-terms/js/kerific.zip  ">Kerific</a>:
- Download
- Unzip
- Choose Chrome top menu - Window - Extensions
- Upload the unzipped directory to the Chrome extensions via “Load unpacked”