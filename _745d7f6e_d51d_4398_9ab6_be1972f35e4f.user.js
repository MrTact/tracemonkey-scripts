// ==UserScript==
// @name         Untabify Jenkins
// @namespace    com.cvent
// @version      0.1
// @description  Replaces excessive tabs in Jenkins pages with a <select> dropdown
// @author       tkeating
// @match        https://jenkins.core.cvent.org/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js
// @connect      https://jira/
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery;
$(document).ready(function() {

  var div = $("<div/>").insertAfter($("#projectstatus-tabBar"));
  var select = $("<select onchange='window.open(this.value, \"_self\")'/>").appendTo(div);

  var tabs = $(".tabBar .tab a");

  tabs.sort(function(a, b) {
        if (b.innerText == '+') {
            return -1;
        }

        return a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase());
  });

  tabs.each(function() {
    var elem = $(this);
    var cls = elem.attr("class");
    var href = elem.attr("href");
    var selected = href == location.pathname ? ' selected' : '';
    var option = "<option value='" + elem.attr("href") +"'" + selected + ">" + elem.text() + "</option>";
    $(option).appendTo(select);
  });


  $("#projectstatus-tabBar").css("display", "none");

});