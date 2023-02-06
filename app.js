const nrr = document.querySelector(".nol")
let count = 0
nrr.innerText = `${count}`

const plusBtn = document.querySelector('.plus')
plusBtn.addEventListener('click', function(){ 
     count = count +1
    nrr.innerText = `${count}`
});

 const minusBtn = document.querySelector('.minus')
 minusBtn.addEventListener('click', function(){ 
        count = count -1
     nrr.innerText = `${count}`
});




