(() => {


    'use strict';

    
    let listSocial = document.querySelectorAll('.box-social'),
        selectionsFooter = document.querySelectorAll('.footer-selection'),
        selectedFooter = selectionsFooter[0];
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }

    
    listSocial.forEach(function(element, index) {
        element.addEventListener('mouseover', () => {
            activateElement(selectionsFooter[index + 1], 'display-none');
            activateElement(selectedFooter, 'display-none');
            selectedFooter = selectionsFooter[index + 1];
        });
        element.addEventListener('mouseout', () => {
            console.log('salida');
            activateElement(selectionsFooter[index + 1], 'display-none');
            selectedFooter = selectionsFooter[0];
            activateElement(selectedFooter, 'display-none');
        });
    });


})();