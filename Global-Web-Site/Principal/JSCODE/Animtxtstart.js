const txtstart = document.querySelector("#txtstartid");
const txtstart2 = document.querySelector("#txtstartid2");
const txtstart3 = document.querySelector("#txtstartid3");
const txtstart4 = document.querySelector("#txtstartid4");

const loadtxtstart = (inputs, observers) =>{
    inputs.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('animtxtstart')
        }
        else{
            input.target.classList.remove('animtxtstart')
        }
    });
}

const observer4 = new IntersectionObserver(loadtxtstart, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});

observer4.observe(txtstart);
observer4.observe(txtstart2);
observer4.observe(txtstart3);
observer4.observe(txtstart4);
