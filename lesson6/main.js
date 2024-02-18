
// программа которая расчитывает срднюю стоимость всех товаров в корзине покупки

//функция которая делает текст жирнее
function getStrong(text) {
    return `<strong>${text}</strong>`
}


//вывод одного товара
function printProduct(productName, count, price){
    let totalPrice = count * price

    document.write(`
    <p>
        ${getStrong(productName)},
        количество: ${getStrong(count)},
        цена: ${getStrong(price)} руб.,
        общая стоимость: ${getStrong(totalPrice)} руб.
    </p>`)

    return totalPrice
}

//общая сумма продуктов+ вызов функции
let index = 0 //номер продукта по порядку
let total = 0

index++
total = total + printProduct(prompt(`Введите товар ${index}: `), Number(prompt('Кол-во товара: ')), Number(prompt('Сумма товара: ')))

index++
total = total + printProduct(prompt(`Введите товар ${index}: `), Number(prompt('Кол-во товара: ')), Number(prompt('Сумма товара: ')))

index++
total = total + printProduct(prompt(`Введите товар ${index}: `), Number(prompt('Кол-во товара: ')), Number(prompt('Сумма товара: ')))


console.log(total/index)