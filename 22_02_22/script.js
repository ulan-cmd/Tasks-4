
/*Если переменная x равна 7, то выведите окошко
с сообщением 'Верно', иначе выведите 'Неверно'.*/

let x = 7;
if (x > 0 && x < 7) {
    alert("Верно!");
} else {
    alert("Неверно!");
}
console.log(x);
/*
Если переменная a равна или меньше 1, а переменная b больше или равна 3,
    то выведите сумму этих переменных, иначе выведите их результат вычитания.*/

let a = 3;
let b = 5;
if (a <= 1 && b >=3) {
    alert(a+b);
} else {
    alert(a-b);
}

/*
В переменной time лежит число от 0 до 59. Определите в какую четверть
часа попадает это число (в первую, вторую, третью или четвертую).
Например: если переменная time = 5, то она попадает в первую четверть.
    В противном случае вывести "Значение не попадает в диапазон от 0 до 59".
    */

let time = 45;
if(time > 0 && time <= 14){
    alert('первая четверть');
}
if( time >= 15 && time <= 29){
    alert('вторая четверть');
}
if( time >= 30 && time <= 44){
    alert('третья четверть');
}
if(time >=45 && time <= 59){
    alert('четвертая четверть');
}
else if( time < 0){
    alert("Значение не попадает в диапазон от 0 до 59");
}
else if(time >= 59){
    alert("Значение не попадает в диапазон от 0 до 59")
}
console.log(time);

/*
Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
    Проверьте работу скрипта при test, равном true, false.
    Напишите два варианта скрипта - с короткой записью и с длинной.
    */

let test = true;
/*if (test !== true) {
    alert('Верно!');
} else {
    alert('Неверно!');
}*/

let access = test !== true ? 'Верно' : 'Неверно';
alert(access);