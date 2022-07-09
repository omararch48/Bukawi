(() => {


    'use strict';


    let galeriesPlugins = document.querySelectorAll('.galery .galery-plugin'),
        galeriesButtons = document.querySelectorAll('.galery-images'),
        mobileMenuIcon = document.querySelector('.mobile-menu-icon'),
        currentGalery = 0,
        displayVector = [],
        windowsVector = [],
        leftArrowVector = [],
        rightArrowVector = [],
        closeVector = [],
        indexImagesVector = [],
        overClose = false,
        overElement = false;
    const activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    }

    
    galeriesPlugins.forEach((element) => {
        displayVector.push(element.querySelectorAll('.galery-image'));
        windowsVector.push(element.querySelector('.galery-plugin-image'))
        leftArrowVector.push(element.querySelector('.left-arrow'));
        rightArrowVector.push(element.querySelector('.right-arrow'));
        closeVector.push(element.querySelector('.galery-close .fa-solid'));
        indexImagesVector.push(0);
        element.addEventListener('click', () => {
            if (!overClose) {
                if (!overElement) {
                    activateElement(galeriesPlugins[currentGalery], 'galery-active');
                    activateElement(mobileMenuIcon, 'display-none');
                }
            }
        });
    });

    windowsVector.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            overElement = true;
        });
        element.addEventListener('mouseout', () => {
            overElement = false;
        });
    });

    leftArrowVector.forEach((element) => {
        element.addEventListener('click', () => {
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
            if (indexImagesVector[currentGalery] === 0) {
                indexImagesVector[currentGalery] = displayVector[currentGalery].length - 1;
            } else {
                indexImagesVector[currentGalery] -= 1;
            }
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
        });
        element.addEventListener('mouseenter', () => {
            overElement = true;
        });
        element.addEventListener('mouseout', () => {
            overElement = false;
        });
    });

    rightArrowVector.forEach((element) => {
        element.addEventListener('click', () => {
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
            if (indexImagesVector[currentGalery] === displayVector[currentGalery].length - 1) {
                indexImagesVector[currentGalery] = 0;
            } else {
                indexImagesVector[currentGalery] += 1;
            }
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
        });
        element.addEventListener('mouseenter', () => {
            overElement = true;
        });
        element.addEventListener('mouseout', () => {
            overElement = false;
        });
    });

    closeVector.forEach((element) => {
        element.addEventListener('click', () => {
            activateElement(galeriesPlugins[currentGalery], 'galery-active');
            activateElement(mobileMenuIcon, 'display-none');
        });
        element.addEventListener('mouseenter', () => {
            overClose = true;
        });
        element.addEventListener('mouseout', () => {
            overClose = false;
        });
    });

    galeriesButtons.forEach(function(element, index) {
        element.addEventListener('click', () => {
            activateElement(galeriesPlugins[index], 'galery-active');
            activateElement(mobileMenuIcon, 'display-none');
            currentGalery = index;
        });
    });

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && galeriesPlugins[currentGalery].classList.contains('galery-active')) {
            activateElement(galeriesPlugins[currentGalery], 'galery-active');
            activateElement(mobileMenuIcon, 'display-none');
        } else if (key == 'ArrowLeft' && galeriesPlugins[currentGalery].classList.contains('galery-active')) {
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
            if (indexImagesVector[currentGalery] === 0) {
                indexImagesVector[currentGalery] = displayVector[currentGalery].length - 1;
            } else {
                indexImagesVector[currentGalery] -= 1;
            }
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
        } else if (key == 'ArrowRight' && galeriesPlugins[currentGalery].classList.contains('galery-active')) {
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
            if (indexImagesVector[currentGalery] === displayVector[currentGalery].length - 1) {
                indexImagesVector[currentGalery] = 0;
            } else {
                indexImagesVector[currentGalery] += 1;
            }
            activateElement(
                displayVector[currentGalery][indexImagesVector[currentGalery]],
                'galery-plugin-image-selected',
                'display-none'
            );
        }
    });



})();