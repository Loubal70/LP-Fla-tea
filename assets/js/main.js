const menu = document.querySelector('.menu__navigation');

menu.onclick = function(){
    menu.classList.toggle('active');
};


// Animation Header Bubble for desktop
if ( ( window.innerWidth >= 800 ) && ( window.innerHeight >= 600 ) ) {
    const banner = document.querySelector('.banner');
    window.addEventListener('mousemove', function(e){
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaY = (window.innerHeight / 2 - mouseY) * -0.05;
        const deltaX = (window.innerHeight / 2 - mouseX) * -0.05;

        banner.style.setProperty("--bannerBubbleX", deltaX + "px");
        banner.style.setProperty("--bannerBubbleY", deltaY + "px");
    });
}

ScrollReveal().reveal('.banner_the_img', {
    origin: 'right',
    duration: 1200,
    distance: '200px',
    // Faire l'effet animation quand je scrool
    reset: true,
    delay: 200,
    mobile: false,
});

// Animations cards__item
ScrollReveal().reveal('.cards__item:first-child',{
    origin: 'bottom',
    duration: 1200,
    distance: '200px',
    reset: true,
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal('.cards__item:nth-child(2)',{
    origin: 'bottom',
    duration: 1300,
    distance: '200px',
    reset: true,
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal('.cards__item:nth-child(3)',{
    origin: 'bottom',
    duration: 1400,
    distance: '200px',
    reset: true,
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal('.cards__item:last-child',{
    origin: 'bottom',
    duration: 1500,
    distance: '200px',
    reset: true,
    delay: 200,
    mobile: false,
});