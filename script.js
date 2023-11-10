const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operatorContainer = document.getElementById('operator');

const button = document.querySelector('button');
const resultContainer = document.getElementById('result');

let operator = '';

button.addEventListener('click', calculate);

document.querySelector('body').addEventListener('keydown', keyPress);
function keyPress(e){
	let keyClick = e.key;
	if(keyClick === '+' || keyClick === '-') {
		operatorContainer.value = e.key;
	} else if (keyClick === '*') {
		operatorContainer.value = '×';
	} else if (keyClick == '/') {
		e.preventDefault();
		operatorContainer.value = '÷';
	} else if (keyClick === 'Enter') {
		calculate();
	} else {
		return;
	}
}

let number1;
let number2;

num1.addEventListener('input', filterNum1)
function filterNum1(e){
	let regex = /[\+\-\*\/]/;
	if(e.data.match(regex)){
		num1.value = num1.value.slice(0, num1.value.length-1);
	}  else {
		number1 = parseFloat(num1.value);
	}
}

num2.addEventListener('input', filterNum2)
function filterNum2(e){
	let regex = /[\+\-\*\/]/;
	if(e.data.match(regex)){
		num2.value = num2.value.slice(0, num2.value.length-1);
	} else {
		number2 = parseFloat(num2.value);
	}
}

function calculate(){
	let operator = operatorContainer.value;
	let result;
	switch(operator){
		case '+':
			result = Math.round((number1 + number2)*100)/100;
			break;
		case '-':
			result = Math.round((number1 - number2)*100)/100;
			break;
		case '×':
			result = Math.round((number1 * number2)*100)/100;
			break;
		case '÷':
			result = Math.round((number1 / number2)*100)/100;
	}
	resultContainer.innerText = `${number1} ${operator} ${number2} = ${result}`
}
