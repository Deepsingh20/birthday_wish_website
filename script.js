const openBtn=document.getElementById("openBtn");
const lockScreen=document.getElementById("lockScreen");
const mainContent=document.getElementById("mainContent");
const song=document.getElementById("birthdaySong");

openBtn.addEventListener("click",()=>{

lockScreen.style.display="none";
mainContent.style.display="block";

song.play();

launchConfetti();

});

function launchConfetti(){

confetti({
particleCount:300,
spread:180,
origin:{y:0.6}
});

}

/* TYPING MESSAGE */

const message=
"On this special day, may happiness follow you everywhere and every dream find its way to reality. ❤️";

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

setTimeout(typeWriter,1000);

/* PARALLAX */

const hero=document.getElementById("heroParallax");

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

hero.style.transform=
`translateY(${scroll*0.4}px)`;

});

/* REVEAL */

const reveals=
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach((item)=>{

let top=
item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

});

/* CAKE */

document.getElementById("wishBtn")
.addEventListener("click",()=>{

document.getElementById("cake")
.innerHTML="🧁";

confetti({
particleCount:200,
spread:120
});

});

/* FIREWORKS */

document.getElementById("fireworksBtn")
.addEventListener("click",()=>{

let duration=5000;

let end=Date.now()+duration;

(function frame(){

confetti({
particleCount:5,
angle:60,
spread:55,
origin:{x:0}
});

confetti({
particleCount:5,
angle:120,
spread:55,
origin:{x:1}
});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

});