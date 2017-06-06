console.log('\'Allo \'Allo!');

$(document).ready(function() {
	console.log('this is jquery');

	var height = $('.section-1').outerHeight(); //gets height of header

	$(window).scroll(function(){
	    if($(window).scrollTop() > (height)){
	       $('footer').addClass('fixed');
	    }
	    else{
	       $('footer').removeClass('fixed');
	    }
	});
 
});