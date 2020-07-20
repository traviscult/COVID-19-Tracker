const axios = require ("axios");

module.exports = {
  
    county: function(res){
        axios({
            url: 'https://corona.azure-api.net/country/us/North%20Carolina/wake',
            method: 'GET',
        })
            .then(response => {
              // response.data.headers['Content-Type'];
              //     console.log("headers", response.data.headers)
              //    console.log("response2", response)
              console.log('respons', response);
              
            })
            // .catch(function (error) {
            //   console.log(error);
            //   //   console.log('Show error notification!');
            // });

}}

