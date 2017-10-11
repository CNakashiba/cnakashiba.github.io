$(document).ready(function(){		
 
	// parallax
	// $('#intro').scroll(function(){
 //    	s = $('#intro').scrollTop();
 //    	$('#introImage img').css('-webkit-transform', 'translateY(' + (s/3) + 'px)');
 //  	});

// scrolling from one part of the page to another
// ===============================================
	$('.x').on('click', function (e){
		// remove  "active" class from all links, using removeClass()
		e.preventDefault();
		var target = $(this)[0]['hash']
		var $target = $(target);

		$('body').stop().animate({
			'scrollTop': $target.offset().top
		}, 
		900, 'swing', function(){
			window.location.hash = target;
		}); 

		// $(this).click(underLine); 	
		// function underLine(){
		// 	event.preventDefault();
		// 	blackout();
		// 	$(this).attr('class', 'active');
		// }
		// function blackout(){
		// 	$('.x').attr('class', 'a');
		// }

	});

// ==========================================================================
	//slideshow carousel
	// var pauseInterval = true;
	
	// set an interval for the slide to run on
	var interval = window.setInterval(rotateSlides, 5000)
	// duration till slide changes (5 sec)
  
  	function rotateSlides() {
    	// Get the first slide and store it
    	var $firstSlide = $('#carousel').find('div:first');
    	// Get the width of the slide so we know how much to slide by
    	var width = $firstSlide.width();
    	
    	// Animate the first slide to move to the left the length of the
 	   	// width. Set 1000 (1sec) to be the length of the slide transition.
    	$firstSlide.animate({marginLeft: -width}, 1000, function(){
      	// Reorder slides - move the $firstSlide after the last slide
      		var $lastSlide = $('#carousel').find('div:last')
      		$lastSlide.after($firstSlide);
      	// Reset slide position to the end of the queue
      		$firstSlide.css({marginLeft: 0})
    	});
  	}

	// Listen for click on arrows
  	$('#left-arrow').click(previousSlide);
  	$('#right-arrow').click(nextSlide);
  	// Listen for click on slide image
  	$('.slide-image').click(nextSlide);

	function nextSlide(){
	    window.clearInterval(interval);
	    var $currentSlide = $('#carousel').find('div:first');
	    var width = $currentSlide.width();

	    $currentSlide.animate({marginLeft: -width}, 1000, function(){
	      var $lastSlide = $('#carousel').find('div:last')
	      $lastSlide.after($currentSlide);
	      $currentSlide.css({marginLeft: 0})
	      interval = window.setInterval(rotateSlides, 5000);
	    });
	  }
  
  	function previousSlide(){
	    window.clearInterval(interval);
	    var $currentSlide = $('#carousel').find('div:first');
	    var width = $currentSlide.width();
	    var $previousSlide = $('#carousel').find('div:last')
	    $previousSlide.css({marginLeft: -width})
	    $currentSlide.before($previousSlide);

	    $previousSlide.animate({marginLeft: 0}, 1000, function(){
	      interval = window.setInterval(rotateSlides, 5000);
	    });
	  }

/////////////////////////////

	  /* TO ACTIVATE THE LINKS */
	  // $("#challenges a").click(function(){
	  //     var no = $(this).parent().index();
	  //     goToSlide(no + 1)
	  // });	  

	  // STEP 1
	  //Build out function goToSlide(no) so that the following function invocations get you what you want

	  // goToSlide("slide1");
	  // goToSlide("slide2");
	  // goToSlide("slide3");
	  // goToSlide("slide4");
	  // goToSlide("slide5");
	  
	  // function goToSlide(no){
	  // }
	  	//count the number of slides
	  	// get the total width of slides in front of the one you want
	  	//
		// event.preventDefault();	  	
		// window.clearInterval(interval);
	 //    var $currentSlide = $('#carousel').find('no');
	 //    var width = $currentSlide.width();

	   //  $currentSlide.animate({marginLeft: -width}, 1000, function(){
	   //    var $lastSlide = $('#carousel').find('div:last')
	   //    $lastSlide.after($currentSlide);
	   //    $currentSlide.css({marginLeft: 0})
	   //    interval = window.setInterval(rotateSlides, 5000);
	  	// });  
	  

	  // STEP 2
	   // be able to click on a link , and know which link (in terms of its order) that you clicked on
	  // e.g. "Business Stragey " => 1  "Financials & ..." => 2

	  // STEP 3 
	  // Be able to take the number from STEP2, and use it to run the function, //goToSlide("slide3");
/////////////////////////////

});




