// ==UserScript==
// @name         Better Redgifs
// @namespace    https://www.redgifs.com
// @version      0.1
// @author       You
// @description  Make Redgifs use more screen space
// @match        *://www.redgifs.com/*
// @icon         https://www.google.com/s2/favicons?domain=redgifs.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

function addCss(cssString) {
    var head = document.getElementsByTagName('head')[0];
    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
}

(function() {
    'use strict';
    // Your code here...
    addCss(".watchPage .center {max-width: 50vw !important;}");
    addCss(".previewFeed {max-width: 50vw !important;}");
})();
