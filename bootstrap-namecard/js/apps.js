$(document).ready(function(){
	var number = 1;
	$("#submitContact").click(function(){
		firstName = $("#firstName").val();
		lastName = $("#lastName").val();
		address = $("#address").val();
		birthDate = $("#birthDate").val();

		if (firstName===""||lastName===""||address===""||birthDate==="") {
			alert("Please fill all of your data");
		} else {
			$("tbody").append("<tr><td>"+number+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td>"+address+"</td><td>"+birthDate+"</td></tr>");
			$("#firstName").val("");
			$("#lastName").val("");
			$("#address").val("");
			$("#birthDate").val("");
			$("#firstName").focus();
			number += 1;
		};

		return false;
	});

});