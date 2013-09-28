//////////////////////////////
//	 tap A tap  Core.js		//
//////////////////////////////


var button					= new Array();
var time					= new Array();
var i						= 0;
var j						= 0;
var k						= 0;
var k2						= 0;
var k3						= 0;
var k_last,k_last2,k_last3	= 0;
var len; //Длина хмл
var button_l, button_c, button_r;
var score					= 0;
var add						= 100;



jQuery(document).ready(function() {
	$("#l1,#l2,#l3").hide();
	timer_start();

	jQuery.ajax({
		type: "GET",
		url: "newxml.xml",
		dataType: "xml",
		success: function(xml) {
			len = jQuery(xml).find('path').length;
			jQuery(xml).find('path').each(
				function() {
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
			but_r(button[j], time[j]);
		}
	}

	function but_r(buttonq, timeq) {
		$('body').queue(function() {
			$('body').oneTime(parseInt(timeq), function() {
				$("#time").html(timeq);
				change(buttonq, timeq);
				$(this).dequeue();
			});
		});
	}

	function timer_start() {
		setInterval(function() {
			$("#path").html(button_l + '-' + button_c + '-' + button_r);
		});
	}

	function change(buttonq, timeq) {
		if (buttonq == "left") {
			k++;
			$("#b1").append('<div class="line"></div>');
			$('body').oneTime(400, function() {
				button_l = buttonq;
			});
		}

		if (buttonq == "center") {
			k2++;
			$("#b2").append('<div class="line"></div>');
			$('body').oneTime(400, function() {
				button_c = buttonq;
			});
		}

		if (buttonq == "right") {
			k3++;
			$("#b3").append('<div class="line"></div>');
			$('body').oneTime(400, function() {
				button_r = buttonq;
			});
		}

		// if (buttonq == "leftcenter") {
		// 	$("#b1").append('<div class="line"></div>');
		// 	$("#b2").append('<div class="line"></div>');
		// }
		// if (buttonq == "centerright") {
		// 	$("#b2").append('<div class="line"></div>');
		// 	$("#b3").append('<div class="line"></div>');
		// }
		// if (buttonq == "leftright") {
		// 	$("#b1").append('<div class="line"></div>');
		// 	$("#b3").append('<div class="line"></div>');
		// }

	}

	//Обработка клавиш
	$('body').keydown(function(eventObject) {
		key = eventObject.which;

		if (key == 37) {
			if (button_l == 'left') {
				if (k >= k_last) {
					score = score + add;
					$("#score").html(score);
					button_l = 'none';
				}
				if (k <= k_last) {
					score = score - add;
				}
				k_last = k;
			} else {
				score = score - add;
			}
		}
		if (key == 40) {
			if (button_c == 'center') {
				if (k2 >= k_last2) {
					score = score + add;
					$("#score").html(score);
					button_c = 'none';
				}
				if (k2 <= k_last2) {
					score = score - add;
				}
				k_last2 = k2;
			} else {
				score = score - add;
			}
		}
		if (key == 39) {
			if (button_r == 'right') {
				if (k3 >= k_last3) {
					score = score + add;
					$("#score").html(score);
					button_r = 'none';
				}
				if (k3 <= k_last3) {
					score = score - add;
				}
				k_last3 = k3;
			} else {
				score = score - add;
			}
		}


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