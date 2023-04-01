const addLevel = () => {
  // fetch data from ./json/overview.json
  fetch('/json/overview.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // console.log(data[0].level);
      // console.log(data[0].level[0].level);
      // console.log(data[0].level[0].level[0].level);
      // console.log(data[0].level[0].level[0].level[0].level);
      // console.log(data[0].level[0].level[0].level[0].level[0].level);
      // console.log(data[0].level[0].level[0].level[0].level[0].level[0].level);
      // console.log(
      //   data[0].level[0].level[0].level[0].level[0].level[0].level[0].level
      // );
      // console.log(
      //   data[0].level[0].level[0].level[0].level[0].level[0].level[0].level[0]
      //     .level
      // );
    });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  // if (location.pathname === previousLocation?.pathname) return;
  addLevel();
}
