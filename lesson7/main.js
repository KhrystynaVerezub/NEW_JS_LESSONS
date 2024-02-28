//создаем счетчик чтоб менялся порядок номеров
let counter = 0

//создаем элемент (общий div)
let divElements = document.createElement("div")

//ПОЛЕ ВВОДА ИМЕНИ
let nameInput = document.createElement("input") //создаем текстовое поле
nameInput.placeholder = "Введите имя" //добавляем плейхолдер текстовому полю
nameInput.type = 'text'  //добавляем тип текстовому полю

//ПОЛЕ ВВОДА ГОДА РОЖДЕНИЯ
let yearInput = document.createElement("input") //создаем текстовое поле
yearInput.placeholder = "Введите год рождения" //добавляем плейхолдер текстовому полю
yearInput.type = 'number'  //добавляем тип текстовому полю

//СОДАЕМ КНОПКУ
let addButton = document.createElement("button") //создаем кнопку
addButton.textContent = "Добавить пользователя"

//СОДАЕМ СПИСОК
let listUsers = document.createElement("ul") //создаем список


//СОДАЕМ ФУНКЦИЮ для подсчета возрста пользователя
function getAge(year){
    return 2024 - year
}


//СОДАЕМ ФУНКЦИЮ которая содает нового пользователя
//она принимает два аргумента: userName, userAge
//создает один элемент списка li
function createNewUserItem(index, userName, userYear) {
    let item = document.createElement("li") //создаем элем.списка
    item.textContent = `${index}) ${userName}, год рождения: ${userYear},
    возраст: ${getAge(userYear)} лет` //выводим то, что отдают в переменных
    return item //функция возвращаем элемент item
}

//ОБРАБОТЧИК СОБЫТИЯ!Даем команду вызывать функцию после клика на кнокпку
addButton.onclick = function() {
    counter++

    //забираем значение с текстового поля ввода nameInput
    let userName = nameInput.value
    //забираем значение с текстового поля ввода yearInput
    let userYear = Number(yearInput.value)

    //вызываем функцию createNewUserItem с данными которые будут вводиться в поля
    let newItem = createNewUserItem(counter, userName, userYear)

    //очищаем поле воода после добавления текста
    nameInput.value = " "
    yearInput.value = " "

    // добавляем в список listUsers
    listUsers.append(newItem)
}


divElements.append(nameInput, yearInput, addButton) //помещаем элемент в divElements, который в бади
document.body.append(divElements) //помещаем элемент в бади чтоб выводить на экран
document.body.append(listUsers) //выводим в боди список