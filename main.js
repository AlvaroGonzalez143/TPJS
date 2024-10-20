let a = 10;
let b = 20;
let c = a + b;
console.log("la suma de a + b es : " + c);
let nombre = prompt("cual es tu nombre ?");
console.log("hola " + nombre);
function EJERCICIO1(){
    let a = 10;
    let b = 20;
    let c = 15;
    let array = [a,b,c]
    let max = a;
    for(let i=0; i<=2;i++){
       
        if(array[i]>=max){
            max = array[i];
        }
    }
    console.log("El mayor de los 3 numeros es : " + max);
}
function EJERCICIO2(){
let num = prompt("Ingrese un numero y te dire si es par o por lo contrario impar :");
if(num % 2 == 0){
    console.log("EL NUMERO"+ num +" ES PAR");
}else{
    console.log("EL NUMERO"+ num +" ES IMPAR");
}
}
function EJERCICIO1_1(){
    let i=10;
    while(i>0){
        console.log(i);
        i--;
    }
}
function EJERCICIO2_1(){
    do {
        var num = prompt("Ingresa un numero mayor a 100: ")
    } while (num <= 100)
    console.log("Has ingresado un numero mayor a 100 : " + num);
}
function esPar(num){
 if(num%2 == 0)
    return true;
else
return false; 
}
function convertirCelsiusAFahrenheit(cels){
 let fahr = cels * 1.8 + 32;
 console.log(cels + "C° son equivalentes a " + fahr + "°F" )
}
class Persona {
    nombre = "Alvaro";
    edad = '21';
    ciudad = "Mendoza";
    actualizarciudad(){
        this.ciudad = prompt("IDIQUE SU NUEVA CIUDAD");
        console.log("Persona : " + this.nombre +" Edad : "+this.edad +" Ciudad : "+this.ciudad);
    }
}
class libro {
    titulo = "el quijote";
    autor = "Cervantes";
    anno = 1605;
    Esviejo(){
        const fecha = new Date();
        const anno = fecha.getFullYear();
        if((anno-this.anno)>=10)
            console.log("El Libro : "+this.titulo+" Es viejo : true");
        else
    console.log("El Libro : "+this.titulo+" Es viejo : false");
        
    }
}
const persona = new Persona;
const Libro = new libro;

var numeros = [1,2,3,4,5,6,7,8,9,10];
var numerosx2 = [];
for(let i= 0 ; i<10 ; i++){
   numerosx2[i] = (numeros[i]*2);
}
console.log("NUMEROS ORIGINALES : " + numeros);
console.log("NUMEROS MULTIPLICADOS POR 2 : " + numerosx2);
var pares = [];
for (let i=0;i<20;i++){
    if(i%2==0){
        pares.push(i);
    }
}
console.log("Primeros 10 numeros pares " + pares);
function cambio(){
    const p = document.querySelectorAll('p');
    p.forEach(p => {
        p.style.color = "blue";
      });
    }