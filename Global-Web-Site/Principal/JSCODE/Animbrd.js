const txtborder = document.querySelector("#txtanimbd");
const txtborder2 = document.querySelector("#txtanimbd2");
/*const txtborder3 = document.querySelector("#");
const txtborder4 = document.querySelector("#");*/

const loadbrd = (inputs, observers) =>{
    inputs.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('animationbrd1')
        }
        else{
            input.target.classList.remove('animationbrd1')
        }
    });
}

const observer3 = new IntersectionObserver(loadbrd, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observer3.observe(txtborder);
observer3.observe(txtborder2);
/*observer2.observe(txtborder3);
observer2.observe(txtborder4);*/
