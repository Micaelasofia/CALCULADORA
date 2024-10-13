// Obtener los elementos del DOM
const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

// Variables para almacenar los números y operadores
let numero1 = '';
let operador = '';
let numero2 = '';

// Función para actualizar la pantalla
function actualizarPantalla(valor) {
	pantalla.value += valor;
}

// Función para calcular el resultado
function calcularResultado() {
	numero2 = pantalla.value;
	let resultado = 0;
	switch (operador) {
		case '+':
			resultado = parseFloat(numero1) + parseFloat(numero2);
			break;
		case '-':
			resultado = parseFloat(numero1) - parseFloat(numero2);
			break;
		case '*':
			resultado = parseFloat(numero1) * parseFloat(numero2);
			break;
		case '/':
			resultado = parseFloat(numero1) / parseFloat(numero2);
			break;
	}
	pantalla.value = resultado;
}

// Agregar eventos a los botones
botones.forEach(boton => {
	boton.addEventListener('click', () => {
		const valor = boton.value;
		if (valor === 'C') {
			// Limpiar pantalla
			pantalla.value = '';
			numero1 = '';
			operador = '';
			numero2 = '';
		} else if (valor === '=') {
			// Calcular resultado
			calcularResultado();
		} else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
			// Almacenar operador y número 1
			operador = valor;
			numero1 = pantalla.value;
			pantalla.value = '';
		} else {
			// Agregar número a la pantalla
			actualizarPantalla(valor);
		}
	});
});