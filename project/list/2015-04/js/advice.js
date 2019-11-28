$(function(){
	// 导航交互效果
	function navMutual(){
		$(".nav").hover(function(){
			$(this).find(".nav-img>img").show();
			$(this).find(".nav-text,.nav-text>div").css("color","#008e92");
		},function(){
			$(this).find(".nav-img>img").hide();
			$(this).find(".nav-text,.nav-text>div").css("color","");
		});
	};
	navMutual();
	// 导航交互效果结束
	// 小屏幕或移动端导航效果
	var phoneNav = true;
	$(".phone-menu>img").click(function(){
		if(phoneNav){
			$(".phone-nav").slideDown();
			phoneNav = false;
		}else{
			$(".phone-nav").slideUp();
			phoneNav = true;
		}
	});
	// 小屏幕或移动端导航效果结束
	// footer分享部分
	$(".footer-software").hover(
		function(){
			$(this).find(".second").css("display","block");
		},
		function(){
			$(this).find(".second").css("display","none");
	});
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
})