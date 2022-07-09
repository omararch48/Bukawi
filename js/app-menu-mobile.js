(() => {


    'use strict';


    const mobileMenu = document.querySelector('.mobile-menu'),
          mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    let mainUbication = window.scrollY;
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }


    mobileMenuIcon.addEventListener('click', () => {
        activateElement(mobileMenu, 'mobile-active');
    });    

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && mobileMenu.classList.contains('mobile-active')) {
            activateElement(mobileMenu, 'mobile-active');
        }
    });

    // window.onscroll = function() {
    //     let displacement = window.scrollY;
    //     if (mainUbication >= displacement) {
    //         mobileMenuIcon.style.top = '0';
    //     } else {        
    //         mobileMenuIcon.style.top = '-10rem';
    //     }
    //     mainUbication = displacement;
    // }


})();