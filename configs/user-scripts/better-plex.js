// ==UserScript==
// @name         Better Plex
// @namespace    https://192.168.0.199
// @version      0.1
// @author       You
// @description  Make YouTube use more screen space
// @match        *://192.168.0.199:32400/*
// @icon         https://www.google.com/s2/favicons?domain=plex.tv
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
    addCss(".modal-dialog { width: 80vw !important; height: 80vh !important;}");
    addCss(".modal-content { height: 100% !important;}");
    addCss(".modal-body-scroll { max-height: unset !important; height: 100% !important;}");
    addCss(".modal-body-with-panes .modal-body-pane { height: 100% !important;}");
})();