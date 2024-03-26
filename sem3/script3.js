// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const buttonEl = document.querySelector('.button');
// //сообщение на момент загрузки страницы
// window.onload = () => {
//     console.log('страница загрузилась');
// }

// buttonEl.onclick = () => {
//     console.log('событие onclick');
// }

// buttonEl.addEventListener('click', () => {
//     console.log('событие addEventListener');
// });



// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const body = document.querySelector('body');
// for (let i = 1; i < 6; i++) {
//     body.insertAdjacentHTML('beforeend', `<button class='button'>${i}</button>`);
    
// }
// body.addEventListener('click', (e) => {
//     console.log(e.target.nodeName);
//     // console.log(e.target);
//     // console.log(e);
//    if (e.target.nodeName === 'BUTTON') {
//     console.log(`Нажали на кнопку ${e.target.textContent}`);
//    }
// });

// const btnElems = document.querySelectorAll('button');
// let count = 0;
// btnElems[4].addEventListener('click', () => {
//     count++;
//     console.log(`на кнопку 4 нажали ${count}`);
// });

// btnElems[5].addEventListener('click', () => {
//     btnElems[5].textContent = 'Вы нажали на эту кнопку';
    
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
// const body = document.querySelector('body');

// const newButton = document.createElement('button');
// newButton.textContent = "Click me";
// body.insertAdjacentElement('beforeend', newButton);
// newButton.addEventListener('click', () => {
//     body.insertAdjacentHTML('beforeend', `<h1>Новый заголовок</h1>`) 
// });

// const secondButton = document.createElement('button');
// secondButton.textContent = "Remove";
// body.insertAdjacentElement('beforeend', secondButton);
// secondButton.addEventListener('click', () => {
//     document.querySelector('h1').remove();
// });

// const thButton = document.createElement('button');
// thButton.textContent = "Наведение";
// body.insertAdjacentElement('beforeend', thButton);
// thButton.addEventListener('mouseover', () => {
//     console.log('навели на кнопку');
// });

// thButton.addEventListener('mouseout', () => {
//     console.log('Наведения на кнопку больше нет');
// });


// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
const body = document.querySelector('body');
const findList = document.querySelector('ul');
const buttonAdd = document.createElement('button');
buttonAdd.textContent = 'Add';
body.insertAdjacentElement('afterbegin', buttonAdd);
buttonAdd.addEventListener('click', () => {
        findList.insertAdjacentHTML('beforeend', `<li>новый элемент списка</li>`);
}); 

const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'Delete';
body.insertAdjacentElement('afterbegin', buttonDelete);
buttonDelete.addEventListener('click', () => {
        findList.firstElementChild.remove();
});

const buttonClass = document.createElement('button');
buttonClass.textContent = 'Add Class';
body.insertAdjacentElement('afterbegin', buttonClass);
buttonClass.addEventListener('click', () => {
    buttonClass.classList.add('click');
});