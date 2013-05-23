$(function() {	
	var $nav = $("#nav"),
		$tab = $("#tab"),
		len = $("li", "#nav").length;
	
	$nav.delegate("#tab.left", "click", function() {
		$nav.animate({
			"left": "-250"
		}, 400);
		
		$tab.toggleClass("left right");
		return false;
	});
	
	$nav.delegate("#tab.right", "click", function() {
		$nav.animate({
			"left": "0"
		}, 250);
		
		$tab.toggleClass("left right");
		return false;
	});
	
	$("a", "#nav ul").click(function() {	
		var $this = $(this);
		if(!$this.hasClass("selected"))		
		{	
			$("a", "#nav li").removeClass("selected");
			$this.addClass("selected");
			$("#tab.left").trigger("click");
			
			$("img", "#comp").stop(true, true).fadeOut(function() {
				$img = $(this);
				$img.attr("src", $this.attr("href")).load(function() {
					var $this = $(this);
					$("#comp-container").css({
						"margin-left": -1 * (Math.ceil($this.width() * 0.5))
					});
					$this.fadeIn();
				}, 200);					
			});			
		}
		return false;
	});
	
	
		
	$(document).mousemove(function(e) {
		var mouseX = e.pageX,
			hitareaWidth = $(".arrow").width();

		if(mouseX < hitareaWidth)
		{
			$("#arrow-left").fadeIn();
		}	
		else if(mouseX > $(window).width() - hitareaWidth)
		{
			$("#arrow-right").fadeIn();
		}
		else
		{
			$("#arrow-left:visible").fadeOut();
			$("#arrow-right:visible").fadeOut();
		}
	});

	$(window).keydown(function(e) {			
		var code = e.keyCode ? e.keyCode : e.which;
		switch(code)
		{
			case 37: // left
			case 38: // up
				$("#arrow-left").click();
				return false;
				break;
			case 39: // right
			case 40: // down
				$("#arrow-right").click();
				return false;
				break;
		}							
	});
	
	$("#arrow-left").click(function() {
		var dex = parseInt($.address.value().substr(1)) || 0;
		dex = (dex - 1 > -1) ? dex - 1 : len - 1;
		$.address.value(dex.toString());
		return false;
	});
	
	$("#arrow-right").click(function() {
		var dex = parseInt($.address.value().substr(1)) || 0;
		dex = (dex + 1 < len) ? dex + 1 : 0;
		$.address.value(dex.toString());
		return false;
	});
		
	$("a", "#nav ul").address();	
		
	$.address.change(function(e) {
		var index = e.pathNames[0];
		if(!index || isNaN(index) || index < 0 || index > len - 1)
		{
			$.address.value("0");
		}
		$("a:eq(" + index + ")", "#nav ul").click();
	});
});

