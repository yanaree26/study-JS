let money = prompt("Ваше месячный доход:", 500); 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, такси'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 

let expenses1 = confirm('Введите обязательную статью расходов?', 'Интернет');
let amount1 = prompt('Во сколько это обойдется?', 15);
let expenses2 = confirm('Введите обязательную статью расходов?', "Телефон");
let amount2 = prompt('Во сколько это обойдется?', 10);

let mission = 800; 
let period = Math.round(mission / money);


function getExpensesMonth() {
    return expenses1 + expenses2;
}

function getAccumulatedMonth() {
    return money - getAccumulatedMonth();
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return Math.round(mission / accumulatedMonth);
}

console.log(typeof money);
console.log(typeof deposit);

console.log(`Расходы за месяц: ${getExpensesMonth()}`);

console.log(addExpenses.toLowerCase().split(', '));

console.log(`Цель заработать ${mission} долларов будет исполнена за период равный ${getTargetMonth(mission, accumulatedMonth)} месяцем`);

let budgetDay = (money - getExpensesMonth(amount1))/30;

console.log(budgetDay);

function getStatusIncome(budgetDay) {
    if(budgetDay >= 50) {
        return 'У вас высокий уровень дохода';
    } else if(budgetDay < 50 && budgetDay >= 10) {
        return 'У вас средний уровень дохода';
    } else if(budgetDay < 10) {
        return 'К сожалению у вас уровень дохода ниже среднего';
    } else if(budgetDay < 0) {
         return 'Что то пошло не так';
    }
}

console.log(getStatusIncome(budgetDay)); 