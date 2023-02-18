let quote_box = document.getElementById('quote_box');
let quote = document.getElementById('random_quote');


console.log(quote.textContent.length);

if (quote.textContent.length > 100){
    quote.style.fontSize = '3vw';
    quote_box.style.height = '18rem'
}