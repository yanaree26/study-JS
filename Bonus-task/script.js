const greeting = document.querySelector('#name');
const reg_btn = document.querySelector('#register');
const auth_btn = document.querySelector('#authorize');
const users_list = document.querySelector('#users_list');

let reg_date = new Date();
var datestring = ("0" + reg_date.getDate()).slice(-2) + "-" + ("0"+ (reg_date.getMonth()+1)).slice(-2) + "-" + reg_date.getFullYear() + " " + ("0" + reg_date.getHours()).slice(-2) + ":" + ("0" + reg_date.getMinutes()).slice(-2) + ":" + ("0" + reg_date.getSeconds()).slice(-2);

//массив с пользователями
let users;

    if (localStorage.users) {
        users = JSON.parse(localStorage.users)
    } else {
        users = [];
    }


//добавление инфы о пользователях на страничку
const add_user = function() {

    users_list.textContent = '';

    users.forEach(function(item) {
        let li = document.createElement('li');
        li.innerHTML = `<div>Имя: ${item.name}, фамилия: ${item.surname}, дата регистрации: ${item.regDate}</div> <button id="delete">Удалить</button>`

        users_list.append(li);

        li.querySelector('button').addEventListener('click', function() {
            users.splice(item, 1);
            add_user();
        })
    })

    localStorage.users = JSON.stringify(users);

}


//регистрация пользователя и создание его объекта в массиве
reg_btn.addEventListener('click', function() {

    let name = prompt('Введите Имя');
    let surname = prompt('Введите фамилию');
    let login = prompt('Введите логин');
    let password = prompt('Введите пароль');

    let reg_date = new Date();
    let regDate = ("0" + reg_date.getDate()).slice(-2) + "-" + ("0"+ (reg_date.getMonth()+1)).slice(-2) + "-" + reg_date.getFullYear() + " " + ("0" + reg_date.getHours()).slice(-2) + ":" + ("0" + reg_date.getMinutes()).slice(-2) + ":" + ("0" + reg_date.getSeconds()).slice(-2);

    if (name || surname || login || password) {

        let new_user = {
            name: name,
            surname: surname,
            login: login,
            password: password,
            regDate: regDate,
        }
    
        users.push(new_user);
    
        add_user();
    
    } else (alert('Введите верную информацию'))
})

auth_btn.addEventListener('click', function() {
    let login = prompt('Введите логин');
    let password = prompt('Введите пароль');

    let compare = function (item) {
        return item.login == login && item.password == password;
    }

    if(users.find(compare)) {
        greeting.textContent = users.find(compare).name;
    } else {
        alert('Пользователь не найден')
    }
})

add_user();