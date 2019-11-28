$(function(){
	// 导航交互效果定位
	function navPosition(){
		$(".nav:first-child").find(".nav-img>img").show();
		$(".nav:first-child").find(".nav-text,.nav-text>div").css("color","#008e92");
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
	$(".nav:first-child").mouseout(function(){
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
	//服务中心
	$(".vip001").hover(function(){
		$(this).attr("src","images/index-centerhover1.png");
	},function(){
		$(this).attr("src","images/index-center1.png");
	});
	$(".vip002").hover(function(){
		$(this).attr("src","images/index-centerhover2.png");
	},function(){
		$(this).attr("src","images/index-center2.png");
	});
	$(".vip003").hover(function(){
		$(this).attr("src","images/index-centerhover3.png");
	},function(){
		$(this).attr("src","images/index-center3.png");
	});
	$(".vip004").hover(function(){
		$(this).attr("src","images/index-centerhover4.png");
	},function(){
		$(this).attr("src","images/index-center4.png");
	});
	$(".vip005").hover(function(){
		$(this).attr("src","images/index-centerhover5.png");
	},function(){
		$(this).attr("src","images/index-center5.png");
	});
	$(".vip006").hover(function(){
		$(this).attr("src","images/index-centerhover6.png");
	},function(){
		$(this).attr("src","images/index-center6.png");
	});
	$(".vip007").hover(function(){
		$(this).attr("src","images/index-centerhover7.png");
	},function(){
		$(this).attr("src","images/index-center7.png");
	});
	//服务中心结束
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