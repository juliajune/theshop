//Header navigation. Burger menu
document.querySelectorAll('.header-nav').forEach(function (headerNavWrapper) {
    const headerNavBtn = headerNavWrapper.querySelector('.header-nav__button');
    const headerNavList = headerNavWrapper.querySelector('.header-nav__list');
    const headerNavListItems = headerNavList.querySelectorAll('.header-nav__item');
    //const headerNavInput = headerNavWrapper.querySelector('.header-nav__input-hidden');

    // Клик по кнопке. Открыть/Закрыть меню
    headerNavBtn.addEventListener('click', function (e) {
        headerNavList.classList.toggle('header-nav__list_visible');
        this.classList.toggle('header-nav__button_active');
    });
    // Выбор элемента списка. Закрыть select
    headerNavListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            //e.stopPropagation();
            //headerNavBtn.innerText = this.innerText;
            //headerNavBtn.focus();
            //selectInput.value = this.dataset.value;
            headerNavtList.classList.remove('header-nav__list_visible');
        });
    });
    // Клик снаружи меню. Закрыть меню
    document.addEventListener('click', function (e) {
        if (e.target !== headerNavBtn) {
            headerNavBtn.classList.remove('header-nav__button_active');
            headerNavList.classList.remove('header-nav__list_visible');
        }
    });
});