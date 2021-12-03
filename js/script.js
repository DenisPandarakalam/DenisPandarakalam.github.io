var audio = document.getElementById("audio1");
var logo  = document.getElementById("logo");

$("#logo").mouseenter(() => {
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
});

$("#logo").mouseleave(() => {
    audio.pause();
});


console.log($("nav > a"));

$(document).ready(() => {

    var url= window.location.href;
    var id = url.substring(url.lastIndexOf('#') + 1);
    console.log(id);
    $("nav > a[href=\"#"+id+"\"]").addClass("active");

    $("nav > a").click((e) => {

        console.log($(e.target));
        $("nav > a").removeClass("active");
        $(e.target).addClass("active");
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