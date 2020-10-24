//функция на проверку неЧисла
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//спрашиваем доход
let money; 
let start = function() {
    do {
        money = prompt("Ваше месячный доход:", 500);
    } while(!isNumber(money));
}
start();

//остальные данные
let appData = {
    budget: money,    //бюджет
    budgetDay: 0,     //бюджет на день
    budgetMonth: 0,   //бюджет на месяц ??

    expensesMonth: 0, //растраты на месяц

    income: {},       //варики дохода
    addIncome: [],    //добавить доход в табличку

    expenses: {},     //варики растрат
    addExpenses: [],  //добавить растраты в табличку

    deposit: false,   //есть ли депозит в банке
    
    mission: 1000,    //цель
    period: 3,        //период, за кот. будет достигнута цель

    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Еда, такси, маник');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.mission = +prompt('Введите цель накопления:', 1000); 

        for(let i = 0; i < 2; i++) {
            let exp_money;
            let exp;
            do {
                exp = prompt('Введите обязательную статью расходов?');
                exp_money = +prompt('Во сколько это обойдется?', 15)
                this.expenses[`${exp}`] = exp_money;
            } while (!isNumber(exp_money));
        }
    },

    //сумма расходов в месяц
    getExpensesMonth: function() {
        for(let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },

    //сколько можно накопить за месяц = бюджет - обязательные растраты
    getBudget: function() {
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = this.budgetMonth/30;
    },

    //период, за который будет достигнута цель
    getTargetMonth: function() {
    return this.mission / this.budgetMonth;
    },

    //уровень дохода
    getStatusIncome: function() {
        if(this.budgetDay >= 50) {
            console.log('У вас высокий уровень дохода');
        } else if(this.budgetDay < 50 && this.budgetDay >= 10) {
            console.log('У вас средний уровень дохода');
        } else if(this.budgetDay < 10) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else if(this.budgetDay < 0) {
            console.log('Что-то пошло не так');
        }
    } 
}


appData.asking();
appData.getExpensesMonth();
console.log(`Расходы за месяц: ${appData.expensesMonth}`); 
appData.getBudget(); 

//время, за которое добьешься цели
if(appData.getTargetMonth() > 0) {
    console.log(`Цель заработать ${appData.mission} долларов будет исполнена за период равный ${Math.ceil(appData.getTargetMonth())} месяцем`);
} else {
    console.log(`Цель заработать ${appData.mission} долларов не будет исполнена`);
}

appData.getStatusIncome();

console.log(typeof(appData.addExpenses));

console.log('Наша программа включает в себя данные:')
for (let key in appData) {
    if(typeof(appData[key]) == 'number' || typeof(appData[key]) == 'string') {
        console.log(key + ': ' + appData[key] );
    }
}
