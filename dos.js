/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let producto;
  let marca;
  let peso;
  let precio;
  let tipo;


  let pesoTotal = 0;

  let liquidoCaro = 0;
  let NombreLiquido;
  let flagL = 0;

  let solidoBarato = 0;
  let solidoMarca;
  let flagS = 0;

  let respuesta = "si";
  let contador = 0;

  do {
    producto = prompt("Ingrese un producto");
    marca = prompt("Ingrese la marca de dicho producto");
    do {
      precio = parseInt(prompt("Ingrese el precio"));
    } while (precio <= 0 && precio == isNaN);
    do {
      peso = parseInt(prompt("Indique el peso del producto en kilogramos"));
    } while (peso == isNaN);
    do {
      tipo = prompt("Especifique si es solido o liquido");
    } while (!(tipo == "solido" || tipo == "liquido"));


    pesoTotal = pesoTotal + peso;

    switch (tipo) {
      case "liquido":
        if (flagL == 0 || precio > liquidoCaro) {
          liquidoCaro = precio;
          NombreLiquido = marca;
          flagL = 1;
        }
        break;
      case "solido":
        if (flagS == 0 || precio < solidoBarato) {
          solidoBarato = precio;
          solidoMarca = marca;
        }
        break;
    }
    contador++;
    respuesta = prompt("Desea continuar? si/no");
  } while (respuesta == "si");

  console.log("El peso total de la compra es de " + pesoTotal + " kilogramos");
  console.log("La marca mas cara de los liquidos es " + NombreLiquido);
  console.log("la marca mas barata de los solidos es " + solidoMarca);

}
