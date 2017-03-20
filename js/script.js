
//ANCHOR TAGS ===============================

$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 2000, 'swing', function () {
          window.location.hash = target;
      });
      
      if(windowWidth < 769){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }
  });
});



//ANCHOR TAGS END ===============================

$(function () {
  $('#slides').superslides({
      play: 3000,
      pagination: false,
      hashchange: false
  });


});






// NAV +===========================

        $("#NAV").hide();                  
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 700) {
                $('#NAV').fadeIn();
            } else {
                $('#NAV').fadeOut();
            }
        });


// NAV  +===========================



// SOUND MANAGER +===========================


$(".audio-element").audioelement();


// SOUND MANAGER END +===========================



// TWITTER  ===============================




   $('.tweet').twittie({
            username: 'mommasboykc',
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank"></a>',
            count: 2,
            hideReplies: true
    });


// TWITTER  END ===============================





// COLLAPSIBLE NAV MENU ===============================



$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });


$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});



// COLLAPSIBLE NAV MENU END ===============================







