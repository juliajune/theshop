//Header choice select
document.querySelectorAll('.choice-select').forEach(function (selectWrapper) {
    const selectBtn = selectWrapper.querySelector('.choice-select__button');
    const selectList = selectWrapper.querySelector('.choice-select__list');
    const selectListItems = selectList.querySelectorAll('.choice-select__list-item');
    const selectInput = selectWrapper.querySelector('.choice-select__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    selectBtn.addEventListener('click', function (e) {
        selectList.classList.toggle('choice-select__list_visible');
        this.classList.toggle('choice-select__button_active');
    });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть select
    selectListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            selectBtn.innerText = this.innerText;
            selectBtn.focus();
            selectInput.value = this.dataset.value;
            selectList.classList.remove('choice-select__list_visible');
        });
    });
    // Клик снаружи selectа. Закрыть select
    document.addEventListener('click', function (e) {
        if (e.target !== selectBtn) {
            selectBtn.classList.remove('choice-select__button_active');
            selectList.classList.remove('choice-select__list_visible');
        }
    });
});