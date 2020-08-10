/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let persona;
	let lugar;
	let temporada;
	let cantidadPasajeros;
	let respuesta = "si";
	let contB = 0;

	let contC = 0;

	let contS = 0;
	let mayorviajes;

	let mayorPasajeros;
	let nombreResponsable;
	let BanderaNombre = "no paso";

	let acumI = 0;
	let contI = 0;
	let promedio;

	do {
		persona = prompt("Ingrese el nombre de la persona a cargo");
		do {
			lugar = prompt("A lugar donde viajan  bariloche / cataratas / salta");
		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));
		do {
			temporada = prompt("Eliga en que temporada desea viajar otoño / verano / invierno / primavera");
		} while (temporada != "otoño" && temporada != "verano" && temporada != "invierno" && temporada != "primavera");
		do {
			cantidadPasajeros = parseInt(prompt("Cantidad de personas que viajan"));
		} while (cantidadPasajeros == isNaN);

		switch (lugar) {
			case "bariloche":
				contB = contB + cantidadPasajeros;

				break;
			case "cataratas":
				contC = contC + cantidadPasajeros;
				break;
			case "salta":
				contS = contS + cantidadPasajeros;
		}
		// b)el nombre de titular que lleva más pasajeros.
		if (BanderaNombre == "no paso" || cantidadPasajeros > mayorPasajeros) {
			mayorPasajeros = cantidadPasajeros;
			nombreResponsable = persona;
			BanderaNombre = "ya paso";
		}
		// c)el promedio de personas por viaje,  que viajan en invierno
		if (temporada == "invierno") {
			acumI = acumI + cantidadPasajeros;
			contI++;
		}

		respuesta = prompt("Desea continuar? si/no");
	} while (respuesta == "si");

	promedio = acumI + contI;

	if (contB > contC && contB > contS) {
		mayorviajes = "bariloche";
	}
	else if (contS > contC && contS > contB) {
		mayorviajes = "salta";
	} else {
		mayorviajes = "cataratas";
	}


	console.log("El destino elegido por mas personas es " + mayorviajes);
	console.log("El titular con mas personas a cargo es " + nombreResponsable);
	console.log("El promedio de las personas que viajan en Invierno es " + promedio);
}
