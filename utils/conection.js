
fetch('https://cors-anywhere.herokuapp.com/https://ttpconsumibles.somee.com/ttpClient/Clients/GetList', {
    method: 'POST',  
    mode: 'cors', 
    cache: 'default',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));