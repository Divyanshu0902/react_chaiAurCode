const currency = "usd";
const url = (`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

async function getCurrencyData() {
    const response = await fetch(url);
    const jsValue = await response.json();
    const ExchangeRates = jsValue[currency];
    
    console.log(ExchangeRates.inr);
}

getCurrencyData();