const input_currency = document.querySelector("#input_currency")
const output_currency = document.querySelector("#output_currency")
const input_amount = document.querySelector("#input_amount")
const output_amount = document.querySelector("#output_amount")
const exchange = document.querySelector("#exchange")
const rate = document.querySelector("#rate")

input_currency.addEventListener('change', compute)
output_currency.addEventListener('change', compute)
input_amount.addEventListener('input', compute)
output_amount.addEventListener('input', compute)

exchange.addEventListener('click', ()=>{
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value= temp;
    compute();
});

function compute(){
    const abc = input_currency.value;
    const def = output_currency.value;

    fetch(`https://v6.exchangerate-api.com/v6/3e8e5ad1be4c440fcd9dd8c6/latest/${abc}`)
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        const new_rate= data.conversion_rates[def];
        console.log(new_rate)
        rate.innerHTML = `1 ${abc}= ${new_rate} ${def}`
        output_amount.value = (input_amount.value*new_rate).toFixed(2);
    })
}