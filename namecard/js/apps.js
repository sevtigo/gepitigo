$(document).ready(function(){

	$("#submitContact").click(function(){
		firstName = $("#firstName").val();
		lastName = $("#lastName").val();
		address = $("#address").val();
		birthDate = $("#birthDate").val();
		contactData =""

		if (firstName===""||lastName===""||address===""||birthDate==="") {
			alert("Please fill all of your data");
			$("#firstName").focus();
		} else {
			$("#contactPlaceholder").append("<div>"+firstName+"<br>"+lastName+"<br>"+address+"<br>"+birthDate+"</div>");
		};

		return false;
	})

});