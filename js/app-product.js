(() => {


    'use strict';


    let mainUbication = window.scrollY;
    

    window.onscroll = function() {
        let displacement = window.scrollY;
        
        
        mainUbication = displacement;
        console.log(mainUbication);
        console.log(displacement);
    }


})();