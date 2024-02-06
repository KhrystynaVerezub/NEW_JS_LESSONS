index = 1 // Порядковый номер

//заголовок таблицы
document.write(`<h1 class='main-title'>Доход водителей</h1>`)

// Создание таблицы
document.write("<table>")

// Шапка таблицы
document.write(`<thead>
                  <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Поездок в месяц</th>
                    <th>Доход в месяц</th>
                    <th>Средняя стоимость поездки</th>
                  </tr>
                </thead>`)

// Тело таблицы
document.write("<tbody>")


//DRIVER_1
driverName1 = prompt(`Введите Имя водителя ${index}`)
driverLastName1 = prompt(`Введите Фамилию водителя ${index}`)
totalTrip1 = Number(prompt(`Сколько ${driverName1} ${driverLastName1} обработал заказов за месяц?`))
profitIMonth1 = Number(prompt(`Какой доход ${driverName1 + driverLastName1} получил за месяц?`))

document.write(`<tr>
                  <td>${index}</td>
                  <td>${driverName1}</td>
                  <td>${driverLastName1}</td>
                  <td>${totalTrip1}</td>
                  <td>${profitIMonth1}</td>
                  <td>${profitIMonth1/totalTrip1}</td>
                </tr>`)


//DRIVER_2
driverName2 = prompt(`Введите Имя водителя ${index}`)
driverLastName2 = prompt(`Введите Фамилию водителя ${index}`)
totalTrip2 = Number(prompt(`Сколько ${driverName2} ${driverLastName2} обработал заказов за месяц?`))
profitIMonth2 = Number(prompt(`Какой доход ${driverName2 + driverLastName2} получил за месяц?`))

index++
document.write(`<tr>
                  <td>${index}</td>
                  <td>${driverName2}</td>
                  <td>${driverLastName2}</td>
                  <td>${totalTrip2}</td>
                  <td>${profitIMonth2}</td>
                  <td>${profitIMonth2/totalTrip2}</td>
                </tr>`)


//DRIVER_3
driverName3 = prompt(`Введите Имя водителя ${index}`)
driverLastName3 = prompt(`Введите Фамилию водителя ${index}`)
totalTrip3 = Number(prompt(`Сколько ${driverName3} ${driverLastName3} обработал заказов за месяц?`))
profitIMonth3 = Number(prompt(`Какой доход ${driverName3 + driverLastName3} получил за месяц?`))


index++
document.write(`<tr>
                  <td>${index}</td>
                  <td>${driverName3}</td>
                  <td>${driverLastName3}</td>
                  <td>${totalTrip3}</td>
                  <td>${profitIMonth3}</td>
                  <td>${profitIMonth3/totalTrip3}</td>
                </tr>`)


//ОБЩИЕ показатели
// Футер таблицы
document.write(`<tfoot>
                  <tr>
                    <th colspan="3">Средние показатели всех водителей</th>
                    <th>${(totalTrip1+totalTrip2+totalTrip1) / index}</th>
                    <th>${(profitIMonth1+profitIMonth2+profitIMonth3) / index}</th>
                    <th>${((profitIMonth1/totalTrip1)+(profitIMonth2/totalTrip2)+(profitIMonth3/totalTrip3)) / index}</th>
                  </tr>
                </tfoot>`)

document.write("</tbody>")
document.write("</table>")