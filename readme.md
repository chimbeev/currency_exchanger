Тестовое задание: frontend
Напишите SPA для конвертирования валют. Для получения текущих курсов найдите и используйте любое отрытое API.

Приложение должно состоять из двух страниц:

Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub и получить результат.
Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20
По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить.

Плюсом будет:

Хорошо продуманный интерфейс и внешний вид
Тесты
Максимальная скорость работы приложения (как при загрузке приложения, так и при конвертировании валют)
Для реализации используйте

Любые библиотеки, которые считаете уместными

----------------------------------------------------
Для проведения E2E-тестирования приложения используется Cypress.
Для запуска локального веб-сервера набрать в первом терминале: npm start
Для запуска приложения в браузере набрать "http://localhost:8080/CurrencyConverter.html"
Для проведения тестирования открыть второй терминал и запустить: cypress open, далее E2E testing, 
далее Start E2E testing in Chrome, далее spec.cy.js для проведения тестов. 
Currency Exchanger, Currrency rates.
