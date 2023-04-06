/*
	Дан массив элементов.
	Все элементы, которые больше первого элемента умножить на 2
*/

// ДАНО:
const arr = [3, 2, 1, 4, 5]


// 1) С созданием нового массива
// const newArr = arr.map((el, i, arrRef) => el > arrRef[0] ? el * 2 : el)
// document.write(`Дан массив: ${arr}. Новый массив ${newArr}`)

// 2) 
document.write(`Дан массив: ${arr}. <br>`)

arr.forEach((el, i, arrRef) => {
	console.log(el > arrRef[0]);
	if (el > arrRef[0]) arrRef[i] *= 2
})

document.write(`Результат: ${arr}.`)