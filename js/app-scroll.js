(() => {


    'use strict';


    let mainUbication = window.scrollY,
        outFooter = true;
    const footer = document.querySelector('.footer');


    footer.addEventListener('mouseover', () => {
        outFooter = false;
    });

    footer.addEventListener('mouseout', () => {
        outFooter = true;
    });

    window.onscroll = function() {
        let displacement = window.scrollY;
        if (mainUbication >= displacement) {
            if (outFooter) {                
                document.querySelector('.main-menu-container').style.top = '0';
                document.querySelector('.mobile-menu-icon').style.top = '0';
            }
        } else {        
            document.querySelector('.main-menu-container').style.top = '-55rem';
            if (!document.querySelector('.mobile-menu-container').classList.contains('mobile-active')) {
                document.querySelector('.mobile-menu-icon').style.top = '-8rem';
            }
        }
        mainUbication = displacement;
    }


})();