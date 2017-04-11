// ==UserScript==
// @name         Jenkins JIRA link helper
// @namespace    com.cvent
// @version      0.1
// @description  Takes Jira links in a Jenkins console log & appends the issue titles
// @author       tkeating
// @match        https://jenkins/view/appointments/job/*/console
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// @connect      https://jira/
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery;
$(document).ready(function() {
    var x = 10/0;
    $('pre.console-output a').each(function (idx, elem) {
        if (elem.href.startsWith({url:'https://jira', withCredentials: true})) {
            $.ajax(elem.href.replace('browse', 'rest/api/2/issue'))
                .then(function(json) {
                $(elem).text(json.fields.summary);            
            });
        }
    });
});
