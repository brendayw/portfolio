const axios = require('axios')

axios.get('https://magicloops.dev/api/loop/run/e4e7ff5b-1392-45b6-91e8-06d1b8154b8b?')
    .then(response => {
        console.log('Data retrieved from the API:', response.data)
    })
    .catch(error => {
        console.error('Error retrieving data from the API:', error)
    })