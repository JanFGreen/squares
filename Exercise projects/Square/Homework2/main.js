document.body.style.height = '10000px';

const dynamicDiv=document.createElement("div")
document.body.appendChild(dynamicDiv)

dynamicDiv.style.width = '100%'
dynamicDiv.style.position = 'fixed';
dynamicDiv.style.top = '0px'
dynamicDiv.style.left= '0px'

let size = 10;
let grow = true
const changeHight = function(){
    if(grow){
        size+=10;
        dynamicDiv.style.height = size+'px';
        dynamicDiv.style.backgroundColor='green'
    }else{
        size-=10;
        dynamicDiv.style.height = size+'px';
        dynamicDiv.style.backgroundColor='red'
    }
    if(size >= window.innerHeight/2){
        grow = false
    }
    if(size <=0){
        grow = true
    }

}

window.addEventListener('scroll',changeHight )