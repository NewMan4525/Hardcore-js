'use strict';

//#1

let value = prompt('Введите число', '   123    ');

function showTypeOf(value) {
	console.log(value, typeof value);
}


function operationDigit(value) {


	function toDigit(value) {
		let trimer = value.replace(/\s+/g, '');
		return Number(trimer);
	}

	function isNum(value) {
		return !isNaN(parseFloat(value)) && isFinite(value) && value !== 0;
	}




	while (value === null) {
		value = prompt('JS настаивает на вводе именно числа, Введите число', '   123    ');
	}

	value = toDigit(value);


	if (isNum(value)) {
		console.log('да это точно число');
		showTypeOf(value);
	} else {

		value = prompt('То что вы ввели - не число, Введите число', '   123    ');
		operationDigit(value);
	}

}
operationDigit(value);

//#2

let arr = ['68729', '26687', '96982', '43595', '46840', '26847', '30561'];
let newArr = arr.filter(function (item) {
	return item[0] == 2 || item[0] == 4;
});

showTypeOf(newArr);
newArr.forEach(function (item) {
	console.log(Number(item));
});

//#3

function getPrimes(num) {
	const seive = [];
	const primes = [];

	for (let i = 2; i <= num; i++) {
		if (!seive[i]) {
			primes.push(i);
			for (let j = i * i; j <= num; j += i) {
				seive[j] = true;

			}
		}
	}
	primes.forEach(function (item) {
		console.log(item, 'Делители этого числа: 1 и ' + item);
	});

	return primes;
}
getPrimes(100);