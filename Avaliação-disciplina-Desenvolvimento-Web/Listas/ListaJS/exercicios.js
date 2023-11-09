
//Soma básica soma o número 10 e o número 20

let num1 = parseInt(prompt("Informe o número 10:"));
let num2 = parseInt(prompt("Informe o número 20: "));

let soma = num1+num2 

mensagem = prompt("A soma entre os dois números é de: ", soma); 

//Subtração Básica: Calcule a diferença entre 30 e 10


let num1 = parseInt(prompt("Informe o numero 30: "));
let num2 = parseInt(prompt("informe o número 10: "));

sub = num1 - num2

mensagem = prompt("A diferença entre os dois números é de: ", sub);



//  Conversão de Celsius para Fahrenheit: Converta 25 graus Celsius para Fahrenheit. 


function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}


// O dobro de 15

let dobro = 2 * 15
console.log(dobro)


//Divisão Básica: Divida 100 por 5.

let divisao = 100 / 5
console.log(divisao)

