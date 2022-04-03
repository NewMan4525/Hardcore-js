'use strict';

let variable = 'true';


function showTypeof(value){
	console.log(value, typeof value, value.length)
}

function getString(value){
if(typeof value !== 'string'){
	return 'Это не строка!'
}else{
	let operand = value.trim();

if(operand.length > 30){
	return operand.replace(operand.substring(30),'...')
}else{
	return operand
	
}}}


showTypeof(variable)
showTypeof(getString(variable))
