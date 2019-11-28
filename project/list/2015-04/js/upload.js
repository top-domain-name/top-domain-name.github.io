$(function(){
	// top
	$(".top").click(function(){
		$("html,body").animate({scrollTop:0},700);
	});
	$(document).scroll(function(){
		if($(this).scrollTop()>=120){
			$(".top").fadeIn(500);
		}else{
			$(".top").fadeOut(500);
		}
	});
	// ------------------------------------上传------------------------------------
	var upload = true;
	$(".upload-left").click(function(){
		if(upload){
			$(".upload").animate({right:"0"},300);
			$(this).find("img").attr("src","images/upload-up.png");
			upload = false;
		}else{
			$(".upload").animate({right:"-138px"},300);
			$(this).find("img").attr("src","images/upload-down.png");
			upload = true;
		}
	});
	$(".frame-file").click(function(){
		$(".upload-infos").fadeIn();
		$("body,html").css("overflow","hidden");
	});
	$(".upload-info-name").click(function(){
		$(".upload-infos").fadeOut();
		$("body,html").css("overflow","visible");
	});
	$(".upload-im3").click(function(){
		$("body").animate({scrollTop:0},0);
		$(".upload-frames,.upload-frame").fadeIn();
	});
	$(".upload-x img").click(function(){
		$(".upload-frames,.upload-frame").fadeOut();
	});
})