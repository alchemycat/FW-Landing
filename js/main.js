window.addEventListener("DOMContentLoaded", () => {
    function resize() {
        window.addEventListener('resize', () => {
            const container = document.querySelector(".header > .container");
            const { left } = container.getBoundingClientRect();

            if (window.innerWidth < 992) {
                const wrapper = document.querySelector(".header__wrapper");
                wrapper.style.paddingLeft = `${left + 15}px`;
            }
        })
    }

    // resize();

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