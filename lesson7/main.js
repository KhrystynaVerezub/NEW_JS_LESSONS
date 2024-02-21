// document.write("<h1>Привет, я заголовок</h1>")
// document.write("<p>Привет, я параграф</p>")
// document.write("<ul><li>я элемент1 списка</li><li>я элемент2 списка</li><li>я элемент3 списка</li></ul>")
// document.write("<button>Я кнопка. Жмякни на меня</button>")

let title = document.createElement("h1")
title.textContent = "Привет, я заголовок"

let description = document.createElement("p")
description.textContent = "Привет, я параграф"

let list = document.createElement("ul")
let listItem1 = document.createElement("li")
listItem1.textContent = "я элемент1 списка"
let listItem2 = document.createElement("li")
listItem2.textContent = "я элемент2 списка"
let listItem3 = document.createElement("li")
listItem3.textContent = "я элемент3 списка"

list.append(listItem1, listItem2, listItem3)


document.body.append(title, description, list)