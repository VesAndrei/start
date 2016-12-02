function uploadPic() {
    console.log($('#photoFile'));



    var dataVar={
        "url":"http://kingofwallpapers.com/face/face-018.jpg"
    }


    $.ajax({
      url: 'https://api.projectoxford.ai/face/v1.0/detect',
      method: 'POST',
      headers: {"Ocp-Apim-Subscription-Key": "35fcd66f4f8e41f4bfbfdb5c2a3f6a2f"},
      data: JSON.stringify(dataVar),


      contentType: 'application/json; charset=UTF-8',


      success: handleResults,  // Name of a function to be called after API call was successful
      error: function(e){
        console.log(e);
      }
    });

}


function handleResults(e) {
    if(e.length>0){
        alert('login successful!');
    }
	console.log(e);
}

// $("#upload").click(function(){
//         $("h1").append("<p>CHECK</p>")
//     });
// });



    // $(function() {
    //     var params = {
    //         // Request parameters
    //         "returnFaceId": "true",
    //         "returnFaceLandmarks": "false",
    //         "returnFaceAttributes": "{string}",
    //     };
      
    //     $.ajax({
    //         url: "https://api.projectoxford.ai/face/v1.0/detect?" + $.param(params),
    //         beforeSend: function(xhrObj){
    //             // Request headers
    //             xhrObj.setRequestHeader("Content-Type","application/json");
    //             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{35fcd66f4f8e41f4bfbfdb5c2a3f6a2f}");
    //         },
    //         type: "POST",
    //         // Request body
    //         data: "{body}",
    //     })
    //     .done(function(data) {
    //         alert("success");
    //     })
    //     .fail(function() {
    //         alert("error");
    //     });
