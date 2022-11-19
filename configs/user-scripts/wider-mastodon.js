// ==UserScript==
// @name         Wider Mastodon
// @namespace    https://fosstodon.org
// @version      0.1
// @description  Makes Mastodon main content wider
// @license      MIT
// @match        https://fosstodon.org/*
// @icon         https://www.google.com/s2/favicons?domain=fosstodon.org
// @grant        none
// @require      https://greasyfork.org/scripts/35370-add-css/code/Add_CSS.js?version=598682
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    AddCss (`
            .columns-area__panels__main {
                max-width: 900px !important;
            }
        `);
})();
