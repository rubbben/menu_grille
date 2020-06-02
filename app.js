const itemMenu = document.querySelectorAll('.itemMenu');
const btn = document.querySelector('.btn');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const boxLettres = document.querySelector('.boxLettres');
const containerOverlayMenu = document.querySelector('.containerOverlayMenu');
let toggle = 0;

const TL = gsap.timeline({paused: true});

TL.to(containerOverlayMenu, {duration:0.3, opacity:1})
.to(itemMenu, {duration:0.8, x:0, ease:"back.out(1.7)", stagger:0.1})
.to(boxLettres, {duration:0.3, opacity:0}, '-=1.5')
.to(btn, {duration:0.5, height:60}, '-=1.5')
.to(b1, {duration:0.1, top:0, rotation:45}, '-=1.5')
.to(b3, {duration:0.1, top:0, rotation:-45}, '-=1.5')
.to(b2, {opacity:0}, '-=1.75');


btn.addEventListener('click', () => {

    if (toggle === 0) {
        toggle++;
        TL.play();
    } else {
        toggle--;
        TL.reverse();
    }

})
