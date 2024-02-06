// index = 0

// function hello(userName, age){
//     index++
//     console.log(index, userName, age);
// }

// hello(prompt('Укажите имя'), Number(prompt('Укажите возраст')))
// hello(prompt('Укажите имя'), Number(prompt('Укажите возраст')))
// hello(prompt('Укажите имя'), Number(prompt('Укажите возраст')))



index = 0
let currentYear = 2024

let middleAge = 0
let middleHeight = 0

document.write('<h1>Список студентов</h1>')

// создаем функцию
function printStudent(studentName = "", studentYear = 0, height = 0, faculty = 0){

    let age = currentYear - studentYear
    middleAge = middleAge + age

    middleHeight = middleHeight + height

    index++
    document.write(`
        <p> ${index}) <strong> ${studentName} </strong>,
        возраст: <strong> ${age}</strong>,
        рост: <strong> ${height}</strong>,
        факультет: <strong> ${faculty}</strong>
        </p>
    `)
}

// вызываем функцию
printStudent('Кристина', 1989, 165, 'Исторический')
printStudent('Таня', 1991, 175, 'Математический')
printStudent('Вася', 1987, 192, 'Географический')

document.write('<hr>')
document.write(`<p>Средний возраст: <strong> ${middleAge / index} </strong>
Средний рост: <strong> ${middleHeight / index} </strong></p>`)