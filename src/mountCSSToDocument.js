/*
taken from https://github.com/VirtualCSS/planning/blob/01_wip/01_basic_idea/virtual-css/index.js
 */
const mountCSSToDocument = function(CSSContent) {
  var style = document.createElement('style');
  style.textContent = CSSContent;
  document.head.appendChild(style);
};

modul.exports = mountCSSToDocument;
