let result = 0;
let array;

do {
  array = +prompt('Введи число:');
  if (array > 0) {
    result ++;
    }
  console.log(result);
} while (array !== 0);

alert(`Количество положительных чисел: ${result}`);                       
