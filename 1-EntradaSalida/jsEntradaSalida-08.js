/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerodividendo;
	var numerodivisor;
	var resto;
	numerodividendo = txtIdNumeroDividendo.value;
    numerodivisor = txtIdNumeroDivisor.value;
    numerodividendo = parseInt(numerodividendo);
    numerodivisor = parseInt (numerodivisor);
    resto = numerodividendo % numerodivisor;
	alert("El resto de esta cuenta es: "+resto);
}
// txtIdNumeroDividendo txtIdNumeroDivisor