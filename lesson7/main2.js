// document.write("<h1>Привет, я заголовок</h1>")
// document.write("<p>Привет, я параграф</p>")
// document.write("<ul><li>я элемент1 списка</li><li>я элемент2 списка</li><li>я элемент3 списка</li></ul>")
// document.write("<button>Я кнопка. Жмякни на меня</button>")

//ЗАГОЛОВОК
let title = document.createElement("h1")
title.classList.add('title-h1') //стили для заголовка
title.textContent = "Привет, я заголовок"

//ОПИСАНИЕ
let description = document.createElement("p")
description.classList.add('description-p', 'text') //стили для заголовка
description.classList.remove('text') //удаляем выбранный класс
description.textContent = "Привет, я параграф"

//СПИСОК
let counter = 0
let list = document.createElement("ul")

// counter++
// let listItem1 = document.createElement("li")
// listItem1.textContent = `я элемент ${counter} списка`

// counter++
// let listItem2 = document.createElement("li")
// listItem2.textContent = `я элемент ${counter} списка`

// counter++
// let listItem3 = document.createElement("li")
// listItem3.textContent = `я элемент ${counter} списка`
// list.append(listItem1, listItem2, listItem3)


//ТЕКСТОВОЕ ПОЛЕ
let textInput = document.createElement("input") //создаем элемент
textInput.placeholder = "Введите имя" //подсказка
textInput.type = "text" //тип поля
//textInput.classList.add("")  //добавляем класс для стилизации


//КНОПКА
let action = document.createElement("button")
action.textContent = "Я кнопка"

//если браузер увидит что на кнопку кликнули - он запустит функцию
action.onclick = function(){
    counter++

    //задаем переменой inpText значение которое будет вводиться в текстовое поле textInput
    let inpText = textInput.value

    console.log(counter) //счетчик
    title.textContent="Клик по кнопке" //при клике меняется текст у заголовка
    description.classList.add('text') //при клике стилизуется цвет параграфа

    let listItem = document.createElement("li") //создаем список
    listItem.textContent = `${counter}) ${inpText}` //выводим в список счетчик и то, что в переменной inpText
    list.append(listItem) //добавляем в конец списка

    //очищаем поле воода после добавления текста
    textInput.value = " "

}

document.body.append(title)
document.body.append(description)
document.body.append(list)
document.body.append(textInput) //выводим в боди текстовое поле
document.body.append(action)
