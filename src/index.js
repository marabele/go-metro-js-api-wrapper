'use strict';

const axios = require('axios');

module.exports = {
    getAccessibilityScore: (longitude,latitude) => {
        axios.get('http://proserver.gometro.co.za/api/v1/accessibility/'+longitude+'/'+latitude+'/800/')
        .then((response)=>{
            return response.data.accessibilityScore;
        }).catch((error) => {
            return 'an error occured, please make sure that the longitude and latitude is in a string format.'
        });
    }
}
