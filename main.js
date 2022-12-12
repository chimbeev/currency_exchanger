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
    let moneyValue = fields[0];//кол-во целевой валюты
    let targetCurrency = fields[1];//целевая валюта
    let sourceCurrency = fields[3];//базовая валюта
    let myHeaders = new Headers();
    myHeaders.append("apikey", "ZJNdEPtIMdhb9WMMItMc2zKuMXHAnNws");


    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    const output = outputWrapper.querySelector("#result");

 //   fetch("https://api.apilayer.com/currency_data/convert?to=gbp&from=usd&amount=100", requestOptions)
 //       .then(response => response.text())
 //       .then(result => console.log(result))
 //       .catch(error => console.log('error', error));

    //fetch("https://api.apilayer.com/currency_data/convert?to={${targetCurrency}}&from={${sourceCurrency}}&amount={${moneyValue}}", requestOptions)
    fetch("https://api.apilayer.com/currency_data/convert?to=usd&from=rub&amount=1", requestOptions)
        .then(response => response.json())
        .then(result => { console.log(result)
            let currencyArray = result.result; //получаем объект с результатами
            output.innerHTML='';
            output.innerHTML = currencyArray;
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


