const btnright = document.querySelector(".imgcontainerR");
const btnleft = document.querySelector(".imgcontainerL");
const albert = document.querySelector(".albert");
const mandela = document.querySelector(".mandela");
const slide = document.querySelector(".slide");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const circleclick1 = document.querySelector("#sl1");
const circleclick2 = document.querySelector("#sl2");
const circleclick3 = document.querySelector("#sl3");
const circleclick4 = document.querySelector("#sl4");
const circleclick5 = document.querySelector("#sl5");

let count = 1;
let delay;

function countUp(){
    count++;
};

function slider(){
    // Slider
    if(count == 1){
        albert.style.left = "0"
        albert.style.opacity = "1"
        mandela.style.left = "100%"
        mandela.style.opacity = "0"
        slide.style.left = "200%"
        slide.style.opacity = "0"
        slide2.style.left = "300%"
        slide2.style.opacity = "0"
        slide3.style.left = "400%"
        slide3.style.opacity = "0"
        albert.style.transition = "all 1s ease"
        mandela.style.transition = "all 1s ease"
        slide.style.transition = "all 1s ease"
        slide2.style.transition = "all 1s ease"
        slide3.style.transition = "all 1s ease"
    }
    else if(count == 2){
        albert.style.left = "-100%"
        albert.style.opacity = "0"
        mandela.style.left = "0"
        mandela.style.opacity = "1"
        slide.style.left = "100%"
        slide.style.opacity = "0"
        slide2.style.left = "200%"
        slide2.style.opacity = "0"
        slide3.style.left = "300%"
        slide3.style.opacity = "0"
        albert.style.transition = "all 1s ease"
        mandela.style.transition = "all 1s ease"
        slide.style.transition = "all 1s ease"
        slide2.style.transition = "all 1s ease"
        slide3.style.transition = "all 1s ease"
    }
    else if(count == 3){
        albert.style.left = "-200%"
        albert.style.opacity = "0"
        mandela.style.left = "-100%"
        mandela.style.opacity = "0"
        slide.style.left = "0"
        slide.style.opacity = "1"
        slide2.style.left = "100%"
        slide2.style.opacity = "0"
        slide3.style.left = "200%"
        slide3.style.opacity = "0"
        albert.style.transition = "all 1s ease"
        mandela.style.transition = "all 1s ease"
        slide.style.transition = "all 1s ease"
        slide2.style.transition = "all 1s ease"
        slide3.style.transition = "all 1s ease"
    }
    else if(count == 4){
        albert.style.left = "-300%"
        albert.style.opacity = "0"
        mandela.style.left = "-200%"
        mandela.style.opacity = "0"
        slide.style.left = "-100%"
        slide.style.opacity = "0"
        slide2.style.left = "0"
        slide2.style.opacity = "1"
        slide3.style.left = "100%"
        slide3.style.opacity = "0"
        albert.style.transition = "all 1s ease"
        mandela.style.transition = "all 1s ease"
        slide.style.transition = "all 1s ease"
        slide2.style.transition = "all 1s ease"
        slide3.style.transition = "all 1s ease"
    }
    else if(count == 5){
        albert.style.left = "-400%"
        albert.style.opacity = "0"
        mandela.style.left = "-300%"
        mandela.style.opacity = "0"
        slide.style.left = "-200%"
        slide.style.opacity = "0"
        slide2.style.left = "-100%"
        slide2.style.opacity = "0"
        slide3.style.left = "0"
        slide3.style.opacity = "1"
        albert.style.transition = "all 1s ease"
        mandela.style.transition = "all 1s ease"
        slide.style.transition = "all 1s ease"
        slide2.style.transition = "all 1s ease"
        slide3.style.transition = "all 1s ease"
    }


    // Reset count
    if(count > 5){
        count = 1;
    }
    else if(count < 1){
        count = 5;
    }


    //Indicator
    if(count == 1){
        circleclick1.style.background = "#ffd900"
    }
    else if(count != 1){
        circleclick1.style.background = "none"
    }
    if (count == 2){
        circleclick2.style.background = "#ffd900"
    }
    else if(count != 2){
        circleclick2.style.background = "none"
    }
    if (count == 3){
        circleclick3.style.background = "#ffd900"
    }
    else if(count != 3){
        circleclick3.style.background = "none"
    }
    if (count == 4){
        circleclick4.style.background = "#ffd900"
    }
    else if(count != 4){
        circleclick4.style.background = "none"
    }
    if (count == 5){
        circleclick5.style.background = "#ffd900"
    }
    else if(count != 5){
        circleclick5.style.background = "none"
    }
}

circleclick1.addEventListener('click', () => {
    count = 1;
    resetInterval();
});
circleclick2.addEventListener('click', () => {
    count = 2;
    resetInterval();
});
circleclick3.addEventListener('click', () => {
    count = 3;
    resetInterval();
});
circleclick4.addEventListener('click', () => {
    count = 4;
    resetInterval();
});
circleclick5.addEventListener('click', () => {
    count = 5;
    resetInterval();
});



btnright.addEventListener('click', () => {
    count++;
    resetInterval();
});
btnleft.addEventListener('click', () => {
    count--;
    resetInterval();
});

delay = setInterval(countUp, 6500);

function resetInterval(){
    clearInterval(delay);
    delay = setInterval(countUp, 6500);
}

setInterval(slider, 0);
