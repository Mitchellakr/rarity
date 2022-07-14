const splash = document.querySelector(".splash-screen");

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {

        splash.classList.add('display-none');

    }, 5000);
});

gsap.from('.hero-content', { duration: 4, y: '100%', ease: 'back' })
gsap.from('#heading', { duration: 2.2, y: '100%', ease: 'back', delay: .3 })
gsap.from('#copy', { duration: 1.8, y: '100%', ease: 'back', delay: .4 })
gsap.from('.hero-btn', { duration: 1.6, y: '100%', ease: 'back', delay: .5 })
gsap.from('.first', { duration: 3, y: '80%', x: '200px', ease: 'back' })
gsap.from('.third', { duration: 3, y: '80%', x: '-200px', ease: 'back' })


let header = document.querySelector(".header-sticky");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// var rule = CSSRulePlugin.getRule(".hero-btn"); //get the rule
// gsap.to(rule, {duration: 5, cssRule: {backgroundColor: "#600", color: "white"}});

gsap.to('.nft2', { duration: 2, x: '250px', y: '-20px', ease: 'back', delay: 19, scale: 1.5 })
gsap.to('.nft3', { duration: 2, x: '-80px', y: '40px', ease: 'back', delay: 19, scale: .7, z: -1 })
gsap.to('.nft4', { duration: 2, x: '-250px', y: '-20px', ease: 'back', delay: 19, scale: 1.5 })
gsap.to('.nft5', { duration: 2, x: '80px', y: '40px', ease: 'back', delay: 19, scale: .7 })



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    getElementById('body').style.display = 'none';
}