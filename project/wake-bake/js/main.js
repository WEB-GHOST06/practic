(function () {

    ///////////// Burger Menu //////////////

    document.addEventListener('DOMContentLoaded', () => {
        // Проверяем ширину экрана один раз при загрузке
        const isMobile = window.innerWidth <= 900;
        // Функция для обработки клика
        function handleBurgerClick(event) {
            // Проверяем, был ли клик на бургере или в элементе меню
            const target = event.target.closest('.burger-icon, .nav__item');
            
            // Если клик вне зоны интереса, ничего не делаем
            if (!target || !isMobile) return;
    
            // Переключаем класс для тела документа
            document.body.classList.toggle('body--opened-menu');
        }
    
        // Вешаем обработчик события на весь документ
        document.addEventListener('click', handleBurgerClick);
    });

    ///////////// Modal Window //////////////

    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.about__img-button');

    modalBtn.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(event) {
        event.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(event) {
        const target = event.target;

        if (target.closest('.modal__cancel') || target === modal) {
            document.body.classList.remove('body--opened-modal');
        }
    }

    ///////////// Tabs //////////////

    const tabControls = document.querySelector('.tab__controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(event) {
        const tabControl = event.target.closest('.tab-controls__link');

        if (!tabControl) return;
        event.preventDefault();

        if (tabControl.classList.contains('tab-controls__link--active')) return;

        const tabContentId = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentId);
        const activeControl = document.querySelector('.tab-controls__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabControl.classList.add('tab-controls__link--active');
        tabContent.classList.add('tab-content--show');
    }

    ///////////// Accordion //////////////

    document.addEventListener('DOMContentLoaded', () => {
        const accordionLists = document.querySelectorAll('.accordion-list'); // находим все аккордеоны

        accordionLists.forEach(accordion => { // для каждого аккордеона
            const items = accordion.querySelectorAll('.accordion-list__item'); // находим все пункты аккордеона

            items.forEach(item => {
                const button = item.querySelector('.accordion-list__control'); // находим кнопку

                button.addEventListener('click', () => {
                    item.classList.toggle('accordion-list__item--opened'); // открываем или закрываем текущий пункт

                    items.forEach(i => {
                        if (i !== item) { // если это не текущий пункт
                            i.classList.remove('accordion-list__item--opened'); // закрываем все остальные пункты
                        }
                    });
                });
            });
        });
    });

    //slider
    new Swiper('.gallery__slider', {
        spaceBetween: 32,
        slidesPerView: 3,

        pagination: {
            el: '.gallery__pagination',
            type:   'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        breakpoints: {
            901: {
                slidesPerView: 4,
            },
            680: {
                slidesPerView: 3,
            },
            450: {
                slidesPerView: 2,
            },
            200: {
                slidesPerView: 1.5,
            }
        }

    });
    new Swiper('.testimonials__slider', {
        spaceBetween: 34,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable : true,
        },
        breakpoints: {
            1201: {
                slidesPerView: 2.1,
            },
            901: {
                slidesPerView: 1.5,
            }
        }
    });

    //tel

    const telInputs = document.querySelector('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})();