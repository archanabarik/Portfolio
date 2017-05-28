$(document).foundation();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '95%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInRight');
  }, {
    offset: '85%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInUp');
  }, {
    offset: '95%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });

  $('.wp1').waypoint(function() {
    $('#nav-toggle').addClass('past-main');
  }, {
    offset: '85%'
  });

   $('.wp3').waypoint(function() {
    $('#nav-toggle').removeClass('past-main');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('#nav-toggle').addClass('past-main');
  }, {
    offset: '85%'
  });

   $('.wp6').waypoint(function() {
    $('#nav-toggle').removeClass('past-main');
  }, {
    offset: '85%'
  });

    $('.wp1').waypoint(function() {
    $('#fp-nav').addClass('past-main2');
  }, {
    offset: '85%'
  });

   $('.wp3').waypoint(function() {
    $('#fp-nav').removeClass('past-main2');
  }, {
    offset: '85%'
  });

   $('.wp4').waypoint(function() {
    $('#fp-nav').removeClass('past-main2');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('#fp-nav').addClass('past-main2');
  }, {
    offset: '85%'
  });

   $('.wp6').waypoint(function() {
    $('#fp-nav').removeClass('past-main2');
  }, {
    offset: '85%'
  });


});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
});



var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    showRight = document.getElementById( 'showRight' ),
    body = document.body;


showRight.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
  disableOther( 'showRight' );
};


function disableOther( button ) {

  if( button !== 'showRight' ) {
    classie.toggle( showRight, 'disabled' );
  }

}

// 


