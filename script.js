const USD = 4.87;
const EUR = 5.32;
const GPB = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

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

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function convertCurrency(amount, price, symbol){
    try {
        let total = price * amount;

        if(isNaN(total)){
            alert("Input must be a number");
        }

        description.textContent = `${symbol} 1,00 = ${formatCurrencyBRL(price)}`;
        result.textContent = formatCurrencyBRL(total);

        footer.classList.add("show-result");
    } catch (error) {
        console.log(error);
        footer.classList.remove("show-result");
        alert("Could not convert. Please try again later.");
    }
}