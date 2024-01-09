document.addEventListener('DOMContentLoaded', function () {
    var manifestData = chrome.runtime.getManifest();
    var version = manifestData.version;
    document.getElementById('versionNumber').textContent = version;
});