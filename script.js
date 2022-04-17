'use strict';

const body = document.querySelector('body');
const ul = document.createElement('ul');
const liA = document.createElement('li');
const liB = document.createElement('li');
const styleAll = document.createElement('style');
let date;

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
			//11,12,13,14 часов /минут /секунд
		}
	} else {

		switch (lastSimbol(value)) {
			case 1:
				return currentType[0]; //час 
			case 2:
			case 3:
			case 4:
				return currentType[1]; //часа
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

function renderDate(value) {

	if (value < 10) {
		value = '0' + value;
	}
	return value;
}

function timeUpdata() {
	date = new Date();
	liA.textContent = 'Сегодня' +
		' ' + week[date.getDay()] +
		',' + ' ' + date.getDate() +
		' ' + month[date.getMonth()] +
		' ' + date.getFullYear() + ' ' + 'года' + ',' + ' ' +
		' ' + date.getHours() + ' ' + rusNotation(date.getHours(), 'h') +
		' ' + date.getMinutes() + ' ' + rusNotation(date.getMinutes(), 'm') +
		' ' + date.getSeconds() + ' ' + rusNotation(date.getSeconds(), 's');


	liB.textContent =
		renderDate(date.getDate()) +
		'.' + renderDate(date.getMonth()) +
		'.' + date.getFullYear() +
		'-' + renderDate(date.getHours()) +
		':' + renderDate(date.getMinutes()) +
		':' + renderDate(date.getSeconds());

}

body.prepend(ul, styleAll);
ul.prepend(liA, liB);

styleAll.textContent =
	'ul{width: 550px;height: 100px;background-color:grey;padding:0;' +
	'margin:20px auto;list-style:none;display:flex;flex-direction:column;color:white;}' +
	'li{margin:12px;}';

timeUpdata();
setInterval(timeUpdata, 1000);