/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var resultadoSuma;

    productoUno=txtIdPrecioUno.value;
    productoDos=txtIdPrecioDos.value;
    productoTres=txtIdPrecioTres.value;

    productoUno=parseInt(productoUno);
    productoDos=parseInt(productoDos);
    productoTres=parseInt(productoTres);

    resultadoSuma = productoUno + productoDos + productoTres;

    alert ("La suma de precio de estos 3 productos es: "+resultadoSuma);

}
function Promedio () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var resultadoPromedio;
	var sumaPrecios;
    
    productoUno=txtIdPrecioUno.value;
    productoDos=txtIdPrecioDos.value;
    productoTres=txtIdPrecioTres.value;

    productoUno=parseInt(productoUno);
    productoDos=parseInt(productoDos);
    productoTres=parseInt(productoTres);

    sumaPrecios = productoUno + productoDos + productoTres;

    resultadoPromedio = sumaPrecios / 3;

    alert ("El promedio de estos 3 precios es de: "+resultadoPromedio);

}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var iva;
	var sumaPrecios;
	var resultadoFinal;

    productoUno=txtIdPrecioUno.value;
    productoDos=txtIdPrecioDos.value;
    productoTres=txtIdPrecioTres.value;
 
    productoUno=parseInt(productoUno);
    productoDos=parseInt(productoDos);
    productoTres=parseInt(productoTres);

    sumaPrecios= productoUno + productoDos + productoTres;                               

    iva = sumaPrecios * 0,21;
    
    resultadoFinal = sumaPrecios + iva;

    alert ("El precio final es de : "+resultadoFinal);
}
// txtIdPrecioUno  txtIdPrecioDos  txtIdPrecioTres