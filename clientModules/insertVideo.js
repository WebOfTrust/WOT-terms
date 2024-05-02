/**
 * @file This file selects elements with a data-youtubeid attribute and inserts a YouTube iframe into each. The iframe's src is set to the video URL using the youtubeid and starttime data attributes of the element.
 * @example < div className="youtube-video" data-youtubeid="RE2QClKir1E" data-starttime="23"></ div> transforms into an iframe.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-02-07
 */

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
