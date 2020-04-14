
			$(document).ready(function(){
				
				
				$('#display-picture').animate({top:"0"},1000);
				
				$('#qualification').animate({right:"0"},1000);
				$('#about-me').animate({left:"0"},1000);

			
				
			});
		function btnSendEmail(){
			
			//cleaning up errors
			$('#invalid-email').hide();
			$('#invalid-message').hide();
			var message = $("#modal-message").val();
			var email_address = $("#modal-email-address").val();
			if (email_address == null || email_address == "" || !email_address.includes("@")){
				$('#invalid-email').show();
				return;
			}
			if (message == null || message == ""){
				$('#invalid-message').show();
				return;
			}
			//cleaning up fields
			$("#modal-message").val("");
			$("#modal-email-address").val("");
			//cleaning up errors
			$('#invalid-email').hide();
			$('#invalid-message').hide();
			//closing the model
			$('#btn-close-modal').click();
		}
			
