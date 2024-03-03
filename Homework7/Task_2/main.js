// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем


//создаем основной контаеинет
let container = document.createElement('div')


//создаем заголовок
let title = document.createElement('h1')
title.type = 'text'
title.textContent = 'Что я узнал в видео'

//создаем список
let list = document.createElement('ul')
let counter = 0

//создаем 1 элемент списка
counter++
let listItem1 = document.createElement('li')
listItem1.textContent = `${counter}) Как создавать HTML-элементы`

//создаем 2 элемент списка
counter++
let listItem2 = document.createElement('li')
listItem2.textContent = `${counter}) Узнал, как добавлять текст и HTML-код в элемент`

//создаем 3 элемент списка
counter++
let listItem3 = document.createElement('li')
listItem3.textContent = `${counter}) Как добавлять и удалять классы`

//создаем 4 элемент списка
counter++
let listItem4 = document.createElement('li')
listItem4.textContent = `${counter}) Узнал, как вложить один элемент в другой`

//создаем 5 элемент списка
counter++
let listItem5 = document.createElement('li')
listItem5.textContent = `${counter}) Узнал, что такое событие и обработчик события`

//создаем 6 элемент списка
counter++
let listItem6 = document.createElement('li')
listItem6.textContent = `${counter}) Как назначить обработчик события`


list.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6)

// Добавление элементов
container.append(title, list)
document.body.append(container)