let currentYear = 2024
let index = 0

//получаем данные от пользователей

//данные Первого игрока
document.write(`<h1>Список пользователей:</h1>`)
let userName1 = prompt("Введите Имя первого игорка")
let userYear1 = Number(prompt("Введите Год рождения первого игорка"))
let userAge1 = currentYear-userYear1
index++

document.write(`<p>${index}) <strong> ${userName1}</strong>,
год рождения: <strong> ${userYear1} </strong>,
возраст: <strong> ${userAge1} </strong> </p> `)


//данные Второго игрока
let userName2 = prompt("Введите Имя второго игорка")
let userYear2 = Number(prompt("Введите Год рождения второго игорка"))
let userAge2 = currentYear-userYear2
index++

document.write(`<p>${index}) <strong> ${userName2}</strong>,
год рождения: <strong> ${userYear2} </strong>,
возраст: <strong> ${userAge2} </strong> </p> `)


//данные Третьего игрока
let userName3 = prompt("Введите Имя третьего игорка")
let userYear3 = Number(prompt("Введите Год рождения третьего игорка"))
let userAge3 = currentYear-userYear3
index++

document.write(`<p>${index}) <strong> ${userName3}</strong>,
год рождения: <strong> ${userYear3} </strong>,
возраст: <strong> ${userAge3} </strong> </p> `)