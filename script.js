'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let day = new Date().getDay();
let body = document.querySelector('body');
let div = document.createElement('div');
let daysNodeList;

function addElements(array) {
	let i = 0;
	for (let key of array) {
		let span = document.createElement('span');
		div.append(span);
		span.textContent = key;
		span.style.color = '#9CDCFE';

		if (i == day) {
			span.style.fontWeight = "900";
		}
		if (i == 0 || i == 6) {
			span.style.fontStyle = "italic";
		}
		i++;
	}
}

body.style.backgroundColor = '#202124';
div.style.cssText = "background-color:#333333; display:flex; flex-direction:column;";

body.append(div);
addElements(week);
/*
Весь js считает с нуля и Data считает за начало недели - воскресенье
но у нас 1й день недели понедельник, может сдвинуться счет, справляемся следуюшим образом:
получаем нод лист и переставляем воскресенье в конец div, счет не нарушен */
daysNodeList = document.querySelectorAll('span');
div.append(daysNodeList[0]);