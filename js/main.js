window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(
        ".swiper", {
            navigation: {
                nextEl: '.navigation__button-next',
                prevEl: '.navigation__button-prev',
            },
        }
    );

    console.log(swiper)

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