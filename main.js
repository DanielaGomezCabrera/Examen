document.writeln("<h1>BUCLES EN JAVASCRIPT</h1>")
for (let i=1;i<=5;i++){
    document.writeln("hola "+i+"<br>")
}
document.writeln("<br>")
for (let i=1;i<=23;i++){
    document.writeln("Juan XXIII <br>")
}
document.writeln("<br>")
for(let i=2015; i<=2025;i=i+1){
    document.writeln(i+"<br>")
}
document.writeln("<br>")
for(let i=2; i<=98;i=i+2){
    document.writeln(i)}

document.writeln("<br>")
document.writeln("<br> CUENTA REGRESIVA <br>")
for(let i=5; i>=0;i=i-1){
    document.writeln(i)}

document.writeln("<br>")
document.writeln("<br>NÚMEROS PARES O IMPARES<br>")
for (let i=1;i<=50;i=i+1){
    if (i%2==0){
        document.writeln(i+" PAR<br>")
    }else{
        document.writeln(i+" IMPAR<br>")
    }
}

document.writeln("<br>")
document.writeln("<br>20 PRIMEROS MÚLTIPLOS<br>")
let numero = parseInt(prompt("Ingresa un número: "))
document.writeln("El número ingresado fue "+numero+"<br>")
for (let i=0;i<=20;i++){
    document.writeln(i*numero)
}

document.writeln("<br><br>MULTIPLOS ENTRE LÍMITES<br>")
let inferior =  parseInt(prompt("Ingresa el límite inferior"))
let superior =  parseInt(prompt("Ingresa el límite superior"))
let number = parseInt(prompt("Ingresa el número para sacar los múltiplos"))
document.writeln("Limite inferior: "+inferior+"<br>")
document.writeln("Limite superior: "+superior+"<br>")
document.writeln("Vamos a elegir los múltiplos de "+number+"<br>")

for (let i=inferior;i<=superior;i=i+1){
    if (i%number==0){
    document.writeln(i)
    }
}

document.writeln("<br>")
for(let i=100; i>=0;i=i-1){
    document.writeln("Daniela <br>")
document.writeln(i)}