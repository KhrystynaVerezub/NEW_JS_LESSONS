index = 1
document.write(`<h1 class="main-title">Корзина</h1>`)
document.write(`<ul class="product-list">`)


// Товар 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара

document.write(`<li class = "product">
<strong>${product1}</strong> ${index}
<p>${productDesc1}</p>
<strong>${productPrice1} руб</strong>
</li>`)


// Товар 2
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара

index = index+1
document.write(`<li class = "product">
<strong>${product2}</strong>  ${index}
<p>${productDesc2}</p>
<strong>${productPrice2} руб</strong>
</li>`)


// Товар 3
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара

index = index+1
document.write(`<li class = "product">
<strong>${product3}</strong>  ${index}
<p>${productDesc3}</p>
<strong>${productPrice3} руб</strong>
</li>`)

// Стоимость доставки
let deliveryPrice = 400 //

document.write(`<p class="product-item">
                <p>Стоимость доставки: ${deliveryPrice} руб<p/>
                <strong>Стоимость доставки: ${deliveryPrice} руб</strong></p>`)