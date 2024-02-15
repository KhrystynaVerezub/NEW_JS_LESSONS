
let index = 0
let totalWeight = 0 // Сумма килокалорий всего блюда

document.write("<h1 class='main-title'><strong>Калькулятор калорийности блюд</strong></h1>")

// Функция вывода одного продутка с учетом калорийности и веса
function foodCalorieCalculator(product = "", calories = 0, product_Weight = 0){

    let total = calories*product_Weight // Расчет калорийности с учетом веса
    totalWeight = totalWeight + total // Прибавляем к общей калорийности блюда

    index++
    product = prompt(`Введите название продукта ${index}`)
    calories = Number(prompt(`Кол-во килокалорий в грамме продукта ${index}`))
    product_Weight = Number(prompt(`Вес продукта(гр) ${index}`))

    //выводим на экран содержимое функции
    document.write(`
        <li class='product-list product-item'> ${index}) ${product},
            калорийность: ${calories},
            вес: ${product_Weight},
            всего: ${total} ккал
        </li>
    `)
}

// Функция вывода суммарной калорийности блюда
function printTotalCalories(value) {
    document.write(`<div class="total">
                      Калорийность всего блюда: ${value} ккал
                    </div>`)
  }

// вызываем функцию foodCalorieCalculator
foodCalorieCalculator('product1', 34, 4)
foodCalorieCalculator('product2', 345, 4)
foodCalorieCalculator('product3', 345, 4)

document.write("<ul class='product-list'>")

// Вызываем функцию суммарной калорийности
printTotalCalories(totalWeight)

