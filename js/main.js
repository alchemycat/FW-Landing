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
			let className = (support = true ? "webp" : "no-webp");
			document.documentElement.classList.add(className);
		});
	}

	isWebp();

	new Swiper(".swiper", {
		navigation: {
			nextEl: ".navigation__button-next",
			prevEl: ".navigation__button-prev",
		},
	});

	function menu() {
		const burger = document.querySelector(".header__burger");
		const header = document.querySelector(".header__wrapper");

		burger.addEventListener("click", () => {
			header.classList.toggle("active");
			burger.classList.toggle("active");
		});
	}

	menu();

	function calc() {
		const daysWrap = document.querySelector("[data-id='days']"),
			hoursWrap = document.querySelector("[data-id='hours']"),
            summWrap = document.querySelector(".summ");

		let currentDayValue = 6;
		let currentHoursValue = 6000;

        const activeDaysItem = daysWrap.querySelector(`[data-value="${currentDayValue}"]`);
        const activeHoursItem = hoursWrap.querySelector(`[data-value="${currentHoursValue}"]`);
        
        addActive(activeDaysItem, daysWrap, "days");
        addActive(activeHoursItem, hoursWrap, "hours");
        multiply(currentDayValue, currentHoursValue);

		daysWrap.addEventListener("click", (e) => {
			const target = e.target;

			addActive(target, daysWrap, "days");
            multiply(currentDayValue, currentHoursValue);

		});

		hoursWrap.addEventListener("click", (e) => {
			const target = e.target;

			addActive(target, hoursWrap, "hours");
            multiply(currentDayValue, currentHoursValue);
		});

		function addActive(target, elementsContainer, type) {
			if (target.classList.contains("calc__option")) {
				if (type === "days") {
					currentDayValue = +target.getAttribute("data-value");
				} else {
					currentHoursValue = +target.getAttribute("data-value");
				}

				removeActive(elementsContainer.childNodes);
				target.classList.add("active");
			}
		}

		function removeActive(row) {
			row.forEach((element) => {
				if (element.tagName === "BUTTON") {
					element.classList.remove("active");
				}
			});
		}

        function multiply(a, b, c = 4) {
            let result = a * b * c;
			result = result.toLocaleString('ru-RU');
            summWrap.textContent = result;
        }
	}

	calc();

	function smoothScrolling() {
		try {
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();
					
					const burger = document.querySelector('.header__burger');
					const wrapper = document.querySelector(".header__wrapper");
					
					if (burger.classList.contains("active")) {
						burger.classList.remove("active");
						wrapper.classList.remove("active");
					}

					document.querySelector(this.getAttribute('href')).scrollIntoView({
						behavior: 'smooth'
					});
				});
			});
		} catch {}
	
	}

	smoothScrolling();
});
