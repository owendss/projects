  function sumaTres(x){
    console.log(x+3);
  }
sumaTres(5);

//1
function sumaUno(x){
    return x+3;
}

//2
var sumaDos = function (x){
    return x + 3;
  }

//3
var suma3 = (x) => {
    return x+3;
}

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

function otra(){
    return(
        "El nombre de console.log es: "+
        cuidadoConElConsoleLog("Owen")
    );
}
