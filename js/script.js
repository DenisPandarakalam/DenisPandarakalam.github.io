console.log('script.js')

$(document).ready(() => {

    /** LOGO SOUND */
    $('#logo').on('mouseenter', function(e1) {

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

    }).on('mouseleave', function() {

        $('#logo').off('mousedown.volume');
        
        var audio = document.getElementById('audio1');
        audio.volume = 0.0;
        audio.pause();
    });

    /** HASH */
    var hash = window.location.hash.substring(1);

    if(!hash || hash=='home') {
        hash = 'home';
        $('section').addClass('active');
    }

    $('nav > div > a[href$='+hash+']').addClass('active');
    $('#'+hash).addClass('active');

    $(window).on('hashchange', function() {

        oldHash = hash;
        hash = window.location.hash.substring(1);

        // Updates navbar
        $('nav > div > a[href$='+oldHash+']').removeClass('active');
        $('nav > div > a[href$='+hash+']').addClass('active');

        // Updates page
        if(hash=='home') $('section').addClass('active');
        else {
            $('section:not(#'+hash+')').removeClass('active');
            $('#'+hash).addClass('active');
        }
    });
});