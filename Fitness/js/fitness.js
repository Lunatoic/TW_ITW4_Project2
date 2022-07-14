let header = document.querySelector('.header');
let headerScrolled = document.querySelector('.headerScrolled');
let about = document.querySelector('#about');
let home = document.querySelector('.home');

const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

var btns = document.getElementsByClassName("navi");
const currentLocation = location.href;
for (var i = 0; i < btns.length; i++) {
    if (btns[i].href === currentLocation) {
        btns[i].className = 'active';
    }
}

let imw1 = document.getElementById('imw1')
let imw2 = document.getElementById('imw2')
let imw3 = document.getElementById('imw3')
let imw4 = document.getElementById('imw4')

let btw1 = document.getElementById('btw1')
let btw2 = document.getElementById('btw2')
let btw3 = document.getElementById('btw3')
let btw4 = document.getElementById('btw4')

btw1.addEventListener('mouseover', ()=>{
            imw1.style.display = 'block';
})

btw1.addEventListener('mouseout', ()=>{
            imw1.style.display = 'none';
})

btw2.addEventListener('mouseover', ()=>{
            imw2.style.display = 'block';
})
btw2.addEventListener('mouseout', ()=>{
            imw2.style.display = 'none';
})

btw3.addEventListener('mouseover', ()=>{
            imw3.style.display = 'block';
})
btw3.addEventListener('mouseout', ()=>{
            imw3.style.display = 'none';
})

btw4.addEventListener('mouseover', ()=>{
            imw4.style.display = 'block';
})
btw4.addEventListener('mouseout', ()=>{
            imw4.style.display = 'none';
})




// let imgContent = document.getElementsByClassName('img-content');
// let button1 = document.getElementsByClassName('button1');
// for(var p= 0; p<button1.length; p++)
// {
//     button1[p].addEventListener('click', ()=>{
//         imgContent[p].style.display = 'block';
//     });
// }

$(window).scroll(function () {
    if ($(this).scrollTop() > 74) {
        $('#navbar').addClass('nav-sticky');
    } else {
        $('#navbar').removeClass('nav-sticky');
    }
});