// var age = prompt("Введите свой возраст")
// if (age <= 2){
//     alert("Вы ребёнок")
// }
// else if ((age >= 12) && (age <=18)){
//     alert("Вы подросток")
// }
// else if((age > 18) && (age <= 60)){
//     alert("Вы взрослый")
// }
// else if(age > 60){
//     alert("Вы пенсионер")
// }
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
// var x = prompt("Введите число")
// switch(x){
//     case '1':
//         alert("!")
//         break
//     case '2':
//         alert("@")
//         break
//     case '3':
//         alert("#")
//         break
//     case '4':
//         alert("$")
//         break
//     case '5':
//         alert("%")
//         break
//     case '6':
//         alert("^")
//         break
//     case '7':
//         alert("&")
//         break
//     case '8':
//         alert("*")
//         break
//     case '9':
//         alert("(")
//         break
//     case '0':
//         alert(")")
//         break
// }
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  
// var number = prompt("Введите трёхзначное число")
// if (number.length == 3){
//     if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]){
//         alert("В указаном числе есть одинаковые числа")
//     }
//     else{
//         alert("В указаном числе нет одинаковых чисел")
//     }
// }
// else{
//     alert("Указаное число не трёх значное")
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// var year = prompt("Укажите год")
// // if ((year % 400 == 0 || year % 4 == 0) && not(year % 100 == 0)){
// if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0){
//     alert("Год Високосный")
// }
// else{
//     alert("Год не Високосный")
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// var number = prompt("Введите число")
// if (number == number.split('').reverse().join('')){
//     alert('Число полидром')
// }
// else{
//     alert("Чисол не полидром")
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// var numer = prompt("Ввелите кол-во USD")
// var choice = prompt("1 - EURO, UAN - 2, AZN - 3")
// switch(choice){
//     case '1':
//         alert(numer*0.93)
//         break
//     case '2':
//         alert(numer*40.32)
//         break
//     case '3':
//         alert(numer*1.70)
//         break
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// var purchase = prompt("Введите сумму покупки")
// if (purchase >= 200 && purchase < 300){
//     alert("Скидка 3%! Ваша сумма: " + purchase*0.97)
// }
// else if(purchase >= 300 && purchase < 500){
//     alert("Скидка 5%! Ваша сумма: " + purchase*0.95)
// }
// else if(purchase >= 500){
//     alert("Скидка 7%! Ваша сумма: " + purchase*0.93)
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// var circumference = prompt("Введите длину окружности")
// var perimeter = prompt("Введите периметр квадрата")
// var diametr = circumference/3.14
// var side = perimeter/4
// if (perimeter >= side){
//     alert("Окружность влезет в квадрат")
// }
// else{
//     alert("Окружность не влезет в квадрат")
// }
////////////////////////////////////////////////////////////////////////////////////////////
// var question1 = prompt('Какой самый лёгкий язык? 1 - Python 2 - JS 3 - Все сложные');
// var question2 = prompt('Кто сейчас президент в США? 1 - Джо Байден 2 - Дональд Трамп 3 - Моргенштерн');
// var question3 = prompt('26 буква в алфавите? 1 - Ш 2 - Ь 3 - Ы');
// var score = 0;
// if (question1 == 3)
//     score += 2;
// if (question2 == 1)
//     score += 2;
// if (question3 == 1)
//     score += 2;
// alert('Ваш счёт ' + score);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// var date = prompt('Введине день-месяц-год ');
// date = date.split('-');
// var oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
// oldDate.setDate(oldDate.getDate()+1);
// alert(oldDate);