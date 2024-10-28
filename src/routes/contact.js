const axios = require('axios')

axios.get('https://formspree.io/f/xeoqevzl')
    .then(response => {
        console.log('Data retrieved from the API:', response.data)
    })
    .catch(error => {
        console.error('Error retrieving data from the API:', error)
    })