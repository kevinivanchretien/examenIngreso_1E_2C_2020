/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;

	let contM = 0;
	let acumM = 0;

	let acumEdad = 0;
	let promedioEdad;

	let pesoMayor;
	let NombrepesoMayor;

	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese su nombre");
		do {
			peso = parseInt(prompt("Ingrese su peso"));
		} while (peso <= 0 && peso == isNaN);
		do {
			sexo = prompt("Ingrese su sexo f/m");
		} while (sexo != "f" && sexo != "m");
		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while (edad == isNaN);

		acumEdad = acumEdad + edad;

		switch (sexo) {//b)la edad promedio en total.
			case "f":
				acumM = acumM + edad;
				contM++;
				break;
			case "m"://el hombre mas pesado.
				if (i == 0 || peso > pesoMayor);
				pesoMayor = peso;
				NombrepesoMayor = nombre;

		}
	}
	promedioEdad = acumEdad / 5;
	/*a)informar la cantidad de mujeres.
	b)la edad promedio en total.
	c)el hombre mas pesado.*/
	console.log("La cantidad de mujeres ingresadas es de: " + contM);
	console.log("El promedio de la edad de los ingresados es de: " + promedioEdad);
	console.log("El hombre mas pesado fue: " + NombrepesoMayor + " con un peso de " + pesoMayor);



}
