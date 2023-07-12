/**
 * This file is used to load Bootstrap JS
 * https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
 * https://stackoverflow.com/a/40277993
 * npm run build will not run if Bootstrap is imported since window and document are not available in Node.js
 */

if (typeof window !== "undefined") {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
}
