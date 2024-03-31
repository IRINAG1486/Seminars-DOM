// Поиск в интернете (бесплатные api примеры)
// Найти любые данные, на произвольную тему
// Установить расширение в браузер “JSON viewer”
// Пример найденного json объекта

// https://jsonplaceholder.typicode.com/

// Создать файл index.html
// Подключить data.js
// Добавить блок <div class="content"></div>
// Создать переменную data и добавить в нее JSON parse данные из файла data.js
// Вывести в консоль объект data
// С помощью foreach обойти массив data
// Вывести все изображения из данных


const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector('.content');

newData.forEach(element => {
    divContentElem.insertAdjacentHTML('beforeend', `
    <div class='wrapper'>
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
        <p>${element.address.city}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>
    </div>
    `)

});