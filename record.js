jQuery(document).ready(function() {
	$("#l1,#l2,#l3").hide();
	var but = '';
	var rec = '';
	time = 0;

	function timer_start() {
		setInterval(function() {
			time += 4;
		});
	}
	$("#start").click(function() {

		rec += '<?xml version="1.0" encoding="utf-8"?><paths>';
		timer_start();
		$('body').keyup(function(eventObject) {
			key = eventObject.which;
			if (key == 37) {
				$("#b1").append('<div class="line"></div>');
				$('#time').append(time + '+');
				but = 'left';
				rec += '<path><buttons>' + but + '</buttons><time>' + time + '</time></path>';
				time = 0;
			}

			if (key == 40) {
				$('#time').append(time + '+');
				$("#b2").append('<div class="line"></div>');

				but = 'center';
				rec += '<path><buttons>' + but + '</buttons><time>' + time + '</time></path>';
				time = 0;
			}

			if (key == 39) {
				$('#time').append(time + '+');
				$("#b3").append('<div class="line"></div>');
				but = 'right';
				rec += '<path><buttons>' + but + '</buttons><time>' + time + '</time></path>';
				time = 0;
			}
		});


		// $('body').keyboard('aleft adown', { preventDefault : true},
		//     function () {
		//   	   	$("#b1").append('<div class="line"></div>');
		//   	   	$("#b2").append('<div class="line"></div>');

		// });
		// $('body').keyboard('adown aright', { preventDefault : true},
		//     function () {
		//   	   	$("#b2").append('<div class="line"></div>');
		//   	   	$("#b3").append('<div class="line"></div>');

		// });

		$('#stop').click(function() {
			clearInterval();
			rec += ' </paths>';
			alert(rec);
			save();
		});
	});

	//Send Data to Server

	function save() {
		$.post("save.php", {
				xml: rec
			},
			onAjaxSuccess
		);

		function onAjaxSuccess(data) {
			alert(data);
		};
	}



});