//Header choice select
document.querySelectorAll('.accordion__item').forEach(function (productInfoWrapper) {
    const productInfoTitle = productInfoWrapper.querySelector('.accordion__title');
    const productInfoContent = productInfoWrapper.querySelector('.accordion__content');
    
    // Клик по кнопке. Открыть/Закрыть select
    productInfoTitle.addEventListener('click', function (e) {
        productInfoContent.classList.toggle('accordion__content_active');
        this.classList.toggle('accordion__title_active');
    });
    
    // Клик снаружи selectа. Закрыть select
    document.addEventListener('click', function (e) {
        if (e.target !== productInfoTitle) {
            productInfoTitle.classList.remove('accordion__title_active');
            productInfoContent.classList.remove('accordion__content_active');
        }
    });
});