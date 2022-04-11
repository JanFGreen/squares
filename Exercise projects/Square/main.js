const square = document.createElement("div")
document.body.appendChild(square)

let size = 100;
let grow = true;
window.addEventListener("scroll",function(){
   if(grow){
    size+=10
    square.style.width = size + "px"
    square.style.height = size + "px"
   }
   else{
    size -=10
    square.style.width = size + "px"
    square.style.height = size + "px"
   }

   if(size>=this.window.innerHeight/2){
       grow = false;
   }

   if(size<=0){
       grow=true;
   }
    
})