$(document).ready(function(){
 $("#quiz").submit(function(event){
  event.preventDefault();
  var one = parseInt($("input:radio[name=one]:checked").val());
  var two = parseInt($("input:radio[name=two]:checked").val());
  var three = parseInt($("input:radio[name=three]:checked").val());
  var four = parseInt($("input:radio[name=four]:checked").val());
  var score = (one + two + three + four)
  $("#display").text(((score)/40)*100)
 });
});
