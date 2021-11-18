// $(function () {
//     $(document).scroll(function () { // for navbar scrolling
//       var $nav = $(".navbar");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

//Navbar

$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});
//Loader
let spinnerWrapper = document.querySelector('.spinner-wrapper');

    window.addEventListener('load', function () {
        // spinnerWrapper.style.display = 'none';
        spinnerWrapper.parentElement.removeChild(spinnerWrapper);
        document.querySelector('.wrapper').classList.add('fade-in');
    });

  $(function() { // for pieds heading
    var text = $(".text");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 20) {
        text.removeClass("hidden");
      } else {
        text.addClass("hidden");
      }
    });
  });
//Scrollformore
$(function(){
  var text =$("#scrollForMore");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll>=20) {
      text.addClass("scrollHidden");
    } else {
      text.removeClass("scrollHidden");
    }
  });
});

// Counter
  var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
//scroll Reveals
  window.sr = ScrollReveal();
  sr.reveal('.Headings' , {
  duration: 2000,
  origin:'bottom',
  distance: '50px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.rightService' , {
  duration: 2000,
  origin:'right',
  distance: '50px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.leftService' , {
  duration: 2000,
  origin:'left',
  distance: '50px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.midService' , {
  duration: 2000,
  origin:'bottom',
  distance: '50px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.rightEntrance' , {
  duration: 2000,
  origin:'right',
  distance: '50px'
  });
  window.sr = ScrollReveal();
  sr.reveal('.leftEntrance' , {
  duration: 2000,
  origin:'left',
  distance: '50px'
  });
//   sr.reveal('#slide3' , {
//     duration: 2000,
//     origin:'bottom',
//     distance: '50px'
//     });
//     sr.reveal('#slide1,#slide2, #slide4, #slide5' , {
//         duration: 2000,
//         origin:'bottom',
//         distance: '200px',
//         delay:1000
//         });

$(document).scroll(function (e) {
  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
  var roundScroll = Math.round(scrollPercent);
  $(".scrollBar1").css("width", scrollPercent + "%");
});


// Events
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);