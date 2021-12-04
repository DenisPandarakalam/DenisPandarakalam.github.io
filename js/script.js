console.log('script.js')

$(document).ready(() => {

    /** LOGO SOUND */
    $('#logo').hover(function(e) {

        var audio = document.getElementById('audio1');
        audio.currentTime = 0;
        audio.volume = 0.5;

        $('#logo').on('mousedown.volume', (e) => {

            var rect = e.target.getBoundingClientRect()
            var y = e.clientY - rect.top;
            audio.volume = 0.5*(rect.height-y)/(rect.height);
        });
        audio.play();

    }, function() {

        $('#logo').off('mousedown.volume');
        
        var audio = document.getElementById('audio1');
        audio.volume = 0.0;
        audio.pause();
    });

    /** HASH */
    var hash = window.location.hash.substring(1);
    $('nav > div > a[href$='+hash+']').addClass('active');
    $('#'+hash).fadeIn(500);

    $(window).on('hashchange', function() {

        oldHash = hash;
        hash = window.location.hash.substring(1);

        $('nav > div > a[href$='+oldHash+']').removeClass('active');
        $('nav > div > a[href$='+hash+']').addClass('active');

        $('section').fadeOut(250).promise().done(function() {
            
            $('#'+hash).fadeIn(250);
        });
    });
});


// $('.intro').click(() => {
    
//     $('.name').css({
//         'animation': ''
//     });

//     $('.intro').remove();
//     console.log('CLICK');
    
//     $('.name').css({
//         'animation': 'typing 2s steps(11), blink .5s step-end infinite alternate',
//         'animation-delay': '0.5s',
//         'animation-fill-mode': 'backwards'
//     });
// });