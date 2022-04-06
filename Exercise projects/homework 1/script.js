const btn = document.querySelector('button')

oddNumber=1;
const list = document.querySelector('ul');

const AddEvent = function(){
    const nextLi = document.createElement('li');
    nextLi.textContent = oddNumber;
    
    if(oddNumber%3 == 0){
        nextLi.classList.add('liBold');
    }
    list.appendChild(nextLi);
    oddNumber+=2;
}

    btn.addEventListener("click", AddEvent)