(() => {


    'use strict';


    let selectedProduct = -1;
    const productsVector = document.querySelectorAll('.product'),
    activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    },
    showProducts = () => {
            for (let i = 0; i < productsVector.length; i++) {
                if (i === selectedProduct) {
                    continue;
                } else {
                    activateElement(productsVector[i], 'product-filter');
                }
            }
        };

    productsVector.forEach((element, index) => {
        element.addEventListener('mouseover', () => {
            selectedProduct = index;
            showProducts();
        });

        element.addEventListener('mouseout', () => {
            showProducts();
            selectedProduct = -1;
        });
    });


})();