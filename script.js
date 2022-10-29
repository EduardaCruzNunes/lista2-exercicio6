var altura = 1.75;
var sexo = "homem";
var resultado = 0;

if(sexo == "mulher"){
   resultado = 62.1 * altura - 44.7 
   console.log('Entradas:', sexo, altura, 'resultado:', resultado);
}else if(sexo == "homem"){
    resultado = 72.7 * altura - 58
    console.log('Entradas:', sexo, altura, 'resultado:', resultado);
}else{
    console.log('Dados inválidos, digite novamente!');
}
