$(function() {
 
 new WOW().init();	
 $("#owl-demo").owlCarousel({
 	items: 1,
 	singleItem: true,
 	slideSpeed: 1000,
 	autoPlay: 10000,
 	stopOnHover: true

 });
 var owl = $("#owl-demo");
	$(".owl-next").click(function(){
		owl.trigger("owl.next");
	});
	$(".owl-prev").click(function(){
		owl.trigger("owl.prev");
	});

$("#owl-demo2").owlCarousel({
 	items: 1,
 	singleItem: true,
 	slideSpeed: 1000,
 	autoPlay: 5000,
 	stopOnHover: true

 });
 var owl1 = $("#owl-demo2");
	$(".owl-next2").click(function(){
		owl1.trigger("owl.next");
	});
	$(".owl-prev2").click(function(){
		owl1.trigger("owl.prev");
	});

    $('.item1').magnificPopup({
    	type : 'image',
    	gallery: {
  enabled: true
}
    });

setInterval(function(){
  	$('.avalible span').fadeOut(3000).fadeIn(500)
},3500);

$('.circle-tour img,.descr').hover(function(){
$(this).parent().find('.descr').toggle()
}) 
$(".faVk").hover(function(){
	$(this).css('color','#1EEDFF');
	$(this).find(".fa-vk").css('color','#507299');
},function(){
	$(this).css('color','black');
		$(this).find(".fa-vk").css('color','white');
})

$(".faFace").hover(function(){
	$(this).css('color','#1EEDFF');
	$(this).find(".fa-facebook").css('color','#4867AA');
},function(){
	$(this).css('color','black');
		$(this).find(".fa-facebook").css('color','white');
})

$(".faTwit").hover(function(){
	$(this).css('color','#1EEDFF');
	$(this).find(".fa-twitter").css('color','#41ABE1');
},function(){
	$(this).css('color','black');
		$(this).find(".fa-twitter").css('color','white');
})

$(".arrow-down,.circle,.circle-o").click(function(){
	$("body,html").animate({
scrollTop:588},500)
	})

$(".arrow-down2,.circle2,.circle-o2").click(function(){
	$("body,html").animate({
scrollTop:1260},500)
	})

$(".arrow-down3,.circle3,.circle-o3").click(function(){
	$("body,html").animate({
scrollTop:1953},500)
	})
$(".arrow-down4,.circle4,.circle-o4").click(function(){
	$("body,html").animate({
scrollTop:2800},500)
	})

$(".owl-next,.owl-prev").hover(function(){
	$(this).animate({"font-size":"350%","margin-top":"-15px"},200)
},function(){
	$(this).animate({"font-size":"219%","margin-top":"0px"},200)
})
$(".owl-next2,.owl-prev2").hover(function(){
	$(this).animate({"font-size":"350%","margin-top":"50px"},200)
},function(){
	$(this).animate({"font-size":"219%","margin-top":"70px"},200)
})

$(".butup").click(function(){
	$("html,body").animate({
		scrollTop:0},1000)
})
		$(".fa-arrow-circle-up").hide();

$(window).scroll(function(){
	if($(this).scrollTop()>300){
		$(".fa-arrow-circle-up").show();
	}
})
});
