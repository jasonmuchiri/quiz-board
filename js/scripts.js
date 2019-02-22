$(document).ready(function(){
 $("#quiz").submit(function(event){
  event.preventDefault();
  var one = parseInt($("input:radio[name=one]:checked").val());
  var two = parseInt($("input:radio[name=two]:checked").val());
 });
});
