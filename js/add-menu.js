
const cntLesson = 6

const emptyLesson = [4, 6, 7]

let menuItems = '<li class="aside__item"><a href="../../">Все уроки</a></li>'

for (let index = 2; index <= cntLesson; index++) {

	if (emptyLesson.includes(index)) continue

	menuItems += `
	<li class="aside__item">
		<a href="../../#lesson-${index}">Урок ${index}</a>
		<ul class="aside__list">
			<li class="aside__item">
				<a href="../../#lesson-${index}_basic">Основные задачи</a>
			</li>
			<li class="aside__item">
				<a href="../../#lesson-${index}_additional">Дополнительные задачи</a>
			</li>
		</ul>
	</li>
	`
}

document.write(`<ul class="aside__list">${menuItems}</ul>`)



