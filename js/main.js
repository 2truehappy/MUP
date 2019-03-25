function menu_open(id) {
	menu_close_all();
	$('.'+id).fadeIn('fast');
}
function menu_close_all() {
	 $('.page').each(function(i,elem) {
 	 	var pageclass = $(this)[0].className.split(' ');
 	 	pageclass = pageclass[0];
 	 	$('.' + pageclass).css('display', 'none');
 	  });
}

 window.onload = function() {
 
 }

 