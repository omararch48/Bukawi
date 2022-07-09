(() => {


    'use strict';


    const menuUlElements = document.querySelectorAll('.box-menu'),
          bannerMenu = document.querySelector('.banner-menu'),
          bannerMenuElements = document.querySelectorAll('.banner-menu-information');
    let selectedMenuElement = bannerMenuElements[0],
        oldElement = selectedMenuElement,
        mouseInBannerMenu = false,
        selectedIndex = 0;
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }


    bannerMenu.addEventListener('mouseenter', () => {
        mouseInBannerMenu = true;
    });
    
    bannerMenu.addEventListener('mouseout', () => {
        mouseInBannerMenu = false;
    });

    document.addEventListener('click', () => {
        if (!mouseInBannerMenu && !bannerMenu.classList.contains('display-none')) {
            activateElement(bannerMenu, 'display-none');
        }
    });

    menuUlElements.forEach(function(element, index) {
        element.addEventListener('mouseenter', () => {
            oldElement = selectedMenuElement;
            selectedIndex = index;
            selectedMenuElement = bannerMenuElements[index];
            if (oldElement.classList.contains('selected-baner-menu-infromation')) {
                activateElement(
                    oldElement, 
                    'display-none', 
                    'selected-baner-menu-infromation'
                );
            }
            if (selectedMenuElement.classList.contains('display-none')) {
                activateElement(
                    selectedMenuElement, 
                    'display-none', 
                    'selected-baner-menu-infromation'
                );
            }
            if (bannerMenu.classList.contains('display-none')) {
                activateElement(bannerMenu, 'display-none');
            }
        })
    });

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && !bannerMenu.classList.contains('display-none')) {
            activateElement(bannerMenu, 'display-none');
        }
    });


})();