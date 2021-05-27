$(document).ready(function(){
   $(".drop-down").click(function(){
      $(this).siblings(".container").slideToggle(400); // add ease-in or smth like that next time
      $(this).toggleClass("open-drop");
   });
 });
