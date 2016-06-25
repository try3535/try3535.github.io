	function rgb(r, g, b){
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return ["rgb(",r,",",g,",",b,")"].join("");
}
	var changecolor = function(){
	var r=parseInt(255*Math.random());
	var g=parseInt(255*Math.random());
	var b=parseInt(255*Math.random());
	$(".bdy").css("background-color",rgb(r,g,b));
	$(".fa-quote-left").css("color",rgb(r,g,b));
	$(".fa-quote-right").css("color",rgb(r,g,b));
	$("#add-content").css("color",rgb(r,g,b));
	$(".next-button").css("background-color",rgb(r,g,b));
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?",function(a){
		$("#add-content").html("a[0].content");
	});
}

$(document).ready(function(){
	changecolor();
	$(".next-button").on("click",function(){
		changecolor();
	});

});
