console.log('\'Allo \'Allo!');

function isBreakpoint( alias ) {
    return $('.device-' + alias).is(':visible');
}

$(document).ready(function() {
	console.log('this is jquery');
	$('footer').removeClass('fixed');
	$('.section-3').removeClass('fixed');
	var height = $('.section-1').outerHeight(); //gets height of header
	if( !isBreakpoint('xs') ) {
		$(window).scroll(function(){
		    if($(window).scrollTop() > (height)){
		       $('footer').addClass('fixed');
		       $('.section-3').addClass('fixed');
		    }
		    else{
		       $('footer').removeClass('fixed');
		       $('.section-3').removeClass('fixed');
		    }
		});
	}
	
 
});