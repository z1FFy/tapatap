<html>
<head>
  <script src="http://www.airtranscargo.ru/templates/atc2/javascript/jquery-1.7.2.js"></script>
  <script type="text/javascript" src="jquery.timers.js"></script>
    <script type="text/javascript" src="core.js"></script>
  <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
 
 <title>test</title>
<script>
  	jQuery(document).ready(function(){
$('body').keyup(function(eventObject){
  alert('Клавиша клавиатуры возвратилась в ненажатое состояние. Код символа на этой клавише - ' + eventObject.which);
});
 
// вызовем событие keyup на элементе foo
//$('body').keyup();
 


});
</script>
	<style>
		.box {
			position: absolute;
			float: left;
			margin-left: 100px;
			margin-top: 50px; 
			background-color: #4a4a4a;
			width:200px;
			height: 500px;
		}	
		.line {
			position: absolute;
			float: left;
			background-color: #7b7b7b;
			width:100px;
			height: 70px;
			top: 1px;
			margin-left: 50px;
			-webkit-animation-name: 'movement';
			-webkit-animation-duration: 1s;
				animation-name: 'movement';
				animation-duration: 10s;

					}	
		.act {
			background-color: red;
		}
@-webkit-keyframes 'movement' {
    from {
	top: 50px;
    }
    to {
	top: 300px;
    }	
}
@keyframes 'movement' {
    from {
	top: 50px;
	left: 0px;
    }
    50% {
	top: 150px;
	left: 100px;
    }
    to {
	top: 50px;
	left: 0px;
    }	
}
	</style>
</head>
<body>
<p id="but">Press</p>
<div class ="box">  </div>
</body>
</html>