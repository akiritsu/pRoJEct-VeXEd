$(document).ready(function(e) { 
    "use strict";
    //Code for slider images. you can change slider images from this code.
    if($('.has-slider').length > 0){
        $("body").backgroundCycle({
            imageUrls: [
                'images/slider/slider1.jpg',
                'images/slider/slider5.jpg',
                'images/slider/slider4.jpg',
                'images/slider/slider3.jpg',
                'images/slider/slider2.jpg'
            ],
            fadeSpeed: 2000,
            duration: 3000,
            backgroundSize: SCALING_MODE_COVER
        });
    }
    //Code for change youtube video. for video background verient.
    if($('#ytvid').length > 0){
        var options = { videoId: 'ab0TSkLe-E0', start: 0,wrapperZIndex: 99};
        $('#ytvid').tubular(options);
    }
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 4, 2019 01:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        


        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var hourLength = hours.toString().length
        var minLength = minutes.toString().length
        var daysLength = days.toString().length
        var secondsLength = seconds.toString().length
        document.getElementById('day').innerHTML = daysLength == 1 ? '0' +days:days;
        document.getElementById('hour').innerHTML = hourLength == 1 ? '0' +hours:hours ;
        document.getElementById('min').innerHTML = minLength == 1 ? '0' + minutes:minutes;
        document.getElementById('second').innerHTML = secondsLength == 1 ? '0'+ seconds:seconds;
        
        var s = 6 * seconds;

        $('.round').css({'transform': 'rotate(' + s + 'deg)'});
        $('.round').css({'-webkit-transform': 'rotate(' + s + 'deg)'});
        $('.round').css({'-o-transform': 'rotate(' + s + 'deg)'});
        $('.round').css({'-moz-transform': 'rotate(' + s + 'deg)'});
        $('.round').css({'-ms-transform': 'rotate(' + s + 'deg)'});

        // element = document.querySelectorAll('.round');
    
        // element.style.webkitTransform = 'rotate(' + s + 'deg)'
        // element.style.mozTransform = 'rotate(' + s + 'deg)'
        // element.style.msTransform = 'rotate(' + s + 'deg)'
        // element.style.oTransform = 'rotate(' + s + 'deg)'
        
       // s != 0 || s != 354 ? $('.seconds-holder .round').addClass('ANIM'):$('.seconds-holder .round').removeClass('ANIM');

        var WIDTH = $('.circle-holder').height();
       // $('#digitalsecond').attr('transform', 'rotate('+s+' '+WIDTH/2+' '+WIDTH/2+')');
        //$('#digitalsecond').animate({svgTransform: 'rotate('+s+' '+WIDTH/2+' '+WIDTH/2+')'});

        var g= document.querySelector('image#digitalsecond'),
        transform= getComputedStyle(g).getPropertyValue('transform');
        g.setAttribute('transform', 'rotate('+s+' '+WIDTH/2+' '+WIDTH/2+')');

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("day,hour,min,second").innerHTML = "EXPIRED";
        }
    }, 1000);
    //alert(window.innerWidth+' x '+window.innerHeight)
    $('html,body,.hidden_overflow').css({'width':window.innerWidth,'height':window.innerHeight})

    $(window).resize(function(){
        $('html,body,.hidden_overflow').css({'width':window.innerWidth,'height':window.innerHeight})
    })
    // $('svg,svg image').attr({'width':$('img.round').outerWidth(),'height':$('img.round').outerWidth()})
    // $('rect').attr({'x':$('img.round').outerWidth()-95,'y':$('img.round').outerWidth()-35})


    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    isAndroid == true ? $('.seconds-holder .round').addClass('mob_trans'):$('.seconds-holder .round').removeClass('mob_trans');

    function get_desktop(){

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        iOS == false && isAndroid == false && navigator.userAgent.match(/iemobile/i) == null ? $('.countdown-caption').addClass('desktop'):$('.countdown-caption').removeClass('desktop');
    }
    get_desktop();
    $(window).resize(function(){
        get_desktop();
    })

});

