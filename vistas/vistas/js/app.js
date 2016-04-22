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

	$('#login').click(function(){
	  $('.form-container').slideToggle('show','linear');
	});

	$('#game-how').click(function(){
	  $('.header-menu-nav-items-how').slideToggle('show','linear');
	});


	$('#toggleNav').click(function(){
	  $('.header-menu-nav-items').toggleClass('show');
	});



});
