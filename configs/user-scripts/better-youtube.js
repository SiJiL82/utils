// ==UserScript==
// @name         Better YouTube
// @namespace    https://www.youtube.com/
// @version      0.1
// @author       You
// @description  Make YouTube use more screen space
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
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
    addCss("#player-wide-container { height: 100vh !important;}");
    addCss("#player-wide-container { max-height: unset !important;}");
})();