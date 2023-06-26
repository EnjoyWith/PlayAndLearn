window.addEventListener("load", () => {
    const loaderBox = document.querySelector(".loader")

    setTimeout(() => {
        loaderBox.style.opacity=0
        loaderBox.style.visibility='hidden'
    }, 250);
});