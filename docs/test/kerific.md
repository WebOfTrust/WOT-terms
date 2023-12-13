# Kerific Bookmarklet and Chrome Extension

## General

The “Kerific” bookmarklet / chrome webinspector will look for Keri-related terms, and add buttons below each paragraph with these terms. On click it will show definitions of the term in various Keri-related glossaries.

Clicking on the bookmarklet or extension will add the buttons.

## Bookmarklet

Drag the bookmarklet to your bookmarks bar / favorites bar → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="javascript: (function () { var existingScript = document.getElementById('kerific-83450285767488'); if (existingScript) { existingScript.remove(); } var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://weboftrust.github.io/WOT-terms/js/kerific/scripts/content.js');jsCode.setAttribute('id', 'kerific-83450285767488');document.body.appendChild(jsCode);})();');document.body.appendChild(jsCode);}());">Kerific</a>

## Chrome browser extension (Chrome, Brave, …)

The “Kerific” Chrome extension is currently under review.

In the meantime you can download this zip → <a class='m-3 d-inline bookmarklet btn btn-outline-dark' href="https://weboftrust.github.io/WOT-terms/js/kerific.zip  ">Kerific</a>:
- Download
- Unzip
- Choose Chrome top menu - Window - Extensions
- Upload the unzipped directory to the Chrome extensions via “Load unpacked”