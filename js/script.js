$(document).ready(function () {
    $('#content').load("text.html");
    $('nav a').on('click',function () {
        var url = $(this).attr("href");
        $("#content").fadeOut(1000,function () {
            $("#content").load(url,function () {
                $("#content").fadeIn(1000);
            });
        });
        return false;
    });

    $("a.rozszerz").on('click', function () {
        $('.addition').appendTo(".jumbotron");
    });

    //$(function () {
        //if ($("#Select").val() == "Dobry")
           // $("#WSelect").prop('disabled', true);
        //else
            //$("#WSelect").disabled('disabled', false);
    //})

    $("a#single_image").fancybox();

    /* Using custom settings */

    $("a#inline").fancybox({
        'hideOnContentClick': true
    });

    /* Apply fancybox to multiple items */

    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false
    });
});