(() => {


    'use strict';


    let inMenu = false;
    const mobileMenu = document.querySelector('.mobile-menu-container'),
          mobileMenuIcon = document.querySelector('.mobile-menu-icon'),
          mobileMessage = document.querySelector('.mobile-message'),
          menuUlElements = document.querySelectorAll('.box-mobile');
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }

    menuUlElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            inMenu = true;
        });
        element.addEventListener('mouseout', () => {
            inMenu = false;
        });
    });

    mobileMenu.addEventListener('click', () => {
        if (!inMenu) {
            activateElement(mobileMenu, 'mobile-active');
            if (mobileMessage.innerHTML === 'Menú&nbsp;&nbsp;') {
                mobileMessage.innerHTML = 'Salir&nbsp;&nbsp;';
                mobileMenuIcon.style.backgroundColor = 'transparent';
            } else {
                mobileMessage.innerHTML = 'Menú&nbsp;&nbsp;';
                mobileMenuIcon.style.backgroundColor = 'rgba(0, 152, 218, 0.4)';
            }    
        }
    });

    mobileMenuIcon.addEventListener('click', () => {
        activateElement(mobileMenu, 'mobile-active');
        if (mobileMessage.innerHTML === 'Menú&nbsp;&nbsp;') {
            mobileMessage.innerHTML = 'Salir&nbsp;&nbsp;';
            mobileMenuIcon.style.backgroundColor = 'transparent';
        } else {
            mobileMessage.innerHTML = 'Menú&nbsp;&nbsp;';
            mobileMenuIcon.style.backgroundColor = 'rgba(0, 152, 218, 0.4)';
        }
    });    

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && mobileMenu.classList.contains('mobile-active')) {
            activateElement(mobileMenu, 'mobile-active');
            mobileMessage.innerHTML = 'Menú&nbsp;&nbsp;';
            mobileMenuIcon.style.backgroundColor = 'rgba(0, 152, 218, 0.4)';
        }
    });


})();