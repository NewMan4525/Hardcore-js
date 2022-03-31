let num, numMultiplication, numMultiplicationPow, twoDigits;

num = 266219;//число

num = String(num).split("");//теперь это массив строк

numMultiplication = num.reduce(
(previousValue, currentValue) => previousValue * currentValue,1);
//перемножение и авто преобразование в намбер

numMultiplicationPow = numMultiplication**3;//возведение в степень

twoDigits = Number(String(numMultiplicationPow).substring(0, 2))
//преобразуем в строку, откусываем первые 2 цифры и преобразуем их в намбер

console.log(num);
console.log(numMultiplication);
console.log(numMultiplicationPow);
console.log(twoDigits);
