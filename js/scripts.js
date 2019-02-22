$(document).ready(function(){
$("form#add").submit(function(event){
event.preventDefault();
var one = $("input:radio[name=one]:checked").val();
