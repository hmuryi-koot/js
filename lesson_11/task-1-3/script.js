// Морской бой. 
// По случайности на двумерном поле размером 6*6 располагается 5 кораблей. 
// Пользователь стреляет, указывая координаты. 
// Игра продолжается, пока не потоплены все корабли или у пользователя не закончатся снаряды.


// 1) По случайности на двумерном поле размером 6*6 располагается 5 кораблей
function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
function createField(sizeX = 6, sizeY = 6) {
   let field = []
   for (let x = 0; x < sizeX; x++) {
      field.push(new Array(sizeY).fill(0))
   }
   return field
}
function setShips(field, ships = 5) {
   while (ships > 0) {

      const x = getRandom(0, field.length - 1)
      const y = getRandom(0, field.length - 1)

      if (field[x][y] === 0) {
         field[x][y] = 1
         ships--
      }
   }
}
const field = createField()

let ships = 5
setShips(field, ships)

for (let index = 0; index < field.length; index++) {
   const element = field[index];
   console.log(element);
}

// 2) Пользователь стреляет, указывая координаты. 
let shots = parseInt(prompt('Введите количество выстрелов', 10))


// 3) Игра продолжается, пока не потоплены все корабли или у пользователя не закончатся снаряды.
do {
   const shotX = parseInt(prompt(`Выстрел по оси Х (ряд). От 0 до ${field.length - 1}`))
   const shotY = parseInt(prompt(`Выстрел по оси Y (колонка). От 0 до ${field.length - 1}`))

   if (isNaN(shotX) || isNaN(shotY) || shotX > field.length - 1 || shotY > field.length - 1) {
      alert('Введено неверное значение. Попробуйте еще раз')
      continue
   }

   shots--

   if (ships === 0) {
      alert('Победа!')
      break
   }
   if (shots === 0) {
      alert(`Поражение! \nОсталось кораблей: ${ships}`)
      break
   }

   if (field[shotX][shotY] === 1) {
      ships--
      alert(`Убил! \nОсталось кораблей: ${ships} \nОсталось выстрелов: ${shots}`)
   } else alert(`Промазал! \nОсталось кораблей: ${ships} \nОсталось выстрелов: ${shots}`)

} while (ships > 0 && shots > 0)
