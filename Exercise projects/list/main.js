// tutaj rozwiązanie
const listElements =document.querySelectorAll('li')
const button = document.querySelector('button')

let size = 10;

// const showAndIncrease = function(){
//     for(let i=0; i<listElements.length; i++){
//         listElements[i].style.display = 'block';
//         listElements[i].style.fontSize = size+'px';
//     }
//     size++;
// }

const showAndIncrease = function(){
    listElements.forEach((li) => {
        li.style.display = 'block';
        li.style.fontSize = size+'px';
    })
    size++;
}



button.addEventListener('click', showAndIncrease)