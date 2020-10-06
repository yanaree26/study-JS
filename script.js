let money = prompt("Ваше месячный доход:", 500); 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, телефон, такси'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let expenses1 = confirm('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?', 200);

let mission = 800; 
let period = Math.round(mission / money);


function getExpensesMonth(expenses) {
    return expenses;
}

function getAccumulatedMonth(accumulated) {
    return accumulated;
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(mission, accumulatedMonth) {
    return Math.round(mission/accumulatedMonth);
}

console.log(typeof money);
console.log(typeof deposit);

console.log(`Расходы за месяц: ${getExpensesMonth(amount1)}`);

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