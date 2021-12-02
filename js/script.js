var audio = document.getElementById("audio1");
var logo  = document.getElementById("logo");

$("#logo").mouseenter(() => {
    audio.currentTime = 0;
    audio.play();
});

$("#logo").mouseleave(() => {
    audio.pause();
});