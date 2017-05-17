function validateCustomerForm(){

	var firstname = document.customerFeedbackForm.firstname;
	var lastname = document.customerFeedbackForm.lastname;
	var email = document.customerFeedbackForm.email;
	var comment = document.customerFeedbackForm.comment;
	var formSuccess = 1;
	var formFail = "";

	if (firstname.value == "")
	{
	document.customerFeedbackForm.firstname.placeholder = "Please Enter Your First Name";
	document.customerFeedbackForm.firstname.style.borderColor = "red";
	formSuccess = 0;
	formFail = formFail + " " + "*Please Enter Your First Name<br>"
}else {
	document.customerFeedbackForm.firstname.style.borderColor = "green ";
}

	if (lastname.value == "")
	{
		document.customerFeedbackForm.lastname.placeholder = "Please Enter Your Last Name";
		document.customerFeedbackForm.lastname.style.borderColor = "red";
		formSuccess = 0;
		formFail = formFail + " " + "*Please Enter Your Last Name<br>"
	}else {
		document.customerFeedbackForm.lastname.style.borderColor = "green ";
	}

	if (email.value == "")
	{
		document.customerFeedbackForm.email.placeholder = "Please Enter Your Email Address";
		document.customerFeedbackForm.email.style.borderColor = "red";
		formSuccess = 0;
		formFail = formFail + " " + "*Please Enter Your Email Address<br>"
	}else if (email.value.indexOf("@", 0) < 0)
	{
		document.customerFeedbackForm.email.placeholder = "Please Enter A Valid Email Address";
		document.customerFeedbackForm.email.style.borderColor = "red";
		formSuccess = 0;
		formFail = formFail + " " + "*Please Enter A Valid Email Address<br>"
	}else if (email.value.indexOf(".", 0) < 0)
	{
		document.customerFeedbackForm.email.placeholder = "Please Enter A Valid Email Address";
		document.customerFeedbackForm.email.style.borderColor = "red";
		formSuccess = 0;
		formFail = formFail + " " + "*Please Enter A Valid Email Address<br>"
	}else {
		document.customerFeedbackForm.email.style.borderColor = "green ";
	}

	if (comment.value == "")
	{
		document.customerFeedbackForm.comment.placeholder = "Please Enter Your Questions";
		document.customerFeedbackForm.comment.style.borderColor = "red";
		formSuccess = 0;
		formFail = formFail + " " + "*Please Enter Your Comments<br>"
	}else {
		document.customerFeedbackForm.comment.style.borderColor = "green ";
	}

	if (formSuccess == 1)
	{
		document.getElementById('successMessage').innerHTML = "Thank You for entering valid contact details. Please click Submit button again to send form.";
		document.getElementById("successMessage").style.display = "block";
		document.getElementById("errorMessage").style.display = "none";
		//document.getElementById('validateForm').style.display = "none";
		document.getElementById('submitForm').style.display = "inline-block";
		return true;

	}else {
		document.getElementById('errorMessage').innerHTML = "There was something wrong with your contact details, please do the following:<br>" + formFail;
		document.getElementById("errorMessage").style.display = "block";
		document.getElementById("successMessage").style.display = "none";
		return false;
	}
}

function thankYou() {
		var myWindow = window.open("thankyou.html", "_self");
}


var form = document.getElementById('customerFeedback');
form.addEventListener('submit', function(e){
 e.preventDefault();
var submit = validateCustomerForm.call(form);
if (submit) {
	var myWindow = window.open("thankyou.html", "_self");
form.submit();
}
});