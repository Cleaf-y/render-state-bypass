// ==UserScript==
// @name         Render-State.to bypass
// @namespace    http://tampermonkey.net/
// @version      2024-03-08
// @description  Get the download link directly.
// @author       cdeeef
// @match        https://render-state.to/p/*
// @icon         https://render-state.to/wp-content/uploads/2020/09/cropped-favicon-244x244.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var links = document.querySelectorAll('a.btnd.ext-link')
    links.forEach(function(link) {
            var href = link.href;
            // get the base64 real download link from the original <a>'s href
            var match = href.match(/link=([a-zA-Z0-9+\/=]+)/);
            if (match && match[1]) {
                link.href = atob(match[1]);
            }
        });
})();
