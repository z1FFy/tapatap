	var button = new Array();
	var time = new Array();
	var i=0;
	var j=0;
	var len;
	var button_l,button_c,button_r;
  	jQuery(document).ready(function(){
  	$("#l1,#l2,#l3").hide();
  	timer_start();
		jQuery.ajax({
			type: "GET", // метод передачи данных, можно пропустить - по умолчанию и так get
			url: "newxml.xml", // путь к файлу, который будем читать
			dataType: "xml", // тип данных, с которыми работаем
			success: function(xml) { // переменная названа xml. ее можно назвать как либо по другому
				len = jQuery(xml).find('path').length;
				jQuery(xml).find('path').each(
				function()
				{	
					    i++;
					    button[i] = jQuery(this).find('buttons').text();
						time[i] = jQuery(this).find('time').text();
				});		
				but();
			}
		});
		
	  	function but() {
						while (j < len) {
						j++;
						but_r(button[j],time[j]);  
						}
						};

		function but_r(buttonq,timeq) {
		  		$('body').queue(function () {
				$('body').oneTime(parseInt(timeq), function() {
				$("#time").html(timeq);
				change(buttonq,timeq);  
				$(this).dequeue();
		      });    
			});	
		   }
		 
		   	function timer_start(){
	  setInterval(function() { 
			$("#path").html(button_l+'-'+button_c+'-'+button_r);
		   	});
	}
		   
		function change(buttonq,timeq) {		
			if (buttonq == "left") {
				$("#b1").append('<div class="line"></div>');
				button_l=buttonq;
					if (timeq > 1000) {
						$('body').oneTime(1000, function() {
						button_l='none';
						});
					}
					if (timeq < 1000) {
						button_l=buttonq;
					}
			
			}
			if (buttonq == "center") {
				$("#b2").append('<div class="line"></div>');
				button_c=buttonq;
					if (timeq > 1000) {
						$('body').oneTime(1000, function() {
						button_c='none';
						});
					}
					if (timeq < 1000) {
						button_c=buttonq;
					}

			}
			if (buttonq == "right") {
				$("#b3").append('<div class="line"></div>');
				button_r=buttonq;
					if (timeq > 1000) {
						$('body').oneTime(1000, function() {
						button_r='none';
						});
					}
					if (timeq < 1000) {
						button_r=buttonq;
					}

			}
			if (buttonq == "leftcenter") {
				$("#b1").append('<div class="line"></div>');
				$("#b2").append('<div class="line"></div>');
			}
			if (buttonq == "centerright") {
				$("#b2").append('<div class="line"></div>');
				$("#b3").append('<div class="line"></div>');
			}
			if (buttonq == "leftright") {
				$("#b1").append('<div class="line"></div>');
				$("#b3").append('<div class="line"></div>');
			}


 
				



		}
//Обработка клавиш
var score=0;
var add=100;
$('body').keydown(function(eventObject){
 // $("#score").append(button_key);
 key=eventObject.which;
  if (key == 37) {
  		if (button_l == 'left') {
	  		score=score+add;
  	      $("#score").html(score);
 	    button_l='none';
	    	  }
  } 
  if (key == 40) {
    		if (button_c == 'center') {
	  		score=score+add;
	  		$("#score").html(score);
 	     button_c='none';

	    	  }
  }
  if (key == 39) {
    		if (button_r == 'right') {
		score=score+add;
  	    $("#score").html(score);		
  	       	  button_r='none';  
	    	  }
  }		
  
/*
  			$('body').oneTime(500, function() {
				button_key=buttonq;
			});
*/

});




// $('body').keyboard('aleft+adown', { preventDefault : true},
//     function () {
//   	    if (button_key == 'leftcenter') {
// 		score=score+add;
//     	$("#score").html(score);
//     	button_key='none';
//    		 }
// });

// $('body').keyboard('adown+aright', { preventDefault : true},
//     function () {
//   	    if (button_key == 'centerright') {
// 		score=score+add;
//     	$("#score").html(score);
//     	button_key='none';
// 		}
// });

// $('body').keyboard('aleft+aright', { preventDefault : true},
//     function () {
//   	    if (button_key == 'leftright') {
// 		score=score+add;
//     	$("#score").html(score);
//     	button_key='none';
//     	}
// });




 

});
