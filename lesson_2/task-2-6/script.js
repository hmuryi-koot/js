// Ввод данных
let a = a1 = parseFloat(prompt('Введите перпеменную a', 1))
let b = b1 = parseFloat(prompt('Введите перпеменную b', 2))
let c = c1 = parseFloat(prompt('Введите перпеменную c', 3))

// Подсчет данных
let temporaryVariable = a
a = b
b = c
c = temporaryVariable

// Вывод данных
document.write(`
<h3>Введенные данные:</h3>
<ul>
	<li><b>a</b> = ${a1}</li>
	<li><b>b</b> = ${b1}</li>
	<li><b>c</b> = ${c1}</li>
</ul>
<h3>После преобразования:</h3>
<ul>
	<li><b>a</b> = ${a}</li>
	<li><b>b</b> = ${b}</li>
	<li><b>c</b> = ${c}</li>
</ul>
`)