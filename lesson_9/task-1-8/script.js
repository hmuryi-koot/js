/*
	Дан массив номеров авто.
	Сформировать !!!новый массив!!! начинающихся на «А»
*/

// ДАНО:
const array = ['A100', 'B1000', 'C100', 'A2000', 'B2000']

const newArray = array.filter(el => el[0] === 'A')

document.write(`Дан массив: ${array}. Новый массив: ${newArray}`)