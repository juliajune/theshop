//Начинаем работать с select
document.querySelectorAll('.select').forEach(function (selectWrapper) {
    const selectBtn = selectWrapper.querySelector('.select__button');
    const selectList = selectWrapper.querySelector('.select__list');
    const selectListItems = selectList.querySelectorAll('.select__list-item');
    const selectInput = selectWrapper.querySelector('.select__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    selectBtn.addEventListener('click', function (e) {
        selectList.classList.toggle('select__list_visible');
        this.classList.toggle('select__button_active');
    });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть select
    selectListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            selectBtn.innerText = this.innerText;
            selectBtn.focus();
            selectInput.value = this.dataset.value;
            selectList.classList.remove('select__list_visible');
        });
    });
    // Клик снаружи selectа. Закрыть select
    document.addEventListener('click', function (e) {
        if (e.target !== selectBtn) {
            selectBtn.classList.remove('select__button_active');
            selectList.classList.remove('select__list_visible');
        }
    });
});