$(function(){
	$('.index3 .img').hover(function(){
		$(this).find('.show').fadeIn();
	},function(){
		$(this).find('.show').fadeOut();
	});
	$('.menu').click(function(){
		$('.menu-list').slideToggle();
	});
	if($(window).width()<=600){
		$('.article').find('img').removeAttr("data-parallax","0");
	};
})