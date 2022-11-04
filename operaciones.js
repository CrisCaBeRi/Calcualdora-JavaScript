/*Funcion creada para alternar entre acciones (.toogle|crea una clase que luego se modifica en css con background color)  */

function cambiarModo() { 
    /*Se define la variable que almacena el body del html*/
    var cuerpoweb = document.body; 
    /*.classlist | sirve para acceder a las clases del documento y.toogle | para gregar clases*/
    cuerpoweb.classList.toggle("oscuro"); 
}

//Declaramos variables
var operandoa;
var operandob;
var operacion;

/*se crea una función encargada de inicializar el funcionamiento que almacena variables y traen los id correspondientes para cada boton */

function init(){

    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    /*para cada variable definida anteriormente se adjunta el evento .onclick que se encarga de realizar cierta funcionalidad cuando se hace clic en un botón*/


    uno.onclick = function(e){
        /* Se toma la ruta del id de html resultado y se le suma el valor string del numero correspondiente */
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }

    /*Se llama el id, se le añade el evento y se asigna a una funcion que luego llama la funcion resetear */
    reset.onclick = function(e){
        resetear();
    }

    /*se llama de nuevo el id suma con el evento .onclick y se crea una función que alamcena la variable que se ha definido con el primer numero ingresado y lo envia a pantalla, luego se altera la variable operación agregando el string "+" y se llama la funcion limpiar*/
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    /*se llama el id igual con su accion onclick asignada a una funcion que toma el valor de la variable # 2 y lo envia de nuevo a la vista. Luego, se llama la funcion resolver*/
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
  }
/*Esta función se encarga de traer el id resultado y tarle un valor de "" o nulo para que se muestre en la vista del resultado*/
  function limpiar(){
    resultado.textContent = "";
  }
/*Se crea la funcion resetear que se encarga de borrar el contenido de la vista y luego toma las tres variables de numero 1 ,2 y la variable de operación y les da de nuevo un valor en cero*/
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
/*se crea esta funcion que se llama exclusivamente al seleccionar igual, en ella, se almacena un switch case con los cases correspondientes a las operaciones de la calculadora */

  function resolver(){
    /*se crea una variable res en 0 que se encargará de almacenar los elementos que se produzcan de los resultados de las operaciones */
    var res = 0;
    switch(operacion){
      case "+":
        /*para cada caso se crea una operación que va a almacenar la operación y luego va a ser enviada mediante resultado.textContent asignando la variable res*/
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    /*se borra la operación de la pantalla y se reinician las variables*/
    resetear();
    resultado.textContent = res;
  }
