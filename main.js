('#sent_mail').addEventListener('click',function(e){
    e.preventDefault();
    var data = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
    }
    $.ajax({
        url: "action_main.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                 $('#name').val();
                 $('#email').val(),
                 $('#message').val()
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#name').val();
                $('#email').val(),
                $('#message').val() 
            }, 3000);
        }
    });
});