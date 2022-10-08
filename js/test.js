$(document).ready(function(){
$('.shuffle li').click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');
})
        // bx slider
  $('.slider').bxSlider({
    pager:false,
  });
  var scrollbut=$("#scroll-top");
  $(Window).scroll(function(){
      ($(this).scrollTop()>=1000)?scrollbut.fadeIn(2000):scrollbut.fadeOut(2000);
  });
});