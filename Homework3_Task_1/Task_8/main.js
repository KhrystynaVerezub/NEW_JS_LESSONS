index = 1
document.write(`<h1 class="main-title">Корзина</h1>`)
document.write(`<ul class="product-list">`)


// Товар 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара

document.write(`<li class = "container product-list product">
<strong class="product__title">${product1}</strong> <p class="product__number"> ${index} </p>
<p class="product__desc">${productDesc1}</p>
<strong class="product__price">${productPrice1} руб</strong>
</li>`)


// Товар 2
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара

index = index+1
document.write(`<li class = "container product-list product">
<strong class="product__title">${product2}</strong> <p class="product__number"> ${index} </p>
<p class="product__desc">${productDesc2}</p>
<strong class="product__price">${productPrice2} руб</strong>
</li>`)


// Товар 3
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара

index = index+1
document.write(`<li class = "container product-list product">
<strong class="product__title">${product3}</strong> <p class="product__number"> ${index} </p>
<p class="product__desc">${productDesc3}</p>
<strong class="product__price">${productPrice3} руб</strong>
</li>`)

// Стоимость доставки
let deliveryPrice = 400 //

document.write(`<li class="container product-list price-block">
                <p class="price-block__delivery-price">Стоимость доставки: ${deliveryPrice} руб<p/>
                <strong class="price-block__total-price">Стоимость доставки: ${deliveryPrice} руб</strong></p>`)