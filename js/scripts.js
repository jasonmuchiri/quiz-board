var score = function(one, two, three, four){
  return (((one + two + three + four)/40)*100)
};

$(document).ready(function(){
 $("#quiz").submit(function(event){
  event.preventDefault();
  var one = parseInt($("input:radio[name=one]:checked").val());
  var two = parseInt($("input:radio[name=two]:checked").val());
  var three = parseInt($("input:radio[name=three]:checked").val());
  var four = parseInt($("input:radio[name=four]:checked").val());
  var result = score(one, two, three, four);
  $("#display").text(result);
  if (result > 80){
    $("#display").text(result + ("~ You have passed excellently."));
  }else if (result >= 50 && result <=80){
    $("#display").text(result + ("~ You have fairly passed."));
  }else if (result < 50){
    $("#display").text(result + ("~ You have scored poorly and so please retake the test."));
  }
 });
});
$(document).ready(function() {
  $("button").click(function() {
    $(".pop").show();
  });
});
