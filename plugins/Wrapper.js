// https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
export function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

export function wrapLink(el, wrapper, href) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.setAttribute("href", href);
  wrapper.appendChild(el);
}
