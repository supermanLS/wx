$(function(){
	//轮播图
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction:false
    });
     //文字上下滚动
	var boxH=$('.marquee').outerHeight();
	var allH=$('.marquee li').length*boxH;
	var innerH=$('.marquee ul').height(allH);
	console.log(allH)
	setInterval(move,2000)
	function move(){
		$(".marquee ul").animate({marginTop:-boxH},500,function(){
			$('.marquee li').first().insertAfter($('.marquee li').last());
			$(".marquee ul").css({marginTop:0});
		});
	}
})