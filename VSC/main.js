$(document).ready(function(){
    $('#buttonSend').click(function(){
        var inputText = $("#inputText").val();
        var outputTextArea = $('#outText');
        $.ajax({
            url: "http://localhost:8080/translate",
            type: "POST",
            crossDomain: true,
            data: JSON.stringify(inputText),
            dataType: "json",
            success: function (response) {
                console.log(response)
                var resp = JSON.parse(response)
                $('#outText').val(resp);

            },
            error: function (xhr, status) {
                console.log("error");
            }
        });
    });
})
