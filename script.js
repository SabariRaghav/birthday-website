/* =====================================
   Romantic Birthday Website
   script.js - Part 1
===================================== */

// Love Letter
const message = `

Dear Love ❤️,

Happy Birthday to the most beautiful girl in my life.

Every moment spent with you is my favorite memory.

You are my happiness,
my peace,
my best friend,
and my forever.

Thank you for always being there for me.

I promise to love you,
care for you,
and make you smile every single day.

May this birthday bring endless joy,
good health,
success,
and all your dreams come true.

I Love You Forever ❤️

`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.onload = function(){

    typeWriter();

}

/* =====================================
        Floating Hearts
===================================== */

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,400);

/* =====================================
        Confetti
===================================== */

const celebrate=document.getElementById("celebrate");

celebrate.addEventListener("click",()=>{

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

alert("🎉 Happy Birthday My Love ❤️");

});

/* =====================================
        Background Music
===================================== */

const music = document.getElementById("music");

let musicStarted = false;

document.addEventListener("click", () => {

    if (!musicStarted) {

        music.play().catch(() => {});

        musicStarted = true;

    }

}, { once: true });

/* =====================================
        Gallery Lightbox
===================================== */

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = "<img>";

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* =====================================
        Fireworks Celebration
===================================== */

function fireworks() {

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 5,

            angle: 60,

            spread: 60,

            origin: { x: 0 }

        });

        confetti({

            particleCount: 5,

            angle: 120,

            spread: 60,

            origin: { x: 1 }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}

celebrate.addEventListener("click", fireworks);

/* =====================================
        Smooth Reveal
===================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

/* =====================================
        Surprise Welcome
===================================== */

setTimeout(() => {

    alert("❤️ Welcome, My Princess! ❤️\n\nThis little website is made with love just for you.");

}, 1500);