$(function(){
  var a;
  $(window).scroll(function() {
    a = $(this).scrollTop();
    $("#scroll-position").text(a);
  });
})