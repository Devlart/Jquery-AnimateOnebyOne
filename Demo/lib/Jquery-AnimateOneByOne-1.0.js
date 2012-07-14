/*
 * Jquery oneByone		
 * Author:			Devlart (Louis Frayard)
 * Date:			13-07-12
 * URL:				http://www.devlart.fr
 * Version:			1.0
 */
(function($) {

	$.fn.animateOneByOne = function(params) {
		
		params = $.extend( {css:'', duration: 700, interval:300, callback:''}, params);
		
		count = $(this).length - 1;
		
		$(this).each(function(id) {
        	setTimeout(function(element) {
        		if(id == count){
		        	$(element).animate(params.css,params.duration,params.callback);  
		        }else{
			        $(element).animate(params.css,params.duration); 
		        }

	     }, id * (params.interval + params.duration), $(this));
	     
	   });
	   
	};
	
})(jQuery);