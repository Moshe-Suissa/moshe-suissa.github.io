$( document ).ready(function() {

function nav(){

	$('.nav-toggle').click(function(){

		$('.nav').toggleClass('open');

	});

}

function smoothScroll(){

	$('a[href^="#"]').click(function(event){

		var target = $($(this).attr('href'));

    if (target.length){
      event.preventDefault();
      $('html, body').animate({
	      scrollTop: target.offset().top - 15
      }, 300);
    }

		$('.nav').toggleClass('open');

	});

}

function fullSlider(){

	$('#full-slide .prev, #full-slide .next').click(function(){

		var $this = $(this),
				current = $('.banner').find('.active'),
				position = $('.banner').children().index(current),
				totalPics = $('.banner').children().length;

		if ($this.hasClass('next')){

			if (position < totalPics - 1){
				$('.active').removeClass('active').next().addClass('active');
			}

			else {
				$('.banner li').removeClass('active').first().addClass('active');
			}

		}

		else {

			if (position === 0){
				$('.banner li').removeClass('active').last().addClass('active');
			}

			else {
				$('.active').removeClass('active').prev().addClass('active');
			}

		}

	});

}

function threeSlider(){

	$('#three-slide .prev, #three-slide .next').click(function(){

		var $this = $(this),
				curBack = $('.slider').find('.back'),
				posBack = $('.slider').children().index(curBack),
				curCurr = $('.slider').find('.current'),
				posCurr = $('.slider').children().index(curCurr),
				curFront = $('.slider').find('.front'),
				posFront = $('.slider').children().index(curFront),
				totalPics = $('.slider').children().length;

		$('.slider').addClass('swap');

		setTimeout(function(){

			if ($this.hasClass('next')){

				if (posFront < totalPics - 1 && posCurr < totalPics - 1 && posBack < totalPics - 1){
					$('.back').removeClass('back').next().addClass('back');
					$('.current').removeClass('current').next().addClass('current');
					$('.front').removeClass('front').next().addClass('front');
				}

				else {

					if (posFront === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.slider li').removeClass('front').first().addClass('front');
					}

					else if (posCurr === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.slider li').removeClass('current').first().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}

					else {
						$('.slider li').removeClass('back').first().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}

				}

			}

			else {

				if (posBack !== 0 && posCurr !== 0 && posFront !== 0){
					$('.back').removeClass('back').prev().addClass('back');
					$('.current').removeClass('current').prev().addClass('current');
					$('.front').removeClass('front').prev().addClass('front');
				}

				else {

					if (posBack === 0){
						$('.slider li').removeClass('back').last().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}

					else if (posCurr === 0){
						$('.back').removeClass('back').prev().addClass('back');
						$('.slider li').removeClass('current').last().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}

					else {
						$('.back').removeClass('back').prev().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.slider li').removeClass('front').last().addClass('front');
					}

				}

			}

			$('.slider').removeClass('swap');

			$(".back").find('a').css('cursor', 'default');
			$(".front").find('a').css('cursor', 'default');
			$(".current").find('a').css('cursor', 'pointer');

		}, 300);

	});
}

function threeSlider2(){

	$('#three-slide .prev2, #three-slide .next2').click(function(){

		var $this = $(this),
				curBack = $('.slider2').find('.back2'),
				posBack = $('.slider2').children().index(curBack),
				curCurr = $('.slider2').find('.current2'),
				posCurr = $('.slider2').children().index(curCurr),
				curFront = $('.slider2').find('.front2'),
				posFront = $('.slider2').children().index(curFront),
				totalPics = $('.slider2').children().length;

		$('.slider2').addClass('swap2');

		setTimeout(function(){

			if ($this.hasClass('next2')){

				if (posFront < totalPics - 1 && posCurr < totalPics - 1 && posBack < totalPics - 1){
					$('.back2').removeClass('back2').next().addClass('back2');
					$('.current2').removeClass('current2').next().addClass('current2');
					$('.front2').removeClass('front2').next().addClass('front2');
				}

				else {

					if (posFront === totalPics - 1){
						$('.back2').removeClass('back2').next().addClass('back2');
						$('.current2').removeClass('current2').next().addClass('current2');
						$('.slider2 li').removeClass('front2').first().addClass('front2');
					}

					else if (posCurr === totalPics - 1){
						$('.back2').removeClass('back2').next().addClass('back2');
						$('.slider2 li').removeClass('current2').first().addClass('current2');
						$('.front2').removeClass('front2').next().addClass('front2');
					}

					else {
						$('.slider2 li').removeClass('back2').first().addClass('back2');
						$('.current2').removeClass('current2').next().addClass('current2');
						$('.front2').removeClass('front2').next().addClass('front2');
					}

				}

			}

			else {

				if (posBack !== 0 && posCurr !== 0 && posFront !== 0){
					$('.back2').removeClass('back2').prev().addClass('back2');
					$('.current2').removeClass('current2').prev().addClass('current2');
					$('.front2').removeClass('front2').prev().addClass('front2');
				}

				else {

					if (posBack === 0){
						$('.slider2 li').removeClass('back2').last().addClass('back2');
						$('.current2').removeClass('current2').prev().addClass('current2');
						$('.front2').removeClass('front2').prev().addClass('front2');
					}

					else if (posCurr === 0){
						$('.back2').removeClass('back2').prev().addClass('back2');
						$('.slider2 li').removeClass('current2').last().addClass('current2');
						$('.front2').removeClass('front2').prev().addClass('front2');
					}

					else {
						$('.back2').removeClass('back2').prev().addClass('back2');
						$('.current2').removeClass('current2').prev().addClass('current2');
						$('.slider2 li').removeClass('front2').last().addClass('front2');
					}

				}

			}

			$('.slider2').removeClass('swap2');

			$(".back2").find('a').css('cursor', 'default');
			$(".front2").find('a').css('cursor', 'default');
			$(".current2").find('a').css('cursor', 'pointer');

		}, 300);

	});
}

nav();

smoothScroll();

fullSlider();

$(".slider").find('li').find('a').css('cursor', 'default');
$(".current").find('a').css('cursor', 'pointer');

$(".slider2").find('li').find('a').css('cursor', 'default');
$(".current2").find('a').css('cursor', 'pointer');

threeSlider();
threeSlider2();

$('#three-slide').on('click', 'a', function (e) {
    if (!$(this).parent().hasClass('current') && !$(this).parent().hasClass('current2')) {
        e.preventDefault();
    }
})


});
