const apiKey = "ZJNdEPtIMdhb9WMMItMc2zKuMXHAnNws";
const apiUrl = "https://api.currencylayer.com/list? access_key = ";
const form = document.querySelector(".currencyForm");
const currencyNames = document.querySelector(".currencyNames");
const outputWrapper = document.querySelector(".outputWrapper");

form.addEventListener("submit", submitForm);

//showCurrencyList();

function submitForm(e) {
    e.preventDefault();
    const convertCommand = form.querySelector("#commandInput").value; //считываем команду конвертации
    //получаем из команды данные
    let fields = convertCommand.split(' ');
    let moneyValue = fields[0];//кол-во базовой валюты
    let sourceCurrency = fields[1];//базовая валюта
    let targetCurrency = fields[3];//целевая валюта
    let myHeaders = new Headers();
    myHeaders.append("apikey", "23eee797ab8b1ddf0333b71525288c5675703471 ");
    console.log(moneyValue, sourceCurrency, targetCurrency )

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    let vt = "&from=" + sourceCurrency + "&to=" + targetCurrency + "&amount=" + moneyValue + "&format=json"
    const output = outputWrapper.querySelector("#result");
   fetch("https://api.getgeoapi.com/v2/currency/convert?api_key=23eee797ab8b1ddf0333b71525288c5675703471" + vt)
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

function showCurrencyList() { // При загрузке страницы выводит список валют
    let myHeaders = new Headers();
    myHeaders.append("apikey", "fa1db03b2f0c485398241624767a492a");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const output = currencyNames.querySelector(".currencyNamesOutput");
    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
        .then(response => response.json())
        .then(response => {
            let currencyArray = response.currencies; //получаем объект с перечнем валют
            output.innerHTML='';
            Object.keys(currencyArray).forEach(key => {
                const currencyTemplate = `
                <div class="currencyItem">
                    <p>${key} ${currencyArray[key]}</p>
                </div>
              `;
                output.innerHTML += currencyTemplate;
            })
        })
        .catch(error => console.log('error', error));
}


