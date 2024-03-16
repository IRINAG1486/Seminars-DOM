{/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */}

// const paragraphElement = document.querySelector('p');
// const parElem2 = document.querySelector('.www');
// console.log(paragraphElement);
// console.log(parElem2);
// const parElem3 = document.querySelectorAll('.www') [1];
// console.log(parElem3 ); 

// const pElem = document.querySelector('p');
// console.log(pElem);

// const pElem2 = document.querySelector('.www');
// console.log(pElem2);

// const pElemAll = document.querySelectorAll('.www')[1];
// console.log(pElemAll);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const linkElem = document.querySelector('.link');
// console.log(linkElem );
// linkElem.textContent = 'link text js';
// linkElem.href = "https://developer.mozilla.org/ru/"; 

// const picture = document.querySelector('.photo');
// console.log(picture );
// picture.src = 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D';



// const aElem = document.querySelector('.link')

// aElem.textContent = 'link text js';

// aElem.href = 'https://developer.mozilla.org/ru/';

// const imgElem = document.querySelector('.photo');
// imgElem.src = 'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D';


// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const paragElement = document.createElement('p');
// paragElement.textContent = 'Новый текстовый элемент';
// const divElem = document.querySelector('.content');
// divElem.appendChild(paragElement);
// console.log(divElem); 
// divElem.removeChild(paragElement);
// console.log(divElem); 


// const paragraphElem = document.createElement('p');
// paragraphElem.textContent = 'Новый текстовый элемент';
// const divElem = document.querySelector('.content');

// divElem.appendChild(paragraphElem);

// divElem.removeChild(paragraphElem);

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const divElem = document.querySelector('.content');
// const buttonElem = document.createElement('button');
// buttonElem.textContent = "Click";
// divElem.appendChild(buttonElem);
// console.log(divElem);

// let counter = 0;
// buttonElem.onclick = function () {
// 	counter++;
// 	console.log(`вы нажали кнопку ${counter} раз`);
// }



// const divElem = document.querySelector('.content');
// const buttonElem = document.createElement('button');
// buttonElem.textContent = 'Counter';
// divElem.appendChild(buttonElem);

// let count = 0;
// buttonElem.onclick = function() {
//     count ++;
//     console.log(`вы нажали кнопку ${count} раз`);
// }


// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divElem = document.querySelector('.content');
const button2Elem = document.createElement('button');
button2Elem.textContent = "Отправить";
divElem.appendChild(button2Elem);

button2Elem.addEventListener('click', () => {
	button2Elem.textContent = "Текст отправлен";
});

// const divElem = document.querySelector('.content');
// const buttonElem = document.createElement('button');
// buttonElem.textContent = 'Отправить';
// divElem.appendChild(buttonElem);

// buttonElem.onclick = function() {
//     buttonElem.textContent = 'Текст отправлен'
// }

// buttonElem.addEventListener('click', () => {
//     buttonElem.textContent = 'Текст отправлен'
// });