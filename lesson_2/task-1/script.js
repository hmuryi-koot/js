// Классы для стилей
const CLASS_TITLE = 'lesson__title'
const CLASS_LIST = 'lesson__list'
const CLASS_LI = 'lesson__item'

// Задаем переменные
const a = parseFloat(prompt('Введите переменную a', 0))
const b = parseFloat(prompt('Введите переменную b', 0))
const c = parseFloat(prompt('Введите переменную c', 0))

// Результат первого задания
const firstTask = a + 12 + b

// Результат второго задания
const secondTask_1 = a + b
const secondTask_2 = 2 * a
const secondTask_3 = secondTask_1 / secondTask_2
const secondTask = Math.sqrt(secondTask_3)

// Результат третьего задания
const thirdTask_1 = (a + b) * c
const thirdTask = Math.pow(thirdTask_1, 1 / 3) // Math.cbrt()

// Результат четвертого задания
const fourthTask_1 = a / -b
const fourthTask = Math.sin(fourthTask_1)

// Вывод ответа
document.write(`
<h4 class="${CLASS_TITLE}">Переменные:</h4>
<ul class="${CLASS_LIST}">
	<li class="${CLASS_LI}">a = ${a}</li>
	<li class="${CLASS_LI}">b = ${b}</li>
	<li class="${CLASS_LI}">c = ${c}</li>
</ul>
<h4 class="${CLASS_TITLE}">Результат выполнения задания:</h4>
<ol  class="${CLASS_LIST}">
	<li class="${CLASS_LI}">S<sub>1</sub> = a + 12 + b = ${a} + 12 + ${b} = ${firstTask.toFixed(2)}</li>
	<li class="${CLASS_LI}">S<sub>2</sub> = 
		<math>
			<semantics>
				<mrow>
					<msqrt>
						<mfrac>
							<mn>(a + b)</mn>
							<mn> 2a </mn>
						</mfrac>
					</msqrt>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<msqrt>
						<mfrac>
							<mn>(${a} + ${b})</mn>
							<mn> 2 * ${a} </mn>
						</mfrac>
					</msqrt>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<msqrt>
						<mfrac>
							<mn>${secondTask_1}</mn>
							<mn>${secondTask_2} </mn>
						</mfrac>
					</msqrt>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<msqrt>
						${secondTask_3}
					</msqrt>
				</mrow>
			</semantics>
		</math> = ${secondTask.toFixed(2)}
	</li>
	<li class="${CLASS_LI}">S<sub>3</sub> = 
		<math>
			<semantics>
				<mrow>
					<mroot>
						<mfrac>
							<mi>(a + b) c</mi>
						</mfrac>
						<mn>3</mn>
					</mroot>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<mroot>
						<mfrac>
							<mi>(${a} + ${b}}) * ${c}</mi>
						</mfrac>
						<mn>3</mn>
					</mroot>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<mroot>
						<mfrac>
							<mi>${thirdTask_1}</mi>
						</mfrac>
						<mn>3</mn>
					</mroot>
				</mrow>
			</semantics>
		</math> = 
		<math>
			<semantics>
				<mrow>
					<msup>
						<mi>${thirdTask_1}</mi>
						<mn>1/3</mn>
					</msup>
				</mrow>
			</semantics>
		</math> = ${thirdTask.toFixed(2)}
	</li>
	<li class="${CLASS_LI}">S<sub>2</sub> = 
		<math>
		<mtext>sin</mtext>
		<mo stretchy="false">(</mo>
				<mfrac>
					<mrow>
						<mi>a</mi>
					</mrow>
					<mrow>
						<mn>-b</mn>
					</mrow>
				</mfrac>
			<mo stretchy="false">)</mo>
		</math> = sin(${fourthTask_1}) = ${fourthTask.toFixed(2)}
	</li>
	
</ol>
`)
