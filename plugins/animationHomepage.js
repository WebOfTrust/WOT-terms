import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const animationHomepage = () => {
  // https://codepen.io/kilianso/pen/baEWJm, ADAPTED

  const animatedEls = document.querySelectorAll('.hero__title');
  console.log('animatedEls: ', animatedEls);
  let patInst = [];

  animatedEls.forEach((currentValue, index) => {
    let textEl = animatedEls[index];

    console.log('textEl.innerText.length;: ', textEl.innerText.length);
    let trigger = animatedEls[index].querySelector('button');

    // Create an instance.
    patInst[index] = new CreatePattern(
      textEl,
      'pattern_square',
      'scale',
      'row',
      textEl.innerText,
      textEl.innerText.length,
      trigger
    );

    // Drop all initial text.
    patInst[index].el.innerHTML = '';

    for (let b = 0; b < patInst[index].textlength; b++) {
      // Put every character in a separate span.
      let patWrap = document.createElement('span');
      patWrap.classList.add('pattern_wrap');

      // Put every character in a separate span.
      let newChar = document.createElement('span');
      newChar.classList.add('character');
      newChar.innerText = patInst[index].text.charAt(b);

      console.log('patInst[index].patternName: ', patInst[index].patternName);

      // Add pattern as span after every character.
      let newPat = document.createElement('span');
      newPat.classList.add('pattern', patInst[index].patternName);
      newPat.style.transform = applyEffect(patInst[index].effect, b);

      // Put it in the pattern wrap.
      patWrap.appendChild(newChar);
      patWrap.appendChild(newPat);

      // Append each wrap to the instance element.
      patInst[index].el.appendChild(patWrap);
    }

    runEffect(patInst[index]);
  });

  // Constructor
  function CreatePattern(
    el,
    patternName,
    effect,
    reveal,
    text,
    length,
    trigger
  ) {
    this.el = el;
    this.patternName = patternName;
    this.effect = effect;
    this.reveal = reveal;
    this.text = text;
    this.textlength = length;
    this.trigger = trigger;
  }

  function applyEffect(effectName, loopIndex) {
    switch (effectName) {
      case 'rotate':
        return 'rotate(' + loopIndex * 10 + 'deg)';
        break;
      case 'scale':
        return 'scale(1)';
        break;
    }
  }

  function runEffect(instance) {
    let allPatterns = instance.el.querySelectorAll('.pattern');
    let allChars = instance.el.querySelectorAll('.character');
    //setInterval(function(){
    for (let i = 0; i < allPatterns.length; i++) {
      allChars[i].style.opacity = 0;
      ((index) => {
        setTimeout(() => {
          // Yeah this is a mess right now... and i'll have to find a better way to show/hide characters.
          if (index < 5) {
            allPatterns[index].style.opacity = 1;
          } else if (index < allPatterns.length - 5) {
            allPatterns[index].style.opacity = 1;
            allPatterns[index - 5].style.opacity = 0;
            allChars[index - 5].style.opacity = 1;
          } else {
            allPatterns[index - 5].style.opacity = 0;
            allChars[index - 5].style.opacity = 1;
            allChars[index].style.opacity = 1;
          }
        }, i * 200);
      })(i);
    }
    // }, 3000);
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  animationHomepage();
}
