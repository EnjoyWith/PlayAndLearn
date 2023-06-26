window.addEventListener("scroll", function(){
    var headerVar = this.document.querySelector(".Header");
    headerVar.classList.toggle("menuGlobal", window.scrollY>0);
})

window.addEventListener("scroll", function(){
    var headerVar = this.document.querySelector(".globalHeader");
    headerVar.classList.toggle("menuGlobal", window.scrollY>0);
})