var modalVs = `<div class="modal-container">
	<div class="modal-card">
		<div class="modal-card-title">
			<span class="modal-card-title-text">Desafío</span>
		</div>
		<div class="modal-card-body">
			<div class="modal-card-personajes">
				<div class="modal-card-retador">
					<img class="modal-card-picture" src="http://lorempixel.com/200/200" alt="">
					<span class="modal-card-name">m. isabel</span>
				</div>
				<div class="modal-card-iconos">
					<div class="modal-cards-icon-top">
						<span>vs.</span>
					</div>
					<div class="modal-cards-icon-bottom">
						<img class="modal-card-medalla"src="img/badge.png" alt="">
					</div>
				</div>
				<div class="modal-card-retado">
						<img class="modal-card-picture" src="http://lorempixel.com/200/200" alt="">
						<span class="modal-card-name">m. isabel</span>
				</div>
			</div>
			<div class="modal-card-button-container">
				<a href="#" class="modal-card-button">Comenzar</a>
			</div>
		</div>
	</div>
</div> `;

var modalResult = `<div class="modal-container">
	<div class="modal-card">
		<div class="modal-card-title">
			<span class="modal-card-title-text">Resultado</span>
		</div>
		<div class="modal-card-body">
			<div class="modal-card-personajes">
				<div class="modal-card-retador">
					<img class="modal-card-picture" src="http://lorempixel.com/200/200" alt="">
					<span class="modal-card-name">m. isabel</span>
				</div>
			</div>
			<div class="modal-card-result-container">
				<span class="modal-card-result">¡Perdiste!</span>
			</div>
			<div class="modal-card-button-container">
				<a href="#" class="modal-card-button">volver</a>
			</div>
		</div>
	</div>
</div> `;

$(function(){

	$('.header-menu-toggle').on('click', function(){
		$(".header-menu").slideToggle('fast');
	});

	$('.submenu').on('click', function(){
		$(this).children('ul').slideToggle('fast');
	});

	$('.friends-list-button').on('click', function(e){
		e.preventDefault();
		$('body').append(modalVs);
	})

	$('#game-how').click(function(){
	  $('.header-menu-nav-items-how').slideToggle('show','linear');
	});

	$('#toggleNav').click(function(){
	  $('.header-menu-nav-items').toggleClass('show');
	});

	$('#login').click(function () {
	  $('.form-container').slideToggle('show', 'linear');
	});
	//
	$('#toggleNav').click(function () {
	  $('.header-menu-nav-items').toggleClass('hidden');
	});

	var timer = document.getElementById('timer');
	if (timer) {
	  var svg = document.getElementById('svg');
	  var width = 60;
	  svg.setAttribute('width', width);
	  svg.setAttribute('height', width);
	  var t = 60;
	  var theta = 0;
	  var radius = svg.getAttribute('width') / 2;
	  timer.setAttribute('transform', 'translate(' + radius + ',' + radius + ')');

	  (function animate() {
	    theta += 0.5;
	    theta %= 360;
	    var x = Math.sin(theta * Math.PI / 180) * radius;
	    var y = Math.cos(theta * Math.PI / 180) * -radius;
	    var d = 'M0,0 v' + -radius + 'A' + radius + ',' + radius + ' 1 ' + ((theta > 180) ? 1 : 0) + ',1 ' + x + ',' + y + 'z';
	    timer.setAttribute('d', d);
	    setTimeout(animate, t);
	  })();
	}

	$('.juego-sala').click(function () {
	  $('#juegosDisponibles').fadeToggle('show', 'linear');
	  $(this).toggleClass('rotate');
	});

	$('#iconPista').click(function () {
	  $('.game-card-body-help-text').fadeToggle('show', 'linear');
	});

});
