// Ввод данных
const widthWindow = parseFloat(prompt('Введите ширину экрана в px', 1240))
const elementsQty = parseInt(prompt('Введите количество элементов, для отображения в 1 строку', 3))
const gap = parseInt(prompt('Введите отступ между элементами в px', 15))

// Подсчет ширины элемента в пикселях (без учета отступа)
const elementWidthInPixels = widthWindow / elementsQty
const elementWidthInPercents = elementWidthInPixels / widthWindow * 100
// Подсчет ширины элемента в пикселях
const qntGapInRow = elementsQty - 1
const widthWindowWithGap = widthWindow - qntGapInRow * gap
const elementWidthInPixelsWithGap = widthWindowWithGap / elementsQty
const elementWidthInPercentsWithGap = elementWidthInPixelsWithGap / widthWindow * 100

document.write(`
<h3>Введенные данные</h3>
<ul>
	<li><b>Ширина экрана</b> - ${widthWindow}px</li>
	<li><b>Количество элементов</b> - ${elementsQty} шт.</li>
	<li><b>Ширина элементов в px (без учета отступа)</b> - ${elementWidthInPixels.toFixed(3)}px</li>
	<li><b>Ширина элементов в % (без учета отступа)</b> - ${elementWidthInPercents.toFixed(3)}%</li>
	<li><b>Ширина элементов в px (с учетом отступа)</b> - ${elementWidthInPixelsWithGap.toFixed(3)}px</li>
	<li><b>Ширина элементов в % (с учетом отступа)</b> - ${elementWidthInPercentsWithGap.toFixed(3)}%</li>
</ul>
`)