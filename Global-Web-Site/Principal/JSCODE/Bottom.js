const scrollButton = document.querySelector(".button.Two");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  });

