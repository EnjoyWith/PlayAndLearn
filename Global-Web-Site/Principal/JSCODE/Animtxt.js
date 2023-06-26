const txtcont = document.querySelector("#contentShow");
const txtcont2 = document.querySelector("#contentShow2");
const txtcont3 = document.querySelector("#contentShow3");

const loadtxt = (inputs, observers) =>{
    inputs.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('animationtxt1')
        }
        else{
            input.target.classList.remove('animationtxt1')
        }
    });
}

const observer2 = new IntersectionObserver(loadtxt, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observer2.observe(txtcont);
observer2.observe(txtcont2);
observer2.observe(txtcont3);
