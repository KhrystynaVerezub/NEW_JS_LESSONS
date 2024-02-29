//создаем счетчик чтоб менялся порядок номеров
let counter = 0

//создаем элемент (общий div)
let divElements = document.createElement("div")

//ЗАГОЛОВОК
let title = document.createElement("h1")
title.classList.add('title-h1') //стили для заголовка
title.textContent = "TODO list"

//ОПИСАНИЕ
let description = document.createElement("p")
description.classList.add('description-p') //стили для заголовка
description.textContent = "Список запланированных дел"

//ПОЛЕ ВВОДА
let taskInput = document.createElement("input") //создаем текстовое поле
taskInput.placeholder = "Введите описание дела" //добавляем плейхолдер текстовому полю
taskInput.type = 'text'  //добавляем тип текстовому полю
taskInput.classList.add('t-input') //стили для заголовка

//СОДАЕМ КНОПКУ
let addButton = document.createElement("button") //создаем кнопку
addButton.textContent = "OK"
addButton.classList.add('button') //стили для заголовка

//СОДАЕМ СПИСОК
let taskList = document.createElement("ul") //создаем список
taskList.classList.add('task-l') //стили для заголовка


//СОДАЕМ ФУНКЦИЮ которая содает новое дело в список
//она принимает два аргумента
//создает один элемент списка li
function createNewTask(index, taskText) {
    let item = document.createElement("li") //создаем элем.списка
    item.textContent = `${index}) ${taskText}` //выводим то, что отдают в переменных
    return item //функция возвращаем элемент item
}


//ОБРАБОТЧИК СОБЫТИЯ! Даем команду вызывать функцию после клика на кнокпку
addButton.onclick = function(){

    counter++

    //забираем значение с текстового поля ввода nameInput
    let taskText = taskInput.value

    //вызываем функцию createNewUserItem с данными которые будут вводиться в поля
    let newTask = createNewTask(counter, taskText)

    //очищаем поле воода после добавления текста
    taskInput.value = " "

    // добавляем в список listUsers
    taskList.append(newTask)
}


document.body.append(title, description)
divElements.append(taskInput, addButton) //помещаем элемент в divElements, который в бади
document.body.append(divElements) //помещаем элемент в бади чтоб выводить на экран
document.body.append(taskList) //выводим в боди список
