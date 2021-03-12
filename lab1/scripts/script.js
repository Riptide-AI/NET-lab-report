'use strict';

function toggle(id){
   let elements = document.getElementsByClassName("content-window")

   for (let i = 0; i < elements.length; i++){
      elements[i].style.display = "none";
   }
   document.getElementById(id).style.display = "flex";
}
