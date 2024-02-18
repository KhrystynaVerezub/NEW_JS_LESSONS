// Исправьте функцию getFIO так, что бы она возвращала "Фамилию Имя Отчество" пользователя и в документ выводился верный результат.

function getFIO(surname, name, lastname) {
  const result = `${surname} ${name} ${lastname}`

  return result
}

const fio = getFIO("Таврова", "Наталья", "Петровна")
document.write(`Здравствуйте, ${fio}`)