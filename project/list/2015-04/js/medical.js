$(function(){
	// 导航交互效果定位
	function navPosition(){
		$(".nav:nth-child(2)").find(".nav-img>img").show();
		$(".nav:nth-child(2)").find(".nav-text,.nav-text>div").css("color","#008e92");
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
	$(".nav:nth-child(2)").mouseout(function(){
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
	// 疑难重症地图查看更多
	var arrows1 = true;
	$(".arrows1").click(function(){
		if(arrows1){
			$(".medical-con div").css({"height":"auto","overflow":"visible"})
			$(".arrows1 img").addClass("arrow");
			arrows1 = false;
		}else{
			$(".medical-con div").css({"height":"4.4rem","overflow":"hidden"})
			$(".arrows1 img").removeClass("arrow");
			arrows1 = true;
		}
	});
	// 选择科室
	var arrows2 = true;
	$(".arrows2").click(function(){
		if(arrows2){
			$(".medical-section .section").css({"height":"auto","overflow":"visible"})
			$(".arrows2 img").addClass("arrow");
			arrows2 = false;
		}else{
			$(".medical-section .section").css({"height":"4.8rem","overflow":"hidden"})
			$(".arrows2 img").removeClass("arrow");
			arrows2 = true;
		}
	});
	// 北京名院
	var arrows3 = true;
	$(".arrows3").click(function(){
		if(arrows3){
			$(".medical-hospital .section").css({"height":"auto","overflow":"visible"})
			$(".arrows3 img").addClass("arrow");
			arrows3 = false;
		}else{
			$(".medical-hospital .section").css({"height":"4.8rem","overflow":"hidden"})
			$(".arrows3 img").removeClass("arrow");
			arrows3 = true;
		}
	});
	// -------您选择的条件判断-------
	// 选择条件交互
	$(".medical-select span").hover(function(){
		$(this).find("img").attr("src","../images/deleteh.png").css("background","#008e92");
	},function(){
		$(this).find("img").attr("src","../images/deletes.png").css("background","");
	});
	// 选择科室传值关闭
	$(".medical-section span").click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		$(".medical-select").show();
		$(".select1").parent().show();
		if(select2==""){
			$(".select2").parent().hide();
		}
		if(select3==""){
			$(".select3").parent().hide();
		}
		$(".select1").text($(this).text());
		$(".medical-sections").hide();
	});
	// 选择条件select1
	$(".select1").parent().click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		if(select2==""&&select3==""){
			$(".medical-select").hide();
		};
		$(this).hide();
		$(".medical-sections").show();
		$(".select1").text("");
	});
	// 医生职称传值关闭
	$(".medical-title span").click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		$(".medical-select").show();
		$(".select2").parent().show();
		if(select1==""){
			$(".select1").parent().hide();
		}
		if(select3==""){
			$(".select3").parent().hide();
		}
		$(".select2").text($(this).text());
		$(".medical-title").hide();
	});
	// 选择条件select2
	$(".select2").parent().click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		if(select1==""&&select3==""){
			$(".medical-select").hide();
		};
		$(this).hide();
		$(".medical-title").show();
		$(".select2").text("");
	});
	// 北京名院传值关闭
	$(".medical-hospitals span").click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		$(".medical-select").show();
		$(".select3").parent().show();
		if(select1==""){
			$(".select1").parent().hide();
		}
		if(select2==""){
			$(".select2").parent().hide();
		}
		$(".select3").text($(this).text());
		$(".medical-hospitals").hide();
	});
	// 选择条件select1
	$(".select3").parent().click(function(){
		var select1 = $(".select1").text();
		var select2 = $(".select2").text();
		var select3 = $(".select3").text();
		if(select1==""&&select2==""){
			$(".medical-select").hide();
		};
		$(this).hide();
		$(".medical-hospitals").show();
		$(".select3").text("");
	});
})