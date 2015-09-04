 
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
 
    $('.carousel').carousel({
      interval: 8000
    })
    
    $(document).ready( function() {
    $('#topCarousel').carousel({
    	interval:   8000
	});
	
	var clickEvent = false;
	$('#topCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
	       $(".responsive-calendar").responsiveCalendar({
          time: '2015-09',
          events: {
            "2015-09-30": {"number": 5, "url": "http://sutlej.net" },
            "2015-09-30": {"number": 1, "url": "http://sutlejsolutions.com"}, 
            "2015-09-03":{"number": 1}, 
            "2015-09-12": {}}
        });	
    
  });
