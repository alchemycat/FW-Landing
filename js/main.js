window.addEventListener("DOMContentLoaded", () => {
    function menu() {
        const burger = document.querySelector(".header__burger");
        const header = document.querySelector(".header__wrapper");

        burger.addEventListener("click", () => {
            header.classList.toggle("active");
            burger.classList.toggle("active");
        })
    }

    menu();
});