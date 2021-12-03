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

$(".intro").click(() => {

    $(".intro").remove();
    console.log("CLICK");
    
    $(".name").css({
        "animation": "typing 2s steps(11), blink .5s step-end infinite alternate",
        "animation-delay": "0.5s",
        "animation-fill-mode": "backwards"
    });

    $('.intrologo').attr('src', "images/DPandaLogoIntromation1.gif"+"?"+new Date().getTime());
    setTimeout(() => {
        $('.logo').css("opacity", 1);
        
        setTimeout(() => {

            $('.intrologo').remove();
        }, 300);
    }, 4000);

});