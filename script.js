const USD = 4.87;
const EUR = 5.32;
const GPB = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GPB":
            convertCurrency(amount.value, GPB, "£");
            break;
    }
}

function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol);
}