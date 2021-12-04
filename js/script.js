console.log('script.js')

$(document).ready(() => {

    /** LOGO SOUND */
    $('#logo').on('mouseenter touchstart', function(e1) {

        var audio = document.getElementById('audio1');
        audio.currentTime = 0;
        
        var rect = e1.target.getBoundingClientRect()
        var y = e1.clientY - rect.top;
        audio.volume = 0.5*(rect.height-y)/(rect.height);

        $('#logo').on('mousedown.volume', (e2) => {

            rect = e2.target.getBoundingClientRect()
            y = e2.clientY - rect.top;
            audio.volume = 0.5*(rect.height-y)/(rect.height);
        });
        
        audio.play();

    }).on('mouseleave touchend', function() {

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