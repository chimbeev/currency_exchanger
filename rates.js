const sel = document.querySelector("#base_currency");
const currencyNames = document.querySelector(".currencyNames");
const outputWrapper = document.querySelector(".outputWrapper");
const inputWrapper = document.querySelector(".inputWrapper");
sel.addEventListener('change', showCurs);

function showCurs() {
    let moneyValue = 1;//кол-во базовой валюты
    let sourceCurrency = sel.value; //базовая валюта
    showCurrencyRate('EUR');
    showCurrencyRate('USD');
    showCurrencyRate('GBP');
    showCurrencyRate('RUB');
}

function showCurrencyRate(targetCur) { // Выводит курс валюты относительно базовой валюты
    let moneyValue = 1;//кол-во базовой валюты
    let sourceCurrency = sel.value; //базовая валюта
    let targetCurrency = targetCur;//целевая валюта
    console.log(moneyValue, sourceCurrency, targetCurrency )
    let params = "&from=" + sourceCurrency + "&to=" + targetCurrency + "&amount=" + moneyValue + "&format=json"
    let r = "#"+ targetCur
    const output = outputWrapper.querySelector(r);
    fetch("https://api.getgeoapi.com/v2/currency/convert?api_key=23eee797ab8b1ddf0333b71525288c5675703471" + params)
        .then(response => response.json())
        .then(response => { console.log(response)
            let currencyArray = response.rates; //получаем объект с результатами
            let d = `${targetCurrency}`
            let rates = currencyArray[d.toUpperCase()]
            output.innerHTML='';
            output.innerHTML = rates["rate_for_amount"];
        })
        .catch(error => console.log('error', error));
}
