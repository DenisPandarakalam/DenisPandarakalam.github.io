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
});
  