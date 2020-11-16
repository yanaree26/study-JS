let books = document.querySelectorAll('.book');
let adv = document.querySelector('.adv');

books[5].after(books[2]);
books[0].before(books[1]);
books[4].after(books[3]);

document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

let book_2 = books[0].querySelectorAll('li');
book_2[10].before(book_2[2]);
book_2[9].before(book_2[7]);
book_2[7].before(book_2[4]);
book_2[7].before(book_2[5]);

let book_5 = books[5].querySelectorAll('li');
book_5[8].before(book_5[5]);
book_5[2].before(book_5[9]);
book_5[6].before(book_5[2]);



let new_chapter = document.createElement('li');
new_chapter.textContent = 'Глава 8: За пределами ES6';
books[2].querySelectorAll('li')[8].after(new_chapter);

