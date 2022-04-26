//  This function loads quotes data from the Simpson API
let currQuote = 1;
const num = 10;

const nextQuote = () => {
    currQuote++;
    if (currQuote >= num) {
        currQuote = 1;
    }

    fetchSimpsonJSON(currQuote);

}
function fetchSimpsonJSON(currQuote) {

    // Feel free to download this HTML and edit it, to use another Simpson ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${num}`;

    fetch(url)

        .then(function (response) {

            return response.json(); // response.data instead of response.json() with fetch

        })

        .then(function (simpsons) {
            let html = '';
            console.log('data decoded from JSON:', simpsons);
            console.log('typeof simpsons:', typeof simpsons);
            // Build a block of HTML
            const simpsonHtml = `

         <p><strong>${simpsons[currQuote].quote}</strong></p>

          <p><strong>${simpsons[currQuote].character}</strong></p>

          <img src="${simpsons[currQuote].image}" />
        `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;

        })


}
fetchSimpsonJSON(currQuote);
