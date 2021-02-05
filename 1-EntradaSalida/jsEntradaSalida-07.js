/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
 
    var numeroUno;
    var numeroDos;
    var resultadoSuma;
    numeroUno=txtIdNumeroUno.value;
    numeroDos=txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultadoSuma= numeroUno + numeroDos;
    alert("La suma de estos numeros es "+resultadoSuma);
}

function restar()
{
    numeroUno=txtIdNumeroUno.value;
    numeroDos=txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    var resultadoResta;
    resultadoResta = numeroUno - numeroDos;
    alert("La resta de estos numeros es "+resultadoResta);
  
}
function multiplicar()
{ 
    numeroUno=txtIdNumeroUno.value;
    numeroDos=txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    var resultadoMultiplicar;
    resultadoMultiplicar = numeroUno  * numeroDos;
    alert("La multiplicacion de estos numeros es "+resultadoMultiplicar);
}

function dividir()
{
    numeroUno=txtIdNumeroUno.value;
    numeroDos=txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    var resultadoDivision;
    resultadoDivision = numeroUno  / numeroDos;
    alert("La division de estos numeros es "+resultadoDivision);
}