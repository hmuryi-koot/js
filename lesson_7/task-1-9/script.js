/*
	Создать функцию, которая выводит баннер 
	(
		в функцию передаются: изображение, заголовок и ссылка, 
		куда переходим при клике на изображение 
		(тег img должен находиться внутри тега a)
	)
*/

// Функция создания баннера (изображение, заголовок, ссылка)
function creatingBanner(img, title, link) {
	let banner = `
	<article>
		<a href="${link}" style="height:300px; background-color:indigo; display:block; position:relative; margin-bottom:20px;">
			<img ="${img}" alt="${title}" style="position:absolute; insert:0; object-fit:cover;">
		</a>
		<h3 style="font-size:30px;"><a href="${link}">${title}</a></h3>
	</article>	
	`

	return banner
}

document.write(creatingBanner('Картинка', 'Заголовок баннера', '#Это_типа_ссылка'))