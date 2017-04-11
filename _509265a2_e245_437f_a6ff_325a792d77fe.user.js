// ==UserScript==
// @name         Trip-click in Swagger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */api/docs
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

debugger;
var $ = window.jQuery;
$(document).ready(function() {
    $("#swagger-ui-container").onclick(function () {
        alert("Clicked");

/*            if (event.detail === 3) {
                var range = document.createRange();
                range.selectNode(this);
                window.getSelection().addRange(range);
            }
            */

    });
});
