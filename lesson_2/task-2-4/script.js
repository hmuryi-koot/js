// С клавиатуры вводится возраст ребенка. 
// Вывести на экран через сколько лет она будет посещать садик, пойдет в школу, окончит школу, поступит и окончит.

// Ввод данных
const ageChild = parseInt(prompt('Введите возраст ребенка', 1))

// Постоянные начала/конца этапов становления программистом
const GARTEN_START_AGE = 4
const SCHOOL_START = 6
const SCHOOL_END = 17
const UNIVERSITY_START = SCHOOL_END
const UNIVERSITY_END = 22
// Подсчет данных
const beforeGartenStart = Math.max(0, GARTEN_START_AGE - ageChild)
const beforeSchoolStart = Math.max(0, SCHOOL_START - ageChild)
const beforeSchoolEnd = Math.max(0, SCHOOL_END - ageChild)
const beforeUniversityStart = Math.max(0, UNIVERSITY_START - ageChild)
const beforeUniversityEnd = Math.max(0, UNIVERSITY_END - ageChild)

// Вывод данных
document.write(`
<div>До д/с осталось ${beforeGartenStart} лет/год/года</div>
<div>До начала школы осталось ${beforeSchoolStart} лет/год/года</div>
<div>До окончания школы осталось ${beforeSchoolEnd} лет/год/года</div>
<div>До послупления в шарагу осталось ${beforeUniversityStart} лет/год/года</div>
<div>До самостоятельной взрослой жизни осталось ${beforeUniversityEnd} лет/год/года</div>
`)