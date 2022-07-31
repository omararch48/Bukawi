(() => {


    'use strict';


    let isOver = false;
    const vectorImages = document.querySelectorAll('.product-detail-galery__figure'),
    close = document.querySelector('.close-modal-product'),
    modal = document.querySelector('.image-modal'),
    modalMainImage = document.querySelector('.modal-main-image'),
    modalMainLink = document.querySelector('.modal-main-link'),
    activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    };


    modalMainLink.addEventListener('mouseout', () => {
        isOver = false;
    });

    modalMainLink.addEventListener('mouseenter', () => {
        isOver = true;
    });

    vectorImages.forEach((element) => {
        element.addEventListener('click', () => {
            modalMainLink.href = element.childNodes[1].src;
            modalMainImage.src = element.childNodes[1].src;
            activateElement(modal, 'image-modal-active');
        });
    });
        
    modal.addEventListener('click', () => {
        if (!isOver) {
            activateElement(modal, 'image-modal-active');

        }
    });


})();