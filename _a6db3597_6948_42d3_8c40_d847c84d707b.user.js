// ==UserScript==
// @name         Format JSON Webhooks Testing Service
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cleans up and stringifies webhooks testing service data output
// @author       You
// @match        http://discovery-alpha.core.cvent.org/generic-connector-testing-service-S418/views/view_records
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

/**
 * Created by tkeating on 3/23/17.
 */


var $ = window.jQuery;
$(document).ready(function() {
    $("td:nth-child(6)").each(function () {
        var elem = $(this).get(0);
        var text = elem.textContent.replace(/^"/, '').replace(/"$/, '').trim();
        elem.textContent = '';
        var div = document.createElement('div');
        div.className = 'overflow';
        div.onclick = function(event) {
            if (event.detail === 3) {
                var range = document.createRange();
                range.selectNode(this);
                window.getSelection().addRange(range);
            }

            if (!event.altKey) { return; }

            if (this.classList.contains('overflow')) {
                this.classList.remove('overflow');
                window.getSelection().removeAllRanges();
            }
            else {
                this.classList.add('overflow');
            }
        };
        div.textContent = JSON.stringify(JSON.parse(text), null, 4);
        elem.append(div);
    });
});
