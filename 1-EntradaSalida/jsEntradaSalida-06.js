/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;
	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1)
	numero2 = parseInt(numero2)
    resultado = numero1 + numero2
	alert("El resultado de la suma es: "+resultado);
}

