/*
 * Jquery AnimateOneByOne		
 * Author:			Devlart (Louis Frayard)
 * Date:			13-07-12
 * URL:				http://www.devlart.fr
 * Version:			1.1
 */
(function($) {

	$.fn.animateOneByOne = function(params) {
		
		params = $.extend( {css:'', duration: 700, interval:300, order:'ASC', callback:''}, params);
		
		if(params.order == 'ASC'){
			elements = $(this);		
		}else{
			elements = $(this).get().reverse();
		}

		count = $(this).length - 1;
		
		$(elements).each(function(id) {
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