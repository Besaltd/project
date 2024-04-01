"use strict";

// Задача:
// Напишите программу на JavaScript, которая выводит все числа от 1 до 10 включительно, умноженные на 3.

// function fn() {
//     for (let i = 0; i <= 10; i++) {
//         let result = i * 3;
//         console.log(result);
//     };
// }
// fn();


// Задача:
// Напишите программу, которая находит сумму всех чисел от 1 до 100 включительно.

// Вы можете использовать цикл for или другой подход, который считает сумму всех чисел от 1 до 100.

// function summ() {
//     let result = 0;
//     for (let i = 0; i <= 100; i++) {
//         result = result + i;
//     };
//     console.log(result);
// }
// summ();

// function summ () {
//     const result = Array.from({length: 101}, (_, i) => i).reduce ((acc, curr) => acc + curr, 0);
//     console.log(result);
// }
// summ();

// Задача:
// Напишите функцию на JavaScript, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные элементы исходного массива (без повторений).

// function uniqueNumbers(numbers) {
//     const mySet = new Set();
//     for (let i = 0; i < numbers.length; i++) {
//         mySet.add(numbers[i]);
//     }
//     const uniqueArray = Array.from(mySet);
//     return uniqueArray;
// }

// const numbers = [1, 2, 3, 4, 3, 5, 2, 1];
// console.log(uniqueNumbers(numbers));

// Задача:
// Напишите функцию на JavaScript, которая принимает число и выводит таблицу умножения для этого числа от 1 до 10.

// function multiplicateNumbers(number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(number + ' x '+ i + ' = ' + (number * i));
//     };
// }

// multiplicateNumbers(3);


// function fn(a, b, c) {
//     console.log('a' + ' = ' + a + ',', 'b' + ' = ' + b + ',', 'c' + ' = ' + c );
// };
// fn(5, 3 , 7);

//Cумма элементов массива
// function summ() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = arguments[i] + sum;
//     }
//     return sum;
// }

// console.log(summ(1, 5, 10));

//Добавление элементов в массив
// function newElem() {
//     let token = ['Hi', 'my', 'name', 'is'];
//     token.push('Ruslan');
//     return token;
// }
// console.log(newElem());

//Добавление элементов в массив
// function newElem() {
//     let token = ['Hi', 'my', 'name', 'is'];
//     token.splice(1, 0, 'sorry');
//     token.splice(5, 0, 'Ruslan');
//     return token;
// }
// console.log(newElem());

// 4. написати функцію, яка приймає будь-яку кількість аргументів і повертає массив тільки тих аргументів, які кратні 2 // fn(1, 2, 3, 4, 5, 6, 7, 8) => [2, 4, 6, 8]

//Выводятся кратные 2 с массива
// function delay() {
//     let numbers = [];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] % 2 === 0) {
//             numbers.push(arguments[i]);

//         } 
         
//     }
//     return numbers;
    
// }
// console.log(delay(2, 3, 5, 6, 8, 10, 12, 21));

// Сортировка массива по возрастанию
// function $228() {
//     let arr = [];
//     for (i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     return arr.sort(function(a, b) {
//         return a - b;
//     });
// }

// console.log($228(2, 3, 4, 5, 31, 15, 24, 7));


// написати функцію, яка приймає 3 аргументи - числа (a, b, c), і повертає строку такого формату: a = передане число, b = передане число, c = передане число // fn(3, 7, 11) => "a = 3, b = 7, c = 11"

// const fn = (a, b, c) => {
//     console.log(`a = ${a}, b = ${b}, c = ${c}`);
// };

// fn(3, 7, 11);

//Выдает рандомную фразу из массива option
// function shoot() {
//     const options = ['Шаг влево', 'Шаг вправо','Остаться по центру'];
//     const randomIndex = Math.floor(Math.random() * options.length);
//     const randomOption = options[randomIndex];
//     return randomOption;
// }
// console.log(shoot());


//Сортировка
// const items = [51, 23, 56, 21, 12, 75];
// function search(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) return i;
//     }
//     return -1;
// }
// console.log(search(items, 100));

// //Сортировка пузырьком
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for ( let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 const tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     console.log(arr);
// }
// const items = [15, 5, 3, 7, 31, 4, 24, 2];
// bubbleSort(items);

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for ( let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 const tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     console.log(arr);
// }
// const items = [15, 5, 3, 7, 31, 4, 24, 2];
// bubbleSort(items);

//Число фибоначи
// function fibonachi (n) {
//     if (n < 0) {
//         return 0;
//     }
//     if (n <=2 ) {
//         return 1;
//     }
//     return fibonachi(n - 1) + fibonachi (n - 2);
// }
// console.log(fibonachi(7));

// function fibonachi (n) {
//     if (n <= 0) {
//         return 0;
//     }
//     let prev = 1;
//     let result = 1;
//     for (let i = 0; i < n - 2; i++) {
//         let tmp = result;
//         result += prev;
//         prev = tmp;
//     }
//     return result;
// }
// console.log(fibonachi(7));


// функция проверяет и выводит данные, кроме отсортированных
// в нашем случае 3 и строка

// function test() {
// let arr = [];
// let y = typeof 'string';
// for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
// }
//     arr = arr.filter(item => item !== 3 && typeof item !== 'string');
    
// console.log(arr);
// }

// test(5, 23, 12, 3, 11, 54, 'Dude', '228');


// const vehicleBodyWidth = 5000;
// const vehicleBodyLenght = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLenght);

// ['Matias', 'Swenja', 'Peter', 'Florian'].map(items =>);

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase
// // camelCase

// const COLOR_RED = '#F00'; // Эти переменные нельзя менять, можно только использовать

// const _apiBase = 'http://google.com/'; // Тоже руками не трогать.
// const _apiKey = 'apikey=d434gfg55454gfgfg4545454ggg34554'; // Тоже руками не трогать.


// const obj = {
//     name: 'Ruslan',
//     age: 35,
//     isMarried: false
// };

// // console.log(obj.name);
// // console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];

// arr[10] = '322';
// console.log(arr[10]);
// console.log(arr);
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         def: {

//         }
//     }
// };
// const b = 'b';

// // arrObj.b = '1234';
// arrObj[b] = '1234';

// // console.log(arr[1]);
// console.log(arrObj['b']);
// console.log(arrObj.b);

// // // const obj = {a: 1, b: 2, c: 3};
// // const obj = {
// //     'Anna': 500,
// //     'Alice': 800
// // };

// alert('Hello');
// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt("Вам есть 18?", " ");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('How old are you?', '');
// answers[2] = prompt('Where you from?', '');

// console.log(typeof(answers));
// console.log(typeof(null)); // официально признаная ошибка 

// const category = 'toys';

// // console.log('https://google.com/' + category + '/' + '4');
// console.log(`https://google.com/${category}/5`);

// const user = 'Ruslan';

// alert(`Hi, ${user}`);

// ОПЕРАТОРЫ

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2*4 == '8');
// console.log(2 + 2 * 2 !== '8');



// const isChecked = false,
//        isClose = false;

// console.log(isChecked || !isClose);



function arrObj () {
    let summ = [];
    for (let i = 0; i < arguments.length; i++) {
        summ.push(arguments[i] * 2);
    }
    return summ;
    
}

console.log(arrObj(1, 2, 3, 4));
