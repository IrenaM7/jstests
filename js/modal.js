/**Станція з продажу ремонтних дроїдів готова до запуску, 
  * залишилося написати програмне забезпечення для відділу 
  * продажів.

Оголоси функцію makeTransaction, яка очікує два параметри, 
значення яких будуть задаватися під час її виклику:

quantity— перший параметр, число, що містить кількість 
замовлених дроїдів
pricePerDroid — другий параметр, число, що містить вартість
 одного дроїда
Доповни код функції так, щоб вона повертала рядок 
з повідомленням про покупку ремонтних 
дроїдів: "You ordered <quantity> droids worth <totalPrice> 
credits!", де:

<quantity> — це кількість замовлених дроїдів
<totalPrice> — це загальна вартість замовлення, 
тобто вартість усіх замовлених дроїдів
Візьми код нижче і встав після оголошення своєї функції 
для перевірки коректності її роботи. У консоль будуть 
виведені результати її роботи.

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

Залиш це */
/**задача 1 */

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const result = `You ordered ${quantity} droids worth ${totalPrice} 
  credits!`;
  return result;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/**Задача 2. */

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const result = `Shipping to ${country} will cost ${totalPrice} credits`;
  return result;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

/** задача 3 */

function getElementWidth(content, padding, border) {
  const elementWidth =
    Number.parseInt(content) +
    Number.parseInt(padding) * 2 +
    Number.parseFloat(border) * 2;
  return elementWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
