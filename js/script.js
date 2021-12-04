console.log("script.js")

var audio = document.getElementById("audio1");
var logo  = document.getElementById("logo");

$(document).ready(() => {

    $("#logo").mouseenter(() => {
        audio.currentTime = 0;
        audio.volume = 0.2;
        audio.play();
    });
    
    $("#logo").mouseleave(() => {
        audio.pause();
    });

    var hash = window.location.hash;
    hash = hash.substring(1);
    $('nav > a[href$='+hash+']').addClass("active");

    $(window).on('hashchange', function() {
        $('.active').removeClass('active');
        var hash = window.location.hash;
        hash = hash.substring(1);
        console.log(hash);
        $('nav > a[href$='+hash+']').addClass("active");
    });
});


// $(".intro").click(() => {
    
//     $(".name").css({
//         "animation": ""
//     });

//     $(".intro").remove();
//     console.log("CLICK");
    
//     $(".name").css({
//         "animation": "typing 2s steps(11), blink .5s step-end infinite alternate",
//         "animation-delay": "0.5s",
//         "animation-fill-mode": "backwards"
//     });
// });