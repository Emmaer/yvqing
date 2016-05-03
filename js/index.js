window.onload=function(){
	var $text2 =$('.floor2 .text');
	var $text3 =$('.floor3 .text');
	var $text4 =$('.floor4 .text');
	var $chuan=$('.chuan');
	var $shu2=$('.floor2 .shu');
	var $shu3=$('.floor3 .shu');
	var $shu4=$('.floor4 .shu');

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,

	
    onTransitionEnd: function(swiper){
    	if(swiper.activeIndex==0){
     	$chuan.addClass('fadeInLeft')
     	$shu2.removeClass('fadeInRight')
     	$text2.removeClass('fadeInLeft')
     }
     if(swiper.activeIndex==1){
     	
     	$chuan.removeClass('fadeInLeft')
     	$shu2.addClass('fadeInRight')
     	$text2.addClass('fadeInLeft')
     	$text3.removeClass('fadeInLeft')
     	$shu3.removeClass('fadeInRight')
     	
     }
     if(swiper.activeIndex==2){
     	$text2.removeClass('fadeInLeft')
     	$shu2.removeClass('fadeInRight')
     	$shu3.addClass('fadeInRight')
     	$text3.addClass('fadeInLeft')
     	$text4.removeClass('fadeInLeft')
     	$shu4.removeClass('fadeInRight')


     }
     if(swiper.activeIndex==3){
     	$shu4.addClass('fadeInRight')
     	$text4.addClass('fadeInLeft')
     	$text3.removeClass('fadeInLeft')
     	$shu3.removeClass('fadeInRight')
     	

     }
    }
});/**
 * Created by hp on 2016/5/2.
 */
}