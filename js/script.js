
//ANCHOR TAGS ===============================

$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
      
      if(windowWidth < 769){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }
  });
});



//ANCHOR TAGS END ===============================


$('#slider').rbtSlider({

  height: '100vh',
  // displays dots pagination
  'dots': false,
  // displayes arrows navigation
  'arrows': false,
  // autoplay interval
  // 3 = 3 seconds
  'auto': 3
});






// NAV +===========================

$(document).scroll(function() {
  var y = $(this).scrollTop();  
  if (y > 700) {
    $('#NAV').fadeIn();
  } else {
    $('#NAV').fadeOut();
  }
});

/*

*/


// NAV  +===========================



// SOUND MANAGER +===========================

$(document).ready(function(){
$(".audio-element").audioelement();
});
// SOUND MANAGER END +===========================



// TWITTER  ===============================



$(document).ready(function(){
   $('.tweet').twittie({
            username: 'mommasboykc',
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank">Details</a>',
            count: 2,
            hideReplies: true
    });
});

// TWITTER  END ===============================





// COLLAPSIBLE NAV MENU ===============================


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});



// COLLAPSIBLE NAV MENU END ===============================







