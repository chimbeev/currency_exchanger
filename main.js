const form = document.querySelector(".currencyForm");
const currencyNames = document.querySelector(".currencyNames");
const outputWrapper = document.querySelector(".outputWrapper");
const inputWrapper = document.querySelector(".inputWrapper");
form.addEventListener("submit", submitForm);

function submitForm(e) {
   e.preventDefault();
   const convertCommand = form.querySelector("#commandInput").value; //считываем команду конвертации
   //получаем из команды данные
   let fields = convertCommand.split(' ');
   let moneyValue = fields[0];//кол-во базовой валюты
   let sourceCurrency = fields[1];//базовая валюта
   let targetCurrency = fields[3];//целевая валюта
   console.log(moneyValue, sourceCurrency, targetCurrency )
   let vt = "&from=" + sourceCurrency + "&to=" + targetCurrency + "&amount=" + moneyValue + "&format=json"
   const output = outputWrapper.querySelector("#result");
   fetch("https://api.getgeoapi.com/v2/currency/convert?api_key=23eee797ab8b1ddf0333b71525288c5675703471" + vt)
        .then(response => response.json())
        .then(response => { console.log(response)
            let currencyArray = response.rates; //получаем объект с результатами
            let d = `${targetCurrency}`
            let rates = currencyArray[d.toUpperCase()] //выбираем из массива курс валюты
            output.innerHTML='';
            output.innerHTML = Number(rates["rate_for_amount"]).toFixed(2).toString() //Сначала преобразуем в строку в число,
            // затем округляем до двух цифр после запятой, потом обратно преобразуем в строку
        })
        .catch(error => console.log('error', error));
}

