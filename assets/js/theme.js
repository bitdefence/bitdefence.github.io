
/* Document Ready State. 
   Used: Global */	
jQuery(document).ready(function($)
	{
		/* Google Search */
		$('.menu-search-text').keyup(function (e) {  
			$('.gsc-input').val($(this).val());
			if (e.keyCode == 13) {
				$('td.gsc-search-button .gsc-search-button').click();
			}
		});
		$('.menu-search-submit').click(function(e){
			$('td.gsc-search-button .gsc-search-button').click();
		});
		
		/* Back Top. */		
		$('#back-top').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop:0},800);
		});		
		
		$('a[class^="tooltip-trigger"]').tooltip();	
		$('a[class^="popover-trigger"]').popover();
		
		/* Pretty Photo. 
		   Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]"> 
		         - For Single Image: <a data-rel="prettyPhoto"> 
		*/
		$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
		$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});		
		

		/* Sticky Menu. Used: Global */	
		var headerHeight = $("header").height();
		
		// var logoSmallHeight = 60;
		var submenuHeight = $("header").height();
		var pageWidthLimit = 975;

		function checkStickyMenu(){
		
			if($(window).scrollTop() > headerHeight-submenuHeight ){
				// #Back-Top visible
				$('#back-top').addClass('visible');
				
			} else if( $(window).scrollTop() == 0 ||  $(window).width() < pageWidthLimit){
				$('#back-top').removeClass('visible');
			}
		}
		$(window).on("scroll", function(){
				checkStickyMenu();
		});
			
		
});
