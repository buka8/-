$(function () {
	var count = 0;
	$(".arrow-right").click(clickR).mouseenter(function () {
		clearInterval(timer);  /* 当鼠标指针穿过元素时，会发生 mouseenter 事件。 */
	}).mouseleave(function () {
		timer = setInterval(clickR, 2000);
	});

	function clickR() {
		count++;
		if (count == $(".slider li").length) {
			count = 0;
		}
		//让count渐渐的显示，其他兄弟渐渐的隐藏
		$(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
	}
var timer = setInterval(clickR, 2000);
	$(".arrow-left").click(function () {
		count--;
		if (count == -1) {
			count = $(".slider li").length - 1;
		}
        /* 到达最后一页的时候,重新置0,回到最初页 */
		//让count渐渐的显示，其他兄弟渐渐的隐藏
		$(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
	}).mouseenter(function () {
		clearInterval(timer);
	}).mouseleave(function () {
		timer = setInterval(clickR, 2000);
	});
});