import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const doYourCustomStuff = () => {
  // your JS code goes here

  const testje = document.querySelector("h3");

  testje
    ? (testje.innerHTML =
        "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX  ")
    : null;
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
