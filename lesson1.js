let money = 500;
let income = 75; 
let addExpenses = 'Интернет, телефон, такси, развлечения'; 
let deposit = false; 
let mission = 800; 
let period = 3;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = (money + income) / 30;
console.log(budgetDay);