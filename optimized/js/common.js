$(function() {
$(document).ready(function(){
			$("#bars").click(function() {
				$(".menu").toggle("slow")
			});
$(".hover-box-content").hover(function(){
				  $(".content-item").css("transform","rotateY(180deg)");
				  $(".content-item").css("background","none");
				  $(".box-absolute").css("transform","rotateY(0deg)");

			   },function(){
				    $(".content-item").css("transform","rotateY(0deg)")				   
				    $(".box-absolute").css("transform","rotateY(180deg)")	
				     $(".content-item").css("background","#21545C");			   
			   },100);	
$(".photo-div").click(function() {
		$(this).css("transform","rotateY(360deg)")});})

		$(".arrow i").click(function() {
			$("body,html").animate({
				scrollTop: 560}, 500);
			});
	
	$(".scroll-top").click(function() {
			$("body,html").animate({
				scrollTop: 0}, 1000);
			});
	$(window).scroll(function () {
		if ($(this).scrollTop()>300) {
			$(".scroll-top").show()
		}
	})
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
