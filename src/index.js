'use strict';

const axios = require('axios');

module.exports = {
    getAccessibilityScore: (a,b) => {
        axios.get('http://proserver.gometro.co.za/api/v1/accessibility/'+a+'/'+b+'/800/')
        .then((response)=>{
            return response.data.accessibilityScore;
        }).catch((error) => {
            return 'an error occured, please make sure that the longitude and latitude is in a string format.'
        });
    }
}
