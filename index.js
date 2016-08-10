$(function(){
  $(".text_process").click(function(){

    $.ajax({
        url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {sentence: $("#yoda_input").val()}, // Additional parameters here
        dataType: 'html',
        //headers: {'X-Mashape-Key': 'HWUOMtYSvwmsh5Ro77HDmdgszIQgp1jAkwfjsnRhMUQrLr3bq4', 'Accept': 'text/plain'},
        success: function (data) {
            $("#output").html(data);
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "HWUOMtYSvwmsh5Ro77HDmdgszIQgp1jAkwfjsnRhMUQrLr3bq4"); // Enter here your Mashape key
        }
    });

});
});
