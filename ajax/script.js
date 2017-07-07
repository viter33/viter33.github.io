    jQuery(document).ready( function() {
// sessionStorage.removeItem("page");

  setTimeout(function() { 
$(".img-content").css('opacity', '1');	
},2000)


var value = sessionStorage.getItem("val");
if (value != null) {
	var newValue = sessionStorage.getItem("val");
}
else{
	var newValue = "all";
}
console.log(newValue);

$(".load_more").click(function() {
$(".load_more").hide();
$(".load_more_loader").show();
if (value != null) {
	var newValue = sessionStorage.getItem("val");
}
else{
	var newValue = "all";
}
console.log(newValue);

// $(".img-content").css('opacity', '0');
var API_KEY = '5811174-612d67f14464a26684734f25d';
var paged = sessionStorage.getItem("page");
if (paged != null) {
	var paged = parseInt(paged);
	var newPage = paged + 1;
	console.log(newPage);
	sessionStorage.setItem("page",newPage);
}
else{
var page = $(this).data('page');
var newPage = page + 1;
console.log(newPage);
sessionStorage.setItem("page",newPage);
$(this).data('page', newPage);
}
var URL = "https://pixabay.com/api/?key="+API_KEY+"&totalHits=105&page="+newPage+"&per_page=24&q="+newValue+"";
console.log(URL);
	$.ajax({
url: URL,

	error: function( response ) {
		console.error(response);
	},
	beforeSend: function ( response ){
	},
	success : function( data ){

	    if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){
	         $(".img-content").append("<div class='div-for-img div-for-img-"+newPage+"'><a class='item' href='"+hit.webformatURL+"'><img class='my-img' data-height="+hit.webformatHeight+" src='"+hit.webformatURL+"'></a></div>");        

	          
	 	   $(".div-for-img-"+newPage+"").hide().css('opacity', '0');      	 
	          var image = $(".div-for-img-"+newPage+" img");
    image.each(function () {
        var that = $(this).data('height');
        if (that < 380) {
            $(this).css('height', '100%');
        }
    })
	           setTimeout(function() { 
$(".load_more").show();
$(".load_more_loader").hide();          	
 $(".div-for-img-"+newPage+"").show().css('opacity', '1'); 	
},1000)     
	   

	 });     
// Magnific Popup
$(".item").magnificPopup({
	type: 'image',
	gallery : {
		enabled : true
	}
});
	},
	
});
});


// Default image
$(".img-content").css('opacity', '0');
var defaultPage = sessionStorage.getItem("page");
console.log(defaultPage);
var API_KEY = '5811174-612d67f14464a26684734f25d';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&totalHits=105&page="+defaultPage+"&per_page=24&q="+value+""
	$.ajax({
url: URL,

	error: function( response ) {
		console.error(response);
	},
	beforeSend: function ( response ){
	},
	success : function( data ){

	    if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){
	         $(".img-content").append("<div class='div-for-img'><a class='item' href='"+hit.webformatURL+"'><img data-height="+hit.webformatHeight+" class='my-img' src='"+hit.webformatURL+"'></a></div>");

	        
	          });
var image = $('.my-img');
    image.each(function () {
        var that = $(this).data('height');
        if (that < 380) {
            $(this).css('height', '100%');
        }
    })
	           setTimeout(function() { 
	         	 $(".img-content").css('opacity', '1');
},1000);
// Magnific Popup
$(".item").magnificPopup({
	type: 'image',
	gallery : {
		enabled : true
	}
});
	},
	
});
// Default image end






    	// Keydown on input
$(".search-img").keyup(function(event){
if(event.keyCode==13){	
		 $(".img-content").html("").css('opacity', '0');
				$(".loader").show();
	var val = $(".search-img").val();
	sessionStorage.setItem("val",val);
var API_KEY = '5811174-612d67f14464a26684734f25d';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&totalHits=105&webformatURL=340&order=popular&page=1&per_page=30&q="+encodeURIComponent(val);
	$.ajax({
url: URL,

	error: function( response ) {
		console.error(response);
	},
		beforeSend: function ( response ){

	},
	success : function( data ){

	    if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){
	         $(".img-content").append("<div class='div-for-img'><a class='item' href='"+hit.webformatURL+"'><img class='my-img' data-height="+hit.webformatHeight+"  src='"+hit.webformatURL+"'></a></div>");
	        
	          });
var image = $('.my-img');
    image.each(function () {
        var that = $(this).data('height');
        if (that < 380) {
            $(this).css('height', '100%');
        }
    })
	         setTimeout(function() { 
	         	 $(".img-content").show().css('opacity', '1');
	         }, 1000);
	      sessionStorage.removeItem("page");
// Magnific Popup
$(".item").magnificPopup({
	type: 'image',
	gallery : {
		enabled : true
	}
});
	},
	
});
}
});
// Keydown on input end


    	// Button click
$(".submit").click(function() {
	 $(".img-content").html("").css('opacity', '0');
				$(".loader").show();
	var val = $(".search-img").val();
	sessionStorage.setItem("val",val);

var API_KEY = '5811174-612d67f14464a26684734f25d';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&totalHits=105&page=1&per_page=30&q="+encodeURIComponent(val);
	$.ajax({
url: URL,

	error: function( response ) {
		console.error(response);
	},
	beforeSend: function ( response ){
	},
	success : function( data ){

	    if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){
	         $(".img-content").append("<div class='div-for-img'><a class='item' href='"+hit.webformatURL+"'><img data-height="+hit.webformatHeight+"  class='my-img' src='"+hit.webformatURL+"'></a></div>");
	         
	          });

var image = $('.my-img');
    image.each(function () {
        var that = $(this).data('height');
        if (that < 380) {
            $(this).css('height', '100%');
        }
    })

	         setTimeout(function() { 
	         	 $(".img-content").show().css('opacity', '1');
	         }, 1000);

	      sessionStorage.removeItem("page");

// Magnific Popup
$(".item").magnificPopup({
	type: 'image',
	gallery : {
		enabled : true
	}
});
	},
	
});
});
// Button click end




});