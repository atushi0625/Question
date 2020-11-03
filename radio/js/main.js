$(function() {
	$("input[name=answer]").change(function() {
		var val = $(this).val() * 1;

		// if 文で分岐
		if (val == 2) {
			$(".panel-body").text("正解");
			alert("正解です");}
		else if(val == 1) {
			$(".panel-body").text("微妙");
		}
		 else {
			$(".panel-body").text("不正解");
			confirm("不正解です");
		}
	});
});
