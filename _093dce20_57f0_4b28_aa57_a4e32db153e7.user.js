// ==UserScript==
// @name         Jenkins build list cleanup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jenkins.core.cvent.org/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery;
$(document).ready(function() {
    $('.build-name > a').each(function() {
        var elem = $(this)[0];
        elem.style.width = '';
    });
});