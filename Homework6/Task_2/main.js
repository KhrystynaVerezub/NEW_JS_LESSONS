// Исправьте код так, что бы в документ был выведен верный результат, а именно возраст, рассчитанный по введенному в prompt() году рождения.

// Функция, которая возвращает возраст по году рождения
function getAge(year) {
  let currentYear = 2024 - year
  return currentYear
}

function numberPrompt(text) {
  return Number(prompt(text))
}

let age = getAge(numberPrompt("Введите год рождения"))

document.write("<h1>Расчет возраста</h1>")

document.write(`<p>
                  Возраст: <strong>${age}</strong>
                </p>`)

