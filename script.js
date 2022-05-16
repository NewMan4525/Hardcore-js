'use strict';

const div = document.querySelector('div');
const input = div.querySelector('input');
const par = div.querySelector('p');
const btnStrt = div.querySelector('.strt');
const btnRes = div.querySelector('.rst');

const getTime = () => {
	let timer = 3000;
	let delayProcess;


	const callBack = () => {

		par.textContent = input.value;
	};

	function debounce(fn, interval) {

		let timer;
		return function debounced() {

			clearTimeout(timer);
			let args = arguments;
			let that = this;
			timer = setTimeout(function callOriginalFn() {
				fn.apply(that, args);
			}, interval);
		};
	}

	delayProcess = debounce(callBack, timer);
	input.addEventListener('input', delayProcess);

};

function animEEEE() {

	let active;
	let idrequest;
	let degres = 0;

	const animateInput = () => {

		degres++;

		input.style.cssText = `transform: rotate(${degres}deg)`;
		idrequest = requestAnimationFrame(animateInput);

	};

	const reset = () => {

		cancelAnimationFrame(idrequest);
		degres = 0;
		input.style.cssText = `transform: rotate(0 deg)`;

	};

	btnStrt.addEventListener('click', () => {

		if (active) {

			cancelAnimationFrame(idrequest);
			active = false;

		} else {

			idrequest = requestAnimationFrame(animateInput);
			active = true;

		}

	});


	btnRes.addEventListener('click', reset);
	input.addEventListener('click', reset);

}


getTime();
animEEEE();