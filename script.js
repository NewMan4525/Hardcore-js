'use strict';

const body = document.querySelector('body');
const ul = document.createElement('ul');
const liA = document.createElement('li');
const liB = document.createElement('li');
const styleAll = document.createElement('style');
let date = new Date();

const week = [
	'Воскресенье', 'Понедельник', 'Вторник',
	'Среда', 'Четверг', 'Пятница',
	'Суббота'

];
const month = [
	'января', 'февраля', 'марта',
	'апреля', 'мая', 'июня',
	'июля', 'августа', 'сентября',
	'октября', 'ноября', 'декабря'
];


body.prepend(ul, styleAll);
ul.prepend(liA, liB);

function rusNotation(value, type) {

	let currentType;

	function lastSimbol(value) {
		return Number(String(value).slice(-1));
	}

	function preSimbol(value) {
		return Number(String(value).slice(0, 1));
	}

	function typeSelect(type) {

		switch (type) {
			case 'h':
				currentType = ['час', 'часа', 'часов'];
				break;
			case 'm':
				currentType = ['минута', 'минуты', 'минут'];
				break;
			case 's':
				currentType = ['секунда', 'секунды', 'секунд'];
				break;
		}
	}

	typeSelect(type);

	if (preSimbol(value) === 1) {
		if (value === 1) {
			return currentType[0];
		} else {
			return currentType[2];
			//11,12,13,14 часов
			//11,12,13,14 минут
			//11,12,13,14 секунд
		}
	} else {

		switch (lastSimbol(value)) {
			case 1:
				return currentType[0]; //час 
			case 2:
			case 3:
			case 4:
				return currentType[1]; //часа//12часов
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 0:
				return currentType[2]; //часов
		}
	}
}

styleAll.textContent = 'ul{width: 500px;height: 100px;background-color:grey;' +
	'margin:20px auto;display:flex;flex-direction:column;color:white;}' +
	'li{margin-top: 20px;}';

liA.textContent = 'Сегодня' +
	' ' + week[date.getDay()] +
	',' + ' ' + date.getDate() +
	' ' + month[date.getMonth()] +
	' ' + date.getFullYear() + ' ' + 'года' + ',' + ' ' +
	' ' + date.getHours() + ' ' + rusNotation(date.getHours(), 'h') +
	' ' + date.getMinutes() + ' ' + rusNotation(date.getMinutes(), 'm') +
	' ' + date.getSeconds() + ' ' + rusNotation(date.getSeconds(), 's');

liB.textContent = 'none';

setInterval(rusNotation, 1000);




// //1, 21 час //h=1||h=24
// 2, 3, 4, 22, 23, 24 часа //h>1||h<5;h>21||h<25
// 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 часов //h===0;h>4||h<20


// 1) Выведите на страницу текущую дату и время в 2-х форматах:

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
//     б) '04.02.2020 - 21:05:33'

// 2) Для вывода в формате (а) напишите функцию,
//    которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0
//    перед значениями которые состоят из одной цифры
//    (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду