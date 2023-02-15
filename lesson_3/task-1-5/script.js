/*
С клавиатуры вводится название категории водителя (А-мотоцикл, В-легковой автомобиль, С-грузовой автомобиль).
Вывести на экран название транспортного средства, которым оно может управлять.
*/

// Ввод категории вод. правы
const drivingLicenseCategory = prompt('Введите категорию водителя.\n(А-мотоцикл, В-легковой автомобиль, С-грузовой автомобиль)').toUpperCase()

// Тип ТС
// let availableVehicle
// switch (drivingLicenseCategory) {
// 	case 'A':
// 		availableVehicle = 'мотоцикл'
// 		break
// 	case 'B':
// 		availableVehicle = 'легковой автомобиль'
// 		break
// 	case 'C':
// 		availableVehicle = 'грузовой автомобиль'
// 		break
// }

const availableVehicle = drivingLicenseCategory === 'A' ? 'мотоцикл' :
	drivingLicenseCategory === 'B' ? 'легковой автомобиль' :
		drivingLicenseCategory === 'C' ? 'грузовой автомобиль' :
			false

if (availableVehicle)
	document.write(`Категори ${drivingLicenseCategory} - ${availableVehicle}`)
else
	document.write('Вы ввели неверное значение')