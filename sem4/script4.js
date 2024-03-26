// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const inputEl = document.querySelector('input');
// const formEl = document.querySelector('form');
// const btnEl = document.querySelector('button');
// let error = false; //вводится что бы не появлялся повторно параграф p (контроль наличия параграфа) 

// btnEl.addEventListener('click', (event) => {
//     event.preventDefault();//прерываем стандартное поведение
//     if (!inputEl.checked && !error) {
//         const p = document.createElement('p');
//         p.textContent = "Необходимо согласиться с условиями";
//         // p.classList.add('error');
//         btnEl.insertAdjacentElement('afterend', p);
//         error = true;
//     } else if (inputEl.checked){
//         formEl.submit();
//     }
// });

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const buttonsRadio = document.querySelectorAll('input');
// const buttonEl = document.querySelector('button');
// const pEl = document.querySelector('p'); //параграф сразу добавили в HTML

// buttonEl.addEventListener('click', (e) => {
//     e.preventDefault();
//     buttonsRadio.forEach((element) => {
//         if (element.checked && element.id === 'tea') {
//             pEl.textContent = "Чай закончился";
//         } else if (element.checked && element.id === 'coffe') {
//             pEl.textContent = "кофе закончился";
//         }
//     });
    
// });


// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const inputEl = document.querySelector('#password');
// const butEl = document.querySelector('button');
// butEl.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (inputEl.value === 'пароль') {
//         inputEl.style.border = "3px solid green";
//     } else {
//         inputEl.style.border = "3px solid red";
//         inputEl.value = '';// обнуляем значение поля input
//         inputEl.placeholder = "Пароль не верный";// изменяем значение плейсхолдера
//     }
// });


// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const inputElem = document.querySelector('#text');
const h1Elem = document.querySelector('h1');

inputElem.addEventListener('input', () => {
    h1Elem.textContent = inputElem.value;
});