let button = document.getElementById("start");
let plus_income = document.getElementsByTagName("button")[0];
let plus_expenses = document.getElementsByTagName("button")[1];
let deposit_check = document.querySelector("#deposit-check");
let additional_income_item = document.querySelectorAll('.additional_income-item');
let budget_day_value = document.querySelector('.budget_month-value');
let budget_month_value = document.querySelector('.budget_day-value');
let expenses_month_value = document.querySelector('.expenses_month-value');
let additional_income_value = document.querySelector('.additional_income-value');
let additional_expenses_value = document.querySelector('.additional_expenses-value');
let income_period_value = document.querySelector('.income_period-value');
let target_month_value = document.querySelector('.target_month-value');
let salary_amount = document.querySelector('.salary-amount');
let income_title = document.querySelector('.income-title');
let expenses_title = document.querySelector('.expenses-title');
let expenses_items = document.querySelectorAll('.expenses-items');
let additional_expenses_item = document.querySelector('.additional_expenses-item');
let target = document.querySelector('.target-amount');
let period_select = document.querySelector('.period-select');
let period_amount = document.querySelector('.period-amount');
let income_items = document.querySelectorAll('.income-items');


//функция на проверку неЧисла
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//остальные данные
let appData = {
    budget: 0, //бюджет
    budgetDay: 0, //бюджет на день
    budgetMonth: 0, //бюджет на месяц ??
    expensesMonth: 0, //растраты на месяц
    income: {}, //варики дохода
    incomeMonth: 0,
    addIncome: [], //добавить доход в табличку
    expenses: {}, //варики растрат
    addExpenses: [], //добавить растраты в табличку
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3, //период, за кот. будет достигнута цель

    start: function () {

        appData.budget = +salary_amount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getBudget();
        appData.showResults();
    },

    showResults: function () {
        budget_day_value.value = appData.budgetMonth;
        budget_month_value.value = appData.budgetDay;
        expenses_month_value.value = appData.expensesMonth;
        additional_expenses_value.value = appData.addExpenses.join(', ');
        additional_income_value.value = appData.addIncome.join(', ');
        target_month_value.value = Math.ceil(appData.getTargetMonth());
        income_period_value.value = appData.calcPeriod();

        period_select.addEventListener('input', function () {
            income_period_value.value = appData.calcPeriod();
        });
    },

    addExpensesBlock: function () {
        let clone_expenses_item = expenses_items[0].cloneNode(true);
        clone_expenses_item.querySelectorAll('input')[0].value = '';
        clone_expenses_item.querySelectorAll('input')[1].value = '';
        expenses_items[0].parentNode.insertBefore(clone_expenses_item, plus_expenses);
        expenses_items = document.querySelectorAll('.expenses-items');

        if (expenses_items.length === 3) {
            plus_expenses.style.display = 'none';
        }
    },

    addIncomeBlock: function () {
        let clone_income_item = income_items[0].cloneNode(true);
        clone_income_item.querySelectorAll('input')[0].value = '';
        clone_income_item.querySelectorAll('input')[1].value = '';
        income_items[0].parentNode.insertBefore(clone_income_item, plus_income);
        income_items = document.querySelectorAll('.income-items');

        if (income_items.length === 3) {
            plus_income.style.display = 'none';
        }
    },

    getExpenses: function () {
        expenses_items.forEach(function (item) {
            let item_expenses = item.querySelector('.expenses-title').value;
            let cash_expenses = item.querySelector('.expenses-amount').value;
            if (item_expenses !== "" && cash_expenses !== "") {
                appData.expenses[item_expenses] = +cash_expenses;
            }
        })
    },

    getIncome: function () {
        income_items.forEach(function (item) {
            let item_income = item.querySelector('.income-title').value;
            let cash_income = item.querySelector('.income-amount').value;
            if (item_income !== "" && cash_income !== "") {
                appData.income[item_income] = +cash_income;
            }
        })
    },

    getAddExpenses: function () {
        let addExpenses = additional_expenses_item.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== "") {
                appData.addExpenses.push(item);
            }
        })
    },

    getAddIncome: function () {
        additional_income_item.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })

    },

    //сумма расходов в месяц
    getExpensesMonth: function () {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },

    getIncomeMonth: function () {
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },

    //сколько можно накопить за месяц = бюджет - обязательные растраты
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },

    //период, за который будет достигнута цель
    getTargetMonth: function () {
        return target.value / appData.budgetMonth;
    },

    //уровень дохода
    getStatusIncome: function () {
        if (this.budgetDay >= 50) {
            console.log('У вас высокий уровень дохода');
        } else if (this.budgetDay < 50 && this.budgetDay >= 10) {
            console.log('У вас средний уровень дохода');
        } else if (this.budgetDay < 10) {
            console.log('К сожалению у вас уровень дохода ниже среднего');
        } else if (this.budgetDay < 0) {
            console.log('Что-то пошло не так');
        }
    },

    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = +prompt('Какой годовой процент?', 0);
            } while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 0);
            } while (!isNumber(appData.moneyDeposit));
        }
    },

    calcPeriod: function () {
        return appData.budgetMonth * Number(period_select.value);
    },

    changeRange: function () {
        period_amount.innerHTML = period_select.value;
    }
}

button.disabled = true;
document.querySelectorAll('input[placeholder="Наименование"]').forEach(function (item) {
    item.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^А-Яа-яЁё\s-.?!)(,:]/g, '');
    });
});


document.querySelectorAll('input[placeholder="Сумма"]').forEach(function (item) {
    item.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });
});

salary_amount.addEventListener('keyup', function () {
    if (!salary_amount.value) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})


plus_expenses.addEventListener('click', appData.addExpensesBlock);
plus_income.addEventListener('click', appData.addIncomeBlock);
period_select.addEventListener('input', appData.changeRange);
button.addEventListener('click', appData.start);

appData.getStatusIncome();
appData.getInfoDeposit();