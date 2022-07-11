let header = document.querySelector('.header');
let headerScrolled = document.querySelector('.headerScrolled');
let about = document.querySelector('#about');
let home = document.querySelector('.home');

// about.addEventListener('wheel', ()=> {
//     console.log('about');
//         header.classList.add("headerScrolled");
// });
// home.addEventListener('wheel', ()=> {
//     console.log('home');
//         header.classList.remove("headerScrolled");
// });

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