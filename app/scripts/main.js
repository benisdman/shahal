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
	

	function submitForm(formType) {
		$('#' + formType + '-form').submit(function (e) {
		    e.preventDefault();

		    // $("input[type='submit']").addClass("loading");

		    var name = $('#' + formType + '-name').val();
		    var phone = $('#' + formType + '-phone').val();
		    var email = $('#' + formType + '-email').val();
		    var go = true;

		    if (!name) {
		        go = false;
		         $('#' + formType + '-name').addClass('error');
		    } 
		    if (!phone) {
		        go = false;
		        $('#' + formType + '-phone').addClass('error');
		    }


		   
		    if (!go){
		        return;
		    }
			
		    var index = name.indexOf(' ');  // Gets the first index where a space occours
		    var firstName, lastName = '';
			if (index == -1){
				firstName = name; // Gets the first part
				lastName = '';
				
			} else {
				firstName = name.substr(0, index); // Gets the first part
				lastName = name.substr(index + 1);
			}
			
		    var $url = 'http://web2lead.shahal.co.il/web2lead/';  
		    var $values = {
		        FIRSTNAME: firstName,
		        LASTNAME: lastName,
		        EMAIL: email,
		        PHONE1: phone,
		        CAMPAIGN_KEY: 'facebookms',
		        REDIRECTURL: '',
				CITYNAME: '',
		        ERRORURL: '',
		        numberOfNames: 5,
		        Pid: 443,
		        Sid: 67,
		        strCAPTCHA: 'E301'

		    };

		    $.get($url, $values).done(function (res) { 
		        // fbq('track', 'shachal_lead');
		        $('#' + formType + '-form .form-input-container').hide();
		        $('#' + formType + '-form .form-success-container').show();
		    });

		    var $mail_url = 'http://dev.jetwebserver.com/shahal/mail.php';

		    var $mail_values = $values;

		    $mail_values.APPROVE_CALL = $('#' + formType + '-approve-call').is(':checked');
		    $mail_values.APPROVE_MARKETING = $('#' + formType + '-approve-marketing').is(':checked');

		    $.post($mail_url, $mail_values).done(function (res) { });

		    $('#' + formType + '-form').submit(function () {
		        return;
		    });
		    e.preventDefault();
		});
	}

	submitForm('desktop');
	submitForm('mobile');
	submitForm('footer');


});