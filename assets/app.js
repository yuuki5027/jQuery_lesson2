$(function(){
  // 実行したい内容を記述
  // $("#btn").click(function() {
  //   $("h1").text("N高のみなさん、こんにちは！");
  // });
  $("#btn").click(function(){
    $("h1").text("ようこそ、N高のみなさん").css("color","blue");
  $("body").css({
    "background":"#ffff00",
    "font-size":"100px"
  });
  })
  // $("#btn").mousedown(function() {
  //   $("h1").text("N高へようこそ！");
  // });
  // $("#btn").mouseup(function() {
  //   $("h1").text("Hello,World!");
  // });
});