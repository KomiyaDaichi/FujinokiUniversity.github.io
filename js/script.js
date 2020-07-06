
$(function(){
	setTimeout(function(){
		$('.loading').fadeOut(1000);
	},1500);
});

$(function(){
	$(window).scroll(function(){
		if(window.matchMedia('(min-width:896px)').matches){

			if($(this).scrollTop()>=45){
				$(".header-bottom").css("position","fixed");
				$(".header-bottom").css("top","0");
				$(".hover-nav").css("top", "90px");
			}else{
				$(".header-bottom").css("position","absolute");
				$(".header-bottom").css("top","45px");
				$(".hover-nav").css("top", "135px");

			}	
		}
	});
});

$(function(){
	$('.language-menu').click(function(){
		$('.language-menu').toggleClass('active')
	});
});

$(function(){
	$(".scroll-up").click(function(){		
		$("html,body").animate({scrollTop:0},800);
	});
});


$(function(){
	$(window).on('resize scroll',function(){
		if(window.matchMedia('(min-width:896px)').matches){

			if($(this).scrollTop()>45){
				$(".fixed-contactmenu").css("right","0px");
			}else{
				$(".fixed-contactmenu").css("right","-75px");
			}
		}
	});
});

$(function(){
	$(document).on("click",function(e){
		if($(e.target).closest(".res-target").length){
			$(".res-target-list").toggleClass("active");
		}else{
			$(".res-target-list").removeClass("active");
		}
	});
});

$(function(){
	$(document).on("click",function(e){
		if($(e.target).closest(".res-menu").length){
			$(".res-menu").toggleClass("active");
			$(".res-menu-list").toggleClass("active");
		}else{
			$(".res-menu").removeClass("active");
			$(".res-menu-list").removeClass("active");
		}
	});
});

$(function(){
	$(".about-nav-js").mouseover(function(){
		$(".about-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".about-hover-nav").removeClass("active");
	});
});

$(function(){
	$(".admission-nav-js").mouseover(function(){
		$(".admission-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".admission-hover-nav").removeClass("active");
	});
});

$(function(){
	$(".faculties-nav-js").mouseover(function(){
		$(".faculties-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".faculties-hover-nav").removeClass("active");
	});
});

$(function(){
	$(".campuslife-nav-js").mouseover(function(){
		$(".campuslife-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".campuslife-hover-nav").removeClass("active");
	});
});

$(function(){
	$(".job-nav-js").mouseover(function(){
		$(".job-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".job-hover-nav").removeClass("active");
	});
});

$(function(){
	$(".global-nav-js").mouseover(function(){
		$(".global-hover-nav").addClass("active");
	}).mouseout(function(){
		$(".global-hover-nav").removeClass("active");
	});
});



$(function(){
	$(".topic-mainbox").slick({
		infinite:true,
		autoplay:true,
		slidesToShow: 4,
		arrows:true,
		prevArrow:".arrow-prev",
		nextArrow:".arrow-next",
		responsive:[
			{

			breakpoint:1024,
			settings:{
				slidesToShow:3
			}
			},{

			breakpoint:896,
			settings:{
			slidesToShow:2,
			}
		}	

	]
	});
});

$(function(){
	$(".main-photo").slick({
		infinite:true,
		accessibility: true,
		autoplay:true,
		autoplaySpeed:8000,
		fade:true,
		speed:800,
	});
});
