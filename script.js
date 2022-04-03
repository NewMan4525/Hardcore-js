'use strict';

let lang = confirm('Lang == RU?');
let namePerson = prompt('Привет, как вас зовут?','Артем');
let random = Math.floor(Math.random() * 7);

let week =[['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
		['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Восересенье'],
		['Massive says today - ','Массив сообщает что сегодня - ']
]

//if way

if(lang==true){
	if(random==0){
	alert('If сообщает что сегодня - понедельник');}
	else if(random==1){
	alert('If сообщает что сегодня - вторник');}
	else if(random==2){
	alert('If сообщает что сегодня - среда');}
	else if(random==3){
	alert('If сообщает что сегодня - четверг');}
	else if(random==4){
	alert('If сообщает что сегодня - пятница');}
	else if(random==5){
	alert('If сообщает что сегодня - суббота');}
	else if(random==6){
	alert('If сообщает что сегодня - воскресенье');}
}else if(lang==false){
	if(random==0){
	alert('If says today - monday');}
	else if(random==1){
	alert('If says today - tuesday');}
	else if(random==2){
	alert('If says today - wednesday');}
	else if(random==3){
	alert('If says today - thursday');}
	else if(random==4){
	alert('If says today - friday');}
	else if(random==5){
	alert('If says today - saturday');}
	else if(random==6){
	alert('If says today - sunday');}
};

//switch-case way

switch(lang){
case true:
	switch(random){
	case 1:alert('Switch сообщает что сегодня - вторник');break;
	case 2:alert('Switch сообщает что сегодня - среда');break;
	case 3:alert('Switch сообщает что сегодня - четверг');break;
	case 4:alert('Switch сообщает что сегодня - пятница');break;
	case 5:alert('Switch сообщает что сегодня - суббота');break;
	case 6:alert('Switch сообщает что сегодня - воскресенье');break;
};
break
case false:
	switch(random){
	case 0:alert('Switch says today - monday');break;
	case 1:alert('Switch says today - tuesday');break;
	case 2:alert('Switch says today - wednesday');break;
	case 3:alert('Switch says today - thursday');break;
	case 4:alert('Switch says today - friday');break;
	case 5:alert('Switch says today - saturday');break;
	case 6:alert('Switch says today - sunday');break;
}
break
};

//massive way

alert(week[2][Number(lang)]+week[Number(lang)][random])

//name test

namePerson =='Артем'? console.log('Boss'):namePerson =='Александр'? console.log('Teacher'):console.log('Student');
