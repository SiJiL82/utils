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
    console.log("HELLO!");
    // Your code here...
    addCss("ytd-app:not([guide-persistent-and-visible]) ytd-page-manager {margin-top: 0!important;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) #player-theater-container:empty~#columns #primary,ytd-app:not([guide-persistent-and-visible]) #player-theater-container:empty~#columns #secondary{padding-top: 56px;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) ytd-masthead,ytd-app:not([guide-persistent-and-visible]) #masthead-container.ytd-app::after {transform: translateY(-56px); transition: transform .1s .5s ease-out;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) #masthead-container:hover ytd-masthead,ytd-app:not([guide-persistent-and-visible]) #masthead-container:hover.ytd-app::after {transform: translateY(0px);}");
    addCss("ytd-app:not([guide-persistent-and-visible]) [theater] #player.ytd-watch {height: 100vh!important; max-height: 100vh!important;}");
    addCss("ytd-watch-flexy[theater] #player-theater-container.ytd-watch-flexy, ytd-watch-flexy[fullscreen] #player-theater-container.ytd-watch-flexy, ytd-app:not([guide-persistent-and-visible]) [theater] #player video {width: 100%!important; height: 100vh!important; max-height: 100vh!important; max-width: 100%!important; left: 0!important;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) .ytp-chrome-top.ytp-share-button-visible, ytd-app:not([guide-persistent-and-visible]) #iv-drawer .iv-drawer-header, ytd-app:not([guide-persistent-and-visible]) #iv-drawer .iv-drawer-content {margin-top: 30px;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-chrome-top.ytp-share-button-visible,ytd-app:not([guide-persistent-and-visible]) [theater] #iv-drawer .iv-drawer-header,ytd-app:not([guide-persistent-and-visible]) [theater] #iv-drawer .iv-drawer-content,ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-multicam-menu-header,ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-multicam-menu-items,ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-playlist-menu-header,ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-playlist-menu-items,ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-share-panel-close {margin-top: 56px;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) .ytp-tooltip.ytp-tooltip-opaque.ytp-bottom {right: 60px!important; top: 35px!important;}");
    addCss("ytd-app:not([guide-persistent-and-visible]) [theater] .ytp-tooltip.ytp-tooltip-opaque.ytp-bottom {right: 60px!important;  top: 60px!important;}");
    addCss("ytd-watch-flexy[theater] #player-full-bleed-container.ytd-watch-flexy, ytd-watch-flexy[fullscreen] #player-full-bleed-container.ytd-watch-flexy {height: 100vh; max-height: 100vh;}");
    addCss("ytd-watch-flexy[full-bleed-player] #player-full-bleed-container.ytd-watch-flexy {height: 100vh !important; max-height: 100vh !important;}");
})();
