/*
Касса.
Пользователю сообщают сумму, которую ему нужно оплатить.
Пользователь постепенно вводит сумму денег до тех пор,
пока суммы не будет достаточно для оплаты товаров (каждый раз пользователю сообщают, какую еще сумму нужно ввести).
*/

// Ввод данных
const totalPrice = 30.20
let userMonye = parseFloat(prompt(`Вам нужно оплатить ${totalPrice}. Внесите сумму.`))

// Повторение цикла, пока пользователь не погасит свой долг
while (userMonye < totalPrice) {
	// Остаток оплаты
	let leftToPay = totalPrice - userMonye
	// Ввод дополнительной оплаты и суммирование со всеми остальными вводами средств
	userMonye += parseFloat(prompt(`Вам осталось оплатить ${leftToPay.toFixed(2)}. Внесите сумму.`))
}

// Сообщить о сдаче, если таковая имеется
if (userMonye > totalPrice) alert(`Ваша сдача ${userMonye - totalPrice}`)