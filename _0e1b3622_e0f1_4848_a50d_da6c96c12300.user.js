// ==UserScript==
// @name       JIRA sub-task order editor
// @namespace  com.nordstrom.sets
// @version    2.0
// @description  Change the order of JIRA sub-tasks via drag and drop.
// @match      https://*/browse/*
// @copyright  2012
// @require http://code.jquery.com/jquery-2.2.1.min.js 
// @require https://code.jquery.com/ui/1.11.4/jquery-ui.min.js
// ==/UserScript==

function getorder(){
	order=[];
	$('table#issuetable>tbody').children('tr').each(
		function(idx,elm) {
			if(elm.id) {
				order.push(elm.id);
			}
		});
	return order;
}

jQuery("table#issuetable>tbody").sortable(
	{ 
		start:function() {
			old_order=getorder();
		} ,
		stop:function(event,ui) {
			new_order=getorder();
			for(i=0;i<=new_order.length;i++) {
				id=ui.item[0].id;
				if(id==old_order[i])oldpos=i;
				if(id==new_order[i])newpos=i;
			} 
			jQuery.ajax( {url:'/jira/secure/MoveIssueLink.jspa?id='+jQuery('#key-val').attr('rel')+'&currentSubTaskSequence='+oldpos+'&subTaskSequence='+newpos,} );
            $('#issuetable>tbody .stsequence').each( function(idx, elem) { 
                $(elem).text((idx+1) + '.'); // .each() index is 0-based
            });
		}
	});

jQuery(".subtask-reorder").css("display:none");
