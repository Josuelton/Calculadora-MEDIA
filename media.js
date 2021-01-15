var numero = [1, 2, 3, 5, 6, 6]; //substitua os valores de dentro dos colchetes com os seus.
numero.sort(function(a, b) {
    return a - b});
console.log(numero); /*será impresso no terminal os valores digitados em ordem crescente, 
o que facilita o encontro da MODA, caso seja necessário. */
var total = 0;
var totalVar = 0;
var media;
var mediana;
var variancia;
var desvioPadrao;

for (var i = 0 ; i < numero.length ; i++){
    total += numero [i];
}
media = total / numero.length;
console.log ("A média é: " + media);

if (numero.length % 2 === 0) {
    var mediana1 = numero[(numero.length / 2) - 1];
    var mediana2 = numero[numero.length / 2];
    mediana = (mediana1 + mediana2) / 2;
} else {
    mediana = numero [Math.floor(numero.length / 2)];
}

console.log("A mediana é: " +mediana);

for (i = 0 ; i < numero.length ; i++){
    var a = Math.pow((numero[i] - media), 2);
    totalVar += a;
}

variancia = totalVar / numero.length;
desvioPadrao = Math.sqrt(variancia);

console.log("A variancia é: " + variancia);
console.log("O desvio padrão é: " + desvioPadrao);

