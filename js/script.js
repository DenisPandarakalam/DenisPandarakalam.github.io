console.log('script.js')

$(document).ready(() => {

    /** MOUSE INFO */
    $(this).on('mousemove', function(e) {
        
        var mouseinfo = `${e.pageX} :x\n${e.pageY} :y`
        console.log(mouseinfo);
        $('#mouseinfo').text(mouseinfo);
    });

    /** LOGO HOVER */
    $('.logo').on('mouseenter', function(e1) {

        /** STARTING ANIMATION */
        $('#logomain').hide();
        $('#logoanim').show();
        $('#logoanimv').trigger('play');
        $('#logoanimv').attr('loop','loop');
        
        
        /** PLAYING AUDIO */
        var audio = document.getElementById('audio1');
        audio.currentTime = 0;

        var rect = e1.target.getBoundingClientRect()
        var y = e1.clientY - rect.top;
        audio.volume = 0.5*(rect.height-y)/(rect.height);

        $('.logo').on('mousedown.volume', (e2) => {

            rect = e2.target.getBoundingClientRect()
            y = e2.clientY - rect.top;
            audio.volume = 0.5*(rect.height-y)/(rect.height);
        });
        audio.play();

    }).on('mouseleave', function() {

        /** STOPPING ANIMATION */
        $('#logoanimv').trigger('pause');
        $('#logoanimv').get(0).currentTime = 0;
        $('#logoanim').hide();
        $('#logomain').show();

        /** STOPPING AUDIO */
        $('.logo').off('mousedown.volume');
        
        var audio = document.getElementById('audio1');
        audio.volume = 0.0;
        audio.pause();
        
    });

    /** HASH */
    var hash = window.location.hash.substring(1);
    $('section:not(#'+hash+')').removeClass('active').hide();   
    $('nav a[href$='+hash+']').addClass('active');
    $('#'+hash).addClass('active');

    $(window).on('hashchange', function() {

        oldHash = hash;
        hash = window.location.hash.substring(1);

        // Active class
        $('nav a[href$='+oldHash+']').removeClass('active');
        $('section:not(#'+hash+')').removeClass('active').hide();   

        $('nav a[href$='+hash+']').addClass('active');
        $('#'+hash).show().addClass('active');

    });
});