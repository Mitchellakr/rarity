const splash = document.querySelector(".splash-screen");

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {

        splash.classList.add('display-none');

    }, 1000);
});

// var rule = CSSRulePlugin.getRule(".hero-btn"); //get the rule
// gsap.to(rule, {duration: 5, cssRule: {backgroundColor: "#600", color: "white"}});

gsap.from('.hero-content', { duration: 4, y: '100%', ease: 'back' })
gsap.from('#heading', { duration: 2.2, y: '100%', ease: 'back', delay: .3 })
gsap.from('#copy', { duration: 1.8, y: '100%', ease: 'back', delay: .4 })
gsap.from('.hero-btn', { duration: 1.6, y: '100%', ease: 'back', delay: .5 })
gsap.from('.first', { duration: 3, y: '80%', x: '200px', ease: 'back' })
gsap.from('.third', { duration: 3, y: '80%', x: '-200px', ease: 'back'})