/**
 * @file This file handles the display of subtitles for a video player. It takes no direct input, but it relies on the presence of specific HTML elements on the page, such as a container for the subtitles and a video element.

The purpose of this code is to extract the start and end times of each subtitle from the text content of HTML paragraph elements (< p >), and then display the corresponding subtitle text in the subtitle container when the video playback time falls within the start and end times of that subtitle.
 * @author Kor Dwarshuis
 * @version 1.0.0
 * @since 2023-02-12
 */

const handleSubtitles = () => {
  let counter = document.querySelector('.counter');
  let subtitlecontainer = document.querySelector('.subtitlecontainer');

  const convert = (timestamp) => {
    //https://stackoverflow.com/a/9640384 modified. Minutes are worth 60 seconds. Hours are worth 60 minutes:
    return +timestamp[0] * 60 * 60 + +timestamp[1] * 60 + +timestamp[2][0];
  };

  if (subtitlecontainer !== null) {
    const paragraphs = document.querySelectorAll('p');
    let paragraphIndex = [];

    paragraphs.forEach((p) => {

      const matchStartTime = p.innerText.match(/[0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9]/);
      const matchEndTime = p.innerText.match(/,[0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9]/);

      if (matchStartTime && matchEndTime) {
        const strStartTime = matchStartTime[0];
        const strEndTime = matchEndTime[0].slice(1); // slice the separator, a comma

        // start time
        let arrStartTime = strStartTime.split(':'); // split it at the colons
        arrStartTime[2] = arrStartTime[2].split('.'); // split at the dot

        // leave the miliseconds after the dot
        let secondsStartTime = convert(arrStartTime);

        // and place them back after the seconds are dealt with
        secondsStartTime = secondsStartTime + '.' + arrStartTime[2][1];

        // end time
        let arrEndTime = strEndTime.split(':'); // split it at the colons
        arrEndTime[2] = arrEndTime[2].split('.');

        // leave the miliseconds after the dot
        let secondsEndTime = convert(arrEndTime);

        // and place them back after the seconds are dealt with
        secondsEndTime = secondsEndTime + '.' + arrEndTime[2][1];

        paragraphIndex.push({
          text: p.innerHTML.slice(24), // remove the timestamps and the trailing space
          start: secondsStartTime,
          end: secondsEndTime,
        });
      } else {
        console.error('No match found in paragraph text');
      }
    });

    document.querySelector('video').addEventListener('timeupdate', (event) => {
      counter.innerText = event.target.currentTime;
      paragraphIndex.forEach((p) => {
        event.target.currentTime > p.start &&
          event.target.currentTime < p.end &&
          subtitlecontainer.innerHTML !== p.text
          ? (subtitlecontainer.innerHTML = p.text)
          : null;
      });
    });
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  handleSubtitles();
}
