window.addEventListener("DOMContentLoaded", () => {
    function isWebp() {
        function testWebP(callback) {
            var webP = new Image();
            webP.onload = webP.onerror = function () {
                callback(webP.height == 2);
            };
            webP.src =
                "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
    
        testWebP(function (support) {
            let className = support = true ? 'webp' : 'no-webp';
            document.documentElement.classList.add(className)
        });
    }

    isWebp();

    new Swiper(
        ".swiper", {
            navigation: {
                nextEl: '.navigation__button-next',
                prevEl: '.navigation__button-prev',
            },
        }
    );

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