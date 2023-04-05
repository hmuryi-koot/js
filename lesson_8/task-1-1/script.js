/*
	Дан массив, содержащий оценки из К предметов. 
	Найти средний балл и выяснить к какой категории он относится 
	(
		отличник, 											9-10
		двойник (имеет хотя бы одну двойку), 		2
		хорошист (оценки хорошо и отлично), 		7-10
		троечник (есть хотя бы одна тройка)			3
	).
*/

// Ввод данных 
const numberSubjects = parseInt(prompt('Введите количество предметов'))
const grades = Array(numberSubjects) // const grades = []
// Заполнение массива оценками
for (let i = 0; i < numberSubjects; i++) {
	const grade = parseInt(prompt(`Введите оценку по ${i + 1}-му предмету (1-10)`))
	grades[i] = grade // grades.push(grade)
}

// Вариант нахождения суммы для среднего балла №3
const gpa = getGPA(grades)
// Получение минимальной оценки
const minGrade = getMinValue(grades)

// Вывод данных
document.write(`Ученик - <mark>${getStudentStatus(minGrade, gpa)}</mark>. Его средний балл - <mark>${gpa.toFixed(2)}</mark>`)

// =============================================================
// Получение статуса ученика 
function getStudentStatus(grade, gpa) {
	let studentStatus = 'Отличник'
	if (grade < 3) studentStatus = 'двоечник'
	else if (grade < 4) studentStatus = 'троечник'
	else if (gpa > 8) studentStatus = 'отличник'
	else if (gpa > 6) studentStatus = 'хорошист'
	return studentStatus
}
// Получение минимального значения
function getMinValue(arr) {
	let min = +Infinity
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		min = min < element ? min : element
	}
	return min
}
// Вариант нахождения суммы для среднего балла №3
// Получение среднего балла 
function getGPA(grades) {
	let gpa = 0
	for (let i = 0; i < grades.length; i++) {
		const grade = grades[i]
		gpa += grade
	}
	return gpa / grades.length
}