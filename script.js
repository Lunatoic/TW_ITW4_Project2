let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let number3 = document.querySelector('.number3');
let number4 = document.querySelector('.number4');
let success = document.querySelector('#success');
// let pass = document.querySelector('#pass');
let i=j=k=l=0;

var btns = document.getElementsByClassName("navi");
const currentLocation = location.href;
for (var a = 0; a < btns.length; a++) {
    if (btns[a].href === currentLocation) {
        btns[a].className = 'active';
    }
}

function counter() {
    setInterval(() => {
        if(i<2000)
        {
            i++;
            number1.innerHTML = i;
        }
    }, 0.5);
    setInterval(() => {
        if(j<1560)
        {
            j++;
            number2.innerHTML = j;
        }
    }, 0.5);
    
    setInterval(() => {
        if(k<570)
        {
            k++;
            number3.innerHTML = k;
        }
    }, 1);
    
    setInterval(() => {
        if(l<900)
        {
            l++;
            number4.innerHTML = l;
        }
    }, 1);
    
}

success.addEventListener('wheel', counter);
// pass.addEventListener('wheel', counter);

