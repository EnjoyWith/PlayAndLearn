const setvisible = document.querySelector(".Text");
const setquit = document.querySelector(".close");

setvisible.addEventListener("click", function(){
    var Show = document.querySelector(".Show");

    Show.style.opacity=1
    Show.style.visibility='visible'
})

setquit.addEventListener("click", function(){
    var Show = document.querySelector(".Show");

    Show.style.opacity=0
    Show.style.visibility='hidden'
})
