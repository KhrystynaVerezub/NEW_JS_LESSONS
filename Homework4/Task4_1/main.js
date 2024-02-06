// Добавьте возможность ввода данных пользователя с клавиатуры. Так что бы они были выведены в документе по заданному шаблону.

document.write("<h1>Адрес пользователя</h1>")

let userName = prompt("Введите Имя пользователя: ") // Имя пользователя
let userCity = prompt("Введите Город: ") // Город
let userStreet = prompt("Введите Улицу: ")  // Улица
let userHouse = Number(prompt("Введите Номер дома: ")) // Номер дома
let userApartment = Number(prompt("Введите Номер квартиры: ")) // Номер квартиры

document.write(`<p>Имя: <strong>${userName}</strong></p>
                <p>Город: <strong>${userCity}</strong>
                <p>Улица: <strong>${userStreet}</strong></p>
                <p>Дом: <strong>${userHouse}</strong></p>
                <p>Квартира: <strong>${userApartment}</strong></p>`)