const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementByid('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new calculadora();
console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(2,3))
console.log(calculadora.multiplicar(2,3))
console.log(calculadora.dividir(2,3))



const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',()=> display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});