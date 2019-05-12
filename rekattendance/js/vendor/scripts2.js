var API_ENDPOINT = "https://jjq8nwn0u3.execute-api.us-east-1.amazonaws.com/dev"

document.getElementById("sayButton").onclick = function(){

	var inputData = {
		"voice": $('#voiceSelected').val(),
		"text" : $('#postText').val()
	};

	$.ajax({
	      url: API_ENDPOINT,
	      type: 'POST',
	      data:  JSON.stringify(inputData)  ,
	      contentType: 'application/json; charset=utf-8',
	      success: function (response) {
					document.getElementById("postIDreturned").textContent="Post ID: " + response;
	      },
	      error: function () {
	          alert("error");
	      }
	  });
}


//document.getElementById("searchButton").onclick = function(){
window.onload = function(){
	  setInterval(function(){ 
	var postId = $('#postId').val();


	$.ajax({
				url: API_ENDPOINT + '?postId='+postId,
				type: 'GET',
				success: function (response) {

					$('#posts tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {

						//var player = "<audio controls><source src='" + data['url'] + "' type='audio/mpeg'></audio>"

						if (typeof data['url'] === "undefined") {
	    				var player = ""
						}

						$("#posts").append("<tr> \
								<td>" + data['Student'] + "</td> \
								<td>" + data['AttendanceStatus'] + "</td> \
								<td>" + data['FaceMatchPercentage'] + "</td> \
								<td>" + data['Dayy'] + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}, 3000);
}

document.getElementById("postText").onkeyup = function(){
	var length = $(postText).val().length;
	document.getElementById("charCounter").textContent="Characters: " + length;
}
