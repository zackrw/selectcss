$(document).ready(function(){
	var answers = [
		/^\s*#description\s+a\s*$/,
		/^\s*div\s*>\s*.box\s*$/,
		/^\s*h1\s*,\s*h2\s*,\s*h3\s*,\s*h4\s*,\s*h5\s*,\s*h6\s*$/,
		/^\s*a\[href=("|')\/destination\1\]\s*$/,
		/^\s*input\[type=("|')password\1\]\s*$/,
		/^\s*#wrapper\s*$/,
		/^\s*.class_one\s*,\s*.class_two\s*$/,
		/^\s*#main_div\s+div.sub_div\s*,\s*ul.special_list\s+li\s*$/,
		/^\s*h1#main_heading\s*$/,
		/^\s*#main\s+div.important_div\s+ul.important_list\s+li.important_item\s*$/,
		/^\s*input.classified\s*$/,
		/^\s*\*\s*$/,
		/^\s*table\s*$/,
		/^\s*#footer\s*$/,
		/^\s*a:hover\s*,\s*#skip_button:hover\s*$/
	];
	
	$(".submit").click(function(){
		if(answers[$(this).index(".submit")].test($(this).siblings('input').val())){
			$(this).siblings(".false").hide();
			$(this).siblings(".true").show();
			if($(this).attr("used") !== "yes"){
				$(".right").html((Number($(".right").html()) + 1) + " ");
				$(".total").html(Number($(".total").html()) + 1);
				$(this).attr("used", "yes");
			}
		}
		else{
			$(this).siblings(".true").hide();
			$(this).siblings(".false").show();
			if($(this).attr("used") !== "yes"){
				$(".total").html(Number($(".total").html()) + 1);
				$(this).attr("used", "yes");
			}
		}
		if(Number($(".total").html()) >= 15){
			$(".score").prepend("final ");
			if(Number($(".right").html()) >= 15){
				$(".result").html("Great job!<br />You aced it.");
				$(document).snowfall();
				$('#confetti_0').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#F09", round: false, shadow:true, minSize:3, maxSize:7});
				$('#confetti_1').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#6F0", round: false, shadow:true, minSize:3, maxSize:7});
				$('#confetti_2').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#09F", round: false, shadow:true, minSize:3, maxSize:7});
				$('#confetti_3').snowfall({flakeCount : 150, maxSpeed : 8, flakeColor : "#FF9", round: false, shadow:true, minSize:3, maxSize:7});	
			}
			else if(Number($(".right").html()) >= 12){
				$(".result").html("Well done. You're almost there.<br/>Keep editing and checking or refresh the page and try to get a perfect score!");
			}
			else if(Number($(".right").html()) >= 8){
				$(".result").html("Not bad.<br/>Let's try that again and see if we can't do better.");
			}
			else{
				$(".result").html("Looks like we've got some work to do.<br/>Let's edit and check, or refresh the page and try to improve our score.");
			}
			$("body").animate({
				scrollTop: $("body").prop("scrollHeight")
			}, 1000);
		}
	});
});