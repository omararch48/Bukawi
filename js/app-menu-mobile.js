(() => {


    'use strict';


    const mobileMenu = document.querySelector('.mobile-menu-container'),
          mobileMenuIcon = document.querySelector('.mobile-menu-icon'),
          mobileMessage = document.querySelector('.mobile-message');
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }


    mobileMenuIcon.addEventListener('click', () => {
        activateElement(mobileMenu, 'mobile-active');
        if (mobileMessage.innerHTML === 'Menú&nbsp;&nbsp;') {
            mobileMessage.innerHTML = 'Salir&nbsp;&nbsp;';
        } else {
            mobileMessage.innerHTML = 'Menú&nbsp;&nbsp;';
        }
    });    

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && mobileMenu.classList.contains('mobile-active')) {
            activateElement(mobileMenu, 'mobile-active');
            mobileMessage.innerHTML = 'Menú&nbsp;&nbsp;';
        }
    });


})();