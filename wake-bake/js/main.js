(function () {

    ///////////// Burger Menu //////////////

    document.addEventListener('click', handleBurgerClick);

    function handleBurgerClick(event) {
        const burgerIcon = event.target.closest('.burger-icon');
        const burgerNavItem = event.target.closest('.nav__item');

        if (!burgerIcon && !burgerNavItem) return;
        if (document.documentElement.clientWidth > 900) return;

        document.body.classList.toggle('body--opened-menu');
    }

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

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach((el) => {
        el.addEventListener('click', (event) => {
            const accordionControl = event.target.closest('.accordion-list__control');

            if (!accordionControl) return;

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

})();