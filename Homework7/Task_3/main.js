// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов. 
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.


//создаем элемент (общий div)
let divElements = document.createElement('div')
divElements.classList.add('container')

let title = document.createElement('h1')
title.textContent = 'Достижения в изучении Javascript'
title.classList.add('main-title')
title.type = 'text'

let listUsers = document.createElement('ul')
listUsers.classList.add('list')


let i = 0 // Счетчик

//СОДАЕМ ФУНКЦИЮ которая содает новый список
//она принимает два аргумента: i, title
//создает один элемент списка li
function card_read(i, userTitle) {

  let listItem = document.createElement('li') //создаем элем.списка
  listItem.classList.add('list__item')

  let listIndex = document.createElement('span')
  listIndex.classList.add('list__index')
  listIndex.textContent = i

  let listDesc = document.createElement('p')
  listDesc.classList.add("list__desc")
  listDesc.textContent = userTitle


  listItem.append(listIndex, listDesc)
  return listItem //функция возвращаем элемент item

}

  //вызываем функцию listItem с данными которые будут вводиться в поля
// Карточка 1
  i++
  let newItem1 = card_read(i, 'Знаю, что такое вывод и ввод информации')

// Карточка 1
i++
let newItem2 = card_read(i, 'Знаю о способах вывода информации')

// Карточка 3
  i++
  let newItem3 = card_read(i, 'Знаю, что такое числа, строки, и переменные')

// Карточка 4
i++
let newItem4 = card_read(i, 'Умею создавать функции и пользоваться ими')

// Карточка 5
i++
let newItem5 = card_read(i, 'Учусь создавать HTML - элементы с помощью встроенных функций')


listUsers.append(newItem1, newItem2, newItem3, newItem4, newItem5) // добавляем в список listUsers
divElements.append(title, listUsers)
document.body.append(divElements) //помещаем элемент в бади чтоб выводить на экран
