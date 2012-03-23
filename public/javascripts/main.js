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
		/^\s*input\s*,\s*textarea\s*,\s*button\s*$/,
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
			$(".result").html(Number($(".right").html()) >= 15? "Great job! You aced it.": "Good effort. Keep editing and checking or refresh the page and try to get a perfect score!").show();
		}
	});
});