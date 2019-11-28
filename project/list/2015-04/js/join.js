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
	var join1 = true;
	$(".join-head1").click(function(){
		if(join1){
			$(".join-body1").slideDown();
			$(this).css("color","#009c7c");
			join1 = false;
		}else{
			$(".join-body1").slideUp();
			$(this).css("color","");
			join1 = true;
		}
	});
	var join2 = true;
	$(".join-head2").click(function(){
		if(join2){
			$(".join-body2").slideDown();
			$(this).css("color","#009c7c");
			join2 = false;
		}else{
			$(".join-body2").slideUp();
			$(this).css("color","");
			join2 = true;
		}
	});
	var join3 = true;
	$(".join-head3").click(function(){
		if(join3){
			$(".join-body3").slideDown();
			$(this).css("color","#009c7c");
			join3 = false;
		}else{
			$(".join-body3").slideUp();
			$(this).css("color","");
			join3 = true;
		}
	});
	var join4 = true;
	$(".join-head4").click(function(){
		if(join4){
			$(".join-body4").slideDown();
			$(this).css("color","#009c7c");
			join4 = false;
		}else{
			$(".join-body4").slideUp();
			$(this).css("color","");
			join4 = true;
		}
	});
	var join5 = true;
	$(".join-head5").click(function(){
		if(join5){
			$(".join-body5").slideDown();
			$(this).css("color","#009c7c");
			join5 = false;
		}else{
			$(".join-body5").slideUp();
			$(this).css("color","");
			join5 = true;
		}
	});
	var join6 = true;
	$(".join-head6").click(function(){
		if(join6){
			$(".join-body6").slideDown();
			$(this).css("color","#009c7c");
			join6 = false;
		}else{
			$(".join-body6").slideUp();
			$(this).css("color","");
			join6 = true;
		}
	});
	var join7 = true;
	$(".join-head7").click(function(){
		if(join7){
			$(".join-body7").slideDown();
			$(this).css("color","#009c7c");
			join7 = false;
		}else{
			$(".join-body7").slideUp();
			$(this).css("color","");
			join7 = true;
		}
	});
	var join8 = true;
	$(".join-head8").click(function(){
		if(join8){
			$(".join-body8").slideDown();
			$(this).css("color","#009c7c");
			join8 = false;
		}else{
			$(".join-body8").slideUp();
			$(this).css("color","");
			join8 = true;
		}
	});
	var join9 = true;
	$(".join-head9").click(function(){
		if(join9){
			$(".join-body9").slideDown();
			$(this).css("color","#009c7c");
			join9 = false;
		}else{
			$(".join-body9").slideUp();
			$(this).css("color","");
			join9 = true;
		}
	});
	var join10 = true;
	$(".join-head10").click(function(){
		if(join10){
			$(".join-body10").slideDown();
			$(this).css("color","#0010c7c");
			join10 = false;
		}else{
			$(".join-body10").slideUp();
			$(this).css("color","");
			join10 = true;
		}
	});
})