let btnOpen = document.querySelector(".nav__btn-open");
btnOpen.addEventListener('click', ()=>{
    document.querySelector(".nav__menu").style.width = "22rem";
});

let btnClose = document.querySelector(".nav__btn-close");
btnClose.addEventListener('click', ()=>{
    document.querySelector(".nav__menu").style.width = "0rem";
});

let btnScroll = document.querySelector(".scroll-icon");
btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

let slide = false
document.addEventListener('click', e=>{
    if(slide) {  
        if(e.target.matches(".fb-logo")) {
        document.querySelector('.fb-box').style.transform = 'translateX(-100%)';
        slide = false;
        console.log(slide);
        } else return;
        
    } else {
        if(e.target.matches(".fb-logo")) {
        document.querySelector('.fb-box').style.transform = "translateX(0)";
        slide = true;
        console.log(slide);
        } else return;
    }
}, false);

document.addEventListener('scroll', ()=>{  
    const topScrollBtn = document.querySelector('.scroll-top-btn');
    const revealPoint = document.querySelector('.offer__title');
    const top = revealPoint.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top + 200 < height) {
        topScrollBtn.style.display = 'block';
    } else {
        topScrollBtn.style.display = 'none';
    }
}, {passive: true});


