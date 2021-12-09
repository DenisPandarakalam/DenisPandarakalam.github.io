$(document).ready(() => {

    /** TIME INFO */
    currentTime();
    $('#timeinfo').on('mousedown.dark', toggleDark);

    /** MOUSE INFO */
    $(this).on('mousemove.mouseinfo', function(e) {
        
        var mouseinfo = `${e.pageX}/${e.pageY}`
        $('#mouseinfo').text(mouseinfo);
    });

    /** WINDOW INFO */
    $(this).on('mousemove.windowinfo', function(e) {
        $('#windowinfo').text(e.target.localName);
    })

    /** LOGO HOVER */
    $('#logoanim').on('mouseenter touchstart', function(e1) {

        /** STARTING ANIMATION */
        $('#logoanimv').trigger('play');
        $('#logoanimv').attr('loop','loop');
        
        /** PLAYING AUDIO */
        var audio = document.getElementById('audio1');
        audio.currentTime = 0;

        var rect = e1.target.getBoundingClientRect()
        var y = e1.clientY - rect.top;
        audio.volume = 0.5*(rect.height-y)/(rect.height);

        $('#logoanim').on('mousemove.volume', (e2) => {

            rect = e2.target.getBoundingClientRect()
            y = e2.clientY - rect.top;
            audio.volume = 0.5*(rect.height-y)/(rect.height);
        });
        audio.play();

    }).on('mouseleave touchend', function() {

        /** STOPPING ANIMATION */
        // animationRequestID = window.requestAnimationFrame(rewindLogoAnim);
        
        $('#logoanimv').removeAttr('loop');

        /** STOPPING AUDIO */
        $('#logoanim').off('mousemove.volume');
        var audio = document.getElementById('audio1');
        var intervalID = setInterval(function() {
            
            if(audio.volume - 0.01 >= 0) {

                audio.volume = audio.volume - 0.01;
            }
            else {
                clearInterval(intervalID);
                audio.pause();
            }
        }, 10);
        // audio.volume = 0;
    });

    /** HASH BEHAVIOR */
    hashChange();
    $(window).on('hashchange', hashChange);
});

function rewindLogoAnim(time) {

    if( Math.floor(vid.currentTime/vid.duration*100) % 49 ) {

        console.log(Math.floor(vid.currentTime/vid.duration*100));
        animationRequestID = requestAnimationFrame(rewindLogoAnim);
    }
    else {
        vid.currentTime = 0;
        vid.pause();
    }

}

function toggleDark() {
    var colors = ['red', 'black', 'pink'],
        gradient = $('.gradient');
    
    console.log(gradient);
    
    for(var i = 0; i < colors.length; i++) {

        if(gradient.hasClass(colors[i])) {
            gradient.removeClass(colors[i]);

            if(i == colors.length-1) i = 0;
            else i++;

            gradient.addClass(colors[i++]);
        }
    }
}

function hashChange() {

    var hash = window.location.hash.substring(1);
    if(!hash) hash = 'home';
        
    $('nav a').removeClass('active');
    $('section:not(#_'+hash+')').removeClass('active').hide();   

    $('nav a[href$='+hash+']').addClass('active');
    $('#_'+hash).show().addClass('active');
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + session;
  
    $('#timeinfo').text(time); 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
}
  