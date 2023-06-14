// С использованием замыканий разработать итератор, 
// то есть функцию, которая будет постепенно по отдельным вызовам выдавать по одну букву заранее заданного слова.
// С использованием него разработать игру «Преводитель». 
// Выводим пользовательское описание этого слова и по одну букву 
// пользователь вводит перевод этого слова.Подсчитать количество упомянутых букв.

function game(word) {
   let cnt = 0

   return function () {
      for (let i = 0; i < word.length; i++) {
         const letter = prompt(`Перевод слова "Собака".\nВведите ${i + 1} букву`).toLowerCase()
         if (word[i] === letter) cnt++
      }
      return cnt
   }
}

const word = 'dog'

const gameTranslater = game(word)

const res = gameTranslater()

console.log(`Слово ${word}.\nВы угадали ${res} букв из ${word.length}.`);