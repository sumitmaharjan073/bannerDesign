// navbar and scroll up button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myram").style.boxShadow= "0 2px 2px black";
  } 
  else {
    document.getElementById("myram").style.boxShadow = "none";
  }
} 



$(document).ready(function(){
	$('#bars').click(function(){
		$('#bars').css({zIndex:'1049'});
		$('.mynav').css('height','200px');
	}).mouseover(function(){
		$('#bars').css({color:'orange'});
	}).mouseout(function(){
		$('#bars').css({color:'white'});
	});

	$('#times').click(function(){
		$('#bars').css({zIndex:'1051'});
		$('.mynav').css('height','0px');
	}).mouseover(function(){
		$('#times').css({color:'orange'});
	}).mouseout(function(){
		$('#times').css({color:'white'});
	});
	$('#mybtn').click(function(){
		$('.show_this').css({display:'block'});
	});
});

