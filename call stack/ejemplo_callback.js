setTimeout(()=>{console.log('Buenos dias mundo')},3000);

const suma = (num1,num2) =>{ return num1 + num2}
const resta = (num1,num2) =>{ return num1 - num2}
const multiplicacion = (num1,num2) =>{ return num1 * num2}

function multifuncion(num1,num2,callback){
    const resultado = callback(num1,num2);
    return console.log('El resultado es ',resultado);
}
multifuncion(5,4,suma);
multifuncion(5,4,resta);
multifuncion(5,4,multiplicacion);


const miBoton = document.getElementById("unBoton");

const ejecutarCuandoSeHaceClick = evento =>{
    console.log(evento);
    alert("se hizo click en el boton :)");
}
miBoton.addEventListener("click",ejecutarCuandoSeHaceClick);


const funcion4 = () => {
    console.log('funcion 4')
    
}


const funcion3 = () => {
    console.log('funcion 3')
    setTimeout(funcion4,6000);
}

const funcion2 = () => {
    console.log('funcion 2')
    setTimeout(funcion3,4000);
}

const funcion1 = () => {
    console.log('funcion 1')
    setTimeout(funcion2,3000);
}
setTimeout(funcion1,3000);