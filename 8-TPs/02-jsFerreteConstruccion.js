/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambreTotal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) * 2;
    alambreTotal = perimetro * 3;

    alert ("El alambre total utilizado es : "+alambreTotal);

    

} 
function Circulo () 
{
	var radio;
	var perimetro;
	var alambreTotal;

	radio=txtIdRadio.value;
	radio=parseInt(radio);
 
    perimetro= 2 * Math.PI * radio
    alambreTotal= perimetro * 3

    alert("El alambre total utilizado es : "+alambreTotal) 
}
function Materiales () 
{
	var area;
	var ancho;
	var largo;
	var cemento;
	var cal;
	


	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;
   
    alert ("Los cantidad de bolsas de cemento que se necesitan son: " +cemento+ " y la cantidad de bolsas de cal que se necesitan son: "+cal);
}