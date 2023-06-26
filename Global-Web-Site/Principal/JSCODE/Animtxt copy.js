const txtcont4 = document.querySelector("#contentShow4");
const txtcont5 = document.querySelector("#contentShow5");

const loadtxt2 = (inputs, observers) =>{
    inputs.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('animationtxt2')
        }
        else{
            input.target.classList.remove('animationtxt2')
        }
    });
}

const observer = new IntersectionObserver(loadtxt2, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observer.observe(txtcont4);
observer.observe(txtcont5);
