import config from "@generated/docusaurus.config";
import tippy from "tippy.js";
import "tippy.js/themes/light.css";

const useTippy = () => {
  let links = document.querySelectorAll("a");

  links.forEach((item) => {
    // console.log(item);
    // console.log(`${config.url}${config.baseUrl}${item.href}`);

    // console.log("item.href: ", item.href);
    // console.log("window.location.host: ", window.location.host);

    let testURL = new URL(item.href, location).host;
    // console.log("testURL: ", testURL);

    if (testURL === window.location.host) {
      // console.log("same");

      fetch(item.href)
        .then(function (response) {
          console.log("response: ", response);
          // The API call was successful!
          // console.log("response.text(): ", response.text());
          return response.text();
        })
        .then(function (html) {
          // Convert the HTML string into a document object
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          console.log("doc: ", doc);

          // Get the domEl
          var domEl = doc.querySelector("#definition");
          console.log(domEl);
        })
        .catch(function (err) {
          // There was an error
          console.warn("Something went wrong.", err);
        });
    }
    tippy(item, {
      theme: "light",
      allowHTML: true,
      // content: `<iframe src=${config.url}${config.baseUrl}${item.href}></iframe>`,
      content: `<iframe src='${item.href}' srcdoc='<p></p>' ></iframe>`,
    });
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;

  useTippy();
}
