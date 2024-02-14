
let index = 0
let totalWeight = 0

document.write("<h1><strong>Калькулятор калорийности блюд</strong></h1>")
document.write("<ul>")

function foodCalorieCalculator(product = "", calories = 0, product_Weight = 0){

    total = calories * product_Weight

    index++
    totalWeight++

    product = prompt(`Введите название продукта ${index}`)
    calories = Number(prompt(`Кол-во киокалорий в грамме продукта ${index}`))
    product_Weight = Number(prompt(`Вес продукта(гр) ${index}`))

    document.write(`
        <p> ${index}) ${product}
        калорийность: ${calories},
        вес: ${product_Weight},
        всего: ${total}
        </p>
    `)
}

// вызываем функцию
foodCalorieCalculator('гречка', 20, 200)
foodCalorieCalculator('гречка', 20, 200)
foodCalorieCalculator('гречка', 20, 200)

document.write(`<p>${index}) ${product}, калорийность: ${calories} ккал, вес: ${product_Weight}, всего: ${total} ккал</p>`)
document.write(`<p><h4><strong class='total'>Калорийность всего блюда: ${totalWeight} ккал</strong></h4></p>`)



// index
// prompt('Введите название продукта 1')
// prompt('Кол-во киокалорий в грамме продукта 1')
// prompt('Вес продукта (гр) 1')

// index ++
// prompt('Введите название продукта 2')
// prompt('Кол-во киокалорий в грамме продукта 2')
// prompt('Вес продукта (гр) 2')

// index ++
// prompt('Введите название продукта 3')
// prompt('Кол-во киокалорий в грамме продукта 3')
// prompt('Вес продукта (гр) 3')