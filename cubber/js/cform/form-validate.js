function valid_datas( f ){
	console.log("coucou");
	if( f.name.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Merci de renseigner un nom!</span>');
		notice( f.name );
	}else if( f.email.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Merci de renseigner un mail valide!</span>');
		notice( f.email );
	//}else if( f.phone.value == '' ){
		//jQuery('#form_status').html('<span class="wrong">Your phone must not be empty and correct format!</span>');
		//notice( f.phone );
	}
	/*else if( f.subject.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Merci d\'indiquer le sujer de votre message!</span>');
		notice( f.subject );
	}*/
	else if( f.message.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Merci de renseigner un message!</span>');
		notice( f.message );
	}else{
		 jQuery.ajax({
			url: 'scripts/envoimail.php',
			type: 'post',
			data: jQuery('form#gsr-contact').serialize(),
			complete: function(data) {
				jQuery('#form_status').html(data.responseText);
				jQuery('#gsr-contact').find('input,textarea').attr({value:''});
				jQuery('#gsr-contact').css({opacity:1});
				jQuery('#gsr-contact').remove();
			}
		});
		jQuery('#form_status').html('<span class="loading">Sending your message...</span>');
		jQuery('#gsr-contact').animate({opacity:0.3});
		jQuery('#gsr-contact').find('input,textarea,button').css('border','none').attr({'disabled':''});
	}
	
	return false;
}

function notice( f ){
	jQuery('#gsr-contact').find('input,textarea').css('border','none');
	f.style.border = '1px solid red';
	f.focus();
}