const showLevels = () => {
  // get url query Parameters
  // https://stackoverflow.com/a/21903119
  let getUrlParameter = function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  // And this is how you can use this function assuming the URL is,
  // http://dummy.com/?technology=jquery&blog=jquerybyexample.

  let level = getUrlParameter('level');

  const paragraphs = document.querySelectorAll('p');

  if (level !== undefined) {
    paragraphs.forEach((p) => {
      if (p.dataset.level !== undefined) {
        p.style.display = 'block';
        // console.log(p.dataset.level);
        if (p.dataset.level > level) {
          p.style.display = 'none';
        }
      }
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  //   if (location.pathname === previousLocation?.pathname) return;
  showLevels();
}
