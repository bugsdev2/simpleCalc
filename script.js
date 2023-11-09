const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operatorContainer = document.getElementById('operator');

const button = document.querySelector('button');
const resultContainer = document.getElementById('result');

let operator = '';

button.addEventListener('click', calculate);

function calculate(){
	let number1 = parseFloat(num1.value);
	let number2 = parseFloat(num2.value);
	let operator = operatorContainer.value;
	let result;
	switch(operator){
		case '+':
			result = number1 + number2;
			break;
		case '-':
			result = number1 - number2;
			break;
		case '×':
			result = number1 * number2;
			break;
		case '÷':
			result = Math.round((number1 / number2)*100)/100;
	}
	resultContainer.innerText = `${number1} ${operator} ${number2} = ${result}`
}
