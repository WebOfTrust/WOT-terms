const insertVideo = () => {
  const refs = [...document.querySelectorAll(`[data-youtubeid`)];

  refs.forEach((item) => {
    let youtubeEmbed = `<iframe style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" src="https://www.youtube.com/embed/${item.dataset.youtubeid}?start=${item.dataset.starttime}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    item.insertAdjacentHTML('afterbegin', youtubeEmbed);
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  insertVideo();
}
