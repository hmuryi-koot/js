/*
На экран выводится меню.
Пользователь вводит номер меню и на экране появляется соответствующее изображение смайла.
*/

// Ввод данных 
const listNumber = parseInt(prompt('Введите номер пункта и я покажу вам эмодзи \n1) Веселый \n2) Грустный \n3) Возмущенный'))

// 😀 😞 😒

let emoji

switch (listNumber) {
	case 1: emoji = "😀"; break;
	case 2: emoji = "😞"; break;
	case 3: emoji = "😒"; break;
	default: document.write("Некорректный ввод"); break;
}

document.write(`Ваш смайлик - ${emoji}`)