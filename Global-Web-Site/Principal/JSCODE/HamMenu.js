const setvisible4 = document.querySelector(".hamMenuN");
const setvisible5 = document.querySelector(".close3");



setvisible4.addEventListener("click", function(){
    var Show = document.querySelector(".menuHambg");

    Show.style.opacity=1
    Show.style.visibility='visible'
})

setvisible5.addEventListener("click", function(){
    var Show = document.querySelector(".menuHambg");

    Show.style.opacity=0
    Show.style.visibility='hidden'
})

