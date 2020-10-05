let money = prompt("Ваше месячный доход:", 500); 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, телефон, такси'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let expenses1 = confirm('Введите обязательную статью расходов?');
let expenses2 = confirm('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?', 200);
let amount2 = prompt('Во сколько это обойдется?', 200);

let budgetMonth = money - amount1;

let mission = 800; 
let period = Math.round(mission / money);

console.log(typeof money);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = (budgetMonth) / 30;
console.log(budgetDay);

if(budgetDay >= 50) {
    console.log('У вас высокий уровень дохода');
} else if(budgetDay < 50 && budgetDay >= 10) {
    console.log('У вас средний уровень дохода');
} else if(budgetDay < 10) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if(budgetDay < 0) {
    console.log('Что то пошло не так');
}