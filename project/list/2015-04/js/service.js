$(function(){
	// 导航交互效果定位
	function navPosition(){
		$(".nav:nth-child(3)").find(".nav-img>img").show();
		$(".nav:nth-child(3)").find(".nav-text,.nav-text>div").css("color","#008e92");
	}
	navPosition();
	// 导航交互效果定位结束
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
	// 当前导航交互效果定位
	$(".nav:nth-child(3)").mouseout(function(){
		navPosition();
	});
	// 当前导航交互效果定位
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
	// banner轮播图
	var t = 3000;
	function banner1(){
		$(".service-banner1").show();
		$(".service-banner2,.service-banner3").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little1").css("boxShadow","0 0 0 1px #f19149");
		setTimeout(banner2,t);
	};
	function banner2(){
		$(".service-banner2").show();
		$(".service-banner1,.service-banner3").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little2").css("boxShadow","0 0 0 1px #f19149");
		setTimeout(banner3,t);
	};
	function banner3(){
		$(".service-banner3").show();
		$(".service-banner1,.service-banner2").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little3").css("boxShadow","0 0 0 1px #f19149");
		setTimeout(banner1,t);
	};
	banner1();
	$(".service-little1").hover(function(){
		$(".service-banner1").show();
		$(".service-banner2,.service-banner3").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little1").css("boxShadow","0 0 0 1px #f19149");
	});
	$(".service-little2").hover(function(){
		$(".service-banner2").show();
		$(".service-banner1,.service-banner3").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little2").css("boxShadow","0 0 0 1px #f19149");
	});
	$(".service-little3").hover(function(){
		$(".service-banner3").show();
		$(".service-banner1,.service-banner2").hide();
		$(".service-little>img").css("boxShadow","0 0 0 1px #9d5e30")
		$(".service-little3").css("boxShadow","0 0 0 1px #f19149");
	});
	// banner轮播图结束
	// 地图
	$(".map1").click(function(){
		$(".map").show();
		// $("body").css("overflow","hidden");
	});
	$(".map").click(function(){
		$(this).hide();
		// $("body").css("overflow","auto");
	});
})