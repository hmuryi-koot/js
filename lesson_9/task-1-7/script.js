/*
	Дан массив цен.
	Изменить этот массив так, что на цены товаров больше 1000 грн. дать 30% скидки.
*/

// ДАНО:
const array = [10000, 2000, 100, 400, 5000]

// 1) С созданием нового массива
// const newArr = arr.map(el => el > 1000 ? el * 0.7 : el)
// document.write(`Дан массив: ${arr}. Новый массив ${newArr}`)

// 2)
document.write(`Дан массив: ${array}. <br>`)
array.forEach((el, i, arrRef) => {
	if (el > 1000) arrRef[i] *= 0.7
})

document.write(`Массив со скидками: ${array}. <br>`)