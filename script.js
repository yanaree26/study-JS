//функция на проверку неЧисла
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money; 
let start = function() {
    do {
        money = prompt("Ваше месячный доход:", 500);
    } while(!isNumber(money));
}

start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, такси, маник'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let mission = +prompt('Введите цель накопления:'); 


//массив с расходами
let expenses = [];

function getExpensesMonth() {

    let sum = 0;

    let amount;

    for(let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');

        do {
            amount = prompt('Во сколько это обойдется?', 15);
        } while (!isNumber(amount));

        sum += +amount;
    }

    return sum;
}

let expensesAmount = getExpensesMonth(); //общие растраты

function getAccumulatedMonth() {
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth(); // накопления в месяц

console.log(typeof money);
console.log(typeof deposit);
console.log(`Расходы за месяц на ${addExpenses.toLowerCase().split(', ')}: ${expensesAmount}`);

//период, за который будет достигнута цель
function getTargetMonth() {
    return mission / accumulatedMonth;
}

if(getTargetMonth() > 0) {
    console.log(`Цель заработать ${mission} долларов будет исполнена за период равный ${Math.ceil(getTargetMonth())} месяцем`);
} else {
    console.log(`Цель заработать ${mission} долларов не будет исполнена`);
}

//бюджет на день
let budgetDay = accumulatedMonth/30;

console.log("Ваши карманные расходы на день: ", budgetDay);

function getStatusIncome(budgetDay) {
    if(budgetDay >= 50) {
        console.log('У вас высокий уровень дохода');
    } else if(budgetDay < 50 && budgetDay >= 10) {
        console.log('У вас средний уровень дохода');
    } else if(budgetDay < 10) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if(budgetDay < 0) {
        console.log('Что то пошло не так');
    }
} 