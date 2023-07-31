
const cntLesson = 18

const emptyLesson = [4, 6]

let menuItems = '<li class="aside__item"><a href="../../">Все уроки</a></li>'

for (let index = 2; index <= cntLesson; index++) {
   if (emptyLesson.includes(index)) continue

   menuItems += `
	<li class="aside__item">
		<a href="../../#lesson-${index}">Урок ${index}</a>
	</li>
	`
}

document.write(`<ul class="aside__list">${menuItems}</ul>`)



