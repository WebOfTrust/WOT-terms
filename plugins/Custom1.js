import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { wrapLink } from "./Wrapper";
import { crossLinks as cL, crossLinks } from "./../crossLinks";

const doYourCustomStuff = () => {
  // your JS code goes here

  const domElements = document.querySelectorAll("p", "h2");

  if (domElements.length > 0) {
    // cL = local copy of crossLinks that will receive a unique ID per array key
    let cL = crossLinks;
    cL.forEach((textFragment) => {
      domElements.forEach((element) => {
        // console.log("textFragment[0]: ", textFragment[0]);
        let innerText = element.innerHTML;
        // textFragment is an array item, this item will contain an array with length = 2, where [2] is an added unique ID
        textFragment[2] = Math.floor(Math.random() * 10000000000000000000);
        let innerTextNew = innerText.replace(textFragment[0], textFragment[2]);
        element.innerHTML = innerTextNew;
      });
    });

    console.log("crossLinks: ", crossLinks);

    // // second round, after all hits have been replace with unique ID. Now replace unique id's with links
    // cL.forEach((textFragment) => {
    //   domElements.forEach((element) => {
    //     console.log("element: ", element);
    //     let innerText = element.innerHTML;
    //     let innerTextNew = innerText.replace(
    //       textFragment[2],
    //       // "<a target='_blank' rel='noopener' href='" +
    //       "<a href='" + textFragment[1] + "'>" + textFragment[0] + "</a>"
    //     );
    //     element.innerHTML = innerTextNew;
    //   });
    // });

    // domElements.forEach((element) => {
    //   cL.forEach((textFragment) => {
    //     console.log("textFragment[0]: ", textFragment[0]);
    //     // console.log("element: ", element);
    //     let innerText = element.innerHTML;
    //     let innerTextNew = innerText.replace(
    //       textFragment[2],
    //       // "<a target='_blank' rel='noopener' href='" +
    //       "<a href='" + textFragment[1] + "'>" + textFragment[0] + "</a>"
    //     );
    //     element.innerHTML = innerTextNew;
    //   });
    // });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  doYourCustomStuff();
}

if (ExecutionEnvironment.canUseDOM) {
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener("load", () => {
    setTimeout(doYourCustomStuff, 1000);
  });
}
