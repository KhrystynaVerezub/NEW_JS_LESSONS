// Сделайте код программы компактнее, используя известные вам приемы.

document.write("<h1>Ваш заказ</h1>")

// Функция расчета стоимости со скидкой в процентах. Возвращает стоимость товара с примененной скидкой.
// price - цена
// percent - скидка в процентах
function getPercentDiscount(price, percent = 0) {
  return result = price - (price / 100 * percent)
}

// Функция, возвращающая <strong> с текстом
function getStrong(text) {
  return `<strong>${text}</strong>`
}

// Функция, создающая <p> с текстом
function printParagraph(text) {
  document.write(`<p>${text}</p>`)
}

//функция создающая один товар
function oneProduct(product, price, discount){
  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(getPercentDiscount(price, discount))} руб`)
}

oneProduct('Футболка', 800, 15)
oneProduct('Носки', 200, 10)
oneProduct('Штаны', 1000, 5)



