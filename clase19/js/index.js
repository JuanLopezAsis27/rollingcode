/*
edad=Number(prompt("Escribe tu edad"));
console.log(Number(edad)+20);

if(edad>=18){
    alert("Puedes entrar al boliche");
}
else
{
    alert("No puedes entrar al boliche");
}

console.log("Hola mi nombre es: "+nombre+" y tengo "+edad+" años de edad");

let esta_quemada = true;
let esta_enchufada = true */

/*
if(esta_enchufada){
    if (esta_quemada){
        alert("cambia la lampara");

    }else{
        alert("Comprar una lampara nueva");
    }

}else{
    alert("Conecta la lampara");
}
*/

/*
let num = 20;
let num2 = 433;
let resultado = num+num2;
console.log(resultado);
let resultado2= num-num2;
console.log(resultado2);
let resultado3 = num*num2;
console.log(resultado3);
let resultado4=num/num2;
console.log(resultado4);*/


/*
let numero=prompt("ingresa el numero");
let numeroNumber=Number(numero);
console.group(typeof numeroNumber);
numero="Luis";
if(numero%2==0){
    alert("El numero "+numero+ " es par");
}else{
    alert("El numero es impar");
}*/

/*
let usuario = "Joel";

if(usuario=="Cecilia"){
    console.log("Bienvenida " + usuario);
}else if(usuario=="Luciana"){
    console.log("Bienvenida " + usuario);
}else if(usuario=="Gustavo"){
    console.log("Bienvenido " + usuario);
}else if(usuario=="Joel"){
    console.log("Bienvenida " + usuario);
}else{
    alert("El nombre no esta registrado");
}

console.log('21' == 21);
console.log('21' === 21);*/

/*
let seguir = confirm("Desea seguir navegando");
if (seguir) {
    alert("Gracias por preferirnos");
}else{
    alert("Gracias por visitarnos");
}*/

// Creaa un script para generar una piramide

//1
//12
//123


/*let num='  1';
console.log(num);
num=num+2;
console.log(num);
num=num+3;
console.log(num);
num=num+4;
console.log(num);
num=num+5;
console.log(num);*/

/*
console.log('  1');
console.log(' 123');
console.log('12345');
*/

// array


let alumno=[];
let array = ["Luis","Gonzales",34,"Paraguay 930",true];
array[5]="Juana"
console.log(typeof array);
console.log(array);
console.log(array[2]);

array[array.length]="Otro valor nuevo";
console.log(array);

let numeros=[14,25,36,48,78];
let nombres=["Juan","Luciana","Gonzalo"];
console.log("Hola soy " + nombres[0] + " y tengo " + numeros[2] + " años" );

nombres.push("Julian");
nombres.push("otro nombre");
console.log(nombres);
nombres.pop();
console.log(nombres);
