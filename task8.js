﻿/* 
Повторять цикл, пока ввод неверен

Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

let count;

while (count !== 0)
{
    count = +prompt('Введи число больше 100:');
    if (count <= 100) {
    alert(`Разве это число больше 100: ${count}`);   
    }
    else{
    alert(`Это число больше 100: ${count}`);  
    console.log(count);
    break;}                                                                            
}
  