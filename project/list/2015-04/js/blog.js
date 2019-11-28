$(function(){
	$('.blog .blog-close').click(function(){
		$('.blog-fix').hide();
		$('.blog-title').show();
	});
	$('.blog-title').click(function(){
		$('.blog-fix').show();
		$('.blog-title').hide();
	})
})