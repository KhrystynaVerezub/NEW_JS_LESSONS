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
  return result = `<strong>${text}</strong>`
}

// Функция, создающая <p> с текстом
function printParagraph(product, price, discount) {
  document.write(`<p>${product}
                      ${price}
                      ${discount}
                 </p>`)
}



// Товар 1
{
  let product = "Футболка" // Название
  let price = 800 // Стоимость
  let discount = 15

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`'', стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

// Товар 2
{
  let product = "Носки" // Название
  let price = 200 // Стоимость
  let discount = 10

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

// Товар 3
{
  let product = "Штаны" // Название
  let price = 1000 // Стоимость
  let discount = 5

  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой

  printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
}

