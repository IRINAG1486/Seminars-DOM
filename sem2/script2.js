{/* <div class="block">

</div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute) */}


const divElem = document.createElement('div');
divElem.setAttribute('class', 'item');
divElem.textContent = "Элемент внутри";
divElem.style.color = "blue";
divElem.style.border = "1px solid black";
divElem.style.backgroundColor = "green";
divElem.style.padding = "16px";

const divBlock = document.querySelector('.block');
divBlock.appendChild(divElem);

// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const parElem = document.querySelector('.text');
// console.log(parElem.previousElementSibling);
// console.log(parElem.parentElement);
// console.log(parElem.parentElement.previousElementSibling);
// console.log(parElem.parentElement.parentElement);

{/* <div class="item">
        <div class="elem">
            <div class="info">
                <h2 class="subtitle">Lorem, ipsum dolor.</h2>
            </div>
        </div>
    </div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}


// const headingElem = document.querySelector('.subtitle');
// console.log(headingElem.parentElement);
// console.log(headingElem.parentElement.parentElement);
// console.log(headingElem.parentElement.parentElement.parentElement);


{/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */}

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('.btn');
let heading2 = document.querySelector('h2'); 
buttonEl.addEventListener('click', (event) => {
    event.preventDefault;
    if (inputEl.value.length == 0) {
        if (!heading2) {
            heading2 = document.createElement('h2');
            inputEl.parentElement.insertAdjacentElement('afterend', heading2);
        }
        heading2.textContent = "вы не заполнили поле ввода";
        inputEl.style.border = "3px solid red";
    } else {
            heading2.remove();
            inputEl.style.border = "3px solid green";
        
       
    }

});