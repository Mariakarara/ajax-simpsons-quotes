// This function loads quotes data from the Simpson API
function fetchSimpsonJSON() {

    // Feel free to download this HTML and edit it, to use another Simpson ID
    
    const num = 10;
    
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=num`;
    
    fetch(url)
    
    .then(function (response) {
    
    return response.json(); // response.data instead of response.json() with fetch
    
    })
    
    .then(function (simpsons) {
    
    console.log('data decoded from JSON:', simpsons);
    console.log('typeof simpsons:', typeof simpsons);
    // Build a block of HTML
    
    const simpsonHtml = `
    
    <p><strong>${simpsons[0].quote}</strong></p>
    
    <p><strong>${simpsons[0].character}</strong></p>
    
    <img src="${simpsons[0].image}" />
    
    `;
    
    document.querySelector('#simpson').innerHTML = simpsonHtml;
    
    });
    
    }
    fetchSimpsonJSON()
    