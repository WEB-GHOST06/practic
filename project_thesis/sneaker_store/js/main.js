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
        slidesPerView: 4.3,

        // Navigation arrows
        navigation: {
            nextEl: '.sold__next',
            prevEl: '.sold__prev',
        }
        });

})();