(function () {

    ///////////// Burger Menu //////////////

    document.addEventListener('DOMContentLoaded', () => {
        // Проверяем ширину экрана один раз при загрузке
        const isMobile = window.innerWidth <= 750;
        // Функция для обработки клика
        function handleBurgerClick(event) {
            // Проверяем, был ли клик на бургере или в элементе меню
            const target = event.target.closest('.burger-icon, .header__nav-item');
            
            // Если клик вне зоны интереса, ничего не делаем
            if (!target || !isMobile) return;

            // Переключаем класс для тела документа
            document.body.classList.toggle('body--opened-menu');
        }
    
        // Вешаем обработчик события на весь документ
        document.addEventListener('click', handleBurgerClick);
    });

    ///////////// swiper //////////////

    new Swiper('.sold__slider', {
        // Optional parameters
        spaceBetween: 85,
        slidesPerView: 4,

        // Navigation arrows
        navigation: {
            nextEl: '.sold__next',
            prevEl: '.sold__prev',
        },
        breakpoints: {
            1700: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1500: {
                slidesPerView: 3.4,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 2.5,
            },
            950: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 2,
            },
            650: {
                slidesPerView: 1.5,
            },
            450: {
                slidesPerView: 1.1,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }
        });

    ///////////// mix //////////////

    var mixer = mixitup('.sold__wrapper', {
        animation: {
            duration: 1000
        }
    });
    var mixer2 = mixitup('.main__assortment-content', {
        animation: {
            duration: 1000
        }
    });

    /////////////buttons see ALL & hide ALL //////////////

    let addbtn = document.querySelector('.main__assortment-btn')
    let removebtn = document.querySelector('.main__assortment-btn--remove')

    addbtn.addEventListener('click',addClassAndChangeButtons)
    function addClassAndChangeButtons() {
        const Img = document.querySelector('.main__assortment-blur-img')
        const sneakers = document.querySelectorAll('.sold__slide--hidden')
        const addButton = document.querySelector('.add-button')

        sneakers.forEach(sneakers => {
            sneakers.style.display = "flex"
        })
        Img.classList.add('main__assortment-blur-img--close')

        addButton.style.display = "none"
        removebtn.style.display = "flex"
    }

    removebtn.addEventListener('click',removeClassAndChangeButtons)
    function removeClassAndChangeButtons() {
        const Img = document.querySelector('.main__assortment-blur-img')
        const sneakers = document.querySelectorAll('.sold__slide--hidden')
        const addButton = document.querySelector('.add-button')

        sneakers.forEach(sneakers => {
            sneakers.style.display = "none"
        })
        Img.classList.remove('main__assortment-blur-img--close')

        removebtn.style.display = "none"
        addButton.style.display = "flex"
    }


    ///////////// //////////////

    //// assortment section ///////////

    function checkScreenWidt() {
        const mainBlur = document.querySelector('.main__assortment-blur')
        const assortment = document.querySelector ('.sold__main-assortment')

        if(window.innerWidth <= 900) {
            mainBlur.style.display = "none"
            assortment.style.display = "flex"
        } else {
            mainBlur.style.display = " "
            assortment.style.display = " "
        }
    }

    checkScreenWidt();
    window.addEventListener('resize', checkScreenWidth);

})();